--- 
title: "Destroy"
linktitle: "Destroy"
aliases: 
    - /TA_Automation/Topics/abt_Destroy.html
---
# Destroy {#abt_Destroy .reference}

## Syntax {#section.syntax .section}

`void destroy()`

## Description {#section.desc .section}

Explicitly destroys the class instance of AbtAutomation previously created by [Create](abt_Create.html).

## Parameters { .section}

There are no parameters for this function.

## Return Value {#section.return .section}

There are no returned values for this function.

## Notes { .section}

-   This function is currently supported only by the Python and Java harnesses.
-   It is highly recommended that when you no longer need a given AbtAutomation class instance, you use this function to explicitly destroy the instance. Doing so frees memory and avoids memory leakage issues.

## Example { .section}

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


**Parent topic:**[AbtAutomation](../../TA_Automation/Topics/abt_AbtAutomation.html)

**Previous topic:**[Create](../../TA_Automation/Topics/abt_Create.html)

**Next topic:**[Divert](../../TA_Automation/Topics/abt_Divert.html)

