--- 
title: "Assign"
linktitle: "Assign"
weight: 15
aliases: 
    - /TA_Automation/Topics/abtf_Assign.html
---

## Syntax

`integer Assign (string name, string value)`

## Description

Assign a value to a variable.

## Parameters

-   **name**

    Name of the variable. \(This can be an existing variable name or a new one.\)

-   **value**

    Value to be assigned.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   If present, the variable prefix \("\>\>"\) is stripped off from the variable name.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ArgumentName](/TA_Automation/Topics/abtf_ArgumentName.html)

**Next topic:**[AssignActionSetting](/TA_Automation/Topics/abtf_AssignActionSetting.html)

