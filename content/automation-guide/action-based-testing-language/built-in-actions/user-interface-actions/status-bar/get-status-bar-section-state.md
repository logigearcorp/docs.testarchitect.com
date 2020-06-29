--- 
title: "get status bar section state"
linktitle: "get status bar section state"
description: "Description Retrieve the state of a status bar section. Arguments window TA name of the window. control TA name of the status bar. section Integer index specifying the status bar section. variable ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_get_status_bar_section_state.html
keywords: "built-in actions, get status bar section state, get status bar section state (action), get status bar section state, get state of status bar section, retrieve state of status bar section, get state of status bar part"
---

## Description

Retrieve the state of a status bar section.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the status bar.

-   **section**

    Integer index specifying the status bar section.

-   **variable**

    Variable to receive the returned value.

    Possible returned values:

    -   enabled
    -   disabled
    -   marquee
    -   resizable

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports .NET \(not including WPF\) tested applications.
-   In the case of the section argument, note that index numbering begins with 1, and proceeds from left to right.
-   A status bar section may have more than a single state. Multiple states are returned to the variable as a single, comma-delimited string.
-   If the variable in argumentvariablehas not been declared, the action creates it as a global.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [ignore blank space](/automation-guide/action-based-testing-language/built-in-settings/value-settings/ignore-blank-space), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait), [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait), [load invisible controls](/automation-guide/action-based-testing-language/built-in-settings/other-settings/load-invisible-controls).

## Applicable Controls

This action is applicable to the following controls:status bar

## Example

![](/images/TA_Automation/Images/bia_get_status_bar_section_state_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_get_status_bar_section_state_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_status_bar_section_state_res.png)




**Related information**  


[check status bar section state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/status-bar/check-status-bar-section-state)

