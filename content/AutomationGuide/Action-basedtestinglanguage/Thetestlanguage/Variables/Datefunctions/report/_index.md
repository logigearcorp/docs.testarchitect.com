--- 
title: "report"
linktitle: "report"
aliases: 
    - /TA_Automation/Topics/bia_report.html
---
# report {#bia_report .reference}

## Description { .section}

Write user-defined text to the test results.

## Arguments { .section}

text
:   Text to write out to the results.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Output of the report action is displayed in the [**Log Information**](../../TA_Help/Topics/ug_results_log_information.html) tab of the test results.
-   This action nay be used to add clarifying text to a result report.
-   The contents of the text argument may contain an expression, and hence report may be used to view the values of variables at any point in the test.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

**Action Lines**

![](../Images/bia_report_pgm.png)

**Result**

![](../Images/bia_report_res.png)

## Example { .section}

**Action Lines**

![](../Images/bia_report_ta4vs_pgm.png)

**Result**

![](../Images/bia_report_ta4vs_res.png)

**Parent topic:**[Reporting and Formatting](../../TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[manual check](../../TA_Automation/Topics/bia_manual_check.html)

**Next topic:**[report check](../../TA_Automation/Topics/bia_report_check.html)

