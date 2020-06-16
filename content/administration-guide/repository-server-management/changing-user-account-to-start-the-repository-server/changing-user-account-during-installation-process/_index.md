--- 
title: "Changing user account during installation process to start the Repository Server service"
linktitle: "Changing user account during installation process"
description: "During the installation process, rather than accept the default user account to the repository server, you may specify your desired account to perform that."
weight: 1
aliases: 
    - /TA_Administration/Topics/adm_changing_OS_account_installation.html
keywords: "user account, installation process, start repository sever, repositories, installation process, changing user accounts"
---

During the installation process, rather than accept the default user account to the repository server, you may specify your desired account to perform that.

Ensure that you obtain the TestArchitect installation file for your system.

Do the following to change user account to start the repository server with different user credentials:

1.  Double-click the installation file to launch the installation process, and then follow the instructions to install TestArchitect.

2.  In the Server Configuration dialog box, you may choose between two types of accounts under which the repository server is to be started.

    ![](/images/TA_Administration/Images/changing_user_account.png)

    -   Local System Account: \(Default\) A predefined local account used by the service control manager. This account has privileges on the local computer, acts as the computer on the network, but might have limited network access rights \([Learn more](https://msdn.microsoft.com/en-us/library/windows/desktop/ms684190(v=vs.85).aspx).\)
    -   This account: Specify a local user account, or a domain user account. Ensure that the account belongs to the administrator group of the given machine to allow the Repository Server service to start successfully.

        **Note:**

        -   A local user account has the following name format: ".\\username"\). For example:

            ![](/images/TA_Administration/Images/change_local_user_account.png)

        -   A domain user account has two possible name formats: the distinguished name of the user object in the directory, and the "<domain\>\\<username\>". For example:

            ![](/images/TA_Administration/Images/change_domain_user_account_installation_2.png)

            ![](/images/TA_Administration/Images/change_domain_user_account_installation.png)

        -   Password: Type in the appropriate password for the account provided.
3.  Click **Next**, and then follow next instruction to proceed.


TestArchitect is installed successfully, and the repository server is started with the specified user credentials.


