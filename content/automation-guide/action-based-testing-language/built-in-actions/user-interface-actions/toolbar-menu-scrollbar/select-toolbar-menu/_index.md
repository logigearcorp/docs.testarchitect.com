--- 
title: "select toolbar menu"
linktitle: "select toolbar menu"
weight: 32
aliases: 
    - /TA_Automation/Topics/bia_select_toolbar_menu.html
keywords: "select toolbar menu, select specified item on button menu on toolbar, select specified item on menu on toolbar button"
---

## Description

Select an item on a toolbar button menu.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **menu item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   menu item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html).

## Example

**Action Lines**

![](/images//Images/bia_select_toolbar_menu_pgm.png)

**Result**

![](/images//Images/bia_select_toolbar_menu_res.png)

**Effect**

![](/images//Images/bia_select_toolbar_menu_aut.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[select menu item](/TA_Automation/Topics/bia_select_menu_item.html)

