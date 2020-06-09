--- 
title: "check button menu exists"
linktitle: "check button menu exists"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_button_menu_exists.html
---
keyword: [check for existence of specified menu item in drop-down button, check if specific menu item in drop-down button exists, check whether given specific menu item in drop-down button exists, verify if specific menu item in drop-down button exists, verify existence of specific menu item in drop-down button]
---

# check button menu exists

## Description

Check for the existence of a menu item of a button drop-down. Result is Passed if the specified item is found; otherwise Failed.

**Note:** The drop-down button consists of a button. When clicked, the button displays a drop-down menu or list of items.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the button control.

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

The following settings are applicable to this action:[case sensitive](case_sensitive.html), [remove double quotes from cells](remove_double_quotes_from_cells.html), [standard ASCII only](standard_ASCII_only.html), [item wait](item_wait.html), [object wait](object_wait.html), [window wait](window_wait.html), [load invisible controls](load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example

![](/images//Images/bia_check_button_menu_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_button_menu_exists_pgm.png)

**Result**

![](/images//Images/bia_check_button_menu_exists_res.png)

## Example

![](/images//Images/bia_check_button_menu_exists_aut.png)

**Action Lines**

![](/images//Images/bia_check_button_menu_exists_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_check_button_menu_exists_ta4vs_res.png)

**Parent topic:**[Toolbar, Menu, Scrollbar](/TA_Automation/Topics/bia_Toolbar_Menu_Scrollbar.html)

**Next topic:**[check button menu not exists](/TA_Automation/Topics/bia_check_button_menu_not_exists.html)

**Related information**  


[check button menu not exists](/TA_Automation/Topics/bia_check_button_menu_not_exists.html)

[does button menu exist](/TA_Automation/Topics/bia_does_button_menu_exist.html)

