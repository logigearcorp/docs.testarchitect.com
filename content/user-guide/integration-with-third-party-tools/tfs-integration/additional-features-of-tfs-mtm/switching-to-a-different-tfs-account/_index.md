--- 
title: "Switching to a different Team Foundation Server account"
linktitle: "Switching to a different TFS account"
weight: 4
aliases: 
    - /TA_Help/Topics/ug_MTM_switching_TFS_account.html
---

When making queries to a TFS server from a TestArchitect repository, you need a TFS account to authenticate the query. If necessary, you have the option of switching from the current TFS account to a different account.

Ensure that the following requirements are met:

-   Your TestArchitect repository is configured for a connection with Team Foundation Server. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html).\)

To switch to a different account, carry out the following steps:

1.  In the TestArchitect explorer tree, right-click a project node, then select **Switch Team Foundation Server Account**.

2.  In the Team Foundation Server Authentication dialog box, select Domain Credentials from the **Authentication Mode** box and then and then enter your TFS user name and password.

3.  Click **OK**.

    If authentication succeeds, a confirmation dialog box to that effect is displayed.

4.  Click **OK** to close the confirmation dialog box.


**Parent topic:**[Additional features of TFS-MTM](/TA_Help/Topics/ug_MTM_features.html)

**Previous topic:**[Upgrading build assemblies of the TestArchitect plug-in](/TA_Help/Topics/ug_MTM_upgrading_assemblies.html)

**Next topic:**[Displaying test results in a browser](/TA_Help/Topics/ug_MTM_open_result_web.html)

