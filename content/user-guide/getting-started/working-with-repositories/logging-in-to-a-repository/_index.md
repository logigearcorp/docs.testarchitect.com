--- 
title: "Logging in to a repository"
linktitle: "Logging in to a repository"
weight: 3
aliases: 
    - /TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_logging.html
---

After connecting to a repository, your final step before being granted access to its contents is to log in to it.

Once you have connected to a repository, it is added to the TestArchitect explorer tree in TestArchitect Client. You can now log in to the repository.

**Note:** There are two possible authentication modes for logging in to a repository:

-   TestArchitect Authentication mode: Users log in with their repository user names and passwords. Authentication is performed directly by TestArchitect.
-   LDAP Authentication mode: Requires the availability of an LDAP-based directory service. Users are authenticated with their system \(e.g., Windows\) logins, thus eliminating the need for a separate login for TestArchitect. \(This is known as single sign-on.\)

By default, repositories are configured for TestArchitect authentication mode. If you are an administrator of your repository, you may set it up for LDAP authentication, provided that your organization has already set up an LDAP-based directory server with the necessary user account\(s\). For more on setting up a repository for LDAP authentication, see [LDAP overview](/TA_Help/Topics/ug_LDAP_overview.html).

1.  In the TestArchitect explorer tree, double-click a repository node.

    The Log In To Repository <Name of Repository\> dialog box appears.

2.  In the **User Name** box, depending upon the current authentication mode the repository is configured for, enter your LDAP user name or your TestArchitect user name.

    The default user name, administrator, is applicable to both authentication modes. administrator is a super administrator and a built-in account in TestArchitect.

3.  In the **Password** box, type your password.

    Note that the default password for the administrator is blank.

    ![](/images//Images/ug_repo_login.png)

4.  Click **OK**.

    **Note:**

    -   If using TestArchitect authentication mode:
        -   You may click the **Change Password** button to change your password.
        -   Select the **Remember me on this computer** check box to save your login information, so that you are automatically logged in to this repository when you launch TestArchitect in subsequent sessions.
    -   If LDAP Authentication mode is in effect:
        -   The **Change Password** and **Remember me on this computer** options are unavailable.

            **Note:** Your LDAP password always remains identical to your system password, and cannot be changed from an application. **Remember me on this computer** is not available because your are automatically remembered.

        -   **Troubleshooting:** In the event that the LDAP server is down or the LDAP-based directory service is otherwise unavailable, you will be prevented from logging in to the repository. In that case, you will need someone with super administrator permissions for that repository to log into it and [change your authentication mode](/TA_Administration/Topics/adm_users_setting_authentication_mode.html).
5.  \(LDAP authentication mode only\) If the entered LDAP user name has not been mapped to any TestArchitect user name, the following message appears.

    ![](/images//Images/LDAP_error.png)

    1.  Click **OK**.

    2.  In the Match LDAP and TestArchitect Users dialog box, specify the TestArchitect user name and the password to be matched, and then click **OK**.

        ![](/images//Images/Match_LDAP_and_TA_users.png)


If your login is successful, that repository's node in the explorer tree is expanded, displaying the projects residing in it.

**Parent topic:**[Working with repositories](/TA_Help/Topics/Getting_started_overview_working_with_repositories.html)

**Previous topic:**[Connecting to a repository](/TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_connecting.html)

**Next topic:**[Disconnecting from a repository](/TA_Help/Topics/ug_Repository_disconnecting.html)

