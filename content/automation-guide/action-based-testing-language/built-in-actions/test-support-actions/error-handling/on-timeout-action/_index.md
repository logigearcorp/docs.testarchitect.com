--- 
title: "on timeout action"
linktitle: "on timeout action"
description: "Description Specify the action to be invoked in the event of a timeout event, which occurs in the INITIAL section, individual test cases, as well as the FINAL section. Arguments action Name of the ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_on_timeout_action.html
keywords: "built-in actions, on timeout action, on timeout action (action), timeout handler, handle timeout"
---

## Description

Specify the action to be invoked in the event of a timeout event, which occurs in the [INITIAL](/TA_Automation/Topics/bia_initial.html) section, individual test cases, as well as the [FINAL](/TA_Automation/Topics/bia_final.html) section.

## Arguments

-   **action**

    Name of the action to be executed

-   **argument 1, argument 2,..., argument N**

    \(Optional\) Arguments to be passed to the action specified in the action argument.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Applies to TestArchitect [8.3 Update 4](/TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.
-   The number of optional arguments depends on the requirements of the action specified in action. \(See Examples below.\)
-   The invoked action has its own timeout period which is configured in the [cleanup timeout](/TA_Automation/Topics/bis_cleanup_timeout.html) built-in setting. Therefore, when the duration of the test case timeout's action handler exceeds the timeout period, the remaining lines of the action handler will stop instantly.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example - Case 1: Timeout handler with no arguments

**Action Lines**

![](/images/TA_Automation/Images/bis_on_timeout_action_pgm.png)

## Example - Case 2: Timeout handler with arguments

**Action Lines**

![](/images/TA_Automation/Images/bis_on_timeout_action_pgm_2.png)




**Related information**  


[test case timeout](/TA_Automation/Topics/bis_test_case_timeout.html)

[Stopping tests on timeout](/TA_Automation/Topics/aut_stop_tests_after_timeout.html)

[cleanup timeout](/TA_Automation/Topics/bis_cleanup_timeout.html)

