--- 
title: "select list item menu"
linktitle: "select list item menu"
weight: 30
aliases: 
    - /TA_Automation/Topics/bia_select_list_item_menu.html
---
keyword: [select list item menu, select item from menu in list view, select item from list view menu]
---

# select list item menu

## Description

Long-tap an item in a list view control to display a menu control, then select \(tap\) an item menu in the open menu.

Select an item on a specified menu.

## Arguments

-   **window**

    TA name of the window or dialog box containing the ListView.

    TA name of the window or dialog box containing the list.

-   **control**

    TA name of the ListView control.

    TA name of the control.

-   **list item**

    The item to be selected in the ListView control.

    The item to be selected in the list.

-   **menu item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action applies to Android operating system only.
-   The list item argument is specified by the item's caption property.
-   menu item argument:
    -   menu items are specified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Controls

This action is applicable to the following controls:list view

This action is applicable to the following controls:list box

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Example

![](/images//Images/bia_select_list_item_menu_aut.png)

**Action Lines**

![](/images//Images/bia_select_list_item_menu_pgm.png)

**Result**

![](/images//Images/bia_select_list_item_menu_res.png)

**Effect**

![](/images//Images/bia_select_list_item_menu_effect.png)

## Example

![](/images//Images/bia_select_list_item_menu_aut_ta4vs.png)

**Action Lines**

![](/images//Images/bia_select_list_item_menu_pgm_ta4vs.png)

**Result**

![](/images//Images/bia_select_list_item_menu_res_ta4vs.png)

**Effect**

![](/images//Images/bia_select_list_item_menu_effect_ta4vs.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[select context menu item](/TA_Automation/Topics/bia_select_context_menu_item.html)

**Next topic:**[select menu item](/TA_Automation/Topics/bia_select_menu_item.html)

