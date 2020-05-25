--- 
title: "Displaying test results in a browser"
linktitle: "Displaying test results in a browser"
aliases: 
    - /TA_Help/Topics/ug_MTM_open_result_web.html
---
# Displaying test results in a browser {#task_w1j_drb_qs .task}

TestArchitect test results may be opened in a web browser on any machine. TestArchitect need not be installed to view the results.

Ensure that the following requirements are met:

-   The repository server that hosts the results is installed and running. \([Learn more](../../TA_Administration/Topics/Starting_repository_server.html).\)
-   The machine used to open the test results exists on the same network as the repository server.
-   TA Utility Server is running on the repository server. \([Learn more](../../TA_Administration/Topics/TA_Utility_Server.html).\)

To open a TestArchitect test result within a browser, do the following:

1.  Retrieve and copy the web link address of the TestArchitect [repository test results](Test_result_storing.html) from one of the following:

    -   In TestArchitect, from the **Web Link** field on the **Information** tab of the result, or

        ![](../Images/ug_web_link_results.png)

    -   In MTM, from the test case result attachment with the .url extension.

        ![](../Images/ug_web_link_results_MTM.png)

    **Tip:** The prefix of the web link address containing the `[IP address]:[Dashboard port number]` snippet is dynamic. That is, based on the host computer and the port of the dashboard where the repository resides, the IP address and dashboard port number values are set automatically.

2.  Start a browser, and then paste the copied link into that browser.

3.  Press Enter.

4.  On the Dashboard Login page, enter your username and password for the applicable TestArchitect repository, and then click **Login**.

    ![](../Images/ug_MTM_DB.png)


The HTML-formatted test result is opened in the browser.

**Tip:** If you have TestArchitect Client installed, clicking the **Navigate to source result in repository** link allows you to view the original test result within TestArchitect Client.

![](../Images/ug_MTM_result.png)

**Parent topic:**[Additional features of TFS-MTM](../../TA_Help/Topics/ug_MTM_features.html)

**Previous topic:**[Switching to a different Team Foundation Server account](../../TA_Help/Topics/ug_MTM_switching_TFS_account.html)

**Next topic:**[Specifying a value for Team Foundation Server build number field](../../TA_Help/Topics/ug_MTM_build_number_field.html)

