--- 
title: "MarkedLineNamedArgument"
linktitle: "MarkedLineNamedArgument"
description: "Syntax string MarkedLineNamedArgument (string mark, string name) Description Get the value of an argument in a marked line, the argument being referenced by its name. Parameters mark Name of the ..."
weight: 55
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineNamedArgument.html
keywords: "ABT Library Functions, MarkedLineNamedArgument, MarkedLineNamedArgument (ABT library function)"
---

## Syntax

`string MarkedLineNamedArgument (string mark, string name)`

## {{< expand >}} Description

Get the value of an argument in a marked line, the argument being referenced by its name.

## {{< expand >}} Parameters

-   **mark**

    Name of the marked line, marked by MarkLine.

-   **name**

    The label that appears on top of the argument \(in the cluster this is in the corresponding cell in the row above the current action line\).


## {{< expand >}} Return Value

The function returns the argument as a string. If the argument wasn't found, empty string is returned.

## {{< expand >}} Notes

-   Only lines can be referenced that have been marked with MarkLine.




