--- 
title: "create data set"
linktitle: "create data set"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_create_data_set.html
---
# create data set {#bia_create_data_set .reference}

## Description { .section}

Create an [inline data set](../../TA_Glossary/Topics/glossaryInlineDataSet.html).

## Arguments { .section}

name
:   Name to assign to the inline data set.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms { .section}

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes { .section}

-   create data set allows your test to generate a data set from within the action lines, offering an alternative to the [dedicated data set](../../TA_Glossary/Topics/glossaryDedicatedDataSet.html). To create an inline data set, you must pair this action with a matching [end create data set](bia_end_create_data_set.html) action, and insert one or more row actions between the two. The row actions supply the data for the data set, just as they do for dedicated data sets, and must be accompanied by a row of headers to identify the data elements.
-   Once an inline data set is created, its scope is global, and it may be reused any number of times throughout the test with the [use data set](bia_use_data_set.html) action.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

**Action Lines**

![](../Images/bia_create_data_set_pgm.png)

**Result**

![](../Images/bia_create_data_set_res.png)

**Parent topic:**[Data sets](../../TA_Automation/Topics/bia_Data_set.html)

**Previous topic:**[check in data set](../../TA_Automation/Topics/bia_check_in_data_set.html)

**Next topic:**[end create data set](../../TA_Automation/Topics/bia_end_create_data_set.html)

