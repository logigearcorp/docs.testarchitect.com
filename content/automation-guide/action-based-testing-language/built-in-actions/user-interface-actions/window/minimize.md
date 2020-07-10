--- 
title: "minimize"
linktitle: "minimize"
description: "Description Minimize a window. Arguments window TA name of the window. Valid contexts This action may be used within the following project items: test modules and user-defined actions. Notes This ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bia_minimize.html
keywords: "built-in actions, minimize, minimize (action), Safari, macOS (action), minimize, macOS, Safari (action), minimize window"
---

## {{< expand >}} Description

Minimize a window.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action is not supported in the [WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/) mode.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:window.

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_minimize_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_minimize_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_minimize_res.png)

**Related information**  


[maximize](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/maximize)

[resize window](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/resize-window)

