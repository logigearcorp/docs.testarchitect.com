--- 
title: "get system date"
linktitle: "get system date"
description: "Description Return the current system date of the test machine. Arguments year Variable to hold returned year portion of the date (format: YYYY). month Variable to hold returned month portion of date ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_get_system_date.html
keywords: "built-in actions, get system date, get system date (action), iOS (action), get system date, Android (action), get current date"
---

## Description

Return the current system date of the test machine.

## Arguments

-   **year**

    Variable to hold returned year portion of the date \(format: YYYY\).

-   **month**

    Variable to hold returned month portion of date \(format: numeric with no leading zero\).

-   **day**

    Variable to hold returned day-of-month portion of date \(format: numeric with no leading zero\).

-   **weekday**

    Variable to hold day-of-week portion of date \(format: full name of day, e.g., Monday, Tuesday, etc.\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   The returned values of the get system date action are not affected by the built-in setting [date format](/automation-guide/action-based-testing-language/built-in-settings/date-time-settings/date-format).
-   The date expression, [\# fd\(today\(\)\)](/automation-guide/action-based-testing-language/the-test-language/functions/date-functions/fd-julian-number), may be used to get the current date from the host machine.
-   If the variables in argumentsyear, month, day or weekdayhave not been declared, the action creates them as globals.
-   For each of year, month, day and weekday, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Example

Action Lines

![](/images/TA_Automation/Images/bia_get_system_date_pgm.png)

Result

![](/images/TA_Automation/Images/bia_get_system_date_res.png)



