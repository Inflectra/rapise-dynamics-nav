# Overview

Framework for testing Dynamics NAV 2017-2018 RoleTailored Client.

- Reusable functions are defined in `User.js`.
- Data for each test case is defined in `Data.xlsx`.
- `Dropdowns.xlsx` contains lists of values for RVL dropdowns.
- `Output.xlsx` is used to persist data between test executions.

## Common Functions

All functions are defined in `User.js`. Look into this file for details.

### NavLaunch

Launches Dynamics NAV desktop client and waits for it to show up on screen.

![NavLaunch RVL](Media/NavLaunch.png)

### NavVersion

Returns NAV version (2017 - 100, 2018 - 110).

### NavClose

Closes Dynamics NAV desktop client.

### NavChangeCompany

Changes current company. Specify name of a company to open.

![NavChangeCompany RVL](Media/NavChangeCompany.png)

This function automatically opens Select Company dialog, selects a company and closes the dialog.

![ChangeCompany RVL](Media/ChangeCompany.png)

### NavNavigate

Navigates to a specific page using address bar.

![NavNavigate RVL](Media/NavNavigate.png)

This function clicks in the address area, enters a page address and hits enter key.

![Navigate RVL](Media/Navigate.png)

### NavFilterGrid

Applies a filter to table data.

![NavFilterGrid RVL](Media/NavFilterGrid.png)

This function enters a filter value, then selects a field for filtering and clicks the filter button.

![FilterGrid RVL](Media/FilterGrid.png)

### NavSelectFastTab

Selects Fast Tab with a given name.

![NavSelectFastTab RVL](Media/NavSelectFastTab.png)

This function expands a given tab and scrolls to it if necessary.

![SelectFastTab RVL](Media/SelectFastTab.png)

### NavMaximizeWindow

Maximizes window with a given object.

![NavMaximizeWindow RVL](Media/NavMaximizeWindow.png)

### NavMakeFileName

Builds full file path.

![NavMakeFileName RVL](Media/NavMakeFileName.png)

### NavPrintPdf

Prints/saves document to PDF into OutputFiles folder. 

![NavPrintPdf RVL](Media/NavPrintPdf.png)

Open this dialog before calling the function. It opens menu Print... > PDF and then enters the file name and presses ncessary buttons to do the job.

![PrintPdf RVL](Media/PrintPdf.png)

### NavAddColumns

Ensures that specific columns are visible. When you call this function the grid should be visible on screen.

![NavAddColumns RVL](Media/NavAddColumns.png)

This function righ clicks the grid and selects Choose Columns... menu item. Then adds necessary columns and clicks OK button.

![Columns RVL](Media/Columns.png)

### NavRemoveColumns

Ensures that specific columns are NOT visible. When you call this function the grid should be visible on screen.

![NavRemoveColumns RVL](Media/NavRemoveColumns.png)

This function righ clicks the grid and selects Choose Columns... menu item. Then removes necessary columns and clicks OK button.

### SetOutputValue

Writes key/value pair to Output.xlsx

![SetOutputValue RVL](Media/SetOutputValue.png)

### GetOutputValue

Reads value from Output.xlsx

![GetOutputValue RVL](Media/GetOutputValue.png)

