--- 
title: "Displaying test results in a browser"
linktitle: "Displaying test results in a browser"
description: "TestArchitect test results may be opened in a web browser on any machine. TestArchitect need not be installed to view the results."
weight: 5
aliases: 
    - /TA_Help/Topics/ug_MTM_open_result_web.html
keywords: "integration, MTM, opening results on browser, opening results on browser, Microsoft Test Manager, opening results on browser"
---

TestArchitect test results may be opened in a web browser on any machine. TestArchitect need not be installed to view the results.

Ensure that the following requirements are met:

-   The repository server that hosts the results is installed and running. \([Learn more](/administration-guide/repository-server-management/starting-and-stopping-the-repository-server/starting-the-repository-server).\)
-   The machine used to open the test results exists on the same network as the repository server.
-   TA Utility Server is running on the repository server. \([Learn more](/administration-guide/repository-server-management/testarchitect-utility-server).\)

To open a TestArchitect test result within a browser, do the following:

1.  Retrieve and copy the web link address of the TestArchitect [repository test results](/user-guide/working-with-test-results/adding-test-results-to-the-repository/) from one of the following:

    -   In TestArchitect, from the **Web Link** field on the **Information** tab of the result, or

        ![](/images/TA_Help/Images/ug_web_link_results.png)

    -   In MTM, from the test case result attachment with the .url extension.

        ![](/images/TA_Help/Images/ug_web_link_results_MTM.png)

    {{<tip>}} The prefix of the web link address containing the `[IP address]:[Dashboard port number]` snippet is dynamic. That is, based on the host computer and the port of the dashboard where the repository resides, the IP address and dashboard port number values are set automatically.

2.  Start a browser, and then paste the copied link into that browser.

3.  Press Enter.

4.  On the Dashboard Login page, enter your username and password for the applicable TestArchitect repository, and then click **Login**.

    ![](/images/TA_Help/Images/ug_MTM_DB.png)


The HTML-formatted test result is opened in the browser.

{{<tip>}} If you have TestArchitect Client installed, clicking the **Navigate to source result in repository** link allows you to view the original test result within TestArchitect Client.

![](/images/TA_Help/Images/ug_MTM_result.png)




