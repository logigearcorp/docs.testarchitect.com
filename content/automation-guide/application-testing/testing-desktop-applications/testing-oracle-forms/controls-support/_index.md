--- 
title: "Controls support"
linktitle: "Support for Oracle Forms controls"
description: "Oracle Forms controls are supported by TestArchitect."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_controls.html
keywords: "Oracle Forms testing, supported controls"
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
|13|Table|1.  `oracle.ewt.grid.Grid`<br>2.  `oracle.apps.jtf.table.AccessibleTableGrid`<br>    -   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](/TA_Automation/Topics/bia_get_column_header_name.html) and [check column header name](/TA_Automation/Topics/bia_check_column_header_name.html) built-in actions return an empty value.<br>3.  `oracle.apps.jtf.table.AccessibleSpreadTable`<br><br>|<br>
|14|Status bar|`oracle.ewt.statusBar.StatusBar`|
|15|Scrollbar|`oracle.ewt.scrolling.scrollBox.EwtLWScrollbar`|




