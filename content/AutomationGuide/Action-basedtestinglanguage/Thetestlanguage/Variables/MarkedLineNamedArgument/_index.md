--- 
title: "MarkedLineNamedArgument"
linktitle: "MarkedLineNamedArgument"
aliases: 
    - /TA_Automation/Topics/abtf_MarkedLineNamedArgument.html
---
# MarkedLineNamedArgument {#abtf_MarkedLineNamedArgument .reference}

## Syntax

`string MarkedLineNamedArgument (string mark, string name)`

## Description { .section}

Get the value of an argument in a marked line, the argument being referenced by its name.

## Parameters { .section}

mark
:   Name of the marked line, marked by MarkLine.

name
:   The label that appears on top of the argument \(in the cluster this is in the corresponding cell in the row above the current action line\).

## Return Value { .section}

The function returns the argument as a string. If the argument wasn't found, empty string is returned.

## Notes { .section}

-   Only lines can be referenced that have been marked with MarkLine.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[MarkedLineArgumentName](../../TA_Automation/Topics/abtf_MarkedLineArgumentName.html)

**Next topic:**[MarkLine](../../TA_Automation/Topics/abtf_MarkLine.html)

