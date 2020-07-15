--- 
title: "get context menu item state"
linktitle: "get context menu item state"
description: "Description Retrieve the current state of a given menu item on a context menu. Arguments window TA name of the window. control TA name of the control holding the context menu. item Menu item or menu ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/bia_get_context_menu_item_state.html
keywords: "built-in actions, get context menu item state, get context menu item state (action), get context menu item state, get state of specific context menu item, retrieve state of specified item on context menu, retrieve current state of given item on context menu"
---

## Description

Retrieve the current state of a given menu item on a context menu.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the control holding the context menu.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **value**

    \(Optional\) Variable to receive the returned value.

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
-   value argument:
    -   If the variable in argumentvaluehas not been declared, the action creates it as a global.
    -   If the valueargument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:button, check box, checklist, clock, combo box, datetime, frame, label, list box, list view, menu, password, picture box, progress bar, radio button, rating bar, richtext, scroll bar, separator, spin, status bar, tab control, table, text box, toggle button, toolbar, trackbar, tree view, window.



## Example - Case 1: Use text value

![](/images/TA_Automation/Images/bia_get_context_menu_item_state_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_context_menu_item_state_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_context_menu_item_state_res.png)

## Example - Case 2: Use numerical index value

![](/images/TA_Automation/Images/bia_get_context_menu_item_state_index_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_context_menu_item_state_index_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_context_menu_item_state_index_res.png)

**Related information**  


[check context menu item state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-context-menu-item-state)
