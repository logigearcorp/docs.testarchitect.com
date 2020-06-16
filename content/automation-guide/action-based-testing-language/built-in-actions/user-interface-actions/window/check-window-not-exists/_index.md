--- 
title: "check window not exists"
linktitle: "check window not exists"
description: "Description Check for the nonexistence of a specified window. Result is Passed if the window does not exist ; otherwise Failed . Arguments window TA name of the window. Valid contexts This action may ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_check_window_not_exists.html
keywords: "built-in actions, check window not exists, check window not exists (action), iOS (action), check window not exists, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check if particular window does not exist, check whether particular window does not exist, check for nonexistence of given window, verify nonexistence of specified window"
---

## Description

Check for the nonexistence of a specified window. Result is Passed ifthe window does not exist; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[case sensitive](/TA_Automation/Topics/bis_case_sensitive.html), [remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html), [window wait](/TA_Automation/Topics/bis_window_wait.html).

## Applicable Controls

This action is applicable to the following controls:window.

## Example

![](/images/TA_Automation/Images/bia_check_window_not_exists_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_check_window_not_exists_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_window_not_exists_res.png)




**Related information**  


[check window exists](/TA_Automation/Topics/bia_check_window_exists.html)

[does window exist](/TA_Automation/Topics/bia_does_window_exist.html)

