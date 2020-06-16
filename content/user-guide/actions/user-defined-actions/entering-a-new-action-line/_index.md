--- 
title: "Entering a new action line"
linktitle: "Entering a new action line"
description: "After creating a user-defined action, the test editor is made aware of it."
weight: 3
aliases: 
    - /TA_Help/Topics/High_level_actions_using.html
keywords: "usage, actions, using, user-defined actions, built-in actions"
---

After creating a user-defined action, the test editor is made aware of it.

Choose one of the following two methods to use an action in the test editor:

-   **Option 1**:

    1.  Type the name of an action, whether built-in or user-defined, into the A column of the test editor worksheet.

    2.  Press Enter on the keyboard.

        TestArchitect automatically displays the applicable argument names. For example, if you type [check control exists](/TA_Automation/Topics/bia_check_control_exists.html), the window and control arguments are displayed as headers in the adjacent columns.

        ![](/images/TA_Help/Images/Test_Lines_check_control_exists.png)

        **Tip:** The test editor displays a list of available actions when you start entering an action in the A column of a test worksheet. This list narrows as you type, using the characters you have entered as its criteria for filtering the list. You then have the option to either complete your typing, or, as a shortcut, select an item from the list.

-   **Option 2**:

    1.  From the TestArchitect explorer tree, drag an action into the desired line in the test editor.

        **Tip:** You may select from either the user-defined actions under the **Actions** node of your project, or the built-in actions in the**Built-In Actions** node, residing under the root node of the repository.

        If the action has no arguments, it is entered directly into the worksheet. Otherwise, theUse Action dialog box appears.

        ![](/images/TA_Help/Images/Dialogs_Use_Action_1.png)

    2.  Deselect any optional arguments that you do not want displayed in the editor.

        Be warned that it is possible to deselect even required arguments. If you do that, you are likely to encounter run-time errors.

    3.  **Note:** The Options panel presents two check boxes:

-   **Wrap action line after**: It is possible to have the test editor wrap long lines automatically. If that is something you want, enter the number of columns to which to limit each line before wrapping occurs.
-   **Show this form when I drag an action**: Clear this box if you have no need to see this form again when you enter actions in this manner.
        ![](/images/TA_Help/Images/Dialogs_Use_Action_2.png)

    4.  Click **OK**.

    The action, with argument headers \(if any selected\), is inserted into the test editor.

    **Note:** \>\>\> represents the line continuation symbol. \([Learn more](/TA_Help/Topics/Getting_started_overview_the_test_editor.html).\)

    ![](/images/TA_Help/Images/Test_Lines_continuation.png)





