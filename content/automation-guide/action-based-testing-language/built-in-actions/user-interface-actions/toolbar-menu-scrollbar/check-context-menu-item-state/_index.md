--- 
title: "check context menu item state"
linktitle: "check context menu item state"
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_check_context_menu_item_state.html
keywords: "check content menu item state, check states of given item on context menu, verify states of given item on context menu"
---

## Description

Validate the current state\(s\) of a given menu item on a context menu. Result is Passed if all the expected states match those of the menu item; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control holding the context menu.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **expected**

    Expected value\(s\) of the state property of the menu item.

    Possible returned values:

    -   **disabled**

        The menu item is unavailable or disabled.

    -   **enabled**

        The menu item is enabled or available.

    -   **checked**

        The menu item is selected.

    **Tip:** Use commas \(,\) as delimiters between expected values of the state property.

-   **x**

    \(Optional\) Horizontal position of effective tap on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

-   **y**

    \(Optional\) Vertical position of effective tap on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   In order for TestArchitect to access the items of a context menu, it must activate the menu by simulating a mouse click on the host control. In some cases, the default click location at the center of the control will not bring up the menu. Hence it is sometimes necessary to supply the click location via the x and y arguments.
-   This action only checks the state\(s\) that you specify, and ignores those not specified. Hence, if the state of the tested menu item is enabled and visible, a check will pass for any of the expected values of enabled, visible, and enabled, visible. It fails if any one of the specified expected states is not true.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [page wait](/TA_Automation/Topics/bis_page_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [value changed wait](/TA_Automation/Topics/bis_value_changed_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view.

## Example - Case 1: Using a text value

![](/images//Images/bia_check_context_menu_item_state_aut.png)

**Action Lines**

![](/images//Images/bia_check_context_menu_item_state_pgm.png)

**Result**

![](/images//Images/bia_check_context_menu_item_state_res.png)

## Example - Case 2: Using a numerical index value

![](/images//Images/bia_check_context_menu_item_state_index_aut.png)

**Action Lines**

![](/images//Images/bia_check_context_menu_item_state_index_pgm.png)

**Result**

![](/images//Images/bia_check_context_menu_item_state_index_res.png)

## Example

![](/images//Images/bia_check_context_menu_item_state_aut.png)

**Action Lines**

![](/images//Images/bia_check_context_menu_item_state_pgm.png)

**Result**

![](/images//Images/bia_check_context_menu_item_state_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check context menu item not exists](/TA_Automation/Topics/bia_check_context_menu_item_not_exists.html)

**Next topic:**[check menu item exists](/TA_Automation/Topics/bia_check_menu_item_exists.html)

**Related information**  


[get context menu item state](/TA_Automation/Topics/bia_get_context_menu_item_state.html)

