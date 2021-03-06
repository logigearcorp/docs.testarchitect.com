--- 
title: "does menu item exist"
linktitle: "does menu item exist"
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_does_menu_item_exist.html
keywords: "does menu item exist, check whether specific menu item exists, verify if specified menu item is found, check for existence of specified menu item, verify existence of specified menu item"
---

## Description

Return a Boolean value to indicate whether a specified item on a menu exists.

## Arguments

-   **window**

    TA name of the window.

-   **menu**

    \(Optional/Mandatory based on platform – see the Notes section below\) TA name of the menu control.

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

-   menu argument:
    -   The menuargument does not apply in the case of an AUT with a user interface based on the Windows API; in such cases, the argument should be omitted.
    -   For other platforms, the menu control of interest should be captured as an interface element and passed to this action through themenu argument.
-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example - Case 1: Item on main menu of a Windows application

![](/images//Images/bia_does_menu_item_exist_aut.png)

**Action Lines**

![](/images//Images/bia_does_menu_item_exist_pgm.png)

**Result**

![](/images//Images/bia_does_menu_item_exist_res.png)

## Example - Case 2: Item on menu of a Java application

![](/images//Images/bia_does_menu_item_exist_aut1.png)

**Action Lines**

![](/images//Images/bia_does_menu_item_exist_pgm1.png)

**Result**

![](/images//Images/bia_does_menu_item_exist_res1.png)

## Example

![](/images//Images/bia_does_menu_item_exist_ta4vs_aut.png)

**Action Lines**

![](/images//Images/bia_does_menu_item_exist_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_does_menu_item_exist_ta4vs_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[does context menu item exist](/TA_Automation/Topics/bia_does_context_menu_item_exist.html)

**Next topic:**[does toolbar button exist](/TA_Automation/Topics/bia_does_toolbar_button_exist.html)

**Related information**  


[check menu item exists](/TA_Automation/Topics/bia_check_menu_item_exists.html)

