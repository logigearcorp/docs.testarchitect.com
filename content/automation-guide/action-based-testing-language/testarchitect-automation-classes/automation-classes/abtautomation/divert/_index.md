--- 
title: "Divert"
linktitle: "Divert"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_Divert.html
keywords: "divert, abtautomation divert, direct harness action to implementation class"
---

## Syntax

`void divert (string actionName)`

## Description

Directs a call to a [user-scripted action](/TA_Tutorials/Topics/Invoking_a_harness_action.html) \(a harness action\), to the method/function that implements the action.

## Parameters

-   **actionName**

    Name of the user-scripted action.


## Return Value

There are no returned values for this function.

## Notes

-   This function is currently supported only by the Python and Java harnesses.

## Example

The following examples direct calls to user-scripted action hello world to its function implementation, action\_helloWorld.

-   For Python harness:

    ```
    # map a user-scripted action to its function
    def Divert(actionName):
        result = True
        if actionName == "hello world":
            action_helloWorld()
        
        return result
    
    # "hello world" user-scripted implementation
    def action_helloWorld():
        LIBRARY.Report("hello world")
    ```

-   For Java harness:

    ```
    /**
    * map a user-scripted action to its function
    */
    public static boolean divert(String actionName) {
      boolean result = true;
      if (actionName.equals("hello world")) { 
        action_helloWorld();
        }
        
      return result;
    }
    
    /**
    * "hello world" user-scripted implementation
    */
    public static void action_helloWorld() {
      AbtLibrary.report("hello world");
    }
    ```


**Parent topic:**[AbtAutomation](/TA_Automation/Topics/abt_AbtAutomation.html)

**Previous topic:**[Destroy](/TA_Automation/Topics/abt_Destroy.html)

**Next topic:**[DoAction](/TA_Automation/Topics/abt_DoAction.html)

