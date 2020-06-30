--- 
title: "Logging in to a repository as a different user"
linktitle: "Logging in to a repository as a different user"
description: "When logged in to a repository, you have the option, in a one-step procedure, of logging yourself out and then logging back in as a different user."
weight: 5
aliases: 
    - /TA_Help/Topics/ug_logging_as_different_user.html
keywords: "repositories, logging as different user, logging to repositories as different user"
---

When logged in to a repository, you have the option, in a one-step procedure, of logging yourself out and then logging back in as a different user.

To log in to a repository as a different user, do the following:

1.  In the TestArchitect explorer tree, right-click the repository node that you are currently logged in to and then select **Log in as Different User**.

    {{<note>}} Alternatively, from the **Repository** menu, click **Log in as Different User**.

2.  In the **User Name** box, depending on the authentication mode currently in effect, enter your LDAP user name or your TestArchitect user name.

    The default user name of administrator is applicable to both authentication modes. administrator is a super administrator and a built-in account in TestArchitect.

    {{<remember>}} Your LDAP user name is the same as your system user name – that is, the name you use to log in to your PC.

3.  In the **Password** box, type your password.

    Note that the default password for the administrator is blank.

    ![](/images/TA_Help/Images/ug_repo_login.png)

4.  Click **OK**.

    {{<note>}}

    -   If using TestArchitect authentication mode:
        -   You may click the **Change Password** button to change your password.
        -   Select the **Remember me on this computer** check box to save your login information, so that you are automatically logged in to this repository when you launch TestArchitect in subsequent sessions.
    -   If LDAP Authentication mode is in effect:
        -   The **Change Password** and **Remember me on this computer** options are unavailable.

            {{<note>}} Your LDAP password always remains identical to your system password, and cannot be changed from an application. **Remember me on this computer** is not available because your are automatically remembered.

        -   **Troubleshooting:** In the event that the LDAP server is down or the LDAP-based directory service is otherwise unavailable, you will be prevented from logging in to the repository. In that case, you will need someone with super administrator permissions for that repository to log into it and [change your authentication mode](/administration-guide/users-and-passwords/user-administration/setting-a-repository-s-user-authentication-mode).
5.  \(LDAP authentication mode only\) If the entered LDAP user name has not been mapped to any TestArchitect user name, the following message appears.

    ![](/images/TA_Help/Images/LDAP_error.png)

    1.  Click **OK**.

    2.  In the Match LDAP and TestArchitect Users dialog box, specify the TestArchitect user name and the password to be matched, and then click **OK**.

        ![](/images/TA_Help/Images/Match_LDAP_and_TA_users.png)




