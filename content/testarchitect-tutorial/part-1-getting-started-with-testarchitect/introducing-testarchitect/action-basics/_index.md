--- 
title: "Action basics"
linktitle: "Action basics"
description: "Actions, which are at the heart of the Action Based Testing™ methodology, form the building blocks of TestArchitect tests."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Action_basics.html
keywords: "actions, introduction"
---

Actions, which are at the heart of the Action Based Testing™ methodology, form the building blocks of TestArchitect tests.

Actions are the building blocks of your test cases, telling the system which operations to perform. Actions typically interface with the application under test, but may have other functions as well. These include documentary actions, actions that interact with the host file system, and various support actions.

An action may be something elementary, such as [report](/reuse/../TA_Automation/Topics/bia_report.html) or [click](/reuse/../TA_Automation/Topics/bia_click.html), two actions which are built into TestArchitect. Such actions are referred to as built-in actions. Alternatively, an action might be your own creation. Custom actions are generally specific to your application, and are known as user actions. User actions take two forms:

-   User-defined actions, which are composed of other actions, both built-in and user;
-   User-scripted actions, which are written in a general-purpose language like Python or Java.
-   User-scripted actions, which are written in C\#.

{{<tip>}}

-   When you enter an action name in a test or action worksheet, TestArchitect's editor verifies that the action is defined and, if so, what its arguments are. If the action has not yet been defined, its name is displayed in red text.
-   From the test editor, you can find a description of any built-in action that's present by selecting its cell and pressing F1. This triggers TestArchitect Help to open to the reference page for the selected action.




**Related information**  


[Invoking a user-scripted action](/TA_Tutorials/Topics/Invoking_a_harness_action.html)

[Scripting an action in Python](/TA_Tutorials/Topics/Scripting_an_action.html)

