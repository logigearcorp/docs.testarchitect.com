--- 
title: "while"
linktitle: "while"
description: "Description Denotes the beginning of a while / end while loop. Evaluates a conditional expression to determine whether execution is to continue with the action lines directly below it, or with the ..."
weight: 19
aliases: 
    - /TA_Automation/Topics/bia_while.html
keywords: "built-in actions, while, while (action), while, while loop, whie statement"
---

## Description

Denotes the beginning of a while/end while loop. Evaluates a conditional expression to determine whether execution is to continue with the action lines directly below it, or with the lines following the matching end while.

## Arguments

-   **condition to run**

    Expression which, when evaluated to True, allows control to proceed to the succeeding action lines. When evaluated to False, control passes to the first action line following the associated [end while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-while).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action ignores letter case for values of True and False, and is unaffected by the current state of the [case sensitive](/automation-guide/action-based-testing-language/built-in-settings/value-settings/case-sensitive) built-in setting.
-   It is acceptable to use numeric expressions in thecondition to runargument. TestArchitect treats the value 0 as False, and 1 as True. Note that an error is generated for any other numeric value.
-   The following operators may be used within an expression in thecondition to run argument:

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

-   Be careful when using while/end while loops, and in the expressions you use for condition to run. An infinite loop may cause the TA Playback tool to hang.
-   To exit a while/end while loop from within the block of action lines, use the built-in action [exit loop](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-loop).

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_while_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_while_res.png)

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_while_ta4vs_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_while_ta4vs_res.png)



**Related information**  


[repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat)

