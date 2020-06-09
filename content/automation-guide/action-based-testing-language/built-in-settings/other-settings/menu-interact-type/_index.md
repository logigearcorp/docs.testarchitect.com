--- 
title: "menu interact type"
linktitle: "menu interact type"
weight: 14
aliases: 
    - /TA_Automation/Topics/bis_menu_interact_type.html
---

## Description

Specifies which mouse action \(click or hover\) to take on each middle-level menu item.

## Allowable values

-   click: \(Default\) click menu items of all levels.
-   hover: point to \(hover\) menu items of middle levels and click the menu items of the top and last levels

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: Java and Win32 applications.
-   WPF
-   UIA
-   Winform

## Applicable Built-in Actions

Use of this built-in setting is applicable to the following built-in actions:

-   [check menu item exists](check_menu_item_exists.html)
-   [select menu item](select_menu_item.html)
-   [does menu item exist](does_menu_item_exist.html)
-   [check button menu exists](check_button_menu_exists.html)
-   [check button menu not exists](check_button_menu_not_exists.html)
-   [select button menu](select_button_menu.html)
-   [does button menu exist](does_button_menu_exist.html)
-   [check toolbar menu item exists](check_toolbar_menu_item_exists.html)
-   [check toolbar menu item not exists](check_toolbar_menu_item_not_exists.html)
-   [select toolbar menu](select_toolbar_menu.html)
-   [does toolbar menu item exist](does_toolbar_menu_item_exist.html)
-   [get toolbar menu state](get_toolbar_menu_state.html)
-   [check toolbar menu state](check_toolbar_menu_state.html)
-   [check context menu item exists](check_context_menu_item_exists.html)
-   [check context menu item not exists](check_context_menu_item_not_exists.html)
-   [select context menu item](select_context_menu_item.html)
-   [does context menu item exist](does_context_menu_item_exist.html)
-   [check context menu item state](check_context_menu_item_state.html)
-   [get context menu item state](get_context_menu_item_state.html)
-   [select list item menu](select_list_item_menu.html)
-   [click select menu](click_select_menu.html)
-   [select tree node menu](select_tree_node_menu.html)
-   [check tree node menu state](check_tree_node_menu_state.html)

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

![](/images//Images/bis_menu_interact_type_illustration.png)

**Action lines**:

![](/images//Images/bis_menu_interact_type.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html)

**Next topic:**[min edge length](/TA_Automation/Topics/bis_min_edge_length.html)

