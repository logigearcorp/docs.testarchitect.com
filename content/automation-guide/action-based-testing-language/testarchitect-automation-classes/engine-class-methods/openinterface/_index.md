--- 
title: "OpenInterface"
linktitle: "OpenInterface"
weight: 61
aliases: 
    - /TA_Automation/Topics/abtf_OpenInterface.html
---

`integer OpenInterface (string name, string filename)`

## Description

Open an existing interface to add new definitions.

## Parameters

-   **name**

    Name for the new interface.

-   **filename**

    Name of a file associated with the interface, the default file to save the interface.


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   This function is analogous to the built-in action "open interface". The use of this function is not recommended when TestArchitect is used to control the automation.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[NextAction](/TA_Automation/Topics/abtf_NextAction.html)

**Next topic:**[OpenLog](/TA_Automation/Topics/abtf_OpenLog.html)

