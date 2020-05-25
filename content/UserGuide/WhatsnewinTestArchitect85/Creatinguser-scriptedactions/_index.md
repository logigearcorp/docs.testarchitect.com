--- 
title: "Creating user-scripted actions"
linktitle: "Creating user-scripted actions"
aliases: 
    - /TA_Help/Topics/ug_Creating_user_scripted_actions.html
---
# Creating user-scripted actions {#task_w3m_k1q_2y .task}

Explains how to create a stub action for a user-scripted scripted action in TestArchitect.

1.  In the TestArchitect explorer tree, right-click the **Action** node, and then select **Create User-Scripted Actions**.

    The **Create User-Scripted Actions** dialog box appears.

    ![](../../TA_Tutorials/Images/Create_user_scripted_action_dlg.png)

2.  Next to the **Bundle location** box, click the **Browse** button to specify a DLL.

    **Important:** Currently, only [C\# bundle harness](../../TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html) is supported to create user-scripted actions.

    User-scripted actions defined in DLL\(s\) are loaded into the Select actions list with the following information.

    -   **Name**: User-scripted action name
    -   **Function**: Function name
    -   **Class**: Class name
    -   **Assembly**: Path of the class library.
    ![](../../TA_Tutorials/Images/Create_user_scripted_action_dlg.png)

3.  Select action\(s\), and then click **Create**.

    **Note:**

    -   You are not allowed to select more than one identical user-scripted actions.
    -   Also, the selected user-scripted actions cannot have the same name as an existing built-in action
    If the creation is successful, a dialog box appears.

    ![](../../TA_Tutorials/Images/action_created_successfully.png)

4.  Click **OK** to dismiss the dialog box.

    In the TestArchitect explorer tree, under the **Action** node, new stub actions of the user-scripted actions are created successfully.

5.  Close the Create User-Scripted Actions dialog box.

    In the TestArchitect explorer tree, under the **Actions** node, new stub actions of the user-scripted actions are created successfully.

    ![](../../TA_Tutorials/Images/user_defined_action.png)

6.  Open a newly-created stub action.

    From the test editor, we can see that argument names are populated based on the implementation code, and their argument types are assigned to String automatically. You are free to modify the [argument type](../../reuse/reuse.Creating_and_using_actions_Arg_type.html).

    ![](../Images/creation_user_scipted_actions.png)


**Parent topic:**[Actions](../../reuse/reuse.Creating_and_using_actions.html)

**Previous topic:**[User-defined actions](../../reuse/reuse.High_level_actions.html)

**Next topic:**[Action Recorder](../../TA_Help/Topics/Creating_and_using_actions_AR.html)

