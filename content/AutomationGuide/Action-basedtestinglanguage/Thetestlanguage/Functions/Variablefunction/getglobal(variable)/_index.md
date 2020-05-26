--- 
title: "getglobal\\(variable\\)"
linktitle: "getglobal\\(variable\\)"
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_functions_getglobal.html
---
# getglobal\(variable\) {#getglobal .reference}

Retrieve an existing global variable’s value.

## Syntax { .section}

`getglobal(variable)`

## Parameters { .section}

variable
:   The name of the [global variable](The_test_language_variables.html) to retrieve the value of.

## Return Value { .section}

Returns the value of the specified [global variable](The_test_language_variables.html).

## Notes { .section}

-   Normally, a global variable's value can be accessed simply by including it in any expression, or just preceding with a \#. getglobal\(\) is only necessary when you need to access the value of a global variable which would otherwise be invisible at a given point in the test, due to the existence of a local variable of the same name.
-   Refer to [Variables](The_test_language_variables.html) for details about scope of variables.

## Example { .section}

**Test Lines**

![](../Images/automationguide_getglobalfunction_pgm.png)

**Result**

![](../Images/automationguide_getglobalfunction_res.png)

**Parent topic:**[Variable function](../../TA_Automation/Topics/Expressions_variable_functions.html)

