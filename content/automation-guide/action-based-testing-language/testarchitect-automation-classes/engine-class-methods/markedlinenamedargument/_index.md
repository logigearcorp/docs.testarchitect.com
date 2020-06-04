--- 
title: "MarkedLineNamedArgument"
linktitle: "MarkedLineNamedArgument"
weight: 55
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineNamedArgument.html
---

## Syntax

`string MarkedLineNamedArgument (string mark, string name)`

## Description

Get the value of an argument in a marked line, the argument being referenced by its name.

## Parameters

-   **mark**

    Name of the marked line, marked by MarkLine.

-   **name**

    The label that appears on top of the argument \(in the cluster this is in the corresponding cell in the row above the current action line\).


## Return Value

The function returns the argument as a string. If the argument wasn't found, empty string is returned.

## Notes

-   Only lines can be referenced that have been marked with MarkLine.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[MarkedLineArgumentName](/TA_Automation/Topics/abtf_MarkedLineArgumentName.html)

**Next topic:**[MarkLine](/TA_Automation/Topics/abtf_MarkLine.html)

