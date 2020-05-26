--- 
title: "Setting a repository's user authentication mode"
linktitle: "Setting a repository's user authentication mode"
weight: 6
aliases: 
    - /TA_Administration/Topics/adm_users_setting_authentication_mode.html
---
# Setting a repository's user authentication mode {#task.adm.set_authentication_mode .task}

Choose the means by which users of a given repository are to be authenticated when logging in.

**Note:** Setting up LDAP authentication for a repository requires the successful deployment of an LDAP-based directory server, and proper configuration of both the repository and its user accounts. For full details, see [LDAP overview](../../TA_Help/Topics/ug_LDAP_overview.html).

There are two means by which TestArchitect users may log in to a repository. In both cases, users are required to have explicit accounts \(user names\) residing in the repository.

-   TestArchitect Authentication mode: Users log in with their repository user names and passwords. Authentication is performed directly by TestArchitect.
-   LDAP Authentication mode: Requires the availability of an LDAP-based directory service. Users are authenticated with their system \(e.g., Windows\) logins, thus eliminating the need for a separate login for TestArchitect. \(This is known as single sign-on.\)

**Important:** Only one authentication mode may be in effect for a repository at any given time. The chosen mode, established by an administrator of the repository, applies to all users of the repository.

1.  Log in to a repository with an account belonging to the TestArchitect [administrator](User_administration.html) group.

    **Important:** Only TestArchitect users belonging to the administrator group have the right to modify the repository's authentication mode.

2.  Invoke the [Manage Users](../../reuse/../TA_Administration/Topics/adm_users_invoking_Manage_Users.html) Manager Users dialog box for a given repository. \(You can do this by right-clicking the **Administration** node and then selecting **Manage Users**.\)

3.  Select an authentication mode at the bottom of the Manage Users dialog box:

    ![](../Images/Manage_users_dlg.png)

4.  Click **OK**.


**Parent topic:**[User administration](../../TA_Administration/Topics/User_administration.html)

**Previous topic:**[Changing a repository user's password](../../TA_Administration/Topics/adm_users_changing_password.html)

**Next topic:**[Assigning projects and permissions to a repository user](../../TA_Administration/Topics/adm_users_assigning_repositories.html)

