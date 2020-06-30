--- 
title: "Selecting LDAP authentication mode"
linktitle: "Selecting LDAP authentication mode"
description: "This is where you “flip the switch”, telling TestArchitect that user authentications for a given repository are to be handled not by TestArchitect, but by LDAP."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_LDAP_authentication_modes.html
keywords: "LDAP, authentication modes, LDAP authentication mode"
---

This is where you “flip the switch”, telling TestArchitect that user authentications for a given repository are to be handled not by TestArchitect, but by LDAP.

There are two means by which TestArchitect users may log in to a repository. In both cases, users are required to have explicit accounts \(user names\) residing in the repository.

-   TestArchitect Authentication mode: Users log in with their repository user names and passwords. Authentication is performed directly by TestArchitect.
-   LDAP Authentication mode: Requires the availability of an LDAP-based directory service. Users are authenticated with their system \(e.g., Windows\) logins, thus eliminating the need for a separate login for TestArchitect. \(This is known as single sign-on.\)

{{<important>}} Only one authentication mode may be in effect for a repository at any given time. The chosen mode, established by an administrator of the repository, applies to all users of the repository.

{{<note>}} Before any user can take advantage of LDAP authentication, he/she must first have an LDAP user name. That name must in turn be [mapped to the user's TestArchitect user name](/user-guide/integration-with-third-party-tools/ldap-overview/matching-ldap-user-names-with-repository-user-names) for the working repository.

To select LDAP authentication mode, do the following:

1.  Invoke the [Manage Users](/administration-guide/users-and-passwords/user-administration/invoking-the-manage-users-dialog-box) Manager Users dialog box for a given repository. \(You can do this by right-clicking the **Administration** node and then selecting **Manage Users**.\)

2.  In the Manage Users dialog box, select the LDAP Authentication Mode radio button.

    {{<tip>}} In order to modify the repository's current LDAP connection configuration at this point, click the **LDAP Configuration** button. You will be directed to the LDAP Tool.

    ![](/images/TA_Administration/Images/Manage_users_dlg.png)

3.  Click **OK**.


The repository is now configured to authenticate all users in LDAP authentication mode.

{{<note>}} The process of logging in to TestArchitect with LDAP is somewhat different from logging in with TestArchitect authentication, and is discussed in [Logging in to a repository](/user-guide/getting-started/working-with-repositories/logging-in-to-a-repository).




