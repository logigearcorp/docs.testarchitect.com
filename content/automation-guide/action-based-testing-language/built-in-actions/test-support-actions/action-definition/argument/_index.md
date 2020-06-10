--- 
title: "argument"
linktitle: "argument"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_argument.html
---

## Description

Define an argument for the current action definition.

**Note:** This action is both functional and documentary.

## Arguments

-   **name**

    Name of the argument.

-   **default value**

    \(Optional\) Value to assign to the argument if no explicit value is passed in during the action's invocation.

-   **description**

    \(Optional\) Argument description and comments.

-   **type**

    \(Optional\) [Data type](/reuse/reuse.Creating_and_using_actions_Arg_type.html#section.arg_types.types) of the argument.

-   **modifier**

    \(Optional\) [Modifier](/reuse/reuse.Creating_and_using_actions_Arg_type.html#sectiondiv.arg_type.value_set) for the type of argument.


## Valid contexts

This action may be used within the following project items:high-level actions

## Notes

-   All necessary argument actions for a given user-defined action should appear immediately after the [action definition](/TA_Automation/Topics/bia_action_definition_1.html) line of the action definition.
-   This action also has a documentary function. Although it is optional, you are strongly urged to make good use of the description argument.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

![](/images//Images/bia_argument_pgm.png)

**Parent topic:**[Action Definition](/TA_Automation/Topics/bia_Action_definition.html)

