--- 
title: "check button menu not exists"
linktitle: "check button menu not exists"
description: "Description Check for the nonexistence of a specific menu item on a drop-down button . Result is Passed if the specified item is not found ; otherwise Failed . Note: The drop-down button consists of a ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_button_menu_not_exists.html
keywords: "built-in actions, check button menu not exists, check button menu not exists (action), check button menu not exists, check for nonexistence of specified item in drop-down button, check if specific menu item is not found in drop-down button, check if particular menu item in drop-down button does not exist, verify whether specific menu item is not found in drop-down button, verify nonexistence of specified menu item in drop-down button"
---

## Description

Check for the nonexistence of a specific menu item on a drop-down button . Result is Passed ifthe specified item is not found; otherwise Failed.

{{<note>}} The drop-down button consists of a button. When clicked, the button displays a drop-down menu or list of items.

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
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:menu.

## Example

![](/images/TA_Automation/Images/bia_check_button_menu_not_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_button_menu_not_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_button_menu_not_exists_res.png)

**Related information**  


[check button menu exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-button-menu-exists)

[does button menu exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-button-menu-exist)
