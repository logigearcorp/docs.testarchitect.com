--- 
title: "report error"
linktitle: "report error"
aliases: 
    - /TA_Automation/Topics/bia_report_error.html
---
# report error {#bia_report_error .reference}

## Description { .section}

Flag a runtime error and specify the error description text.

## Arguments { .section}

text
:   Descriptive text to accompany the error notice.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action increments the error count for the test run.
-   The contents of the text argument are displayed in the [**Log Information**](../../TA_Help/Topics/ug_results_log_information.html) tab of the test results.
-   If the [notice level](bis_notice_level.html) built-in setting is set to allow runtime errors to pause testing, the standard error message box is triggered by this action, and also displays the contents of the text argument.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

**Action Lines**

![](../Images/bia_report_error_pgm.png)

**Result**

![](../Images/bia_report_error_automation_problem.png)

![](../Images/bia_report_res.png)

**Parent topic:**[Reporting and Formatting](../../TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[report check](../../TA_Automation/Topics/bia_report_check.html)

**Next topic:**[report warning](../../TA_Automation/Topics/bia_report_warning.html)

