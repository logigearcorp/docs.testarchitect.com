--- 
title: "get last check information"
linktitle: "get last check information"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_last_check_information.html
keywords: "get last check information, retrieve information from last check, get information from most recently check, get information related to last check"
---

## Description

Retrieve the basic information related to the most recently executed check action. \(Note that this applies to any check-type action, such as [check control exists](check_control_exists.html).\)

## Arguments

-   **check**

    Variable to receive the returned description of the most recent check action.

-   **expected**

    Variable to receive the returned *expected value* of the most recent check action.

-   **recorded**

    Variable to receive the returned *recorded value* of the most recent check action.

-   **result**

    Variable to receive the returned result of the most recent check action.

    Possible values:

    -   Passed
    -   Failed

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the variables in argumentscheck, expected, recorded or resulthave not been declared, the action creates them as globals.
-   For each of check, expected, recorded and result, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_get_last_check_information_pgm.png)

**Result**

![](/images//Images/bia_get_last_check_information_res.png)

**Parent topic:**[Reporting and Formatting](/TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[report warning](/TA_Automation/Topics/bia_report_warning.html)

