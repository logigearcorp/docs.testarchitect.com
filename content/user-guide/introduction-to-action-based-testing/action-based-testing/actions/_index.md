--- 
title: "Actions"
linktitle: "Actions"
description: "An action is a reusable container housing a series of operations and checks."
weight: 2
aliases: 
    - /TA_Help/Topics/ABT_actions.html
keywords: "Action Based Testing, actions, ABT"
---

The essential elements of Action Based Testing, apart from test modules, are the actions. An action is a reusable container housing a series of operations and checks.Instead of specifying such operations and checks in detail in the test module, the tester can specify one or more actions.

Actions have arguments that define input values and expected outcomes. The arguments have names that appear as headers in the row above the action line, for instance:

![](/images/TA_Help/Images/ug_introductiontoabt.png)

Actions are best regarded as a byproduct of the test design. The testers essentially define the actions and their arguments, although it makes sense to discuss them with the automation engineer before using them on a larger scale.

Actions need to be organized and managed well. In particular, one should take pains not to have more than one action for more or less the same operation. Actions also should be clear and unambiguous and be well documented \(meaning, arguments and their default values, etc.\).

A few practices that can help:

-   Have a lead tester be responsible for the actions.
-   Let the automation engineer\(s\) keep an eye out for how well actions are defined.
-   Where applicable, use a standard format for an action name like verb-object. For example, enter customer or check balance. Also standardize on terminology for both. A guideline in the case of enter customer could be:
    -   for the verb: use enter, not add or define,
    -   for the object: use customer, not client or account;
-   Organize actions into folders according to their meaning and scope;
-   Organize the actions into levels:
    -   system-level, UI related, such as [click](/TA_Automation/Topics/bia_click.html), [select](/TA_Automation/Topics/bia_select.html) \(many of these are predefined in TestArchitect as built-in actions\),
    -   application-level, business related, such as enter customer and check balance,
    -   intermediate-level, such as enter name and address, enter car details. These intermediate actions typically address one screen in the application under test, and are the building blocks for higher level actions like enter customer.

Many system-level actions, such as [click](/TA_Automation/Topics/bia_click.html), [enter](/TA_Automation/Topics/bia_enter.html), and [check](/TA_Automation/Topics/bia_check.html) are built-in in TestArchitect. Such actions are usually generic, which means that they are defined for a wide range of UI objects. For example [click](/TA_Automation/Topics/bia_click.html) works on a button in a window, but also works on a hyperlink in a web page.

Those actions that are not available as built-in need to be implemented. In particular, in larger test teams it is generally not advisable to let the testers implement the actions, but instead to leave this to a small group of specialized automation people. The automation process can best be organized as a separate track in the overall automation project, with its own planning, teams, and deliverables. In many projects, tests are finished well before their actions are automated, in particular since the application under test might not yet be available.

The most straightforward way to implement actions is to program them in functions in a programming or scripting language. This goes in the form of an action interpreter that in Action Based Testing is called a harness. In TestArchitect the harness can be done:

-   in the scripting language of a third party test tool,
-   in a general programming language, using TestArchitect’s automation support libraries for the interaction with the UI \(or other interface\) of the application under test.

In both cases you use the functions of the Action Based Testing library to do things like retrieve an argument of the action or register a result of a check. This is usually called the engine. Examples of working harnesses are available as part of your TestArchitect installation \(refer the [Lesson \#8: Using an automation harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html) section for details\).

Action Based Testing also has an alternative mechanism to implement higher level actions, called [action definitions](/reuse/reuse.High_level_actions.html). They allow the automation person to define the workings of a new action using existing actions. For actions that do not contain complicated technical functionality, this is often the preferred way, since it is generally more accessible than programming code.




