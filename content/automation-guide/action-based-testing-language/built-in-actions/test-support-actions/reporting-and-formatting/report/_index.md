--- 
title: "report"
linktitle: "report"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_report.html
keywords: "report, write text description to test results, define text for test results, define message for test results, assign text to test results"
---

## Description

Write user-defined text to the test results.

## Arguments

-   **text**

    Text to write out to the results.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Output of the report action is displayed in the [**Log Information**](/TA_Help/Topics/ug_results_log_information.html) tab of the test results.
-   This action nay be used to add clarifying text to a result report.
-   The contents of the text argument may contain an expression, and hence report may be used to view the values of variables at any point in the test.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_report_pgm.png)

**Result**

![](/images//Images/bia_report_res.png)

## Example

**Action Lines**

![](/images//Images/bia_report_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_report_ta4vs_res.png)

**Parent topic:**[Reporting and Formatting](/TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[manual check](/TA_Automation/Topics/bia_manual_check.html)

**Next topic:**[report check](/TA_Automation/Topics/bia_report_check.html)

