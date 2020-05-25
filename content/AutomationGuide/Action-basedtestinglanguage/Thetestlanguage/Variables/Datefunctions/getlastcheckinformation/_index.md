--- 
title: "get last check information"
linktitle: "get last check information"
aliases: 
    - /TA_Automation/Topics/bia_get_last_check_information.html
---
# get last check information {#bia_get_last_check_information .reference}

## Description { .section}

Retrieve the basic information related to the most recently executed check action. \(Note that this applies to any check-type action, such as [check control exists](bia_check_control_exists.html).\)

## Arguments { .section}

check
:   Variable to receive the returned description of the most recent check action.

expected
:   Variable to receive the returned *expected value* of the most recent check action.

recorded
:   Variable to receive the returned *recorded value* of the most recent check action.

result
:   Variable to receive the returned result of the most recent check action.

:   Possible values:

    -   Passed
    -   Failed

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   If the variables in argumentscheck, expected, recorded or resulthave not been declared, the action creates them as globals.
-   For each of check, expected, recorded and result, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_get_last_check_information_pgm.png)

**Result**

![](../Images/bia_get_last_check_information_res.png)

**Parent topic:**[Reporting and Formatting](../../TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Previous topic:**[report warning](../../TA_Automation/Topics/bia_report_warning.html)

