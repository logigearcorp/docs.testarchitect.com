--- 
title: "User-defined actions"
linktitle: "User-defined actions"
description: "User-defined actions are actions that you create in TestArchitect's Action Based Testing language."
weight: 2
aliases: 
    - /reuse/reuse.High_level_actions.html
keywords: "user-defined actions, action, user-defined"
---
# User-defined actions

User-defined actions are actions that you create in TestArchitect's Action Based Testing language.User-defined actions may be comprised of any type of action: [built-in](/TA_Automation/Topics/bia_Built_in_actions.html), [user-scripted](/TA_Glossary/Topics/glossaryScriptedAction.html), or other user-defined actions, or any combination of the above.

While TestArchitect offers a library of hundreds of built-in actions for you to build your tests from, you will often find it necessary to create your own actions. Two types of such custom actions are possible: user-defined actions and user-scripted actions. Of the two, user-defined actions have the benefit of being the easiest to create, requiring no special skill level beyond a basic understanding of TestArchitect test authorship. They are also more convenient and faster to write and incorporate into your tests.

In general, you create user-defined actions for two reasons:

1.  **Modularity**:

    It is often the case that a given sequence of action lines performs what can be considered a single, well-defined function. Often this function must be repeated throughout a test, or across tests in a project. In such instances, it makes sense to embody, or [encapsulate](/TA_Glossary/Topics/glossaryActionEncapsulation.html), the sequence into a user-defined action. In place of each instance of the action line sequence, only a single action line, one that invokes the new user-defined action, is required.

    Sometimes instances of action line sequences differ only by the data values they operate on. In such cases, the user-defined actions that replace them can handle the variability of data values through the use of arguments.

    Encapsulating action line sequences into user-defined actions enhances your test in two ways:

    -   **Readability**: It is easier to comprehend a test that presents steps at a higher, more humanly-intuitive level. It is also less tiring when one doesn't have to frequently encounter identical sets of steps.
    -   **Maintainability**: Incorporating a frequently used functionality into an action that can be called from multiple places means that, when a change to that functionality is warranted, the modification need only be performed in a single place, rather than multiple places. This not only reduces maintenance time, but lessens the chance of introducing errors.
2.  **Isolation of implementation details**: Some functionalities of an application under test may easily change from one version to the next. It is in your best interest to confine implementation-dependent actions to your custom actions. Again, maintenance is minimized across application versions, and your test modules are left to focus solely on business logic.

A user-defined action is comparable to a function, complete with arguments that can be passed to it to control the action’s behavior, as well as arguments that allow the function to return values to the calling entity. By calling on a user-defined action, a test module \(or other user-defined action\) executes a number of steps relating to a particular function or activity while isolating itself from all of the individual actions involved. Letting user-defined actions do low-level work enhances the readability of test modules, especially when the actions are well-named and their purpose is clear.

1.  [Creating new actions](/TA_Help/Topics/Creating_and_using_actions_using_actions.html)  
The steps needed to create a new user-defined action.
2.  [Smart creation of new actions](/TA_Help/Topics/High_level_actions_smart_creating.html)  
Rapidly create a new user-defined action from a contiguous set of actions in the test editor.
3.  [Entering a new action line](/TA_Help/Topics/High_level_actions_using.html)  
After creating a user-defined action, the test editor is made aware of it.
4.  [Argument types](/reuse/reuse.Creating_and_using_actions_Arg_type.html)  
An action argument can have one of several possible data types.
5.  [Exporting actions](/TA_Help/Topics/High_level_actions_exporting.html)  
A user-defined action can be exported to an archive file \(.ZIP format\), which can be used as a backup or for reimporting.
6.  [Importing actions](/TA_Help/Topics/High_level_actions_importing.html)  
You can easily import a user-defined action stored in an archive file \(.ZIP format\).




