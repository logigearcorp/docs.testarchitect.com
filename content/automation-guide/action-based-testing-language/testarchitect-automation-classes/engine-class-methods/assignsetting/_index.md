--- 
title: "AssignSetting"
linktitle: "AssignSetting"
weight: 19
aliases: 
    - /TA_Automation/Topics/abtf_AssignSetting.html
---

## Syntax

`integer AssignSetting (string settingname, string settingvalue)`

## Description

Assign a value to a run setting.

## Parameters

-   **settingname**

    Name of the setting to assign.

-   **settingvalue**

    Value to be assigned to the setting.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   Settings have a wide variety of uses to tune the behavior of the engine or any other part of the automation.
-   Settings can be saved in a file with [SaveProfile](abtf_SaveProfile.html).
-   When this file is specified as parameter in [Start](abtf_Start.html) or is read with [Intake](abtf_Intake.html), the saved settings are made available again.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[AssignEntitySetting](/TA_Automation/Topics/abtf_AssignEntitySetting.html)

**Next topic:**[Build](/TA_Automation/Topics/abtf_Build.html)

