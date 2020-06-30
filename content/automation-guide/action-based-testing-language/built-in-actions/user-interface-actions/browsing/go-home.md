--- 
title: "go home"
linktitle: "go home"
description: "Description Go to the home page currently defined for the browser. Arguments window TA name of the window. Valid contexts This action may be used within the following project items: test modules and ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_go_home.html
keywords: "built-in actions, go home, go home (action), Safari, macOS (action), go home, macOS, Safari (action), go to homepage of browser, go to browswer homepage"
---

## Description

Go to the home page currently defined for the browser.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is functionally equivalent to clicking the browser's **Home** button.
-   This action is not supported in the [WebDriver](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/) mode
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_go_home_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_go_home_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_go_home_effect.png)

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_go_home_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_go_home_ta4vs_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_go_home_effect.png)




**Related information**  


[go back](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-back)

[go forward](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/go-forward)

[navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate)

[refresh](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/refresh)

