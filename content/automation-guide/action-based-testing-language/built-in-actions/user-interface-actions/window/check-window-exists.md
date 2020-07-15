--- 
title: "check window exists"
linktitle: "check window exists"
description: "Description Check for the existence of a specified window. Result is Passed if the window does exist ; otherwise Failed . Arguments window TA name of the window. Valid contexts This action may be used ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_window_exists.html
keywords: "built-in actions, check window exists, check window exists (action), iOS (action), check window exists, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check window exist, check for existence of specified window, check if specified window exist, verify whether specified window exist, verify existence of specified window"
---

## Description

Check for the existence of a specified window. Result is Passed ifthe window does exist; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes {{< permerlink >}} {#bia_check_window_exists__section.notes} 

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive), [remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_check_window_exists_aut.png)

Action Lines

![](/images/TA_Automation/Images/bia_check_window_exists_pgm.png)

Result

![](/images/TA_Automation/Images/bia_check_window_exists_res.png)




**Related information**  


[check window not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/check-window-not-exists)

[does window exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/does-window-exist)
