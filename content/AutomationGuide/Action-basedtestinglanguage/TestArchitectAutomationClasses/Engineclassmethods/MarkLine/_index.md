--- 
title: "MarkLine"
linktitle: "MarkLine"
weight: 56
aliases: 
    - /TA_Automation/Topics/abtf_MarkLine.html
---
# MarkLine {#abtf_MarkLine .reference}

## Syntax

`integer MarkLine (string mark)`

## Description { .section}

Bookmark the line for future reference

## Parameters { .section}

mark
:   A name to assign to the line.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   The functions MarkedLineArgument and MarkedLineNamedArgument can be used to access arguments from the marked line.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[MarkedLineNamedArgument](../../TA_Automation/Topics/abtf_MarkedLineNamedArgument.html)

**Next topic:**[Month](../../TA_Automation/Topics/abtf_Month.html)

