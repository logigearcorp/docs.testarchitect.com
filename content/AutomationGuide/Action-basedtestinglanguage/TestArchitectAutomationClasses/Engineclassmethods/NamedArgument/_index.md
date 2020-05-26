--- 
title: "NamedArgument"
linktitle: "NamedArgument"
weight: 58
aliases: 
    - /TA_Automation/Topics/abtf_NamedArgument.html
---
# NamedArgument {#abtf_NamedArgument .reference}

## Syntax

`string NamedArgument (string name)`

## Description { .section}

Retrieve the value of an argument by name.

## Parameters { .section}

name
:   The header label that appears above the argument \(in the cluster this is content of the corresponding cell in the row above the current action line\).

## Return Value { .section}

The function returns the argument as a string. If the argument isn't found, an empty string is returned.

## Notes { .section}

-   Named arguments have the advantage that they can be optional and are not dependent on a specific order.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Month](../../TA_Automation/Topics/abtf_Month.html)

**Next topic:**[NewActionLine](../../TA_Automation/Topics/abtf_NewActionLine.html)

