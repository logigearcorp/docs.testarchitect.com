--- 
title: "use interface"
linktitle: "use interface"
aliases: 
    - /TA_Automation/Topics/bia_use_interface.html
---
# use interface {#bia_use_interface .reference}

## Description { .section}

Specify an interface to be used by the test.

## Arguments { .section}

interface
:   Interface name.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action is optional if the required interface is currently specified as the [default interface](../../TA_Help/Topics/Interface_def_set_default_interface.html).
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Example { .section}

**Action Lines**

![](../Images/bia_use_interface_pgm.png)

**Parent topic:**[Interface Handling](../../TA_Automation/Topics/bia_Interface_handling.html)

**Previous topic:**[interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html)

