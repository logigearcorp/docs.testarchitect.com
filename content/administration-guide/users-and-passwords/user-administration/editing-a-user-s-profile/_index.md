--- 
title: "Editing a user's profile"
linktitle: "Editing a user's profile"
weight: 4
aliases: 
    - /TA_Administration/Topics/adm_users_modifying_profile.html
---

As an administrator, you can edit the data in a repository user's profile.

To edit a repository user's profile, do the following:

1.  Invoke the [Manage Users](/images//Images/TA_Administration/Topics/adm_users_invoking_Manage_Users.html) Manager Users dialog box for a given repository. \(You can do this by right-clicking the **Administration** node and then selecting **Manage Users**.\)

2.  From the Users panel, select a user account which is to have its information modified.

    **Restriction:** You are not allowed to modify the administrator user name's data, since it is a super administrator and a built-in account in TestArchitect.

3.  Select the **Profile** tab.

4.  Enter the following information:

    -   LDAP User Name: \(Optional\) Specify an existing LDAP user name to map to this TestArchitect user name. This field is essential only if the repository is configured to employ LDAP authentication for user logins.

        **Note:**

        -   If the repository is already configured for [LDAP authentication](/TA_Help/Topics/ug_LDAP_connection.html), the domain name is auto-filled in.
        -   Within a repository, only one TestArchitect user name may be mapped to a given LDAP user name. \(Note, however, that this does not restrict you from concurrently allowing a different TestArchitect user name of a different repository to be mapped to the same LDAP user name.\)
    -   First Name, Last Name, Email, Phone: \(Optional\) Additional user information.
    ![](/images//Images/editing_profile.png)

5.  Click **Apply**.


**Parent topic:**[User administration](/TA_Administration/Topics/User_administration.html)

**Previous topic:**[Deleting a repository user](/TA_Administration/Topics/adm_users_deleting.html)

**Next topic:**[Changing a repository user's password](/TA_Administration/Topics/adm_users_changing_password.html)

