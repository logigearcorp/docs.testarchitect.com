--- 
title: "end if"
linktitle: "end if"
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_end_if.html
keywords: "endif, end if, endif condition, end if condition, end if statement, endif statement"
---

## Description

End a conditional line sequence.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

Action lines appearing after an end if are interpreted normally; that is, unconditionally. \(Or, to be more specific – and to account for the case of nested if/end if blocks – the end if brings an end to the application of all conditionals specified between it and its matching if.\)

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_else_pgm.png)

**Result**

![](/images//Images/bia_else_res.png)

## Example

**Action Lines**

![](/images//Images/bia_end_if_ta4vs_pgm.png)

**Result**

![](/images//Images/bia_end_if_ta4vs_res.png)

**Parent topic:**[Control Flow](/TA_Automation/Topics/bia_Control_flow.html)

**Previous topic:**[else if](/TA_Automation/Topics/bia_else_if.html)

**Next topic:**[end while](/TA_Automation/Topics/bia_end_while.html)

