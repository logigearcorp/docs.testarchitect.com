--- 
title: "Ignoring actions"
linktitle: "Ignoring actions"
description: "When the ignore modifier (the string “ignore”, surrounded by angle brackets) is used as an argument value in supported actions, TestArchitect bypasses that action during test execution and continues at the subsequent action line."
weight: 9
aliases: 
    - /TA_Automation/Topics/Ignoring_action.html
keywords: "ignore modifier, modifier, ignore, skipping actions, ignoring actions"
---

When the ignore modifier \(the string “ignore”, surrounded by angle brackets\) is used as an argument value in supported actions, TestArchitect bypasses that action during test execution and continues at the subsequent action line.In essence, an action line calling a supported action with <ignore\> as one of its argument values is treated as though it had been commented out in the editor. In some situations, as demonstrated by the example below, this can prove to be a great convenience.

This functionality is supported with user-scripted actions and a subset of the built-in actions \(specified below\). The TestArchitect interpreter, however, does not recognize <ignore\> as a special value when present in an argument of a call to a user-defined action, and hence proceeds to execute such actions. \(Of course, you are always free to write a user-defined action so that it bounces right back when it encounters the <ignore\> string, achieving the same effect.\)

{{<note>}} The reserved word ignore must be surrounded by angle brackets \(< \>\) and can be placed in *any* argument cell of a supported action.

The ignore modifier is supported in the following actions:

-   User-scripted actions \(see [Lesson \#8: Using an automation harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html) for more details\).
-   User-scripted actions \(see User-scripted actions for further information\).
-   All built-in actions except for those that are explicitly unsupported, as listed below.

The ignore modifier is not supported in the following built-in actions:

-   Built-in actions without arguments.
-   All [Control flow](/TA_Automation/Topics/bia_Control_flow.html) built-in actions, such as [if](/TA_Automation/Topics/bia_if.html)...[end if](/TA_Automation/Topics/bia_end_if.html).
-   Data set-related built-in actions:
    -   [use data set](/TA_Automation/Topics/bia_use_data_set.html)...[repeat for data set](/TA_Automation/Topics/bia_repeat_for_data_set.html).
    -   [create data set](/TA_Automation/Topics/bia_create_data_set.html)...[end create data set](/TA_Automation/Topics/bia_end_create_data_set.html).
-   [Action definition](/TA_Automation/Topics/bia_Action_definition.html) built-in actions, such as [argument](/TA_Automation/Topics/bia_argument.html).
-   Value Handling built-in actions:
    -   [set variable](/TA_Automation/Topics/bia_set_variable.html).
    -   [global variable](/TA_Automation/Topics/bia_global_variable.html).
    -   [local variable](/TA_Automation/Topics/bia_local_variable.html).
    -   [set global variable](/TA_Automation/Topics/bia_set_global_variable.html).
-   All [documentary and delimiting](/TA_Automation/Topics/bia_Documentary.html) built-in actions, such as [test case](/TA_Automation/Topics/bia_test_case.html) and [final](/TA_Automation/Topics/bia_final.html).
-   The [setting](/TA_Automation/Topics/bia_setting.html) action.

**Example**

![](/images/TA_Automation/Images/ignore_modifier_pgm.png)

In the example, an action, enter customer information, is defined to fill out customer information \(e.g. title, first name, middle name, etc.\) in the registration window. It does so with a separate enter action for each value. The default value of each of the arguments is `<ignore>`, which means that, if no value is supplied by the caller for any given argument, the corresponding enter action is skipped during test execution. So if, in the test module editor, we want to call enter customer information but only have it fill in the title, first name and surname information, we need only supply values for those three arguments. We have the option of leaving the others blank, or entering the “<ignore\>” string in them.




