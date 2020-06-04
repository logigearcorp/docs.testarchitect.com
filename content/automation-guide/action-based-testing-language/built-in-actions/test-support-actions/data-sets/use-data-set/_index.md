--- 
title: "-"
linktitle: "use data set"
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_use_data_set.html
---
keyword: [use data set, start data set loop, end data set loop]
---

# use data set

## Description

Use a new row of data from the specified data set.

## Arguments

-   **name**

    Name of the data set \(see notes\).

-   **filter**

    Filter criteria, or a named filter \(see [filter](bia_filter.html) built-in action\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   The data set argument may specify a [dedicated data set](/TA_Glossary/Topics/glossaryDedicatedDataSet.html) or [inline data set](/TA_Glossary/Topics/glossaryInlineDataSet.html) that has already been defined within the test.
    -   *for a dedicated data set:* the full TA path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy.
    -   *for an inline data set:* only the name \(no path\) of the data set is necessary.
-   This action establishes a loop which is terminated by a matching [repeat for data set](bia_repeat_for_data_set.html) action.
-   Within a loop, each execution of this action causes it to populate variables with data from the next sequential row of the data set, \(or, if a filter is in effect, the next sequential row of filtered data.
-   The variables populated by this action have names corresponding to the column headers of the rows of the data set.
-   As a convenience, you can enter a use data set action into a test module by dragging a data set node from the TestArchitect explorer tree to a cell of the first column of the editor. The use data set action is automatically inserted where you release your mouse button, with the data set path and name inserted into the name argument. \(Note that the path is relative to the project's **Data** node, so that a data set directly under it will be preceded in the editor by a single slash \(/\).\) Also, because every use data set begins a loop that must have a closing action, a complementary [repeat for data set](bia_repeat_for_data_set.html) action is auto-inserted several lines below.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example - Case 1: Dedicated data sets

**Action Lines**

![](/images//Images/bia_use_data_set_pgm.png)

## Example - Case 2: Inline data sets

**Action Lines**

![](/images//Images/bia_use_data_set_inline_pgm.png)

## Example - Case 1: Dedicated data sets

**Action Lines**

![](/images//Images/bia_use_data_set_ta4vs_pgm.png)

## Example - Case 2: Inline data sets

**Action Lines**

![](/images//Images/bia_use_data_set_inline_ta4vs_pgm.png)

**Parent topic:**[Data sets](/TA_Automation/Topics/bia_Data_set.html)

**Previous topic:**[set data set value](/TA_Automation/Topics/bia_set_data_set_value.html)

**Next topic:**[use filter](/TA_Automation/Topics/bia_use_filter.html)

