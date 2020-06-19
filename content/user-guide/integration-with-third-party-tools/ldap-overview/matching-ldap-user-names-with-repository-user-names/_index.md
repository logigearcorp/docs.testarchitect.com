--- 
title: "Matching LDAP user names with repository user names"
linktitle: "Matching LDAP user names with repository user names"
description: "Regardless of whether user authentications for a repository are performed by TestArchitect or LDAP, it is the TestArchitect user name that determines which permissions are granted to each user. Hence, to use LDAP, it is necessary to associate the LDAP user name of each user of the repository with his/her TestArchitect user name."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_LDAP_matching_user_name.html
keywords: "LDAP, matching to a TestArchitect user name"
---

Regardless of whether user authentications for a repository are performed by TestArchitect or LDAP, it is the TestArchitect user name that determines which permissions are granted to each user. Hence, to use LDAP, it is necessary to associate the LDAP user name of each user of the repository with his/her TestArchitect user name.

To map repository user names to LDAP user names other than your own, you must be a member of the [administrator](/TA_Administration/Topics/User_administration.html) group for that repository.

**Note:** This is not an essential administrative task. Once a repository is configured for LDAP authentication mode, any repository user attempting to log in will be queried for his/her LDAP user name, if that account has not already been configured for LDAP. In either case, the link need only be established once, after which LDAP authentication takes place automatically.

To map a given TestArchitect repository user name to an LDAP user name, perform the following:

1.  Invoke the [Manage Users](/TA_Administration/Topics/adm_users_invoking_Manage_Users.html) dialog box. \(In the TestArchitect explorer tree, right-click the **Administration** node and then select **Manage Users**.\)

2.  From the Users panel, select a TestArchitect user name.

    **Restriction:** The administrator account of a repository may not be mapped to an LDAP user name, as administrator is a super administrator and a built-in account of TestArchitect.

3.  Select the **Profile** tab.

4.  In the **LDAP User Name** box, enter the LDAP user name that is to be mapped to the repository user name.

    **Note:**

    -   Within a repository, only one TestArchitect user name may be mapped to a given LDAP user name. \(Note, however, that this does not restrict you from concurrently allowing a different TestArchitect user name of a different repository to be mapped to the same LDAP user name.\)
    -   In order to modify the repository's current LDAP connection configuration at this point, click the **LDAP Configuration** button. You will be directed to the LDAP Tool.
    ![](/images/TA_Administration/Images/editing_profile.png)

5.  Click **Apply** to perform the mapping.

6.  Click **OK** to close the dialog box.


**Tip:** To map a newly created TestArchitect user name to LDAP, refer to [Creating a TestArchitect user](/TA_Administration/Topics/adm_users_creating.html) for details.



