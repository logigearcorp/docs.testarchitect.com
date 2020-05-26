--- 
title: "end if"
linktitle: "end if"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_end_if.html
---
# end if {#bia_end_if .reference}

## Description { .section}

End a conditional line sequence.

## Arguments { .section}

There are no arguments for this action.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

Action lines appearing after an end if are interpreted normally; that is, unconditionally. \(Or, to be more specific – and to account for the case of nested if/end if blocks – the end if brings an end to the application of all conditionals specified between it and its matching if.\)

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_else_pgm.png)

**Result**

![](../Images/bia_else_res.png)

## Example { .section}

**Action Lines**

![](../Images/bia_end_if_ta4vs_pgm.png)

**Result**

![](../Images/bia_end_if_ta4vs_res.png)

**Parent topic:**[Control Flow](../../TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[else if](../../TA_Automation/Topics/bia_else_if.html)

**Next topic:**[end while](../../TA_Automation/Topics/bia_end_while.html)

