--- 
title: "argument"
linktitle: "argument"
description: "Description Define an argument for the current action definition. Note: This action is both functional and documentary. Arguments name Name of the argument. default value (Optional) Value to assign to ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_argument.html
keywords: "built-in actions, argument, arguments, built-in actions"
---

## Description

Define an argument for the current action definition.

{{<note>}} This action is both functional and documentary.

## Arguments

-   **name**

    Name of the argument.

-   **default value**

    \(Optional\) Value to assign to the argument if no explicit value is passed in during the action's invocation.

-   **description**

    \(Optional\) Argument description and comments.

-   **type**

    \(Optional\) [Data type](/user-guide/actions/user-defined-actions/argument-types/#section.arg_types.types) of the argument.

-   **modifier**

    \(Optional\) [Modifier](/user-guide/actions/user-defined-actions/argument-types/#sectiondiv.arg_type.value_set) for the type of argument.


## Valid contexts

This action may be used within the following project items:high-level actions

## Notes

-   All necessary argument actions for a given user-defined action should appear immediately after the [action definition](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/deprecated/action-definition) line of the action definition.
-   This action also has a documentary function. Although it is optional, you are strongly urged to make good use of the description argument.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

![](/images/TA_Automation/Images/bia_argument_pgm.png)


