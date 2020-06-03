--- 
title: "Changing user account to start the repository server"
linktitle: "Changing user account to start the repository server"
weight: 14
aliases: 
    - /TA_Administration/Topics/adm_changing_OS_account.html
---

The repository server requires user accounts with granted permission to be started.

By default, TestArchitect uses the current login user account to start the Repository Server service. However, sometimes the account might not have enough permission to start this service. It is possible that you can change user account to start the service either during the installation process, or via the Repository Server Control Panel dialog box

**Restriction:** This option is only available on the repository server running on Windows machines.

-   **[Changing user account during installation process to start the Repository Server service](/TA_Administration/Topics/adm_changing_OS_account_installation.html)**  
During the installation process, rather than accept the default user account to the repository server, you may specify your desired account to perform that.
-   **[Changing user account via the Repository Server Control Panel dialog box to start the Repository Server service](/TA_Administration/Topics/adm_changing_OS_account_RS_dlg.html)**  
If, during the installation process, you do not specify a desired user account to start the repository server, you are still allowed to change a different user account from the Repository Server Control Panel dialog box.

**Parent topic:**[Repository Server Management](/TA_Administration/Topics/Repo_server_management.html)

**Previous topic:**[Setting Java heap size](/TA_Administration/Topics/Repo_setting_heap_size.html)

**Next topic:**[TestArchitect Utility Server](/TA_Administration/Topics/TA_Utility_Server.html)

