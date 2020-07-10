--- 
title: "check toolbar menu state"
linktitle: "check toolbar menu state"
description: "Description Check, against an expected value, the state of an item on a drop-down menu hosted by a toolbar button (that is, a drop-down menu that appears when user clicks a button on a toolbar). ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_check_toolbar_menu_state.html
keywords: "built-in actions, check toolbar menu state, check toolbar menu state (action), check toolbar menu state, check state of specified item on drop-down menu on toolbar against expected value, check if drop-down menu item on toolbar matches expected value, verify whether drop-down mneu item on toolbar matches expected value"
---

## {{< expand >}} Description

Check, against an expected value, the state of an item on a drop-down menu hosted by a toolbar button \(that is, a drop-down menu that appears when user clicks a button on a toolbar\). Result is Passed ifthe values match; otherwise Failed.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.

-   **toolbar**

    TA name of the toolbar control.

-   **button**

    Button, as identified by its captionor index value.

-   **item**

    Menu item or menu item path \(see Notes\).

-   **expected**

    Expected value\(s\) of the menu item.

    Possible values:

    -   **disabled**

        The menu item is unavailable or disabled.

    -   **enabled**

        The menu item is enabled or available.

    -   **checked**

        The menu item is selected.

    {{<tip>}} Use commas \(,\) as delimiters between expected values of the state property.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   item argument:
    -   Menu items are identified by their caption properties.
    -   If a menu path of more than one item must be specified, use arrow symbols \( -\> \) as delimiters between menu items. For example, `Vehicles->Cars->Four-door sedans`.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:toolbar

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_check_toolbar_menu_state_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_toolbar_menu_state_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_toolbar_menu_state_res.png)




