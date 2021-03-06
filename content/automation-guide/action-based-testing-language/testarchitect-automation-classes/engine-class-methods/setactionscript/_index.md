--- 
title: "SetActionScript"
linktitle: "SetActionScript"
weight: 80
aliases: 
    - /TA_Automation/Topics/abtf_SetActionScript.html
---

## Syntax

`integer SetActionScript (string action, string script, integer echo)`

## Description

Associate a script to an action.

## Parameters

-   **action**

    The name of the action, like "check balance" script

-   **script**

    The string value that needs to be returned by ActionScript or ActionScriptFind. The value is dependent on the test tool and implementation strategy, see also the notes below.

-   **echo**

    Indicator whether the action line should be printed in the report as it appears in the cluster. A value of 1 means do print, 0 means printing is suppressed. Printing should typically not be done for documentary actions like "remark".


## Return Value

Return 1 if the call is successful; otherwise, 0.If unsuccessful, the diagnostic functions can be used to get more details.

## Notes

-   The script parameter can typically denote a function to be executed or the name of a script file.
-   For tools and script languages that need a case statement it is good practice to let this case statement work in two levels:
    -   Each script file ends with a "specific divert function", like " DivertWindowsLowLevel ". The name of that function is passed to SetActionScript .
    -   When the action is interpreted, a "main divert function" uses the script returned by ActionScript to pass control to a specific divert function, which in turn uses Argument\(0\) \(the action\) for a second case statement to get to the actual script

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ScreenMessage](/TA_Automation/Topics/abtf_ScreenMessage.html)

**Next topic:**[SetInterfaceAction](/TA_Automation/Topics/abtf_SetInterfaceAction.html)

