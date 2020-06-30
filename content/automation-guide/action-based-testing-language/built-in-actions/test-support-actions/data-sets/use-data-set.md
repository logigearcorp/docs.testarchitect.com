--- 
title: "use data set"
linktitle: "use data set"
description: "Description Use a new row of data from the specified data set. Arguments name Name of the data set (see notes). filter Filter criteria, or a named filter (see filter built-in action). Valid contexts ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bia_use_data_set.html
keywords: "built-in actions, use data set, use data set (action), use data set, start data set loop, end data set loop"
---

## Description

Use a new row of data from the specified data set.

## Arguments

-   **name**

    Name of the data set \(see notes\).

-   **filter**

    Filter criteria, or a named filter \(see [filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/filter) built-in action\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   The data set argument may specify a [dedicated data set](/user-guide/support/glossary-of-terms/dedicated-data-set) or [inline data set](/user-guide/support/glossary-of-terms/inline-data-set) that has already been defined within the test.
    -   *for a dedicated data set:* the full TA path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy.
    -   *for an inline data set:* only the name \(no path\) of the data set is necessary.
-   This action establishes a loop which is terminated by a matching [repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set) action.
-   Within a loop, each execution of this action causes it to populate variables with data from the next sequential row of the data set, \(or, if a filter is in effect, the next sequential row of filtered data.
-   The variables populated by this action have names corresponding to the column headers of the rows of the data set.
-   As a convenience, you can enter a use data set action into a test module by dragging a data set node from the TestArchitect explorer tree to a cell of the first column of the editor. The use data set action is automatically inserted where you release your mouse button, with the data set path and name inserted into the name argument. \(Note that the path is relative to the project's **Data** node, so that a data set directly under it will be preceded in the editor by a single slash \(/\).\) Also, because every use data set begins a loop that must have a closing action, a complementary [repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set) action is auto-inserted several lines below.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example - Case 1: Dedicated data sets

**Action Lines**

![](/images/TA_Automation/Images/bia_use_data_set_pgm.png)

## Example - Case 2: Inline data sets

**Action Lines**

![](/images/TA_Automation/Images/bia_use_data_set_inline_pgm.png)

## Example - Case 1: Dedicated data sets

**Action Lines**

![](/images/TA_Automation/Images/bia_use_data_set_ta4vs_pgm.png)

## Example - Case 2: Inline data sets

**Action Lines**

![](/images/TA_Automation/Images/bia_use_data_set_inline_ta4vs_pgm.png)




