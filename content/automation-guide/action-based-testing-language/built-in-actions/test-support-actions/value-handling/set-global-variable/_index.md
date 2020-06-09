--- 
title: "set global variable"
linktitle: "set global variable"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_set_global_variable.html
---
keyword: [set global variable, assign global variable value, assign value to global variable, global variable assignment]
---

# set global variable

## Description

Assign a value to an existing [global variable](The_test_language_variables.html).

## Arguments

-   **variable**

    An existing global variable.

-   **value**

    Value to assign to the variable.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   To create a global variable, use the action global variable.
-   A global variable is visible throughout all test modules and invoked actions within one test run execution, subsequent to its declaration.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_set_global_variable_pgm.png)

**Result**

![](/images//Images/bia_set_global_variable_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[local variable](/TA_Automation/Topics/bia_local_variable.html)

**Next topic:**[set variable](/TA_Automation/Topics/bia_set_variable.html)

