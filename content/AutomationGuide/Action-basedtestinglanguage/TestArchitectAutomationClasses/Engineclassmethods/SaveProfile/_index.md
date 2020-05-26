--- 
title: "SaveProfile"
linktitle: "SaveProfile"
weight: 78
aliases: 
    - /TA_Automation/Topics/abtf_SaveProfile.html
---
# SaveProfile {#abtf_SaveProfile .reference}

## Syntax

`integer SaveProfile ()`

## Description { .section}

Save the current values of all settings.

## Parameters { .section}

There are no parameters for this function.

## Return Value { .section}

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes { .section}

-   This function saves all settings in the settings file \(that is specified as the first parameter of Start\). This makes their values available for a next test run.
-   Settings have a wide variety of uses to tune the behavior of the engine or any other part of the automation. See also the list of settings in the notes of Setting.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[SaveInterfaces](../../TA_Automation/Topics/abtf_SaveInterfaces.html)

**Next topic:**[ScreenMessage](../../TA_Automation/Topics/abtf_ScreenMessage.html)

