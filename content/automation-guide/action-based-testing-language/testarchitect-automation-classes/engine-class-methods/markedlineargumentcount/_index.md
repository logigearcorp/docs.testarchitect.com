--- 
title: "MarkedLineArgumentCount"
linktitle: "MarkedLineArgumentCount"
description: "Syntax integer MarkedLineArgumentCount (string mark) Description Get the amount of arguments in the marked line. Parameters mark Name of the marked line, marked by MarkLine. Return Value The amount of ..."
weight: 53
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineArgumentCount.html
keywords: "ABT Library Functions, MarkedLineArgumentCount, MarkedLineArgumentCount (ABT library function)"
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




