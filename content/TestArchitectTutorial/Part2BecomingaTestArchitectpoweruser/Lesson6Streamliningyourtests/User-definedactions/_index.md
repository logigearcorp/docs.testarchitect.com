--- 
title: "User-defined actions"
linktitle: "User-defined actions"
weight: 4
aliases: 
    - /TA_Tutorials/Topics/High-level_actions.html
---
# User-defined actions {#High-level_actions .concept}

User-defined actions consist of sequences of actions that typically relate to a single business logic function in the application under test.

User-defined actions may be comprised of any type of action: [built-in actions](../../TA_Automation/Topics/bia_Built_in_actions.html), [user-scripted actions](Tutorial_Scripting_actions_in_other_languages.html) created with a harness, other [user-defined actions](../../reuse/reuse.High_level_actions.html), or any combination of the above.

A user-defined action may be called, or invoked, by a test module or other user-defined action. In that sense, it is comparable to what programmers know as a function. It may accept arguments whose values control its behavior, and can also return values through arguments to the calling entity.

For more on user-defined actions, their uses and advantages, see the [User Guide](../../reuse/reuse.High_level_actions.html).

A user-defined action is created by means of an action definitions which, in the test editor, resembles a test module. In the TestArchitect explorer tree, user-defined actions are organized under the **Actions** subtree of your project.

Creating a user-defined action is a two-stage process:

-   You begin by defining the action's interface – that is, the things that the outside world needs to know about the action in order to interface with it. This consists of the action's name and its arguments, which you define in the New Action dialog box.
-   Next, you create the action definition which, in the test editor, resembles a test module, with action lines consisting of other actions, be they user-defined, built-in, or user-scripted.

**Note:** Arguments that you create appear at the top of the action definition in the editor, which may lead you to believe that arguments can be created directly in the action definition rather than the New Action dialog box. This is indeed true, but it is strongly advised that you not create arguments this way, as doing so interferes with the process of [name change propagation](../../TA_Help/Topics/Project_and_project_items_rename_refactoring.html). Similarly, arguments of an existing action should only be added, modified, or deleted through the action's Information tab:

![](../Images/hi_level_action.args_mods.png)

**Parent topic:**[Lesson \#6: Streamlining your tests](../../TA_Tutorials/Topics/Tutorial_Building_an_action_definition.html)

**Previous topic:**[Folding repetition into a loop](../../TA_Tutorials/Topics/tut_looping_examples.html)

**Next topic:**[Folding action lines into actions](../../TA_Tutorials/Topics/Refactoring.html)

