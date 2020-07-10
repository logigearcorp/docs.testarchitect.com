--- 
title: "set variable"
linktitle: "set variable"
description: "Description Assign a value to an existing local or global variable . If the variable has not been declared, declare a new global variable and assign a value to it. Arguments variable Name of the ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_set_variable.html
keywords: "built-in actions, set variable, set variable (action), set variable, assign value to variable, assign variable value, variable assignment, variable declaration and assignment"
---

## {{< expand >}} Description

Assign a value to an existing [local](/automation-guide/action-based-testing-language/the-test-language/variables/) or [global variable](/automation-guide/action-based-testing-language/the-test-language/variables/). If the variable has not been declared, declare a new [global variable](/automation-guide/action-based-testing-language/the-test-language/variables/) and assign a value to it.

## {{< expand >}} Arguments

-   **variable**

    Name of the variable

-   **value**

    Value to assign to the variable.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   In the event that multiple instances of a given variable name exist at the time set variable executes, the action operates on the one that is currently visible. \(See [Variables](/automation-guide/action-based-testing-language/the-test-language/variables/) for more on visibility and scope.\) To ensure that the global instance of a given variable name is accessed \(assuming it exists\), use the [set global variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/set-global-variable) action.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_variable_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_variable_res.png)




**Related information**  


[Variables](/automation-guide/action-based-testing-language/the-test-language/variables/)

