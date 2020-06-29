--- 
title: "Destroy"
linktitle: "Destroy"
description: "Syntax void destroy() Description Explicitly destroys the class instance of AbtAutomation previously created by Create . Parameters There are no parameters for this function. Return Value There are no ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/abt_Destroy.html
keywords: "methods of abt, Destroy, Destroy (AbtAutomation), AbtAutomation, destroy abtautomation, destroy class instance of abtautomation, kill class instance of abtautomation, get rid of automation class"
---

## Syntax

`void destroy()`

## Description

Explicitly destroys the class instance of AbtAutomation previously created by [Create](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtautomation/create).

## Parameters

There are no parameters for this function.

## Return Value

There are no returned values for this function.

## Notes

-   This function is currently supported only by the Python and Java harnesses.
-   It is highly recommended that when you no longer need a given AbtAutomation class instance, you use this function to explicitly destroy the instance. Doing so frees memory and avoids memory leakage issues.

## Example

-   For Python harness:

    ```
    ABT = AbtAutomation()
              
    ABT.Create()
    
    //do something here
              
    ABT.Destroy()
    ```

-   For Java harness:

    ```
    AbtAutomation.create();
              
     //do something here
              
    AbtAutomation.destroy();
    ```





