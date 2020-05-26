--- 
title: "argument"
linktitle: "argument"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_argument.html
---
# argument {#bia_argument .reference}

## Description { .section}

Define an argument for the current action definition.

**Note:** This action is both functional and documentary.

## Arguments { .section}

name
:   Name of the argument.

default value
:   \(Optional\) Value to assign to the argument if no explicit value is passed in during the action's invocation.

description
:   \(Optional\) Argument description and comments.

type
:   \(Optional\) [Data type](../../reuse/reuse.Creating_and_using_actions_Arg_type.md#section.arg_types.types) of the argument.

modifier
:   \(Optional\) [Modifier](../../reuse/reuse.Creating_and_using_actions_Arg_type.md#sectiondiv.arg_type.value_set) for the type of argument.

## Valid contexts { .section}

This action may be used within the following project items:high-level actions

## Notes { .section}

-   All necessary argument actions for a given user-defined action should appear immediately after the [action definition](bia_action_definition_1.html) line of the action definition.
-   This action also has a documentary function. Although it is optional, you are strongly urged to make good use of the description argument.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

![](../Images/bia_argument_pgm.png)

**Parent topic:**[Action Definition](../../TA_Automation/Topics/bia_Action_definition.html)

