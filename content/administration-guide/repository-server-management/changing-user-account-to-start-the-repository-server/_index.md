--- 
title: "Changing user account to start the repository server"
linktitle: "Changing user account to start the repository server"
description: "The repository server requires user accounts with granted permission to be started."
weight: 14
aliases: 
    - /TA_Administration/Topics/adm_changing_OS_account.html
keywords: "user account, start repository sever, repositories, changing user accounts"
---

The repository server requires user accounts with granted permission to be started.

By default, TestArchitect uses the current login user account to start the Repository Server service. However, sometimes the account might not have enough permission to start this service. It is possible that you can change user account to start the service either during the installation process, or via the Repository Server Control Panel dialog box

{{<restriction>}} This option is only available on the repository server running on Windows machines.

-   **[Changing user account during installation process to start the Repository Server service](/administration-guide/repository-server-management/changing-user-account-to-start-the-repository-server/changing-user-account-during-installation-process)**  
During the installation process, rather than accept the default user account to the repository server, you may specify your desired account to perform that.
-   **[Changing user account via the Repository Server Control Panel dialog box to start the Repository Server service](/administration-guide/repository-server-management/changing-user-account-to-start-the-repository-server/changing-user-account-via-the-repository-server-control-panel-dialog-box)**  
If, during the installation process, you do not specify a desired user account to start the repository server, you are still allowed to change a different user account from the Repository Server Control Panel dialog box.




