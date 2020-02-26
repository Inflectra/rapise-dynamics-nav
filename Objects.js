var saved_script_objects={
	"G_CloseNav": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Close"
						},
						{
							"property": "AutomationId",
							"value": "Close"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_Close",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/TitleBar/Close"
	},
	"G_MainMenuButton": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "",
					"window_class": "regex:HwndWrapper\\[Microsoft\\.Dynamics\\.Nav\\.Client\\.exe.+\\]"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_MainMenuButton",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "Pane/Custom/{FB8CCCF3-54AC-4d77-9AD8-136CEC25583A}/{d7c9f73f-9844-47ff-b4f4-88a77eb4e103}/PART_ToggleButton"
	},
	"G_MenuSelectCompany": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "MenuItem"
						},
						{
							"property": "Name",
							"value": "Select Company..."
						},
						{
							"property": "AutomationId",
							"value": "{bb05bf7b-6645-4d70-a3aa-4fb1ac5b2146}"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAutomationMenuItem",
		"object_flavor": "MenuItem",
		"object_name": "G_MenuSelectCompany",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/Window/PART_SubMenuScrollViewer/{bb05bf7b-6645-4d70-a3aa-4fb1ac5b2146}"
	},
	"G_CompanyComboboxExpand": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Company"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_CompanyComboboxExpand",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "Select Company",
		"location": "19790809-9003-0000-0000-000000000000/19790809-9003-0000-0000-000000000000/LayoutPlaceholder/content/contentAndMessagesPlaceholder/ContentPlaceholder/19790809-9003-0000-0000-000000000001[1]/Company"
	},
	"G_CompanyGrid": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Table"
						},
						{
							"property": "Name",
							"value": "DataGridView"
						},
						{
							"property": "AutomationId",
							"value": "_DataGrid"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsNAVTable",
		"object_flavor": "Table",
		"object_name": "G_CompanyGrid",
		"ignore_object_name": true,
		"object_library": "DynamicsNAV",
		"window_name": "Select Company",
		"location": "19790809-9003-0000-0000-000000000000/{AAAAAAAA-AAAA-AAAA-FAAB-000000000001}/{AAAAAAAA-AAAA-AAAA-FAAB-000000000002}/_DataGrid"
	},
	"G_CompanyOK": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "OK"
						},
						{
							"property": "AutomationId",
							"value": "{B594146A-9CEF-4767-AE76-E9721CD6FB50}"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_CompanyOK",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "Select Company",
		"location": "19790809-9003-0000-0000-000000000000/19790809-9003-0000-0000-000000000000/LayoutPlaceholder/ActionBar/{B594146A-9CEF-4767-AE76-E9721CD6FB50}"
	},
	"G_AddressBar": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "ToolBar"
						},
						{
							"property": "AutomationId",
							"value": "{10C6C406-18FE-4562-B825-87531E592545}"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsNAVToolBar",
		"object_flavor": "ToolBar",
		"object_name": "G_AddressBar",
		"ignore_object_name": true,
		"object_library": "DynamicsNAV",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/{91115A6C-BE32-4f71-8AA5-5979F9364B54}/topContentPlaceholder/{10C6C406-18FE-4562-B825-87531E592545}"
	},
	"G_AddressEdit": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "AutomationId",
							"value": "593890"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "UIATextBox",
		"object_flavor": "Text",
		"object_name": "G_AddressEdit",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/{91115A6C-BE32-4f71-8AA5-5979F9364B54}/topContentPlaceholder/{10C6C406-18FE-4562-B825-87531E592545}/Edit"
	},
	"G_FilterValue": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "Name",
							"value": "Type to filter"
						},
						{
							"property": "AutomationId",
							"value": "LookForFilter.LookForTextBox"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "UIATextBox",
		"object_flavor": "Text",
		"object_name": "G_FilterValue",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/{91115A6C-BE32-4f71-8AA5-5979F9364B54}/LayoutPlaceholder/{00000016-0000-0000-0108-0000836BD2D2}/contentAndMessagesPlaceholder/contentAndFilterPlaceholder/{886D4A84-3808-4545-92CF-374593FBC32F}/{886D4A84-3808-4545-92CF-374593FBC32F}/levelOneFilterPanel/lookForFilter/LookForFilter.LookForTextBox"
	},
	"G_FilterOpen": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "MenuItem"
						},
						{
							"property": "Name",
							"value": "Scope selector for “Type to filter\""
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAutomationMenuItem",
		"object_flavor": "MenuItem",
		"object_name": "G_FilterOpen",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/{91115A6C-BE32-4f71-8AA5-5979F9364B54}/LayoutPlaceholder/{00000016-0000-0000-0108-0000836BD2D2}/contentAndMessagesPlaceholder/contentAndFilterPlaceholder/{886D4A84-3808-4545-92CF-374593FBC32F}/{886D4A84-3808-4545-92CF-374593FBC32F}/levelOneFilterPanel/lookForFilter/Scope selector for “Type to filter\""
	},
	"G_FilterDropDown": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Menu"
						},
						{
							"property": "Name",
							"value": "DropDown"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAutomationMenuDropDownList",
		"object_flavor": "Menu",
		"object_name": "G_FilterDropDown",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/DropDown"
	},
	"G_FilterApply": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Apply \"Type to filter\""
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_FilterApply",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/{91115A6C-BE32-4f71-8AA5-5979F9364B54}/LayoutPlaceholder/{00000016-0000-0000-0108-0000836BD2D2}/contentAndMessagesPlaceholder/contentAndFilterPlaceholder/{886D4A84-3808-4545-92CF-374593FBC32F}/{886D4A84-3808-4545-92CF-374593FBC32F}/levelOneFilterPanel/lookForFilter/Apply \"Type to filter\""
	},
	"G_PrintMenu": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "SplitButton"
						},
						{
							"property": "Name",
							"value": "Menu"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "SplitButton",
		"version": 0,
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "Menu",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.* - .*",
		"location": "{0000275D-0000-0000-0103-0000836BD2D2}/{0000275D-0000-0000-0103-0000836BD2D2}/LayoutPlaceholder/ActionBar/{058B145B-91CB-4f80-9295-3CD863C5BF52}/Menu"
	},
	"G_PDFMenuItem": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "PDF"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "PDF",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.* - .*",
		"location": "{0000275D-0000-0000-0103-0000836BD2D2}/DropDown/PDF"
	},
	"G_SavePrintedDocument": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Save"
						},
						{
							"property": "AutomationId",
							"value": "buttonSave"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "Save",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "Export File",
		"location": "LoadFileForm/Pane/Foxit Reader PDF Document/buttonSave"
	},
	"G_SaveDialogFileName": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "Name",
							"value": "File name:"
						},
						{
							"property": "AutomationId",
							"value": "1001"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "UIATextBox",
		"object_flavor": "Text",
		"object_name": "File name:",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/Export File/Pane/main/FolderLayoutContainer/BackgroundClear/FileNameControlHost/File name:"
	},
	"G_SaveDialogSaveButton": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Save"
						},
						{
							"property": "AutomationId",
							"value": "1"
						}
					],
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "WindowsForms10.Window.8.app.0.7b8f05_r12_ad1",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "Save",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*Microsoft Dynamics NAV",
		"location": "{91115A6C-BE32-4f71-8AA5-5979F9364B54}/Export File/Save"
	}
};