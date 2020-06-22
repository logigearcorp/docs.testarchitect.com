--- 
title: "Actions"
linktitle: "Actions"
description: "Actions form the cornerstone of the Action Based Testing™ methodology upon which TestArchitect is based."
weight: 6
aliases: 
    - /reuse/reuse.Creating_and_using_actions.html
keywords: "Actions"
---
# Mobile testing
Actions form the cornerstone of the Action Based Testing™ methodology upon which TestArchitect is based.

Actions are the building blocks of your test cases, telling the system which operations to perform. Actions typically interface with the application under test, but may have other functions as well. These include documentary actions, actions that interact with the host file system, and various support actions.

An action may be something elementary, such as [report](/TA_Automation/Topics/bia_report.html) or [click](/TA_Automation/Topics/bia_click.html), two actions which are built into TestArchitect. Such actions are referred to as built-in actions. Alternatively, an action might be your own creation. Custom actions are generally specific to your application, and are known as user actions. User actions take two forms:

-   User-defined actions, which are composed of other actions, both built-in and user;
-   User-scripted actions, which are written in a general-purpose language like Python or Java.
-   User-scripted actions, which are written in C\#.

{{<tip>}}

-   When you enter an action name in a test or action worksheet, TestArchitect's editor verifies that the action is defined and, if so, what its arguments are. If the action has not yet been defined, its name is displayed in red text.
-   From the test editor, you can find a description of any built-in action that's present by selecting its cell and pressing F1. This triggers TestArchitect Help to open to the reference page for the selected action.

1.  [Built-in actions](/reuse/reuse.Creating_and_using_actions_builtin_actions.html)  
TestArchitect includes a library of built-in actions to perform a myriad of functions.
2.  [User-defined actions](/reuse/reuse.High_level_actions.html)  
User-defined actions are actions that you create in TestArchitect's Action Based Testing language.
3.  [Creating user-scripted actions](/TA_Help/Topics/ug_Creating_user_scripted_actions.html)  
Explains how to create a stub action for a user-scripted scripted action in TestArchitect.
4.  [Action Recorder](/TA_Help/Topics/Creating_and_using_actions_AR.html)  
To simplify test creation, TestArchitect includes the Action Recorder, a tool which records your manual operations on the application under test, captures the resulting screen output, automatically generates keyword action lines, and writes the action lines to your test. The recorded action lines can then be replayed during automation to simulate user actions against the application under test.




