--- 
title: "The debugger"
linktitle: "The debugger"
weight: 1
aliases: 
    - /TA_Help/Topics/Debugging_the_debugger.html
---
# The debugger {#Debugging_the_debugger .reference}

With execution halted, the debugger toolbar offers various functional buttons to help you debug the action lines.

**Note:**

-   For a given test execution session, which may involve multiple test machines or devices, only one machine or device can be launched in debug mode at a time.
-   The debugger toolbar only appears in the TestArchitect toolbar when in debug mode; normally this toolbar is invisible to users.

![](../Images/debugger_guide_2.png)

The functions of the debug toolbar's buttons are as follows:

|Key|Description|Keyboard shortcuts|
|---|-----------|------------------|
|Debug|Click this button to run the test module in debug mode. Execution is paused at the next breakpoint, if any exists.|N/A|
|Pause|Pause the test execution.|N/A|
|Stop|Terminate the test execution.|N/A|
|Toggle Breakpoint|Insert or remove a breakpoint.|Ctrl + Alt + B|
|Step Over|Execute an action \(or a "run test" test module\) and break on the next line in the current test module or action definition. Even if the action is defined with a user-created action definition, do not break until execution returns from that action.|Shift + F6|
|Step Into|If the current action line calls a test module or an action definition, pause at the first action line inside the test module/action.|Shift + F5|
|Step Out|Execute all remaining action lines within the current test module/action. Do not break until control returns to the next action line of the calling test module or action definition \(if it exists\).|Shift + F7|
|Call Stack|Display the current call stack. The call stack shows all levels of actions/test modules which are currently being executed and how they relate to each other.|N/A|
|Debug Information|Display the result window.|N/A|

## The **Debug Information** view {#section_fzj_jjk_dl .section}

![](../Images/Debug_info.png)

The **Debug Information** view allows you to monitor and manage the state of a test at its various stages. This view is displayed automatically when execution is paused in Debug mode. During debug, it can be toggled on and off by clicking the **Debug Information** ![](../Images/Debug_information_btn.png) button on the debugger toolbar. The view contains four tabs:

-   **Result**: Presents the results of executed action lines preceding the current breakpoint.
-   **Settings**: Displays all the settings explicitly used by the test, and their values.
-   **Local**: Displays all defined local variables visible at the breakpoint. All duplicate local variables are also displayed, along with their scopes. The first column in the grid view shows the names of the variables. The second column indicates where the variables are declared. The third column displays the values of the variables.
-   **Global**: Shows global variables that exist up to the breakpoint. The first column in the grid view shows the names of the global variables. The second column displays the values of the variables.

**Parent topic:**[Debugging with TestArchitect](../../TA_Help/Topics/Debugging.html)

**Next topic:**[Setting breakpoints](../../TA_Help/Topics/Debugging_setting_breakpoints.html)

