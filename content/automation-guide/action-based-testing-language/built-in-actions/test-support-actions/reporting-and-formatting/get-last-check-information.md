--- 
title: "get last check information"
linktitle: "get last check information"
description: "Description Retrieve the basic information related to the most recently executed check action. (Note that this applies to any check -type action, such as check control exists .) Arguments check ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_get_last_check_information.html
keywords: "built-in actions, get last check information, get last check information (action), get last check information, retrieve information from last check, get information from most recently check, get information related to last check"
---

## {{< expand >}} Description

Retrieve the basic information related to the most recently executed check action. \(Note that this applies to any check-type action, such as [check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists).\)

## {{< expand >}} Arguments

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

## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   If the variables in argumentscheck, expected, recorded or resulthave not been declared, the action creates them as globals.
-   For each of check, expected, recorded and result, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_get_last_check_information_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_last_check_information_res.png)



