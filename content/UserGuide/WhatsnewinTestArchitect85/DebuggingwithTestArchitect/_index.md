--- 
title: "Debugging with TestArchitect"
linktitle: "Debugging with TestArchitect"
aliases: 
    - /TA_Help/Topics/Debugging.html
---
# Debugging with TestArchitect {#Debugging .concept}

The TestArchitect debugger allows you to run an application under test interactively while observing the action lines and results at each stage of execution, as well as the state of the AUT. Variables, arguments, and settings at each stage may also be observed, and modified.

Since tests do not always execute as expected, TestArchitect offers test-level debugging. Debugging allows you to pause the execution at any point. Once the test is stopped, you can look at the state of the running application under test, inspect the values of variables, arguments, and settings at the point of the pause.

There are two means by which a test may be paused for debugging:

-   Prior to executing a test, you may set one or more breakpoints in the test module or its action definition\(s\). Then execute the test in Debug mode.
-   Upon encountering an automation problem \(warning or error\) during execution, TestArchitect automatically pauses, offering you the option of entering Debug mode at the point of the problem action line.

**Note:** Take notice of the following rules when you try to execute multiple harnesses, one of which runs in debug mode.

-   Running a harness in debug mode along with multiple harnesses using batch file\(s\) is allowable.
-   Technically, you can run a harness in ordinary mode from TestArchitect Client first and then run another harness in debug mode. It is highly inadvisable to try this because it can cause unexpected functions.
-   It is impossible to run a harness in debug mode first and then run more harness\(es\) in debug/ordinary/compilation mode.

1.  [The debugger](../../TA_Help/Topics/Debugging_the_debugger.html)  
With execution halted, the debugger toolbar offers various functional buttons to help you debug the action lines.
2.  [Setting breakpoints](../../TA_Help/Topics/Debugging_setting_breakpoints.html)  
A breakpoint is a location in your action lines that has been designated as a point at which execution is to be paused. With execution thus halted, you can view information about the running application's state at the given point.
3.  [Starting the debugger](../../TA_Help/Topics/Debugging_starting_debugger.html)  
After defining breakpoints, you can run your test procedure through the debugger.
4.  [Removing breakpoints](../../TA_Help/Topics/Debugging_removing_breakpoints.html)  
If you no longer need a breakpoint, delete it.
5.  [Disabling breakpoints](../../TA_Help/Topics/Debugging_disabling_breakpoints.html)  
Sometimes you may want to disable a breakpoint without doing away with it entirely. Execution is not paused when it meets a disabled breakpoint. The breakpoint remains marked in the margin for your reference, and can be re-enabled when again needed.
6.  [Enabling breakpoints](../../TA_Help/Topics/Debugging_enabling_breakpoints.html)  
Reactivating a disabled breakpoint.
7.  [Debugging in a remote desktop session](../../TA_Help/Topics/Debugging_remote_desktop_session.html)  
How to debug a harness in a remote desktop session.

**Parent topic:**[Finding bugs with TestArchitect](../../TA_Help/Topics/Debugging_finding_bugs.html)

**Next topic:**[Screenshot recording](../../TA_Help/Topics/ug_Screenshot_recording.html)

**Related information**  


[Working with Eclipse](../../TA_Help/Topics/Integration_eclipse_intro.html)

