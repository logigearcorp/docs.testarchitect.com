--- 
title: "MarkedLineArgument"
linktitle: "MarkedLineArgument"
description: "Syntax string MarkedLineArgument (string mark, integer nr) Description Get the value of an argument in a book marked line. Parameters mark Name of the marked line, marked by MarkLine. nr Number of the ..."
weight: 52
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineArgument.html
keywords: "ABT Library Functions, MarkedLineArgument, MarkedLineArgument (ABT library function)"
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




