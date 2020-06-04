--- 
title: "MarkedLineArgumentCount"
linktitle: "MarkedLineArgumentCount"
weight: 53
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineArgumentCount.html
---

## Syntax

`integer MarkedLineArgumentCount (string mark)`

## Description

Get the amount of arguments in the marked line.

## Parameters

-   **mark**

    Name of the marked line, marked by MarkLine.


## Return Value

The amount of arguments in the marked line is returned.

## Notes

-   The function counts until there are no more arguments \(cells in the cluster\) with either a non-empty name or a non-empty value Only lines can be referenced that have been marked with MarkLine.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[MarkedLineArgument](/TA_Automation/Topics/abtf_MarkedLineArgument.html)

**Next topic:**[MarkedLineArgumentName](/TA_Automation/Topics/abtf_MarkedLineArgumentName.html)

