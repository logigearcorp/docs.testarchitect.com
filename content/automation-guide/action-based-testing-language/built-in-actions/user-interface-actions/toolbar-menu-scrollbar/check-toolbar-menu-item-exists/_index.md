--- 
title: "check toolbar menu item exists"
linktitle: "check toolbar menu item exists"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html
---
keyword: [check toolbar menu item exists, check for existence of specified item on drop-down menu in toolbar, check if specified item appear on drop-down menu in toolbar, verify whether specified item is found on drop-down menu in toolbar]
---

# check toolbar menu item exists

## Description

Check for the existence of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\). Result is Passed ifthe item is found; otherwise Failed.

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
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html), [load invisible controls](bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images//Images/bia_check_toolbar_menu_item_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_toolbar_menu_item_exists_pgm.png)

**Result**

![](/images//Images/bia_check_toolbar_menu_item_exists_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check toolbar control value](/TA_Automation/Topics/bia_check_toolbar_control_value.html)

**Next topic:**[check toolbar menu item not exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html)

**Related information**  


[check toolbar menu item not exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html)

[does toolbar menu item exist](/TA_Automation/Topics/bia_does_toolbar_menu_item_exist.html)

