--- 
title: "does button menu exist"
linktitle: "does button menu exist"
description: "Description Return a Boolean value to indicate whether a specified menu item of a button drop-down control is found to exist. Arguments window TA name of the window. control TA name of the button ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_does_button_menu_exist.html
keywords: "built-in actions, does button menu exist, does button menu exist (action), does button menu exist, check for existence of specified menu item of drop-down button, check if specified menu item of drop-down button exists, verify whether specified menu item of drop-down button is found, verify existence of specified menu item of drop-down button"
---

## Description

Return a Boolean value to indicate whether a specified menu item of a button drop-down control is found to exist.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the button control.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **output**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument: If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   output argument:
    -   If the variable in argumentoutputhas not been declared, the action creates it as a global.
    -   If the outputargument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [object wait](/TA_Automation/Topics/bis_object_wait.html), [window wait](/TA_Automation/Topics/bis_window_wait.html), [load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example

![](/images/TA_Automation/Images/bia_does_button_menu_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_button_menu_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_button_menu_exist_res.png)

## Example

![](/images/TA_Automation/Images/bia_does_button_menu_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_button_menu_exist_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_button_menu_exist_ta4vs_res.png)




**Related information**  


[check button menu exists](/TA_Automation/Topics/bia_check_button_menu_exists.html)

[check button menu not exists](/TA_Automation/Topics/bia_check_button_menu_not_exists.html)

