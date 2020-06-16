--- 
title: "row"
linktitle: "row"
description: "Description Define a vector of data in a data set. Valid contexts This action may be used within the following project items: test modules, data set modules, user-defined actions Applicable ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_row.html
keywords: "built-in actions, row, row (action), row, data set row, data set record"
---

## Description

Define a vector of data in a data set.

## Valid contexts

This action may be used within the following project items:test modules, data set modules, user-defined actions

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   This action appends a row to the current data set, populating it with data.
-   This action may be used in either a dedicated data set or an inline data set of a test module or action.
-   In an inline data set, use this action only within the boundaries of the [create data set](/TA_Automation/Topics/bia_create_data_set.html) /[end create data set](/TA_Automation/Topics/bia_end_create_data_set.html) matching actions.
-   Multiple row definitions may be placed in consecutive rows of the worksheet, allowing a single row of headers to be used. Note that the argument headers establish the names of the associated variables when the data set is used.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_row_pgm.png)




