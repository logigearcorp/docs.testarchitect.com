--- 
title: "use filter"
linktitle: "use filter"
aliases: 
    - /TA_Automation/Topics/bia_use_filter.html
---
# use filter {#bia_use_filter .reference}

## Description { .section}

Apply a named filter to the data retrieved from a data set.

## Arguments { .section}

filter
:   Name of the filter to be applied.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes { .section}

-   Use the [filter](bia_filter.html) action to create a named filter.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

**Action Lines**

![](../Images/bia_use_filter_pgm.png)

**Parent topic:**[Data sets](../../TA_Automation/Topics/bia_Data_set.html)

**Previous topic:**[use data set](../../TA_Automation/Topics/bia_use_data_set.html)

**Related information**  


[repeat for data set](../../TA_Automation/Topics/bia_repeat_for_data_set.html)

