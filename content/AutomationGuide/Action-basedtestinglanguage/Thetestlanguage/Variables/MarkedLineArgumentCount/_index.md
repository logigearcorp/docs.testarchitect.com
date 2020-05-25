--- 
title: "MarkedLineArgumentCount"
linktitle: "MarkedLineArgumentCount"
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineArgumentCount.html
---
# MarkedLineArgumentCount {#abtf_MarkedLineArgumentCount .reference}

## Syntax

`integer MarkedLineArgumentCount (string mark)`

## Description { .section}

Get the amount of arguments in the marked line.

## Parameters { .section}

mark
:   Name of the marked line, marked by MarkLine.

## Return Value { .section}

The amount of arguments in the marked line is returned.

## Notes { .section}

-   The function counts until there are no more arguments \(cells in the cluster\) with either a non-empty name or a non-empty value Only lines can be referenced that have been marked with MarkLine.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[MarkedLineArgument](../../TA_Automation/Topics/abtf_MarkedLineArgument.html)

**Next topic:**[MarkedLineArgumentName](../../TA_Automation/Topics/abtf_MarkedLineArgumentName.html)

