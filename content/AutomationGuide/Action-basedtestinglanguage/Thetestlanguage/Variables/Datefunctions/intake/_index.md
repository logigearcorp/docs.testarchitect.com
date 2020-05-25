--- 
title: "intake"
linktitle: "intake"
aliases: 
    - /TA_Automation/Topics/bia_intake.html
---
# intake {#bia_intake .reference}

## Description { .section}

Refresh TestArchitect's cache of controls of a window.

## Arguments { .section}

entity
:   TA name of a window, dialog or web page.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   Whenever your test first encounters a window that it needs to interact with, TestArchitect performs an automatic intake on the window's controls, storing their native properties and values in cache. Under some circumstances your test may need to refresh that cache. This may occur when some action has been taken which is expected to modify the controls present in the window, or modify their properties \(such as making a control visible\). Use the intake action to force a refresh of the cached controls for a given window.
-   For more on the intake process and what factors may warrant invoking an intake action in your test module, see [Intake](../../TA_Help/Topics/Interface_def_intake.html).
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [window wait](bis_window_wait.html).

## Example { .section}

**Action Lines**

![](../Images/bia_intake_pgm.png)

**Parent topic:**[Interface Handling](../../TA_Automation/Topics/bia_Interface_handling.html)

**Next topic:**[interface element](../../TA_Automation/Topics/bia_interface_element.html)

