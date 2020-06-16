--- 
title: "select menu item"
linktitle: "select menu item"
description: "Description Select an item on the specified menu. Arguments window TA name of the window. menu (Optional/Mandatory based on platform – see the Notes section below) TA name of the menu control. item ..."
weight: 31
aliases: 
    - /TA_Automation/Topics/bia_select_menu_item.html
keywords: "built-in actions, select menu item, select menu item (action), select menu item, select specified menu item, select given item on menu, select specified item from menu"
---

## Description

Select an item on the specified menu.

## Arguments

-   **window**

    TA name of the window.

-   **menu**

    \(Optional/Mandatory based on platform – see the Notes section below\) TA name of the menu control.

-   **item**

    Menu item or menu item path \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   menu argument:
    -   The menu argument does not apply in the case of an AUT with a user interface based on the Windows API; in such cases, the menu argument should be omitted.
    -   For other platforms, the menu control of interest should be captured as an interface element and passed to the check menu item exists action through the menu argument.
-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [item wait](/TA_Automation/Topics/bis_item_wait.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example - Case 1: Item on main menu of a Windows application

![](/images/TA_Automation/Images/bia_select_menu_item_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_menu_item_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_select_menu_item_res.png)

## Example - Case 2: Item on menu of a Java application

![](/images/TA_Automation/Images/bia_select_menu_item_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_menu_item_pgm1.png)

**Result**

![](/images/TA_Automation/Images/bia_select_menu_item_res1.png)

## Example

![](/images/TA_Automation/Images/bia_select_menu_item_aut1.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_select_menu_item_ta4vs_pgm1.png)

**Result**

![](/images/TA_Automation/Images/bia_select_menu_item_ta4vs_res1.png)




