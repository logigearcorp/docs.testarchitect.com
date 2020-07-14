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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example

![](/images/TA_Automation/Images/bia_does_button_menu_exist_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_does_button_menu_exist_pgm.png)

Result

![](/images/TA_Automation/Images/bia_does_button_menu_exist_res.png)

**Related information**  


[check button menu exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-button-menu-exists)

[check button menu not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-button-menu-not-exists)
