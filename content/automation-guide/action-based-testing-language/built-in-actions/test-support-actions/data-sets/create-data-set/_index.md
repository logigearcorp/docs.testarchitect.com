--- 
title: "create data set"
linktitle: "create data set"
description: "Description Create an inline data set . Arguments name Name to assign to the inline data set. Valid contexts This action may be used within the following project items: test modules and user-defined ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_create_data_set.html
keywords: "built-in actions, create data set, create data set (action), create data set, create dataset"
---

## Description

Create an [inline data set](/TA_Glossary/Topics/glossaryInlineDataSet.html).

## Arguments

-   **name**

    Name to assign to the inline data set.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   create data set allows your test to generate a data set from within the action lines, offering an alternative to the [dedicated data set](/TA_Glossary/Topics/glossaryDedicatedDataSet.html). To create an inline data set, you must pair this action with a matching [end create data set](/TA_Automation/Topics/bia_end_create_data_set.html) action, and insert one or more row actions between the two. The row actions supply the data for the data set, just as they do for dedicated data sets, and must be accompanied by a row of headers to identify the data elements.
-   Once an inline data set is created, its scope is global, and it may be reused any number of times throughout the test with the [use data set](/TA_Automation/Topics/bia_use_data_set.html) action.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html)none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_create_data_set_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_create_data_set_res.png)




