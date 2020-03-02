//Put your custom functions and variables in this file

if (!g_recording)
{
	TestInit = function()
	{
		Global.DoLoadObjects("%WORKDIR%/Objects.js");
		if (NavVersion() == 110)
		{
			g_helper.Copy("Data110.xlsx", "Data.xlsx");
		}
		else
		{
			g_helper.Copy("Data100.xlsx", "Data.xlsx");	
		}
	}
}

function LogAssert(/**string*/ msg)
{
	Log(msg);
	Tester.Assert(msg, false);
}

/**
 * Launches Dynamics NAV desktop client and waits for it to show up on screen.
 * @returns `true` is the client is already running or was started successfully, otherwise - `false`
 */
function NavLaunch()
{
	function _NavIsRunning()
	{
		var windows = g_util.FindWindows("regex:.*Microsoft Dynamics NAV", "regex:WindowsForms10.*");
		return windows.length > 0;
	}
	
	function _MaximizeNav()
	{
		var windows = g_util.FindWindows("regex:.*Microsoft Dynamics NAV", "regex:WindowsForms10.*");
		if (windows.length > 0)
		{
			windows[0].Maximized = true;
		}
	}
	
	if (_NavIsRunning())
	{
		Tester.Message("Dynamics AX Client is already running");
		return true;
	}

	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	
	var dynamicsPath100 = pfFolder + "\\Microsoft Dynamics NAV\\100\\RoleTailored Client\\Microsoft.Dynamics.Nav.Client.exe";
	var dynamicsPath110 = pfFolder + "\\Microsoft Dynamics NAV\\110\\RoleTailored Client\\Microsoft.Dynamics.Nav.Client.exe";
	
	var pathOptions = [dynamicsPath100, dynamicsPath110];
	
	var dynamicsPath = null;
	for(var i = 0; i < pathOptions.length; i++)
	{
		var path = pathOptions[i];
		Log("Checking " + path);
		if (File.Exists(path))
		{
			dynamicsPath = path;
			break;
		}
	}
	
	if(!dynamicsPath) 
	{ 
		Tester.Message("Dynamics NAV Client is not installed on this computer"); 
		return false; 
	}
	
	Tester.Message("Dynamics NAV Client is not started."); 
	Global.DoLaunch(dynamicsPath);
	
	// Waiting for NAV to start
	for(var i = 0; i < 60; i++)
	{
		var _windows = g_util.FindWindows("regex:.*Microsoft Dynamics NAV", "regex:WindowsForms10.*");
		if (_windows.length > 0)
		{
			var _wnd = _windows[0];
			var uiaObj = SeSGetUIAutomationObject(_wnd);
			var toolBar = g_UIAutomationWrapper.FindElementByPropertyValue(uiaObj, 4, "AutomationElementIdentifiers.ControlTypeProperty", "ToolBar");
			if (toolBar)
			{
				_MaximizeNav();
				return true;
			}
		}
		Global.DoSleep(1000);
	}
	
	Tester.Message("Dynamics NAV Client did not start");
	return false;
}

/**
 * Returns NAV version (2017 - 100, 2018 - 110)
 */
function NavVersion()
{
	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	
	var dynamicsPath100 = pfFolder + "\\Microsoft Dynamics NAV\\100\\RoleTailored Client\\Microsoft.Dynamics.Nav.Client.exe";
	var dynamicsPath110 = pfFolder + "\\Microsoft Dynamics NAV\\110\\RoleTailored Client\\Microsoft.Dynamics.Nav.Client.exe";

	if (File.Exists(dynamicsPath110))
	{
		return 110;
	}
	return 100;
}

/**
 * Closes Dynamics NAV desktop client.
 */
function NavClose()
{
	SeS("G_CloseNav").DoClick();
}

/**
 * Changes current company.
 * @param company Name of a company.
 */
function NavChangeCompany(/**string*/ company)
{
	SeS('G_MainMenuButton').DoClick();
	SeS('G_MenuSelectCompany').DoClick();
	SeS('G_CompanyComboboxExpand').DoClick();
	SeS('G_CompanyGrid').DoClickCell(company, 0);
	SeS('G_CompanyOK').DoClick();
}

/**
 * Navigates to a specific page using address bar.
 * @param page Address of a page (e.g. Posted Documents/Posted Sales Invoices).
 * @param [company] Optional. Name of a company. Specify if it is not the currently opened company.
 */
function NavNavigate(/**string*/ page, /**string*/ company)
{
	SeS("G_AddressBar").DoClick();
	var addressEdit = SeS("G_AddressEdit");
	if (!company)
	{
		var currentPage = "" + addressEdit.GetText();
		company = currentPage.split("/")[0];
	}
	addressEdit.DoSetText(company + "/" + page);
	addressEdit.DoSendKeys("{ENTER}");
}

/**
 * Applies a filter to table data.
 * @param value Filter value.
 * @param field Name of a field to use for filtering.
 */
function NavFilterGrid(/**string*/ value, /**string*/ field)
{
	if (!value)
	{
		LogAssert("NavFilterGrid: value is not set");
		return;
	}
	
	if (!field)
	{
		LogAssert("NavFilterGrid: field is not set");
		return;
	}	

	SeS("G_FilterValue").DoClick();
	SeS("G_FilterValue").DoSetText(value);
	SeS("G_FilterOpen").DoClick();
	SeS("G_FilterDropDown").DoSelectItem(field);
	SeS("G_FilterApply").DoClick();
}

/**
 * Selects Fast Tab with a given name.
 * @param tab Name of a tab to expand and scroll to.
 */
function NavSelectFastTab(/**string*/ tab)
{
	if (!tab)
	{
		LogAssert("NavSelectFastTab: tab is not set");
		return;
	}
	
	var windows = g_util.FindWindows("regex:.*", "regex:WindowsForms10.*");
	if (windows.length > 0)
	{
		for(var i = 0; i < windows.length; i++)	
		{
			var wnd = windows[i];
			if (wnd.ProcessName.indexOf("Microsoft.Dynamics.Nav.Client") != -1)
			{
				var windowName = wnd.Text;
				Log(windowName);
				var ae = SeSGetUIAutomationObject(wnd);
				if (ae)
				{
					var obj = SeSUIAutomationFindByAutomationId(ae, "ContentPlaceholder", DynamicsNAVFastTabsRule);
					if (obj)
					{
						obj.DoSelectTab(tab);
						return;
					}
				}
			}
		}
	}
}

/**
 * Maximizes window with a given object.
 */
function NavMaximizeWindow(/**objectId*/ objectId)
{
 	SeS(objectId).getDesktopWindow().Maximized = true;
}

/**
 * Builds full file path.
 */
function NavMakeFileName(/**string*/ root, /**string*/ baseName, /**string*/ number, /**string*/ extension)
{
	return root + "\\" + baseName + number + "." + extension;
}

/**
 * Prints/saves document to PDF into OutputFiles folder.
 */
function NavPrintPdf(/**string*/ baseName, /**string*/ number)
{
	SeS('G_PrintMenu').DoClick();
	SeS('G_PDFMenuItem').DoClick();
	SeS('G_SavePrintedDocument').DoClick();
	var outputFolder = Global.GetFullPath("OutputFiles");
	var filePath = NavMakeFileName(outputFolder, baseName, number, "pdf");
	Tester.Message("Printing file: " + filePath);
	SeS('G_SaveDialogFileName').DoSendKeys(filePath);
	SeS('G_SaveDialogSaveButton').DoClick();
}

/**
 * Ensures that specific columns are visible. When you call this function the grid should be visible on screen.
 * @param grid Repository ID of a grid object.
 * @param list Comma separated list of column names (case-sensitive).
 */
function NavAddColumns(/**objectId*/ grid, /**string*/ list)
{
	SeS(grid).DoRClick();
	SeS("G_Choose_Columns").DoClick();
	
	var items = list.split(",");
	for(var i = 0; i < items.length; i++)
	{
		var item  = Global.DoTrim(items[i]);
		var columns = SeS('G_Available_Columns');
		var index = columns.GetItemIndexByName(item);
		if (index >= 0)
		{
			columns.DoSelectItem(item);
			SeS('G_Add_Column').DoClick();
		}
	}
	
	SeS('G_Columns_OK').DoClick();
}

/**
 * Ensures that specific columns are NOT visible. When you call this function the grid should be visible on screen.
 * @param grid Repository ID of a grid object.
 * @param list Comma separated list of column names (case-sensitive).
 */
function NavRemoveColumns(/**objectId*/ grid, /**string*/ list)
{
	SeS(grid).DoRClick();
	SeS("G_Choose_Columns").DoClick();
	
	var items = list.split(",");
	for(var i = 0; i < items.length; i++)
	{
		var item  = Global.DoTrim(items[i]);
		var columns = SeS('G_Show_Columns');
		var index = columns.GetItemIndexByName(item);
		if (index >= 0)
		{
			columns.DoSelectItem(item);
			SeS('G_Remove_Column').DoClick();
		}
	}
	
	SeS('G_Columns_OK').DoClick();
}

/**
 * Writes key/value pair to Output.xlsx
 * @param key
 * @param value
 */
function SetOutputValue(/**string*/ key, /**string*/ value)
{
	Global.SetProperty(key, value, "%WORKDIR%\\Output.xlsx");
}

/**
 * Reads value from Output.xlsx
 * @param key
 * @param [defValue]
 */
function GetOutputValue(/**string*/ key, /**string*/ defValue)
{
	return Global.GetProperty(key, defValue, "%WORKDIR%\\Output.xlsx");
}

