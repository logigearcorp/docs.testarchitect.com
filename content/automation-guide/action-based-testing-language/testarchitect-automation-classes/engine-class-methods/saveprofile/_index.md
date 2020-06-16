--- 
title: "SaveProfile"
linktitle: "SaveProfile"
description: "Syntax integer SaveProfile () Description Save the current values of all settings. Parameters There are no parameters for this function. Return Value Return 1 if the call is successful; otherwise, 0 . ..."
weight: 78
aliases: 
    - /TA_Automation/Topics/abtf_SaveProfile.html
keywords: "ABT Library Functions, SaveProfile, SaveProfile (ABT library function)"
---

## Syntax

`integer SaveProfile ()`

## Description

Save the current values of all settings.

## Parameters

There are no parameters for this function.

## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function saves all settings in the settings file \(that is specified as the first parameter of Start\). This makes their values available for a next test run.
-   Settings have a wide variety of uses to tune the behavior of the engine or any other part of the automation. See also the list of settings in the notes of Setting.




