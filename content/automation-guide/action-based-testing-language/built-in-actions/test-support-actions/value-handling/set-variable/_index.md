--- 
title: "set variable"
linktitle: "set variable"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_set_variable.html
---
keyword: [set variable, assign value to variable, assign variable value, variable assignment, variable declaration and assignment]
---

# set variable

## Description

Assign a value to an existing [local](The_test_language_variables.html) or [global variable](The_test_language_variables.html). If the variable has not been declared, declare a new [global variable](The_test_language_variables.html) and assign a value to it.

## Arguments

-   **variable**

    Name of the variable

-   **value**

    Value to assign to the variable.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   In the event that multiple instances of a given variable name exist at the time set variable executes, the action operates on the one that is currently visible. \(See [Variables](The_test_language_variables.html) for more on visibility and scope.\) To ensure that the global instance of a given variable name is accessed \(assuming it exists\), use the [set global variable](set_global_variable.html) action.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_set_variable_pgm.png)

**Result**

![](/images//Images/bia_set_variable_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[set global variable](/TA_Automation/Topics/bia_set_global_variable.html)

**Next topic:**[setting](/TA_Automation/Topics/bia_setting.html)

**Related information**  


[Variables](/TA_Automation/Topics/The_test_language_variables.html)

