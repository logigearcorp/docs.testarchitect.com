--- 
title: "intake"
linktitle: "intake"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_intake.html
keywords: "intake, refresh cache of controls in window, clear cache of controls in window"
---

## Description

Refresh TestArchitect's cache of controls of a window.

## Arguments

-   **entity**

    TA name of a window, dialog or web page.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Whenever your test first encounters a window that it needs to interact with, TestArchitect performs an automatic intake on the window's controls, storing their native properties and values in cache. Under some circumstances your test may need to refresh that cache. This may occur when some action has been taken which is expected to modify the controls present in the window, or modify their properties \(such as making a control visible\). Use the intake action to force a refresh of the cached controls for a given window.
-   For more on the intake process and what factors may warrant invoking an intake action in your test module, see [Intake](/TA_Help/Topics/Interface_def_intake.html).
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html), [window wait](window_wait.html).

## Example

**Action Lines**

![](/images//Images/bia_intake_pgm.png)

**Parent topic:**[Interface Handling](/TA_Automation/Topics/bia_Interface_handling.html)

**Next topic:**[interface element](/TA_Automation/Topics/bia_interface_element.html)

