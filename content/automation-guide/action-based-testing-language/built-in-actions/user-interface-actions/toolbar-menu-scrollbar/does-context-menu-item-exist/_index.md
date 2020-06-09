--- 
title: "does context menu item exist"
linktitle: "does context menu item exist"
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_does_context_menu_item_exist.html
keywords: "does context menu item exist, check for existence of specified item on context menu, check if specified item is found on context menu, verify whether specified item on context menu exists, verify existence of specified item on context menu"
---

## Description

Return a Boolean value to indicate whether a specified item on a context menu exists.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control holding the context menu.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.

-   **x**

    \(Optional\) Horizontal position of effective click on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

-   **y**

    \(Optional\) Vertical position of effective click on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.

        **Restriction:** Using numerical index values is not supported for Oracle Forms and Microsoft UI Automation \(UIA\).

    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
    -   In order for TestArchitect to access the items of a context menu, it must activate the menu by simulating a mouse click on the host control. In some cases, the default click location at the center of the control will not bring up the menu. Hence it is sometimes necessary to supply the click location via the x and y arguments.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [page wait](page_wait.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example - Case 1: Use text value

![](/images//Images/bia_does_context_menu_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_context_menu_item_exist_pgm.png)

**Result**

![](/images//Images/bia_does_context_menu_item_exist_res.png)

## Example - Case 2: Use numerical index value

![](/images//Images/bia_does_context_menu_item_exist_index_aut.png)

**Action Lines**

![](/images//Images/bia_does_context_menu_item_exist_index_pgm.png)

**Result**

![](/images//Images/bia_does_context_menu_item_exist_index_res.png)

## Example

![](/images//Images/bia_does_context_menu_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_context_menu_item_exist_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_does_context_menu_item_exist_ta4vs_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[does button menu exist](/TA_Automation/Topics/bia_does_button_menu_exist.html)

**Next topic:**[does menu item exist](/TA_Automation/Topics/bia_does_menu_item_exist.html)

**Related information**  


[check context menu item exists](/TA_Automation/Topics/bia_check_context_menu_item_exists.html)

[check context menu item not exists](/TA_Automation/Topics/bia_check_context_menu_item_not_exists.html)

