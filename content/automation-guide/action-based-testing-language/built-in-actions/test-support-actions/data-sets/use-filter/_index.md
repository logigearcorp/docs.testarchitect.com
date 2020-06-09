--- 
title: "use filter"
linktitle: "use filter"
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_use_filter.html
---
keyword: [filter data set, use filter, apply filter to data set]
---

# use filter

## Description

Apply a named filter to the data retrieved from a data set.

## Arguments

-   **filter**

    Name of the filter to be applied.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   Use the [filter](filter.html) action to create a named filter.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images//Images/bia_use_filter_pgm.png)

**Parent topic:**[Data sets](/TA_Automation/Topics/bia_Data_set.html)

**Previous topic:**[use data set](/TA_Automation/Topics/bia_use_data_set.html)

**Related information**  


[repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html)

