--- 
title: "check toolbar menu item not exists"
linktitle: "check toolbar menu item not exists"
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html
keywords: "check toolbar menu item no exists, check for nonexistence of specified item on drop-down menu on toolbar, check if specified item on drop-down menu on toolbar is found, verify whether specified item on drop-down menu on toolbar exists"
---

## Description

Check for the nonexistence of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when one clicks a button on a toolbar\). Result is Passed ifthe item is not found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images//Images/bia_check_toolbar_menu_item_not_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_toolbar_menu_item_not_exists_pgm.png)

**Result**

![](/images//Images/bia_check_toolbar_menu_item_not_exists_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check toolbar menu item exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html)

**Next topic:**[check toolbar menu state](/TA_Automation/Topics/bia_check_toolbar_menu_state.html)

**Related information**  


[check toolbar menu item exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html)

[does toolbar menu item exist](/TA_Automation/Topics/bia_does_toolbar_menu_item_exist.html)

