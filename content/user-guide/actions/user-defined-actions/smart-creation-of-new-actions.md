--- 
title: "Smart creation of new actions"
linktitle: "Smart creation of new actions"
description: "Rapidly create a new user-defined action from a contiguous set of actions in the test editor."
weight: 2
aliases: 
    - /TA_Help/Topics/High_level_actions_smart_creating.html
keywords: "actions, user-defined creation, smart, creating user-defined actions, smart creation"
---

Rapidly create a new user-defined action from a contiguous set of actions in the test editor.

1.  In the test editor, select a contiguous set of actions in a test module or user-defined action.

2.  Right-click the selection, then select **Create Action** from the context menu \(or press Ctrl + Alt + C on the keyboard\).

    {{<remember>}} It is OK if one or more of the actions is marked with a bug, as long as all the bugs are of the same type. However, if the set of actions contains bugs of more than a single type, the following message is displayed. \(See [Marking TA bugs as known bugs](/user-guide/projects-and-project-items/project-items/testarchitect-bugs/working-with-known-bugs/tracking-known-bugs) for further information\).

    ![](/images/TA_Help/Images/Bugs_smart_create_new_action.png)

3.  In the Create New Action dialog box, provide the details for the action:

    -   **Name**: A unique action name.
    -   **Description**: \(Optional\) Short description for the action.
    -   **Location**: \(Optional\) Specify the directory location in which to store the newly created action. If you do not specify the location, TestArchitect automatically stores it directly under the **Actions** node.
    -   **Argument**: \(Optional\) Select several respective check box arguments if you want to create arguments in the action editor.
    {{<tip>}}

    -   To replace the selected set of contiguous actions with the newly-created action immediately upon its creation, select the **Replace selected script by new action** check box.
    -   To display all the window and control arguments in the Argument panel, select the **Show window and control argument** check box.
4.  Click **Create**.


A new worksheet appears, headed by the name of the action, which is followed by a list of its arguments. This worksheet is known as the action definition for the new action. Any lines you add to this sheet are executed whenever the new action is called from a test module or another action definition. \(See also [automating actions](/user-guide/actions/user-defined-actions/argument-types/automating-actions).\)




