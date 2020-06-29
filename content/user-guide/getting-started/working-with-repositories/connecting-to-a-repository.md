--- 
title: "Connecting to a repository"
linktitle: "Connecting to a repository"
description: "To work on a given project, you must create a connection to its host repository, whether it exists on a local or remote repository server."
weight: 2
aliases: 
    - /TA_Help/Topics/Getting_started_overview_working_with_TestArchitect_client_connecting.html
keywords: "repositories, connection, connecting"
---

To work on a given project, you must create a connection to its host repository, whether it exists on a local or remote repository server.

1.  In the TestArchitect explorer tree, right-click the **TestArchitect** node, then select **New Repository Connection**.

    ![](/images/TA_Help/Images/ug_connectrepository1.png)

    The Add Repository Connection dialog box appears.

    ![](/images/TA_Help/Images/ug_repositoryserver2.png)

2.  In the **Server** drop-down list, select the repository server to which you want to connect.

    The **Server** drop-down list contains the list of recently-used servers in the form: `{server_name:port}`. Initially \(before any outside repository connections have been set up\), this field displays only `localhost:53400` \(`53400` is the default port use for repository servers\).

3.  If the repository server you want to connect to is not found in the **Server** drop-down list, click **Add** to open the Add Server dialog box.

    1.  Enter the server name or IP address into the **Host name** box.

    2.  In the **Port** box, enter the communication port \(generally 53400\) at which the repository server may be found, and Click **OK**.

        If your entered information is correct, the `{server_name:port}` information is added into the **Server** drop-down list.

    3.  Select the desired server from the **Server** drop-down list.

4.  {{<note>}} Once a repository server is selected in the **Server** drop-down list, the available repositories on that server are displayed in the **Repository** list.

    In the **Repository** list, select the repository you want to connect to. TestArchitect supports connecting to multiple repositories at a time. To do so, select multiple choice in **Repository** list and click **OK**.


Your TestArchitect Client session is now connected to the chosen server and repositories with **Connecting progress** dialog.

![](/images/TA_Help/Images/ug_connectingprogress.png)

**Connecting Status**:

-   **On hold**: The repository is in the queue and waiting to proceed.
-   **In-Progress**: TestArchitect is currently connecting to the repository.
-   **Done**: The connection was a success.
-   **Error**: The connection process has a problem.
-   **Canceled**: The repository connection was canceled.

**Cancel Action**: This action allows you to cancel adding a repository. Additionally, you can use button **Close** to cancel all the repositories.

{{<note>}} Cancel only works if repository is still in the queue, meaning the repository has status **On hold**.

{{<important>}}

If the limit number of concurrent connections to the repository servers is exceeded under your specific TestArchitect license, you will receive the following message:

*The allowed number of connected repository servers has been reached under your license. However, you are still able to interact with TestArchitect. To resolve this issue, please contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com) to upgrade your TestArchitect license to a higher tier.*




**Related information**  


[Troubleshooting power outage-related problems](/user-guide/support/frequently-asked-questions/troubleshooting-power-outage-related-problems)

[Default port numbers and port ranges](/administration-guide/default-port-numbers-and-port-ranges)

