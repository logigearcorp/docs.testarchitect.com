--- 
title: "get toolbar menu state"
linktitle: "get toolbar menu state"
weight: 22
aliases: 
    - /TA_Automation/Topics/bia_get_toolbar_menu_state.html
---
keyword: [get toolbar menu state, get state of specified item on drop-down menu on toolbar button, retrieve state of given item on drop-down menu on toolbar button]
---

# get toolbar menu state

## Description

Retrieve the state of a specified item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\).

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned value.

    Possible returned values:

    -   enabled
    -   disabled
    -   checked

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [ignore blank space](bis_ignore_blank_space.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [value changed wait](bis_value_changed_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images//Images/bia_get_toolbar_menu_state_aut.png)

**Action Lines**

![](/images//Images/bia_get_toolbar_menu_state_pgm.png)

**Result**

![](/images//Images/bia_get_toolbar_menu_state_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[get context menu item state](/TA_Automation/Topics/bia_get_context_menu_item_state.html)

**Next topic:**[is toolbar button pressed](/TA_Automation/Topics/bia_is_toolbar_button_pressed.html)

**Related information**  


[check toolbar button state](/TA_Automation/Topics/bia_check_toolbar_button_state.html)

