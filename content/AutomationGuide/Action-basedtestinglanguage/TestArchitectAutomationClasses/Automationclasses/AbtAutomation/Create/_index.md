--- 
title: "Create"
linktitle: "Create"
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_Create.html
---
# Create {#abt_Create .reference}

## Syntax {#section.syntax .section}

`void create()`

## Description {#section.desc .section}

Creates a new class instance of AbtAutomation.

## Parameters { .section}

There are no parameters for this function.

## Return Value {#section.return .section}

There are no returned values for this function.

## Notes { .section}

-   This function is currently supported only by the Python and Java harnesses.
-   You are required to call this method to instantiate an object of class AbtAutomation.
-   When you no longer need the instance, use [Destroy](abt_Destroy.html) to avoid memory leak.

## Example { .section}

-   For Python harness:

    ```
    ABT = AbtAutomation()
    
    ABT.Create()
    ```

-   For Java harness:

    ```
    AbtAutomation.create();
    ```


**Parent topic:**[AbtAutomation](../../TA_Automation/Topics/abt_AbtAutomation.html)

**Next topic:**[Destroy](../../TA_Automation/Topics/abt_Destroy.html)

