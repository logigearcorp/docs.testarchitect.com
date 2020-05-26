--- 
title: "get context menu item state"
linktitle: "get context menu item state"
weight: 21
aliases: 
    - /TA_Automation/Topics/bia_get_context_menu_item_state.html
---
# get context menu item state {#bia_get_context_menu_item_state .reference}

## Description { .section}

Retrieve the current state of a given menu item on a context menu.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the control holding the context menu.

item
:   Menu item or menu item path \(see Notes\).

value
:   \(Optional\) Variable to receive the returned value.

x
:   \(Optional\) Horizontal position of effective tap on menu control, specified as distance in pixels from left edge of the control. \(Defaults to horizontal center of the control.\)

y
:   \(Optional\) Vertical position of effective tap on menu control, specified as distance in pixels from top edge of the control. \(Defaults to vertical center of the control.\)

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   item argument:
    -   The menu item may be specified by its caption propertyor numerical index representing its cardinal placement in the menu, with index values starting at 1.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
    -   Enclose a numerical text string in quotation marks to differentiate it from a numerical index value. For example, if a text value of an item in a control has a value of 12, you should reference that item by passing 12 surrounded by quotation marks \(that is, "12"\) instead of the numerical 12. Passing the numerical 12 is treated as a reference to an item with an index of **12**, rather than an item holding a text string value of 12.
-   In order for TestArchitect to access the items of a context menu, it must activate the menu by simulating a mouse click on the host control. In some cases, the default click location at the center of the control will not bring up the menu. Hence it is sometimes necessary to supply the click location via the x and y arguments.
-   value argument:
    -   If the variable in argumentvaluehas not been declared, the action creates it as a global.
    -   If the valueargument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [page wait](bis_page_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.

This action is applicable to the following controls:button, Calendar, check box, combo box, DatePicker, DateTimePicker, Hyperlink, label, list box, list view, menu, password, picture box, progress bar, radio button, status bar, tab control, table, text box, toggle button, trackbar, tree view..

## Example - Case 1: Use text value { .section}

![](../Images/bia_get_context_menu_item_state_aut.png)

**Action Lines**

![](../Images/bia_get_context_menu_item_state_pgm.png)

**Result**

![](../Images/bia_get_context_menu_item_state_res.png)

## Example - Case 2: Use numerical index value { .section}

![](../Images/bia_get_context_menu_item_state_index_aut.png)

**Action Lines**

![](../Images/bia_get_context_menu_item_state_index_pgm.png)

**Result**

![](../Images/bia_get_context_menu_item_state_index_res.png)

## Example { .section}

![](../Images/bia_get_context_menu_item_state_aut.png)

**Action Lines**

![](../Images/bia_get_context_menu_item_state_pgm.png)

**Result**

![](../Images/bia_get_context_menu_item_state_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[does toolbar menu item exist](../../TA_Automation/Topics/bia_does_toolbar_menu_item_exist.html)

**Next topic:**[get toolbar menu state](../../TA_Automation/Topics/bia_get_toolbar_menu_state.html)

**Related information**  


[check context menu item state](../../TA_Automation/Topics/bia_check_context_menu_item_state.html)

