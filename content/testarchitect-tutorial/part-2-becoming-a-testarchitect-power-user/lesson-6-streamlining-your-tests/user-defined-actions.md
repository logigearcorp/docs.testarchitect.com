--- 
title: "User-defined actions"
linktitle: "User-defined actions"
description: "User-defined actions consist of sequences of actions that typically relate to a single business logic function in the application under test."
weight: 4
aliases: 
    - /TA_Tutorials/Topics/High-level_actions.html
keywords: "user-defined actions, actions, user-defined"
---

User-defined actions consist of sequences of actions that typically relate to a single business logic function in the application under test.

User-defined actions may be comprised of any type of action: [built-in actions](/automation-guide/action-based-testing-language/built-in-actions/), [user-scripted actions](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/) created with a harness, other [user-defined actions](/user-guide/actions/user-defined-actions/), or any combination of the above.

A user-defined action may be called, or invoked, by a test module or other user-defined action. In that sense, it is comparable to what programmers know as a function. It may accept arguments whose values control its behavior, and can also return values through arguments to the calling entity.

For more on user-defined actions, their uses and advantages, see the [User Guide](/user-guide/actions/user-defined-actions/).

A user-defined action is created by means of an action definitions which, in the test editor, resembles a test module. In the TestArchitect explorer tree, user-defined actions are organized under the **Actions** subtree of your project.

Creating a user-defined action is a two-stage process:

-   You begin by defining the action's interface – that is, the things that the outside world needs to know about the action in order to interface with it. This consists of the action's name and its arguments, which you define in the New Action dialog box.
-   Next, you create the action definition which, in the test editor, resembles a test module, with action lines consisting of other actions, be they user-defined, built-in, or user-scripted.

{{<note>}} Arguments that you create appear at the top of the action definition in the editor, which may lead you to believe that arguments can be created directly in the action definition rather than the New Action dialog box. This is indeed true, but it is strongly advised that you not create arguments this way, as doing so interferes with the process of [name change propagation](/user-guide/projects-and-project-items/project-items/name-change-propagation). Similarly, arguments of an existing action should only be added, modified, or deleted through the action's Information tab:

![](/images/TA_Tutorials/Images/hi_level_action.args_mods.png)




