--- 
title: "global variable"
linktitle: "global variable"
description: "Description Define a global variable and (optionally) assign a value to it, or assign a value to an existing global variable. Arguments name Name of the global variable. value (Optional) Value to ..."
weight: 7
aliases: 
    - /TA_Automation/Topics/bia_global_variable.html
keywords: "built-in actions, global variable, global variable (action), global variable, define global variable, declare global variable, global variable declaration and assignment"
---

## {{< expand >}} Description

Define a [global variable](/automation-guide/action-based-testing-language/the-test-language/variables/) and \(optionally\) assign a value to it, or assign a value to an existing global variable.

## {{< expand >}} Arguments

-   **name**

    Name of the global variable.

-   **value**

    \(Optional\) Value to assign to the variable.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   A global variable, subsequent to its declaration, is visible throughout all test modules and invoked actions within one execution run.
-   For a given execution of global variable, if name specifies a global variable that already exists, the action merely assigns a new value \(in the value argument\) to the existing variable.
-   Restrictions on usage:
    -   A variable may not be declared within a [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) block if it has the same name as any of the data set headers.
    -   Same-named local and global variables may not be declared within the same local variable scope level.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_global_variable_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_global_variable_res.png)




**Related information**  


[Variables](/automation-guide/action-based-testing-language/the-test-language/variables/)

