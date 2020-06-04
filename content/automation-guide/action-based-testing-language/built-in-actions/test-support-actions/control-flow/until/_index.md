--- 
title: "-"
linktitle: "until"
weight: 18
aliases: 
    - /TA_Automation/Topics/bia_until.html
---
keyword: [until, until loop, until statement]
---

# until

## Description

Evaluate a conditional expression to determine whether execution is to continue with another iteration of the [repeat](bia_repeat.html)/until loop, or with the action lines below this point.

## Arguments

-   **condition to stop**

    Expression which, upon evaluating to True, terminates execution of the block of action lines within the repeat/until loop.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If condition to stop evaluates to True, execution returns to the first action line below the associated repeat action line. \(That is, another iteration of the repeat/until loop is begun.\) If False, execution continues with the lines below the until.
-   This action ignores letter case for values of True and False, and is unaffected by the current state of the [case sensitive](bis_case_sensitive.html) built-in setting.
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

    **Note:** For the full list of operator precedence, see [here](aut_operator_precedence.html).

-   Be careful when using repeat/until loops, and in the expressions you use for condition to stop. An infinite loop may cause the TA Playback tool to hang.
-   To exit the repeat/until loop from within the block of action lines, use the built-in action [exit loop](bia_exit_loop.html).

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_repeat_pgm.png)

**Result**

![](/images//Images/bia_repeat_res.png)

## Example

**Action Lines**

![](/images//Images/bia_until_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_until_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[terminate](/TA_Automation/Topics/bia_terminate.html)

**Next topic:**[while](/TA_Automation/Topics/bia_while.html)

