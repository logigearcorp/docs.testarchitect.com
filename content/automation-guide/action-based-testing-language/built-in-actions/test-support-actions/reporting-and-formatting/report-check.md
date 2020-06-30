--- 
title: "report check"
linktitle: "report check"
description: "Description Register a Passed or Failed check result in the test results, accompanied by user-defined text. Arguments result The result of the report. Allowable values: Passed Failed description Text ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_report_check.html
keywords: "built-in actions, report check, report check (action), report check, define passed check result, define failed check result, write message for check result"
---

## Description

Register a Passed or Failed check result in the test results, accompanied by user-defined text.

## Arguments

-   **result**

    The result of the report.

    Allowable values:

    -   Passed
    -   Failed
-   **description**

    Text to write out to the results.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   From the perspective of the test results, this action works just like any other check-type action, producing either a Passed or Failed result.
-   Contents of the description argument are displayed in the [**Log Information**](/user-guide/working-with-test-results/overview/log-information-tab) tab of the test results.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

**Action Lines**

![](/images/TA_Automation/Images/check_opearting_system_pgm.png)

**Result**

If the verification succeeds, [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check) reports a Passed check, and displays the accompanying message in the [**Result Details**](/user-guide/working-with-test-results/overview/result-details-tab) tab of the test results:

![](/images/TA_Automation/Images/check_opearting_system_res.png)




