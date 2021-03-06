--- 
title: "MarkedLineArgumentName"
linktitle: "MarkedLineArgumentName"
weight: 54
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineArgumentName.html
---

## Syntax

`string MarkedLineArgumentName (string mark, integer nr)`

## Description

Get value of the name belong to an argument in a marked line, if there is no such label an empty string is returned.

## Parameters

-   **mark**

    Name of the marked line, marked by MarkLine.

-   **nr**

    Number of the argument. Note that numbering of arguments starts at zero \(column A in the cluster\).


## Return Value

The function returns the name of the argument \(in the cluster this is in the corresponding cell in the row above the current action line\). This can be an empty string.

## Notes

-   This function can for example be used to explicitly check if an argument was specified.
-   Only lines can be referenced that have been marked with MarkLine.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[MarkedLineArgumentCount](/TA_Automation/Topics/abtf_MarkedLineArgumentCount.html)

**Next topic:**[MarkedLineNamedArgument](/TA_Automation/Topics/abtf_MarkedLineNamedArgument.html)

