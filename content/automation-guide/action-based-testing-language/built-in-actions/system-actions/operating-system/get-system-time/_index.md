--- 
title: "get system time"
linktitle: "get system time"
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_get_system_time.html
---
keyword: [get system time, get current time, get current local time]
---

# get system time

## Description

Return the current local time of the test machine.

## Arguments

-   **format**

    \(Optional\) Specifies the time format to be returned.

    Allowable values:

    -   **12**

        \(Default\) 12 hour time format.

    -   **24**

        24 hour time format.

-   **hour**

    Variable to hold returned hour portion of time.

-   **minute**

    Variable to hold returned minute portion of time.

-   **second**

    Variable to hold returned seconds portion of time.

-   **AM/PM**

    Variable to hold AM or PM indicator \(valid only if the format argument is set to `12`\).

    Possible returned values:

    -   AM
    -   PM

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If the variables in argumentshour, minute, second or AM/PMhave not been declared, the action creates them as globals.
-   For each of hour, minute, second and AM/PM, if the argument is left empty, a variable with the same name as the argument header is created to hold the return value.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images//Images/bia_get_system_time_pgm.png)

**Result**

![](/images//Images/bia_get_system_time_res.png)

**Parent topic:**[Operating System](/TA_Automation/Topics/bia_operating_system.html)

**Previous topic:**[get system date](/TA_Automation/Topics/bia_get_system_date.html)

**Next topic:**[get system performance information](/TA_Automation/Topics/bia_get_system_performance_information.html)

