--- 
title: "Configuring a repository for LDAP"
linktitle: "Configuring a repository for LDAP"
description: "Connecting a TestArchitect repository to an LDAP-based directory service is your first step in allowing users of the repository to take advantage of LDAP's single sign-on functionality."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_LDAP_connection.html
keywords: "LDAP, connecting to an LDAP Directory, LDAP user name"
---

Connecting a TestArchitect repository to an LDAP-based directory service is your first step in allowing users of the repository to take advantage of LDAP's single sign-on functionality.This process involves setting up the repository to allow it to query the LDAP-based server whenever a user attempts to log in to TestArchitect.

TestArchitect LDAP functionality requires the availability of an LDAP-based directory server \(specifically, one set up with Microsoft Active Directory service\). Users must have entries in the LDAP directory before they can be authenticated on the repository with LDAP.

{{<remember>}} TestArchitect supports the LDAP protocol only through Microsoft Active Directory service.

{{<note>}} Setting up an LDAP-based directory service is beyond the scope of the TestArchitect Help documentation. If a server has not already been set up, consult your system administrator.

To configure a repository for LDAP, you must be a member of the [administrator](/TA_Administration/Topics/User_administration.html) group for that repository.

{{<note>}} It should be emphasized that the following procedure configures your TestArchitect repository for LDAP server access. It need only be performed once per repository.

To establish this configuration, do the following:

1.  Log in to a TestArchitect repository as a member of the [administrator](/TA_Administration/Topics/User_administration.html) group.

2.  In the TestArchitect explorer tree, expand the **Administration** \> **Tool Profiles** \> **LDAP Tool** node.

{{<note>}} Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

3.  In the expanded list, double-click the **LDAP Server** node.

    The **LDAP TOOL** panel appears in the editor.

    ![](/images/TA_Help/Images/LDAP_tool_dlg_1.png)

4.  Enter the appropriate values for Server Settings:

    -   Host: The host name of your LDAP-based directory server.
    -   Port: The port on which your directory server is listening.

{{<remember>}}

        -   By default, port 389 is automatically chosen.
        -   For SSL connections, use port 636.
    -   Connect using SSL: Select this check box if all queries to the directory server are to use an SSL \(Secure Sockets Layer\) connection.
    ![](/images/TA_Help/Images/LDAP_tool_dlg_server_settings.png)

5.  Next, a login is required so that the LDAP server can be accessed by this repository.
6.  Enter values for Authentication Settings:

    -   User Name: The user name of an account \(system user name\) with sufficient privileges on the LDAP server \(see note below\).

{{<note>}} This account will be used for all future user authentication queries submitted from this repository to the server. Hence, it must have read permission for at least that part of the LDAP directory tree, and that user name is not denied on LDAP directory tree.

    -   Password: Password for the LDAP account.

{{<restriction>}} You cannot leave this password field blank. Hence, ensure that the system user account you are using does not have a blank password, or first provide that account with a password.

    ![](/images/TA_Help/Images/LDAP_tool_dlg_authentication_settings.png)

7.  Enter Base DN value in LDAP Schema Settings.

    The Base Distinguished Name \(Base DN\) corresponds to a node in the LDAP directory tree. By specifying a Base DN, you can restrict authentication queries to only those subnodes that reside below that point \(as opposed to all subnodes under the root\). This reduces the time and overhead of such queries, since it narrows downs the scope of the search.

{{<note>}}

    -   If no value is supplied for Base DN, LDAP queries start from root.
    -   See your network administrator if you do not already have the following information in hand:
        -   Base DN: The root distinguished name \(DN\) to use when running queries against the directory server. Specify the base DN in the following format: `dc=domain1,dc=local`, replacing domain1 and local with your specific configuration.
        -   Group DN: This value can be used in addition to the base DN when searching and loading groups. If no value is supplied, the subtree search is started from the base DN. Example: ou=Groups.
    ![](/images/TA_Help/Images/LDAP_tool_dlg_base_DN.png)

8.  After entering the relevant settings, authentication can be tested by clicking the **Test Connection** button. This provides feedback on whether the LDAP server was reachable and if the authentication was a success or failure.

{{<important>}} If you have opted to use an SSL connection, and your LDAP-based directory server's identity has not been verified by a trusted third-party, or the SSL certificate installed on your client machine has expired, TestArchitect displays a Verify Certificate alert. To install the SSL certificate, click the **Accept** button.

    ![](/images/TA_Help/Images/LDAP_verify_cert_dlg.PNG)

9.  Click **Apply**.


Upon a successful test, your TestArchitect repository is properly configured to allow for authentication queries to be sent to the LDAP server.

Before users can log in to a repository with LDAP authentication, LDAP Authentication mode must be in effect for that repository. If LDAP authentication has not yet been activated, see [Selecting LDAP authentication mode](/TA_Help/Topics/ug_LDAP_authentication_modes.html).



