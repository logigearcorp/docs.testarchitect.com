--- 
title: "while"
linktitle: "while"
aliases: 
    - /TA_Automation/Topics/bia_while.html
---
# while {#bia_while .reference}

## Description { .section}

Denotes the beginning of a while/end while loop. Evaluates a conditional expression to determine whether execution is to continue with the action lines directly below it, or with the lines following the matching end while.

## Arguments { .section}

condition to run
:   Expression which, when evaluated to True, allows control to proceed to the succeeding action lines. When evaluated to False, control passes to the first action line following the associated [end while](bia_end_while.html).

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action ignores letter case for values of True and False, and is unaffected by the current state of the [case sensitive](bis_case_sensitive.html) built-in setting.
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

    **Note:** For the full list of operator precedence, see [here](aut_operator_precedence.html).

-   Be careful when using while/end while loops, and in the expressions you use for condition to run. An infinite loop may cause the TA Playback tool to hang.
-   To exit a while/end while loop from within the block of action lines, use the built-in action [exit loop](bia_exit_loop.html).

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

**Action Lines**

![](../Images/bia_while_pgm.png)

**Result**

![](../Images/bia_while_res.png)

## Example { .section}

**Action Lines**

![](../Images/bia_while_ta4vs_pgm.png)

**Result**

![](../Images/bia_while_ta4vs_res.png)

**Parent topic:**[Control Flow](../../TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[until](../../TA_Automation/Topics/bia_until.html)

**Related information**  


[repeat](../../TA_Automation/Topics/bia_repeat.html)

