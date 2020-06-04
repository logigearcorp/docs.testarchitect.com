--- 
title: "Testing SAP applications"
linktitle: "Testing SAP applications"
weight: 6
aliases: 
    - /TA_Automation/Topics/aut_sap_integration.html
---

SAP Business Warehouse is a powerful business tool for managing data. TestArchitect can now automate SAP BW applications.

## Fully support SAP controls

Now, TestArchitect has complete support for 21 SAP BW controls.

|SAP control name|TA Class|
|----------------|--------|
|GuiButton|button|
|GuiCalendar|calendar|
|GuiCheckBox|checkbox|
|GuiComboBox|combobox|
|GuiTextField|textbox|
|GuiOkCodeField|textbox|
|GuiTextField|textbox|
|GuiPasswordField|password text|
|GuiTextedit|richtext|
|GuiGridView|gridview|
|GuiMenubar|menu bar|
|GuiRadioButton|radio button|
|GuiStatusbar|status bar|
|GuiTab|tab control|
|GuiToolbar|toolbar|
|GuiToolbarControl|toolbar|
|GuiTableControl|table|
|GuiUserArea|frame|
|GuiTree Simple|treeview|
|GuiTree TreeTableView|treetable|
|GuiTree TreeListView|treelist|

## Built-In Actions

SAP BW has specific controls such as tree lists and tree tables. We've added new Built-In Actions for interacting with these controls.

1.  [Click tree table cell](bia_click_tree_table_cell.html#)
2.  [Check tree table cell value](bia_check_tree_table_cell_value.html#)
3.  [Get tree table cell value](bia_get_tree_table_cell_value.html#)
4.  [Get tree table cell containing](bia_get_tree_table_cell_containing.html#)
5.  [Is tree table cell selected](bia_is_tree_table_cell_selected.html#)
6.  [Set tree table cell value](bia_set_tree_table_cell_value.html#)

-   **[Troubleshooting SAP](/TA_Automation/Topics/aut_SAP.html)**  
This section describes possible errors that you might encounter during SAP automation, their common causes and possible solutions.

**Parent topic:**[Application testing](/TA_Automation/Topics/aut_app_testing.html)

**Previous topic:**[Testing headless Chrome and APIs with Docker](/TA_Automation/Topics/aut_docker.html)

