--- 
title: "-"
linktitle: "Create"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_Create.html
---
keyword: [create abtautomation, create new class instance of abtautomation, create abtautomatin class instance]
---

# Create

## Syntax

`void create()`

## Description

Creates a new class instance of AbtAutomation.

## Parameters

There are no parameters for this function.

## Return Value

There are no returned values for this function.

## Notes

-   This function is currently supported only by the Python and Java harnesses.
-   You are required to call this method to instantiate an object of class AbtAutomation.
-   When you no longer need the instance, use [Destroy](abt_Destroy.html) to avoid memory leak.

## Example

-   For Python harness:

    ```
    ABT = AbtAutomation()
    
    ABT.Create()
    ```

-   For Java harness:

    ```
    AbtAutomation.create();
    ```


**Parent topic:**[AbtAutomation](/TA_Automation/Topics/abt_AbtAutomation.html)

**Next topic:**[Destroy](/TA_Automation/Topics/abt_Destroy.html)

