--- 
title: "Creating a repository user"
linktitle: "Creating a repository user"
description: "As an administrator, you can create a TestArchitect user for a repository. You may also match that TestArchitect user to an existing LDAP user, if needed."
weight: 2
aliases: 
    - /TA_Administration/Topics/adm_users_creating.html
keywords: "user administration, creating a user"
---

As an administrator, you can create a TestArchitect user for a repository. You may also match that TestArchitect user to an existing LDAP user, if needed.

To create a TestArchitect user, do the following:

1.  Invoke the [Manage Users](/reuse/../TA_Administration/Topics/adm_users_invoking_Manage_Users.html) Manager Users dialog box for a given repository. \(You can do this by right-clicking the **Administration** node and then selecting **Manage Users**.\)

2.  In the Manage Users dialog box, click the **Add user** button.

    The New User dialog box appears.

    ![](/images/TA_Administration/Images/New_User_dlg.png)

3.  In the New User dialog box, enter the following information:

    -   Name: \(Required\) Specify a TestArchitect user name for logging in.
    -   LDAP User Name: \(Optional\) Specify an existing LDAP user name to map to this TestArchitect user name. This field is essential only if the repository is configured to employ LDAP authentication for user logins.

{{<note>}}

        -   If the repository is already configured for [LDAP authentication](/TA_Help/Topics/ug_LDAP_connection.html), the domain name is auto-filled in.
        -   Within a repository, only one TestArchitect user name may be mapped to a given LDAP user name. \(Note, however, that this does not restrict you from concurrently allowing a different TestArchitect user name of a different repository to be mapped to the same LDAP user name.\)
    -   First Name, Last Name, Email, Phone: \(Optional\) Additional user information.
4.  Click **Create**.

{{<note>}} If you have entered an LDAP user name but it is already mapped to another TestArchitect user name, an error message appears. Click **OK** and then select a different LDAP user name.

    ![](/images/TA_Administration/Images/LDAP_error_message_1.png)

5.  At this point, you have the option to change the authentication mode used by the repository. See [Setting a repository's user authentication mode](/TA_Administration/Topics/adm_users_setting_authentication_mode.html).





