--- 
title: "does toolbar menu item exist"
linktitle: "does toolbar menu item exist"
description: "Description Return a Boolean value to indicate the existence of a specified item on a drop-down menu hosted by a toolbar button (that is, a drop-down menu that appears when user clicks a button on a ..."
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_does_toolbar_menu_item_exist.html
keywords: "built-in actions, does toolbar menu item exist, does toolbar menu item exist (action), does toolbar menu item exist, check if specified item on drop-down menu on toolbar button exists, check whether given item on drop-down menu on toolbar button is found, check for existence of specified item on drop-down menu on toolbar button, verify existence of specified item on drop-down menu on toolbar button"
---

## {{< expand >}} Description

Return a Boolean value to indicate the existence of a specified item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\).

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned Boolean value.

    Possible returned values:

    -   **1**

        Item found.

    -   **0**

        Item not found.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:toolbar

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_does_toolbar_menu_item_exist_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_does_toolbar_menu_item_exist_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_does_toolbar_menu_item_exist_res.png)

**Related information**  


[check toolbar menu item exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-menu-item-exists)

[check toolbar menu item not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-menu-item-not-exists)

