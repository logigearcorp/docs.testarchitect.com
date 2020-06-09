--- 
title: "Support for Oracle Forms controls"
linktitle: "Controls support"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_controls.html
---

Oracle Forms controls are supported by TestArchitect.

**Note:** Applies to TestArchitect [8.4](/TA_Help/Topics/../../TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

Below is the full list of the Oracle Forms controls for which TestArchitect provides support.

|No|Control|Raw class name|
|--|-------|--------------|
|1|VPoplist|`oracle.forms.ui.VPopList`|
|2|TextField|`oracle.forms.ui.VTextField`|
|3|Button|`oracle.forms.ui.VButton`|
|4|VTList|`oracle.forms.ui.VTList`|
|5|ListView|`oracle.forms.ui.ListView`|
|6|Menu|`oracle.ewt.lwAWT.lwMenu.LWMenuBar`|
|7|Tab Panel|`oracle.ewt.tabBar.TabBar`|
|8|Tree|`oracle.ewt.dTree.DTree`|
|9|Toolbar|`oracle.ewt.toolBar.ToolBar`|
|10|Checkbox|`oracle.forms.ui.VCheckbox`|
|11|Radio button|`oracle.forms.ui.VRadioButton`|
|12|Combo box|`oracle.forms.ui.VComboBox`|
|13|Table|1.  `oracle.ewt.grid.Grid`2.  `oracle.apps.jtf.table.AccessibleTableGrid`    -   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](get_column_header_name.html) and [check column header name](check_column_header_name.html) built-in actions return an empty value.3.  `oracle.apps.jtf.table.AccessibleSpreadTable`|
|14|Status bar|`oracle.ewt.statusBar.StatusBar`|
|15|Scrollbar|`oracle.ewt.scrolling.scrollBox.EwtLWScrollbar`|

**Parent topic:**[Testing Oracle Forms](/TA_Automation/Topics/aut_app_testing_Oracle_Forms.html)

**Previous topic:**[Enabling the unique name property](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_enable_name_attribute.html)

**Next topic:**[Support for Oracle Forms built-in actions](/TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_actions.html)

