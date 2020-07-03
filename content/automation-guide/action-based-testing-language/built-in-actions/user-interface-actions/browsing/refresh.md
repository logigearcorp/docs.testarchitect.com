--- 
title: "refresh"
linktitle: "refresh"
description: "Description Refresh the web page. Arguments window TA name of the window. Valid contexts This action may be used within the following project items: test modules and user-defined actions. Notes This ..."
weight: 20
aliases: 
    - /TA_Automation/Topics/bia_refresh.html
keywords: "built-in actions, refresh, refresh (action), Safari, macOS (action), refresh, macOS, Safari (action), refesh web page"
---

## Description

Refresh the web page.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is functionally equivalent to clicking the browser's **Refresh** button, or \(in most cases\) pressing the F5 key.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_refresh_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_refresh_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_refresh_effect.png)

**Related information**  


[go back](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-back)

[go forward](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-forward)

[go home](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-home)

[navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate)

