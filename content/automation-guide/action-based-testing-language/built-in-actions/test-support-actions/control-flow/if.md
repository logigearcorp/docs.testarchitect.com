--- 
title: "if"
linktitle: "if"
description: "Description Begin a block of action lines which are executed only if a specified condition is satisfied. Arguments condition Expression that evaluates to a Boolean True or False . Valid contexts This ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_if.html
keywords: "built-in actions, if, if (action), if, if statement, if condition, if control flow, if action, action if"
---

## Description

Begin a block of action lines which are executed only if a specified condition is satisfied.

## Arguments

-   **condition**

    Expression that evaluates to a Boolean True or False.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes  

-   If condition evaluates to True, the succeeding block of action lines up until the first occurrence of an [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else), [else if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else-if), or [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if), is executed. If False, that block is skipped.
-   This action ignores letter case for values of True and False, and is unaffected by the current state of the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) built-in setting.
-   It is acceptable to use numeric expressions in the conditionargument. TestArchitect treats the value 0 as False, and 1 as True. Note that an error is generated for any other numeric value.
-   The following operators may be used within an expression in thecondition argument:

    |Precedence|Comparison operator|Meaning|
    |----------|-------------------|-------|
    |4|=|equal to|
    |4|<\>|not equal to|
    |4|\>|greater than|
    |4|\>=|greater than or equal to|
    |4|<|less than|
    |4|<=|less than or equal to|

    |Precedence|Logical operator|Meaning|
    |----------|----------------|-------|
    |5|not|Value is TRUE if its operand is FALSE.|
    |6|and|Value is TRUE if and only if both sides of the and operator are TRUE.|
    |7|or|Value is TRUE if either side of the or operator is TRUE.|

    {{<note>}} For the full list of operator precedence, see [here](/automation-guide/action-based-testing-language/the-test-language/operator-precedence).


## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

Action Lines

![](/images/TA_Automation/Images/bia_else_pgm.png)

Result

![](/images/TA_Automation/Images/bia_else_res.png)
