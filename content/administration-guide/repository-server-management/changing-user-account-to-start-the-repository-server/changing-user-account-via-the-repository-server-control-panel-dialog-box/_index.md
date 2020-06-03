--- 
title: "Changing user account via the Repository Server Control Panel dialog box to start the Repository Server service"
linktitle: "Changing user account via the Repository Server Control Panel dialog box"
weight: 2
aliases: 
    - /TA_Administration/Topics/adm_changing_OS_account_RS_dlg.html
---

If, during the installation process, you do not specify a desired user account to start the repository server, you are still allowed to change a different user account from the Repository Server Control Panel dialog box.

Do the following to change user account to start the repository server with different user credentials:

1.  Open the [Repository Server Control Panel](Repo_server_management_launching.html) dialog box.

2.  On the toolbar, click **Options...** ![](/images//Images/set_java_heap_size_btn.png)

    The Options dialog box appears.

    ![](/images//Images/Options_java_heap_size_dialog.png)

3.  In the Repository Server Run As User panel, you may choose among two types of accounts to start the repository server.

    -   Local System Account: \(Default\) A predefined local account used by the service control manager. This account has privileges on the local computer, acts as the computer on the network, but might have limited network access rights \([Learn more](https://msdn.microsoft.com/en-us/library/windows/desktop/ms684190(v=vs.85).aspx).\)
    -   This account: Specify a local user account, or a domain user account. Ensure that the account belongs to the administrator group of the given machine to allow the Repository Server service to start successfully.

        **Note:**

        -   A local user account has the following name format: ".\\username"\). For example:

            ![](/images//Images/change_loca_user_account_RS.png)

        -   A domain user account has two possible name formats: the distinguished name of the user object in the directory, and "<domain\>\\<username\>". Examples:

            ![](/images//Images/change_domain_user_account_2.png)

            ![](/images//Images/change_domain_user_account.png)

        -   Password: Enter a password for the account provided.
        -   Confirm Password: Retype the password.
    **Tip:** Click the **Reset** button on the dialog box to restore all modified fields to their default settings.

4.  Click **OK**.

    Changing the user account automatically restarts the repository server. All access to the server is temporarily disabled while the server restarts. Server requests made during this time will be rerouted to a [replication server](Repo_server_management_replication_repo_intro.html), if one is available.

    **Important:** If user credential verification fails when starting the repository server service, ensure that you password is correct, or the specified user account has permission to start the service. \([Learn more](https://technet.microsoft.com/en-us/library/cc794944(v=ws.10).aspx).\)

5.  In the confirmation dialog box, click **Yes**.

    ![](/images//Images/change_user_account_confirmation.png)


The repository server is restarted successfully with new user credentials.

**Parent topic:**[Changing user account to start the repository server](/TA_Administration/Topics/adm_changing_OS_account.html)

