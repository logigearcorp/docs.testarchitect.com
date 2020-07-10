--- 
title: "go back"
linktitle: "go back"
description: "Description Go back in the browser navigation history to the previous page. Arguments window TA name of the window. Valid contexts This action may be used within the following project items: test ..."
weight: 16
aliases: 
    - /TA_Automation/Topics/bia_go_back.html
keywords: "built-in actions, go back, go back (action), Safari, macOS (action), go back, macOS, Safari (action), history back in browser, go back to previous page, navigate back in browser history, return to previous page"
---

## {{< expand >}} Description

Go back in the browser navigation history to the previous page.

## {{< expand >}} Arguments

-   **window**

    TA name of the window.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action is functionally equivalent to clicking the browser's **Back** button.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Example

![](/images/TA_Automation/Images/bia_go_back_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_go_back_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_go_back_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_go_back_effect.png)

**Related information**  


[go forward](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-forward)

[go home](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-home)

[navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate)

[refresh](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/refresh)

