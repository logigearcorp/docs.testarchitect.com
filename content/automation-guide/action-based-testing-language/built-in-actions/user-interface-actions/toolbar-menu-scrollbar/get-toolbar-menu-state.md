--- 
title: "get toolbar menu state"
linktitle: "get toolbar menu state"
description: "Description Retrieve the state of a specified item on a drop-down menu hosted by a toolbar button (that is, a drop-down menu that appears when user clicks a button on a toolbar). Arguments window TA ..."
weight: 22
aliases: 
    - /TA_Automation/Topics/bia_get_toolbar_menu_state.html
keywords: "built-in actions, get toolbar menu state, get toolbar menu state (action), get toolbar menu state, get state of specified item on drop-down menu on toolbar button, retrieve state of given item on drop-down menu on toolbar button"
---

## Description

Retrieve the state of a specified item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\).

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **variable**

    \(Optional\) Variable to receive the returned value.

    Possible returned values:

    -   enabled
    -   disabled
    -   checked

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   variable argument:
    -   If the variable in argumentvariablehas not been declared, the action creates it as a global.
    -   If the variable argument is left empty, TestArchitect supplies a global variable with the name \_result.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:toolbar

## Example

![](/images/TA_Automation/Images/bia_get_toolbar_menu_state_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_get_toolbar_menu_state_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_toolbar_menu_state_res.png)




**Related information**  


[check toolbar button state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-toolbar-button-state)
