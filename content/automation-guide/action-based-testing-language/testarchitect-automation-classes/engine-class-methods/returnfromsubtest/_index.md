--- 
title: "ReturnFromSubTest"
linktitle: "ReturnFromSubTest"
weight: 76
aliases: 
    - /TA_Automation/Topics/abtf_ReturnFromSubTest.html
---

## Syntax

`integer ReturnFromSubTest ()`

## Description

Come back from a subtest

## Parameters

There are no parameters for this function.

## Return Value

The function returns 1 if successful or 0 if unsuccessful. If not successful, the diagnostic functions can be used to get more details

## Notes

-   The term subtest refers to a test that is launched with the built-in [run test](run_test.html) action.
-   This function wraps up the interpretation of a test file that was started from an action line \(with [run test](run_test.html)\). It needs to be called when the action lines of that test file have been executed and will make sure that the next action line \(as produced by NextAction\) comes from the main test file.
-   This function can also be used to abort the execution of a subtest and, for example, move on to a next one.

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[ReturnFromDefinedAction](/TA_Automation/Topics/abtf_ReturnFromDefinedAction.html)

**Next topic:**[SaveInterfaces](/TA_Automation/Topics/abtf_SaveInterfaces.html)

