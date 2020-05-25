--- 
title: "set global variable"
linktitle: "set global variable"
aliases: 
    - /TA_Automation/Topics/bia_set_global_variable.html
---
# set global variable {#bia_set_global_variable .reference}

## Description { .section}

Assign a value to an existing [global variable](The_test_language_variables.html).

## Arguments { .section}

variable
:   An existing global variable.

value
:   Value to assign to the variable.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   To create a global variable, use the action global variable.
-   A global variable is visible throughout all test modules and invoked actions within one test run execution, subsequent to its declaration.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

**Action Lines**

![](../Images/bia_set_global_variable_pgm.png)

**Result**

![](../Images/bia_set_global_variable_res.png)

**Parent topic:**[Value Handling](../../TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[local variable](../../TA_Automation/Topics/bia_local_variable.html)

**Next topic:**[set variable](../../TA_Automation/Topics/bia_set_variable.html)

