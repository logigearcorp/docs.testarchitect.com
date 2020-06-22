--- 
title: "Built-in actions"
linktitle: "Built-in actions"
description: "TestArchitect includes a library of built-in actions to perform a myriad of functions."
weight: 1
aliases: 
    - /reuse/reuse.Creating_and_using_actions_builtin_actions.html
keywords: "built-in actions, action, built-in"
---
#Built-in actions

TestArchitect includes a library of built-in actions to perform a myriad of functions.

Built-in actions are automatically available with your installation of TestArchitect. They can be found listed in the **Built-In Actions** subtree of the repository tree. There are three categories of built-in actions:

-   **[System actions](/TA_Automation/Topics/bia_System.html)**

    Actions that interact with the system of the AUT host, such as those that work with user input \(e.g., [type](/TA_Automation/Topics/bia_type.html), [click](/TA_Automation/Topics/bia_click.html)\) , system resources \([get clipboard](/TA_Automation/Topics/bia_get_clipboard.html)\), or the host file system \([copy file](/TA_Automation/Topics/bia_copy_file.html)\).

-   **[Test Support actions](/TA_Automation/Topics/bia_Test_Support.html)**

    Includes automation control actions, like [if](/TA_Automation/Topics/bia_if.html) and [sleep](/TA_Automation/Topics/bia_sleep.html), and declaratory actions \([argument](/TA_Automation/Topics/bia_argument.html), [test case](/TA_Automation/Topics/bia_test_case.html), [test objective](/TA_Automation/Topics/bia_test_objective.html)\).

-   **[User Interface actions](/TA_Automation/Topics/bia_User_Interface.html)**

    Actual automation actions, such as [enter](/TA_Automation/Topics/bia_enter.html) and [select menu item](/TA_Automation/Topics/bia_select_menu_item.html).


![](/images/TA_Help/Images/Tree_with_built_in_actions.png)

Built-in actions cannot be modified by you. They can, however, be used as building blocks of custom user actions that you may create in the form of [user-defined](/TA_Glossary/Topics/glossaryHighLevelAction.html) or [user-scripted](/TA_Glossary/Topics/glossaryScriptedAction.html) actions.

{{<tip>}} When writing your test, if you do not know which built-in actions to use, it is suggested you use the TestArchitect [Action Recorder](/TA_Help/Topics/Creating_and_using_actions_AR.html), a tool to record your manual mouse and keyboard operations when testing an application. The interactive operations generate the corresponding built-in actions.

{{<note>}} See [Built-in actions](/TA_Automation/Topics/bia_Built_in_actions.html) for a complete reference to TestArchitect's library of built-in actions.

## Showing applicable built-in actions for windows/controls

From Solution Explorer, drag an interface entity or interface element into a cell in an empty row in the editor to view a drop-down list of applicable built-in actions. After selecting an action from the drop-down list, TestArchitect automatically completes the syntax and the argument cells of the interface entity or interface element.

{{<note>}} This feature is only available in the test editor for test modules and [user-defined actions](/reuse/reuse.High_level_actions.html).



