--- 
title: "check button menu exists"
linktitle: "check button menu exists"
description: "Description Check for the existence of a menu item of a button drop-down. Result is Passed if the specified item is found ; otherwise Failed . Note: The drop-down button consists of a button. When ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_button_menu_exists.html
keywords: "built-in actions, check button menu exists, check button menu exists (action), check for existence of specified menu item in drop-down button, check if specific menu item in drop-down button exists, check whether given specific menu item in drop-down button exists, verify if specific menu item in drop-down button exists, verify existence of specific menu item in drop-down button"
---

## Description

Check for the existence of a menu item of a button drop-down. Result is Passed if the specified item is found; otherwise Failed.

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

![](/images/TA_Automation/Images/bia_check_button_menu_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_button_menu_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_button_menu_exists_res.png)

**Related information**  


[check button menu not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-button-menu-not-exists)

[does button menu exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-button-menu-exist)

