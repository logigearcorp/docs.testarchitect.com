--- 
title: "ArgumentName"
linktitle: "ArgumentName"
weight: 14
aliases: 
    - /TA_Automation/Topics/abtf_ArgumentName.html
---
# ArgumentName {#abtf_ArgumentName .reference}

## Syntax

`string ArgumentName (integer nr)`

## Description { .section}

Get the value of the name \(header\) of an argument.

## Parameters { .section}

nr
:   Number of the argument. Note that numbering of arguments starts at zero \(column A in the cluster\).

## Return Value { .section}

String value containing the name of the argument \(in the cluster this is in the corresponding cell in the row above the argument value in the current action line\). This can be an empty string.

## Notes { .section}

-   This function can for example be used to explicitly check if an argument was specified.
-   If no name exists, an empty string is returned.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ArgumentCount](../../TA_Automation/Topics/abtf_ArgumentCount.html)

**Next topic:**[Assign](../../TA_Automation/Topics/abtf_Assign.html)

