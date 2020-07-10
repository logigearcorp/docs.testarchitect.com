--- 
title: "check context menu item not exists"
linktitle: "check context menu item not exists"
description: "Description Check for the nonexistence of an item on a context menu. Result is Passed if the specified item is not found ; otherwise Failed . Arguments window TA name of the window. control TA name of ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_check_context_menu_item_not_exists.html
keywords: "built-in actions, check context menu item not exists, check context menu item not exists (action), iOS (action), check context menu item not exists, Android (action), check if specified item on context menu does not exist, check for nonexistence of specified item on context menu, verify nonexistence of particular item on context menu, verify whether specified item is found on context menu"
---

## {{< expand >}} Description

Check for the nonexistence of an item on a context menu. Result is Passed ifthe specified item is not found; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control holding the context menu.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **x**

    \(Optional\) Horizontal position of effective click on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

-   **y**

    \(Optional\) Vertical position of effective click on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-screen-resolution#li.ios.get_screen_resolution).\)
-   item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.

        {{<restriction>}} Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   In order for TestArchitect to access the items of a context menu, it must activate the menu by simulating a mouse click on the host control. In some cases, the default click location at the center of the control will not bring up the menu. Hence it is sometimes necessary to supply the click location via the x and y arguments.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## {{< expand >}} Example - Case 1: Use text value

![](/images/TA_Automation/Images/bia_check_context_menu_item_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_context_menu_item_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_context_menu_item_not_exists_res.png)

## {{< expand >}} Example - Case 2: Use numerical index value

![](/images/TA_Automation/Images/bia_check_context_menu_item_not_exists_index_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_context_menu_item_not_exists_index_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_context_menu_item_not_exists_index_res.png)

**Related information**  


[check context menu item exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-context-menu-item-exists)

[does context menu item exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-context-menu-item-exist)

