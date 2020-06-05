--- 
title: "global variable"
linktitle: "global variable"
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_global_variable.html
---
keyword: [global variable, define global variable, declare global variable, global variable declaration and assignment]
---

# global variable

## Description

Define a [global variable](The_test_language_variables.html) and \(optionally\) assign a value to it, or assign a value to an existing global variable.

## Arguments

-   **name**

    Name of the global variable.

-   **value**

    \(Optional\) Value to assign to the variable.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   A global variable, subsequent to its declaration, is visible throughout all test modules and invoked actions within one execution run.
-   For a given execution of global variable, if name specifies a global variable that already exists, the action merely assigns a new value \(in the value argument\) to the existing variable.
-   Restrictions on usage:
    -   A variable may not be declared within a [use data set](bia_use_data_set.html) block if it has the same name as any of the data set headers.
    -   Same-named local and global variables may not be declared within the same local variable scope level.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_global_variable_pgm.png)

**Result**

![](/images//Images/bia_global_variable_res.png)

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[get setting](/TA_Automation/Topics/bia_get_setting.html)

**Next topic:**[local variable](/TA_Automation/Topics/bia_local_variable.html)

**Related information**  


[Variables](/TA_Automation/Topics/The_test_language_variables.html)

