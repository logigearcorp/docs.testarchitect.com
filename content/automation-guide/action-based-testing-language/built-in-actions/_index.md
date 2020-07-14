--- 
title: "Built-in actions"
linktitle: "Built-in actions"
description: "TestArchitect includes a library of built-in actions to perform a myriad of functions."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_Built_in_actions.html
keywords: "action, built-in"
---

TestArchitect includes a library of built-in actions to perform a myriad of functions.

Built-in actions are automatically available with your installation of TestArchitect. They can be found listed in the Built-In Actions subtree of the repository tree. There are three categories of built-in actions:

-   **[System actions](/automation-guide/action-based-testing-language/built-in-actions/system-actions/)**

    Actions that interact with the system of the AUT host, such as those that work with user input \(e.g., [type](/automation-guide/action-based-testing-language/built-in-actions/system-actions/keyboard/type), [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click)\) , system resources \([get clipboard](/automation-guide/action-based-testing-language/built-in-actions/system-actions/clipboard/get-clipboard)\), or the host file system \([copy file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/copy-file)\).

-   **[Test Support actions](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/)**

    Includes automation control actions, like [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) and [sleep](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/timing/sleep), and declaratory actions \([argument](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/action-definition/argument), [test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/test-case), [test objective](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/documentary/test-objective)\).

-   **[User Interface actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/)**

    Actual automation actions, such as [enter](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/enter) and [select menu item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/select-menu-item).


![](/images/TA_Help/Images/Tree_with_built_in_actions.png)

Built-in actions cannot be modified by you. They can, however, be used as building blocks of custom user actions that you may create in the form of [user-defined](/user-guide/support/glossary-of-terms/action-application-level) or [user-scripted](/user-guide/support/glossary-of-terms/action-user-scripted) actions.

{{<tip>}} When writing your test, if you do not know which built-in actions to use, it is suggested you use the TestArchitect [Action Recorder](/user-guide/actions/action-recorder/), a tool to record your manual mouse and keyboard operations when testing an application. The interactive operations generate the corresponding built-in actions.

1.  [System actions](/automation-guide/action-based-testing-language/built-in-actions/system-actions/)  
System built-in actions include those which allow your test to interact with the host operating system of your test automation, and perform other miscellaneous functions.
2.  [Test Support actions](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/)  
The Test Support category of built-in actions includes those actions which perform execution control, test resource declaration, test documentation, and reporting.
3.  [User Interface actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/)  
User interface actions include those automation actions which interact with the application under test.



