// Put library code here

function Nav_Launch()
{
	return NavLaunch();
}

function Nav_Version()
{
	return NavVersion();
}

function Nav_Close()
{
	NavClose();
}

function Nav_ChangeCompany(/**string*/ company)
{
	NavChangeCompany(company);
}

function Nav_Navigate(/**string*/ page, /**string*/ company)
{
	NavNavigate(page, company)
}

function Nav_FilterGrid(/**string*/ value, /**string*/ field)
{
	NavFilterGrid(value, field);
}

function Nav_SelectFastTab(/**string*/ tab, /**boolean*/ toggleAdditionalFields, /**string*/ additionalFieldsButtonName)
{
	NavSelectFastTab(tab, toggleAdditionalFields, additionalFieldsButtonName);
}

function Nav_MaximizeWindow(/**objectId*/ objectId)
{
 	NavMaximizeWindow(objectId);
}

function Nav_MakeFileName(/**string*/ root, /**string*/ baseName, /**string*/ number, /**string*/ extension)
{
	return NavMakeFileName(root, baseName, number, extension);
}

function Nav_PrintPdf(/**string*/ baseName, /**string*/ number)
{
	NavPrintPdf(baseName, number);
}

function Nav_AddColumns(/**objectId*/ grid, /**string*/ list)
{
	NavAddColumns(grid, list);
}

function Nav_RemoveColumns(/**objectId*/ grid, /**string*/ list)
{
	NavRemoveColumns(grid, list);
}

if (typeof(SeSGlobalObject) != "undefined")
{
	SeSGlobalObject("Nav");
}