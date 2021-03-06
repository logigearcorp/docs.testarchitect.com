--- 
title: "MarkedLineArgument"
linktitle: "MarkedLineArgument"
weight: 52
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineArgument.html
---

## Syntax

`string MarkedLineArgument (string mark, integer nr)`

## Description

Get the value of an argument in a book marked line.

## Parameters

-   **mark**

    Name of the marked line, marked by MarkLine.

-   **nr**

    Number of the argument. Note that numbering of arguments starts at zero \(column A in the cluster\).


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Only lines can be referenced that have been marked with MarkLine.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Log](/TA_Automation/Topics/abtf_Log.html)

**Next topic:**[MarkedLineArgumentCount](/TA_Automation/Topics/abtf_MarkedLineArgumentCount.html)

