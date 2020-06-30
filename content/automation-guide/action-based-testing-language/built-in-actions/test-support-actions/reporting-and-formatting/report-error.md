--- 
title: "report error"
linktitle: "report error"
description: "Description Flag a runtime error and specify the error description text. Arguments text Descriptive text to accompany the error notice. Valid contexts This action may be used within the following ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_report_error.html
keywords: "built-in actions, report error, report error (action)"
---

## Description

Flag a runtime error and specify the error description text.

## Arguments

-   **text**

    Descriptive text to accompany the error notice.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action increments the error count for the test run.
-   The contents of the text argument are displayed in the [**Log Information**](/user-guide/working-with-test-results/overview/log-information-tab) tab of the test results.
-   If the [notice level](/automation-guide/action-based-testing-language/built-in-settings/other-settings/notice-level) built-in setting is set to allow runtime errors to pause testing, the standard error message box is triggered by this action, and also displays the contents of the text argument.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_report_error_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_report_error_automation_problem.png)

![](/images/TA_Automation/Images/bia_report_res.png)




