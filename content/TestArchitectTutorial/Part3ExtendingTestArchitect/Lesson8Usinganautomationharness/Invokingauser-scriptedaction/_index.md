--- 
title: "Invoking a user-scripted action"
linktitle: "Invoking a user-scripted action"
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Invoking_a_harness_action.html
---
# Invoking a user-scripted action {#Invoking_a_harness_action .concept}

What it takes to access a user-scripted action from your test module.

From the perspective of a TestArchitect test module, a user-scripted action looks like any other action: the action line consists of the action name, followed by zero or more arguments. Hence, when writing an action line that calls a user-scripted action, one only has to know the name of the action and the arguments it expects.

**Note:** Unlike the case with built-in actions and user-defined actions, the test editor is not automatically aware of the existence of user-scripted actions. This means that, by default, user-scripted actions do not appear in the drop-down list for actions.

If the action is entered correctly, and the build is set up properly, TestArchitect has no problem with calls to user-scripted actions during compilation and execution. When you enter such action lines that call actions, they appear in red text \(indicating an unknown action\), and argument headers are not automatically displayed.

**Tip:** A simple, nonessential way to address this matter is with a stub action. A stub action is basically a user-defined action that you create with the same name as your user-scripted action. You can use the stub action to specify any arguments that the user-scripted action uses. Other than argument actions, the stub action is empty. Hence the only function of a stub action is to declare an action name and its arguments, and make it easier for test writers to do their work.

**Parent topic:**[Lesson \#8: Using an automation harness](../../TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html)

**Previous topic:**[Understanding harnesses](../../TA_Tutorials/Topics/Understanding_harnesses.html)

**Next topic:**[Working with the Python harness](../../TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_python.html)

**Related information**  


[Action basics](../../TA_Tutorials/Topics/Action_basics.html)

