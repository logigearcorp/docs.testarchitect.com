--- 
title: "shut down"
linktitle: "shut down"
description: "Description Turn off, restart, or log off of the test machine. Arguments type Action to take. Allowable values: turn off (Default) restart log off Valid contexts This action may be used within the ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_shut_down.html
keywords: "built-in actions, shut down, shut down (action), shut down, turn off, restart, log off, reboot"
---

## {{< expand >}} Description

Turn off, restart, or log off of the test machine.

## {{< expand >}} Arguments

-   **type**

    Action to take.

    Allowable values:

    -   turn off \(Default\)
    -   restart
    -   log off

## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_shut_down_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_shut_down_res.png)



