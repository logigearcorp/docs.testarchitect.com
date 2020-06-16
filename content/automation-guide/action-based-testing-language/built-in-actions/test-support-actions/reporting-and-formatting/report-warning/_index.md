--- 
title: "report warning"
linktitle: "report warning"
description: "Description Flag a warning and specify the warning description text. Arguments text Descriptive text to accompany the warning notice. Valid contexts This action may be used within the following ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_report_warning.html
keywords: "built-in actions, report warning, report warning (action), define warning text, write warning text"
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
-   If the [notice level](/TA_Automation/Topics/bis_notice_level.html) built-in setting is set to allow runtime warnings to pause testing, the standard warning message box is triggered by this action, and also displays the contents of the text argument.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_report_warning_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_report_warning_res.png)




