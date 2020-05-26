--- 
title: "shut down"
linktitle: "shut down"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_shut_down.html
---
# shut down {#bia_shut_down .reference}

## Description { .section}

Turn off, restart, or log off of the test machine.

## Arguments { .section}

type
:   Action to take.

:   Allowable values:

    -   turn off \(Default\)
    -   restart
    -   log off

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_shut_down_pgm.png)

**Result**

![](../Images/bia_shut_down_res.png)

**Parent topic:**[Operating System](../../TA_Automation/Topics/bia_operating_system.html)

**Previous topic:**[is process running](../../TA_Automation/Topics/bia_is_process_running.html)

