--- 
title: "does toolbar menu item exist"
linktitle: "does toolbar menu item exist"
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_does_toolbar_menu_item_exist.html
keywords: "does toolbar menu item exist, check if specified item on drop-down menu on toolbar button exists, check whether given item on drop-down menu on toolbar button is found, check for existence of specified item on drop-down menu on toolbar button, verify existence of specified item on drop-down menu on toolbar button"
---

## Description

Return a Boolean value to indicate the existence of a specified item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\).

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images//Images/bia_does_toolbar_menu_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_toolbar_menu_item_exist_pgm.png)

**Result**

![](/images//Images/bia_does_toolbar_menu_item_exist_res.png)

## Example

![](/images//Images/bia_does_toolbar_menu_item_exist_aut.png)

## Action Lines

![](/images//Images/bia_does_toolbar_menu_item_exist_ta4vs_pgm.png)

## Result

![](/images//Images/bia_does_toolbar_menu_item_exist_ta4vs_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[does toolbar button exist](/TA_Automation/Topics/bia_does_toolbar_button_exist.html)

**Next topic:**[get context menu item state](/TA_Automation/Topics/bia_get_context_menu_item_state.html)

**Related information**  


[check toolbar menu item exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html)

[check toolbar menu item not exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html)

