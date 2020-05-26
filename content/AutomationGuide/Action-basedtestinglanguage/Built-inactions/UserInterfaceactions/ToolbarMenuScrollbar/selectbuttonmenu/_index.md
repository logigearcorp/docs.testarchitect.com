--- 
title: "select button menu"
linktitle: "select button menu"
weight: 28
aliases: 
    - /TA_Automation/Topics/bia_select_button_menu.html
---
# select button menu {#bia_select_button_menu .reference}

## Description { .section}

Select an item on a drop-down button menu.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the button control.

item
:   Menu item or menu item path \(see Notes\).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   item argument: If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[case sensitive](bis_case_sensitive.html), [remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html), [item wait](bis_item_wait.html), [object wait](bis_object_wait.html), [window wait](bis_window_wait.html).

## Applicable Controls { .section}

This action is applicable to the following controls:menu.

## Example { .section}

![](../Images/bia_select_button_menu_pgm.png)

**Action Lines**

![](../Images/bia_select_button_menu_res.png)

**Result**

![](../Images/bia_select_button_menu_aut.png)

## Example { .section}

![](../Images/bia_select_button_menu_ta4vs_pgm.png)

**Action Lines**

![](../Images/bia_select_button_menu_ta4vs_res.png)

**Result**

![](../Images/bia_select_button_menu_aut.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](../../TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[scroll up](../../TA_Automation/Topics/bia_scroll_up.html)

**Next topic:**[select context menu item](../../TA_Automation/Topics/bia_select_context_menu_item.html)

