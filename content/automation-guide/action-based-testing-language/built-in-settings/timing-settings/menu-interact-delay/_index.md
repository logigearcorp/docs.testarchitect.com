--- 
title: "menu interact delay"
linktitle: "menu interact delay"
weight: 7
aliases: 
    - /TA_Automation/Topics/bis_menu_interact_delay.html
---

## Description

Specifies the delay before clicking the next menu items.

## Value Units

milliseconds

## Default Value

100

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: Java and Win32 applications.
-   WPF
-   UIA
-   Winform

## Applicable Built-in Actions

Use of this built-in setting is applicable to the following built-in actions:

-   [check menu item exists](bia_check_menu_item_exists.html)
-   [select menu item](bia_select_menu_item.html)
-   [does menu item exist](bia_does_menu_item_exist.html)
-   [check button menu exists](bia_check_button_menu_exists.html)
-   [check button menu not exists](bia_check_button_menu_not_exists.html)
-   [select button menu](bia_select_button_menu.html)
-   [does button menu exist](bia_does_button_menu_exist.html)
-   [check toolbar menu item exists](bia_check_toolbar_menu_item_exists.html)
-   [check toolbar menu item not exists](bia_check_toolbar_menu_item_not_exists.html)
-   [select toolbar menu](bia_select_toolbar_menu.html)
-   [does toolbar menu item exist](bia_does_toolbar_menu_item_exist.html)
-   [get toolbar menu state](bia_get_toolbar_menu_state.html)
-   [check toolbar menu state](bia_check_toolbar_menu_state.html)
-   [check context menu item exists](bia_check_context_menu_item_exists.html)
-   [check context menu item not exists](bia_check_context_menu_item_not_exists.html)
-   [select context menu item](bia_select_context_menu_item.html)
-   [does context menu item exist](bia_does_context_menu_item_exist.html)
-   [check context menu item state](bia_check_context_menu_item_state.html)
-   [get context menu item state](bia_get_context_menu_item_state.html)
-   [select list item menu](bia_select_list_item_menu.html)
-   [click select menu](bia_click_select_menu.html)
-   [select tree node menu](bia_select_tree_node_menu.html)
-   [check tree node menu state](bia_check_tree_node_menu_state.html)

## Notes

-   Valid range is from 0 to 2,147,483,647 milliseconds.
-   Support both menu and context menu on:
    -   Win32
    -   Java
    -   Winform
    -   UIA
-   Only support menu on:
    -   WPF

## Example

![](/images//Images/bis_menu_interact_delay.png)

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[item wait](/TA_Automation/Topics/bis_item_wait.html)

**Next topic:**[object wait](/TA_Automation/Topics/bis_object_wait.html)

