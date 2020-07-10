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

-   User-scripted actions \(see [Lesson \#8: Using an automation harness](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/) for more details\).
-   User-scripted actions \(see User-scripted actions for further information\).
-   All built-in actions except for those that are explicitly unsupported, as listed below.

The ignore modifier is not supported in the following built-in actions:

-   Built-in actions without arguments.
-   All [Control flow](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/) built-in actions, such as [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if)...[end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if).
-   Data set-related built-in actions:
    -   [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set)...[repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set).
    -   [create data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/create-data-set)...[end create data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/end-create-data-set).
-   [Action definition](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/action-definition/) built-in actions, such as [argument](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/action-definition/argument).
-   Value Handling built-in actions:
    -   [set variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/set-variable).
    -   [global variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/global-variable).
    -   [local variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/local-variable).
    -   [set global variable](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/set-global-variable).
-   All [documentary and delimiting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/) built-in actions, such as [test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/test-case) and [final](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/final).
-   The [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) action.

**Example**

![](/images/TA_Automation/Images/ignore_modifier_pgm.png)

In the example, an action, enter customer information, is defined to fill out customer information \(e.g. title, first name, middle name, etc.\) in the registration window. It does so with a separate enter action for each value. The default value of each of the arguments is `<ignore>`, which means that, if no value is supplied by the caller for any given argument, the corresponding enter action is skipped during test execution. So if, in the test module editor, we want to call enter customer information but only have it fill in the title, first name and surname information, we need only supply values for those three arguments. We have the option of leaving the others blank, or entering the “<ignore\>” string in them.




