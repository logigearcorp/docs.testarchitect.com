--- 
title: "set global variable"
linktitle: "set global variable"
description: "Description Assign a value to an existing global variable . Arguments variable An existing global variable. value Value to assign to the variable. Valid contexts This action may be used within the ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_set_global_variable.html
keywords: "built-in actions, set global variable, set global variable (action), set global variable, assign global variable value, assign value to global variable, global variable assignment"
---

## Description

Assign a value to an existing [global variable](/automation-guide/action-based-testing-language/the-test-language/variables/).

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

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

Action Lines

![](/images/TA_Automation/Images/bia_set_global_variable_pgm.png)

Result

![](/images/TA_Automation/Images/bia_set_global_variable_res.png)



