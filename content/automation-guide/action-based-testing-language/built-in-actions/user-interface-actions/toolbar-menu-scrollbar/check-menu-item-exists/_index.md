--- 
title: "check menu item exists"
linktitle: "check menu item exists"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_check_menu_item_exists.html
keywords: "check menu item exists, check for existence of specific menu item, verify existence of specific menu item, check if specified menu item is found, check whether specified menu item exists"
---

## Description

Check for the existence of an item on a menu. Result is Passed ifthe specified menu item is found; otherwise Failed.

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
    -   The menuargument does not apply in the case of an AUT with a user interface based on the Windows API; in such cases, the argument should be omitted.
    -   For other platforms, the menu control of interest should be captured as an interface element and passed to this action through themenu argument.
-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   Since submenu items are not available on Android mobile devices, checking for the existence of a subitem is not supported on Android.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example - Case 1: Item on main menu of a Windows application

![](/images//Images/bia_check_menu_item_exists_aut_1.png)

**Action Lines**

![](/images//Images/bia_check_menu_item_exists_pgm_1.png)

**Result**

![](/images//Images/bia_check_menu_item_exists_res_1.png)

## Example - Case 2: Item on menu of a Java application

![](/images//Images/bia_check_menu_item_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_menu_item_exists_pgm.png)

**Result**

![](/images//Images/bia_check_menu_item_exists_res.png)

## Example - Case 1: Item on main menu of a Windows application

![](/images//Images/bia_check_menu_item_exists_ta4vs_aut_1.png)

**Action Lines**

![](/images//Images/bia_check_menu_item_exists_ta4vs_pgm_1.png)

**Result**

![](/images//Images/bia_check_menu_item_exists_ta4vs_res_1.png)

## Example - Case 2: Item on menu of a WPF application

![](/images//Images/bia_check_menu_item_exists_ta4vs_aut_2.png)

**Action Lines**

![](/images//Images/bia_check_menu_item_exists_ta4vs_pgm_2.png)

**Result**

![](/images//Images/bia_check_menu_item_exists_ta4vs_res_2.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Previous topic:**[check context menu item state](/TA_Automation/Topics/bia_check_context_menu_item_state.html)

**Next topic:**[check toolbar button exists](/TA_Automation/Topics/bia_check_toolbar_button_exists.html)

**Related information**  


[does menu item exist](/TA_Automation/Topics/bia_does_menu_item_exist.html)

