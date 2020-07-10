--- 
title: "intake"
linktitle: "intake"
description: "Description Refresh TestArchitect 's cache of controls of a window. Arguments entity TA name of a window, dialog or web page. Valid contexts This action may be used within the following project items: ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_intake.html
keywords: "built-in actions, intake, intake (action), intake, refresh cache of controls in window, clear cache of controls in window"
---

## {{< expand >}} Description

Refresh TestArchitect's cache of controls of a window.

## {{< expand >}} Arguments

-   **entity**

    TA name of a window, dialog or web page.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   Whenever your test first encounters a window that it needs to interact with, TestArchitect performs an automatic intake on the window's controls, storing their native properties and values in cache. Under some circumstances your test may need to refresh that cache. This may occur when some action has been taken which is expected to modify the controls present in the window, or modify their properties \(such as making a control visible\). Use the intake action to force a refresh of the cached controls for a given window.
-   For more on the intake process and what factors may warrant invoking an intake action in your test module, see [Intake](/user-guide/interface-definitions/control-properties/intake).
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait).

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_intake_pgm.png)



