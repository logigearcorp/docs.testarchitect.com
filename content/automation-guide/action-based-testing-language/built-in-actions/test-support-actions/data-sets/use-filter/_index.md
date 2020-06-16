--- 
title: "use filter"
linktitle: "use filter"
description: "Description Apply a named filter to the data retrieved from a data set. Arguments filter Name of the filter to be applied. Valid contexts This action may be used within the following project items: ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_use_filter.html
keywords: "built-in actions, use filter, use filter (action), filter data set, use filter, apply filter to data set"
---

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

-   Use the [filter](/TA_Automation/Topics/bia_filter.html) action to create a named filter.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_use_filter_pgm.png)



**Related information**  


[repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html)

