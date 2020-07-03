--- 
title: "Support for Oracle Forms controls"
linktitle: "Controls support"
description: "Oracle Forms controls are supported by TestArchitect."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_supported_controls.html
keywords: "Oracle Forms testing, supported controls"
---

Oracle Forms controls are supported by TestArchitect.

{{<note>}} Applies to TestArchitect [8.4](/user-guide/version-history/features-added-to-testarchitect-8-4/) and higher.

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
|13|Table|1.  `oracle.ewt.grid.Grid`<br>2.  `oracle.apps.jtf.table.AccessibleTableGrid`<br>    -   For `oracle.apps.jtf.table.AccessibleTableGrid`: The [get column header name](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/get-column-header-name) and [check column header name](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-column-header-name) built-in actions return an empty value.<br>3.  `oracle.apps.jtf.table.AccessibleSpreadTable`<br><br>|<br>
|14|Status bar|`oracle.ewt.statusBar.StatusBar`|
|15|Scrollbar|`oracle.ewt.scrolling.scrollBox.EwtLWScrollbar`|




