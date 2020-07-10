--- 
title: "until"
linktitle: "until"
description: "Description Evaluate a conditional expression to determine whether execution is to continue with another iteration of the repeat / until loop, or with the action lines below this point. Arguments ..."
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_until.html
keywords: "built-in actions, until, until (action), until, until loop, until statement"
---

## {{< expand >}} Description

Evaluate a conditional expression to determine whether execution is to continue with another iteration of the [repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat)/until loop, or with the action lines below this point.

## {{< expand >}} Arguments

-   **condition to stop**

    Expression which, upon evaluating to True, terminates execution of the block of action lines within the repeat/until loop.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   If condition to stop evaluates to True, execution returns to the first action line below the associated repeat action line. \(That is, another iteration of the repeat/until loop is begun.\) If False, execution continues with the lines below the until.
-   This action ignores letter case for values of True and False, and is unaffected by the current state of the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) built-in setting.
-   It is acceptable to use numeric expressions in thecondition to stopargument. TestArchitect treats the value 0 as False, and 1 as True. Note that an error is generated for any other numeric value.
-   The following operators may be used within an expression in thecondition to stop argument:

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

-   Be careful when using repeat/until loops, and in the expressions you use for condition to stop. An infinite loop may cause the TA Playback tool to hang.
-   To exit the repeat/until loop from within the block of action lines, use the built-in action [exit loop](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-loop).

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_repeat_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_repeat_res.png)

