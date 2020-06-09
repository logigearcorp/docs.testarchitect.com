--- 
title: "report warning"
linktitle: "report warning"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_report_warning.html
keywords: "define warning text, write warning text"
---

## Description

Flag a warning and specify the warning description text.

## Arguments

-   **text**

    Descriptive text to accompany the warning notice.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action increments the warning count for the test run.
-   The contents of the text argument are displayed in the [**Log Information**](/TA_Help/Topics/ug_results_log_information.html) tab of the test results.
-   If the [notice level](notice_level.html) built-in setting is set to allow runtime warnings to pause testing, the standard warning message box is triggered by this action, and also displays the contents of the text argument.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_report_warning_pgm.png)

**Result**

![](/images//Images/bia_report_warning_res.png)

**Parent topic:**[Reporting and Formatting](/TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[report error](/TA_Automation/Topics/bia_report_error.html)

**Next topic:**[get last check information](/TA_Automation/Topics/bia_get_last_check_information.html)

