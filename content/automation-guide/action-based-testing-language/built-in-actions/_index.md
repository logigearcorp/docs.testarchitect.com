--- 
title: "Built-in actions"
linktitle: "Built-in actions"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_Built_in_actions.html
---

TestArchitect includes a library of built-in actions to perform a myriad of functions.

Built-in actions are automatically available with your installation of TestArchitect. They can be found listed in the **Built-In Actions** subtree of the repository tree. There are three categories of built-in actions:

-   **[System actions](/reuse/../TA_Automation/Topics/bia_System.html)**

    Actions that interact with the system of the AUT host, such as those that work with user input \(e.g., [type](/reuse/../TA_Automation/Topics/bia_type.html), [click](/reuse/../TA_Automation/Topics/bia_click.html)\) , system resources \([get clipboard](/reuse/../TA_Automation/Topics/bia_get_clipboard.html)\), or the host file system \([copy file](/reuse/../TA_Automation/Topics/bia_copy_file.html)\).

-   **[Test Support actions](/reuse/../TA_Automation/Topics/bia_Test_Support.html)**

    Includes automation control actions, like [if](/reuse/../TA_Automation/Topics/bia_if.html) and [sleep](/reuse/../TA_Automation/Topics/bia_sleep.html), and declaratory actions \([argument](/reuse/../TA_Automation/Topics/bia_argument.html), [test case](/reuse/../TA_Automation/Topics/bia_test_case.html), [test objective](/reuse/../TA_Automation/Topics/bia_test_objective.html)\).

-   **[User Interface actions](/reuse/../TA_Automation/Topics/bia_User_Interface.html)**

    Actual automation actions, such as [enter](/reuse/../TA_Automation/Topics/bia_enter.html) and [select menu item](/reuse/../TA_Automation/Topics/bia_select_menu_item.html).


![](/images/TA_Help/Images/Tree_with_built_in_actions.png)

Built-in actions cannot be modified by you. They can, however, be used as building blocks of custom user actions that you may create in the form of [user-defined](/reuse/../TA_Glossary/Topics/glossaryHighLevelAction.html) or [user-scripted](/reuse/../TA_Glossary/Topics/glossaryScriptedAction.html) actions.

**Tip:** When writing your test, if you do not know which built-in actions to use, it is suggested you use the TestArchitect [Action Recorder](/reuse/../TA_Help/Topics/Creating_and_using_actions_AR.html), a tool to record your manual mouse and keyboard operations when testing an application. The interactive operations generate the corresponding built-in actions.

1.  [System actions](/TA_Automation/Topics/bia_System.html)  
System built-in actions include those which allow your test to interact with the host operating system of your test automation, and perform other miscellaneous functions.
2.  [Test Support actions](/TA_Automation/Topics/bia_Test_Support.html)  
The Test Support category of built-in actions includes those actions which perform execution control, test resource declaration, test documentation, and reporting.
3.  [User Interface actions](/TA_Automation/Topics/bia_User_Interface.html)  
User interface actions include those automation actions which interact with the application under test.

**Parent topic:**[Action-based testing language](/TA_Automation/Topics/Action_based_testing_language.html)

**Previous topic:**[The test language](/TA_Automation/Topics/The_test_language.html)

**Next topic:**[Built-in settings](/TA_Automation/Topics/bis_Built_in_settings.html)

