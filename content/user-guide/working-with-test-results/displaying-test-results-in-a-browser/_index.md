--- 
title: "Displaying test results in a browser"
linktitle: "Displaying test results in a browser"
weight: 13
aliases: 
    - /TA_Help/Topics/ug_test_results_open_in_browser.html
---

TestArchitect test results may be opened in a web browser on any machine. TestArchitect need not be installed to view the results.

Ensure that the following requirements are met:

-   The repository server that hosts the results is installed and running. \([Learn more](/TA_Administration/Topics/Starting_repository_server.html).\)
-   The machine used to open the test results exists on the same network as the repository server.
-   TA Utility Server is running on the repository server. \([Learn more](/TA_Administration/Topics/TA_Utility_Server.html).\)

To open a TestArchitect test result within a browser, do the following:

1.  In TestArchitect, retrieve and copy the web link address of the TestArchitect [repository test results](Test_result_storing.html) from the **Web Link** field on the **Information** tab.

    ![](/images//Images/ug_web_link_results.png)

    **Tip:** The prefix of the web link address containing the `[IP address]:[Dashboard port number]` snippet is dynamic. That is, based on the host computer and the port of the dashboard where the repository resides, the IP address and dashboard port number values are set automatically.

2.  Start a browser, and then paste the copied link into that browser.

3.  Press Enter.

4.  On the Dashboard Login page, enter your username and password for the applicable TestArchitect repository, and then click **Login**.

    ![](/images//Images/ug_MTM_DB.png)


The HTML-formatted test result is opened in the browser.

**Tip:** If you have TestArchitect Client installed, clicking the **Navigate to source result in repository** link allows you to view the original test result within TestArchitect Client.

![](/images//Images/ug_MTM_result.png)

The HTML test result link is valid throughout your network, and hence the web page is accessible to anyone with the proper repository credentials. After retrieving the link from the **Web Link** field of the repository test result, you can share it with others, such as via email.

**Parent topic:**[Working with test results](/TA_Help/Topics/Test_result.html)

**Previous topic:**[Receiving test results of remote test execution](/TA_Help/Topics/Test_result_remote.html)

**Next topic:**[Distributed result storage](/TA_Help/Topics/Test_result_distributed_storage.html)

