--- 
title: "menu interact type"
linktitle: "menu interact type"
description: "Description Specifies which mouse action (click or hover) to take on each middle-level menu item. Allowable values click : (Default) click menu items of all levels. hover : point to (hover) menu items ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bis_menu_interact_type.html
keywords: 
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

-   [check menu item exists](/TA_Automation/Topics/bia_check_menu_item_exists.html)
-   [select menu item](/TA_Automation/Topics/bia_select_menu_item.html)
-   [does menu item exist](/TA_Automation/Topics/bia_does_menu_item_exist.html)
-   [check button menu exists](/TA_Automation/Topics/bia_check_button_menu_exists.html)
-   [check button menu not exists](/TA_Automation/Topics/bia_check_button_menu_not_exists.html)
-   [select button menu](/TA_Automation/Topics/bia_select_button_menu.html)
-   [does button menu exist](/TA_Automation/Topics/bia_does_button_menu_exist.html)
-   [check toolbar menu item exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_exists.html)
-   [check toolbar menu item not exists](/TA_Automation/Topics/bia_check_toolbar_menu_item_not_exists.html)
-   [select toolbar menu](/TA_Automation/Topics/bia_select_toolbar_menu.html)
-   [does toolbar menu item exist](/TA_Automation/Topics/bia_does_toolbar_menu_item_exist.html)
-   [get toolbar menu state](/TA_Automation/Topics/bia_get_toolbar_menu_state.html)
-   [check toolbar menu state](/TA_Automation/Topics/bia_check_toolbar_menu_state.html)
-   [check context menu item exists](/TA_Automation/Topics/bia_check_context_menu_item_exists.html)
-   [check context menu item not exists](/TA_Automation/Topics/bia_check_context_menu_item_not_exists.html)
-   [select context menu item](/TA_Automation/Topics/bia_select_context_menu_item.html)
-   [does context menu item exist](/TA_Automation/Topics/bia_does_context_menu_item_exist.html)
-   [check context menu item state](/TA_Automation/Topics/bia_check_context_menu_item_state.html)
-   [get context menu item state](/TA_Automation/Topics/bia_get_context_menu_item_state.html)
-   [select list item menu](/TA_Automation/Topics/bia_select_list_item_menu.html)
-   [click select menu](/TA_Automation/Topics/bia_click_select_menu.html)
-   [select tree node menu](/TA_Automation/Topics/bia_select_tree_node_menu.html)
-   [check tree node menu state](/TA_Automation/Topics/bia_check_tree_node_menu_state.html)

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

![](/images/TA_Automation/Images/bis_menu_interact_type_illustration.png)

**Action lines**:

![](/images/TA_Automation/Images/bis_menu_interact_type.png)




