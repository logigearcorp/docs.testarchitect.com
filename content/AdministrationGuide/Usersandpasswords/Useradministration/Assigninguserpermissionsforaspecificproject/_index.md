--- 
title: "Assigning user permissions for a specific project"
linktitle: "Assigning user permissions for a specific project"
weight: 8
aliases: 
    - /TA_Administration/Topics/adm_users_assigning_permissions.html
---
# Assigning user permissions for a specific project {#task_csy_zvw_4p .task}

Within a given project, TestArchitect users belonging to the administrators and test managers groups are able to assign user's roles.

Ensure that the following requirements are met:

-   You are logged in to a repository as a member of the [administrators](User_administration.html) or [test managers](User_administration.html) group.
-   If your account belongs to the test managers group, you must have been assigned to the project you are working on. \(See [Assigning projects and permissions to a repository user](adm_users_assigning_repositories.html) for details.\)

To assign permissions on a specific project to one or more TestArchitect users, do the following:

1.  In the TestArchitect explorer tree, right-click a project node to which you want to assign TestArchitect users, and click **Assign User**.

    The Assign/Unassign users to project <Name of Project\> dialog box appears.

    ![](../Images/Dialogs_assign_permission.png)

2.  In the Not Assigned To panel, choose a user and then click the ![](../Images/select_user.png) button.

    **Tip:**

    -   Select multiple users by pressing your keyboard's Shift or Control key.
    -   To assign all available users to a project, click the ![](../Images/select_all_users.png) button.
    -   To remove an assigned user, select a user from the Assigned To panel and then click the ![](../Images/remove_an_assigned_user.png) button.
    -   To remove all assigned users, click the ![](../Images/remove_all_assigned_users.png) button.
3.  Once you are satisfied with who is and isn't assigned to your project, you can select each user's respective roles by designating which group\(s\) he or she belongs to, within the confines of the project.

    **Note:** Group designations must be performed individually for each Assigned to: user. Selecting more than one such user causes the Groups panel to become disabled. Hence, repeat the next two steps for each Assigned to: user:

4.  Select a user from the Assigned to: panel.

5.  In the Groups panel, select those check boxes representing those groups you wish this user to be a member of.

    **Remember:** The group designations you assign here only apply to the current project. They do not affect users' group memberships within other projects.

    **Note:** Note that the administrators group is not available for assignment from this dialog box. That's because assignment to administrators applies to the entire repository, not just the project. To assign a user to the administrators group, see [Assigning projects and permissions to a repository user](adm_users_assigning_repositories.html).

6.  Click **Done**.


**Parent topic:**[User administration](../../TA_Administration/Topics/User_administration.html)

**Previous topic:**[Assigning projects and permissions to a repository user](../../TA_Administration/Topics/adm_users_assigning_repositories.html)

**Next topic:**[Assigning user permissions for a specific project item](../../TA_Administration/Topics/adm_users_assigning_permissions_items.html)

