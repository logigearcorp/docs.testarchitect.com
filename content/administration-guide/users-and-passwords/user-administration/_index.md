--- 
title: "User administration"
linktitle: "User administration"
description: "The user administration functions of a repository allow a repository administrator to manage users."
weight: 1
aliases: 
    - /TA_Administration/Topics/User_administration.html
keywords: "user administration, creating, user groups, guests, user group, testers, user group, test managers, user group, test leads, user group, administrators, user group, automation leads, user group, automation engineers, user group"
---

The user administration functions of a repository allow a repository administrator to manage users.

For a user to be able to work in a TestArchitect project, the following is required:

-   that the user is registered in the repository by an administrator for that repository;
-   that the user is a member of that project;
-   that the user is a member of a functional user group of the project, such as testers or test leads, with sufficient rights for the kind of work he/she needs to do.

Permissions are based on the functional group, as follows:

-   guests: only have reading authorization.
-   testers: can only work on test modules and data sets that are assigned to them, or that are assigned to no one.
-   test leads: can work on all test modules and data sets.
-   automation engineers: can work on action definitions and interface entities that are assigned to them, or that are assigned to no one.
-   automation leads: can work on all actions definitions and interface entities in the project.
-   test managers: have broad authority in the project.
-   administrators: have all permissions and the ability to manage users and repositories.

## Detailed permissions of each functional group

-   guests:
    -   View tests, actions, data sets, interfaces.
    -   Execute tests and view results.
    -   Run reports on tests, actions, and results.
-   testers: All permissions of guests, plus:
    -   Create new test modules, actions, data sets, and folders.
    -   Modify, rename and delete test modules, actions, data sets, and folders that they have been assigned to.
    -   Develop test modules and data sets that are assigned to no one.
    -   Modify, rename, delete test modules, actions, data sets and folders that they themselves have created.
    -   Create personal reports.
-   test leads: All permissions of testers, plus:
    -   Modify, rename and delete any test modules, actions, data sets and folders.
-   automation engineers: All permissions of testers, plus:
    -   Create interfaces and folders.
    -   Develop actions and interfaces that are assigned to no one.
    -   Modify, rename and delete actions and interfaces that they have been assigned to.
-   automation leads: All permissions of automation engineers and test leads, plus:
    -   Modify, rename, delete any actions and interfaces.
-   test managers: All permissions of test leads and automation leads, plus:
    -   Assign and remove users from projects.
    -   Full permissions on all items within a project.
    -   Add, delete, and modify shared reports.
-   administrators: All privileges to do everything in the system. Administrators have the permissions of test managers, plus:
    -   Add, delete, and modify projects.
    -   Add, delete, and modify users.
    -   Add, delete, modify shared reports.

Note that user assignments to groups are project-specific. For example, user Mary may be assigned to the Car Rental project as a test manager, while being assigned to the Scrum Board project \(in the same repository\) as a test lead and automation engineer. An exception is that of the administrators group: assignment to administrators is done at the repository level. Hence, if John is assigned to one project as a member of administrators, he is automatically an administrator of all projects in the repository.

1.  [Invoking the Manage Users dialog box](/TA_Administration/Topics/adm_users_invoking_Manage_Users.html)  
The Manage Users dialog box can be used to add or delete users to or from a repository, edit their data, or change their assignments \(permissions\). You can also use the dialog box to change the password of a selected user, but this is only recommended if the user has forgotten his or her password and you need to reset it. It can also be used to assign the user to specific projects as a member of different functional groups, thus setting his or her functional permissions.
2.  [Creating a repository user](/TA_Administration/Topics/adm_users_creating.html)  
As an administrator, you can create a TestArchitect user for a repository. You may also match that TestArchitect user to an existing LDAP user, if needed.
3.  [Deleting a repository user](/TA_Administration/Topics/adm_users_deleting.html)  
As an administrator, you can delete a TestArchitect user if that user is no longer required.
4.  [Editing a user's profile](/TA_Administration/Topics/adm_users_modifying_profile.html)  
As an administrator, you can edit the data in a repository user's profile.
5.  [Changing a repository user's password](/TA_Administration/Topics/adm_users_changing_password.html)  
As an administrator, you can change the password of a user. This is especially helpful if a user forgets his or her password.
6.  [Setting a repository's user authentication mode](/TA_Administration/Topics/adm_users_setting_authentication_mode.html)  
Choose the means by which users of a given repository are to be authenticated when logging in.
7.  [Assigning projects and permissions to a repository user](/TA_Administration/Topics/adm_users_assigning_repositories.html)  
Repository users can be assigned to one or more projects in the repository, and granted the appropriate permissions in each case.
8.  [Assigning user permissions for a specific project](/TA_Administration/Topics/adm_users_assigning_permissions.html)  
Within a given project, TestArchitect users belonging to the administrators and test managers groups are able to assign user's roles.
9.  [Assigning user permissions for a specific project item](/TA_Administration/Topics/adm_users_assigning_permissions_items.html)  
Designating the **Assigned user** for a project item.



