--- 
title: "report"
linktitle: "report"
description: "Description Write user-defined text to the test results. Arguments text Text to write out to the results. Valid contexts This action may be used within the following project items: test modules and ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_report.html
keywords: "built-in actions, report, report (action), report, write text description to test results, define text for test results, define message for test results, assign text to test results"
---

## Description

Write user-defined text to the test results.

## Arguments

-   **text**

    Text to write out to the results.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Output of the report action is displayed in the [**Log Information**](/user-guide/working-with-test-results/overview/log-information-tab) tab of the test results.
-   This action nay be used to add clarifying text to a result report.
-   The contents of the text argument may contain an expression, and hence report may be used to view the values of variables at any point in the test.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_report_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_report_res.png)

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_report_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_report_ta4vs_res.png)




