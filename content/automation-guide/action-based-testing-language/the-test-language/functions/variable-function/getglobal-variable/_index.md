--- 
title: "getglobal\\(variable\\)"
linktitle: "getglobal\\(variable\\)"
description: "Retrieve an existing global variable’s value."
weight: 1
aliases: 
    - /TA_Automation/Topics/Expressions_functions_getglobal.html
keywords: "getglobal function, variable, getglobal (function)"
---

Retrieve an existing global variable’s value.

## Syntax

`getglobal(variable)`

## Parameters

-   **variable**

    The name of the [global variable](/TA_Automation/Topics/The_test_language_variables.html) to retrieve the value of.


## Return Value

Returns the value of the specified [global variable](/TA_Automation/Topics/The_test_language_variables.html).

## Notes

-   Normally, a global variable's value can be accessed simply by including it in any expression, or just preceding with a \#. getglobal\(\) is only necessary when you need to access the value of a global variable which would otherwise be invisible at a given point in the test, due to the existence of a local variable of the same name.
-   Refer to [Variables](/TA_Automation/Topics/The_test_language_variables.html) for details about scope of variables.

## Example

**Test Lines**

![](/images/TA_Automation/Images/automationguide_getglobalfunction_pgm.png)

**Result**

![](/images/TA_Automation/Images/automationguide_getglobalfunction_res.png)


