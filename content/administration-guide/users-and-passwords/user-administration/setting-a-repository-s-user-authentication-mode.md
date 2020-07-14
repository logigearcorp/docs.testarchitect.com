--- 
title: "Setting a repository's user authentication mode"
linktitle: "Setting a repository's user authentication mode"
description: "Choose the means by which users of a given repository are to be authenticated when logging in."
weight: 6
aliases: 
    - /TA_Administration/Topics/adm_users_setting_authentication_mode.html
keywords: "user administration, assigning permissions, a specific project"
---

Choose the means by which users of a given repository are to be authenticated when logging in.

{{<note>}} Setting up LDAP authentication for a repository requires the successful deployment of an LDAP-based directory server, and proper configuration of both the repository and its user accounts. For full details, see [LDAP overview](/user-guide/integration-with-third-party-tools/ldap-overview/).

There are two means by which TestArchitect users may log in to a repository. In both cases, users are required to have explicit accounts \(user names\) residing in the repository.

-   TestArchitect Authentication mode: Users log in with their repository user names and passwords. Authentication is performed directly by TestArchitect.
-   LDAP Authentication mode: Requires the availability of an LDAP-based directory service. Users are authenticated with their system \(e.g., Windows\) logins, thus eliminating the need for a separate login for TestArchitect. \(This is known as single sign-on.\)

{{<important>}} Only one authentication mode may be in effect for a repository at any given time. The chosen mode, established by an administrator of the repository, applies to all users of the repository.

1.  Log in to a repository with an account belonging to the TestArchitect [administrator](/administration-guide/users-and-passwords/user-administration/) group.

    {{<important>}} Only TestArchitect users belonging to the administrator group have the right to modify the repository's authentication mode.

2.  Invoke the [Manage Users](/administration-guide/users-and-passwords/user-administration/invoking-the-manage-users-dialog-box) Manager Users dialog box for a given repository. \(You can do this by right-clicking the **Administration** node and then selecting **Manage Users**.\)

3.  Select an authentication mode at the bottom of the Manage Users dialog box:

    ![](/images/TA_Administration/Images/Manage_users_dlg.png)

4.  Click **OK**.





