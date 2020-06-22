--- 
title: "Registering a JIRA server"
linktitle: "Registering a JIRA server"
description: "Establishing a connection between your TestArchitect repository and the JIRA server."
weight: 1
aliases: 
    - /TA_Help/Topics/JIRA_registering.html
keywords: "JIRA, establishing connection, integration"
---

Establishing a connection between your TestArchitect repository and the JIRA server.

Ensure that you have the following JIRA server information available:

-   URL to JIRA server.
-   JIRA login credentials.

{{<note>}}

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To register a JIRA server with your TestArchitect repository, do the following:

1.  Under the appropriate repository node of the TestArchitect explorer tree, expand the subtree **Administration** \> **Tool Profiles** \> **External Tool** \> **Bug Tracker**.

{{<note>}} Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

2.  In the expanded list of options, double-click **Jira**.

3.  In the Bug Tracker window, select the **Active** check box to enable the JIRA connection.

4.  Enter the following information:

    -   **Available options**: List of options as described below, separated by semicolons:

        -   server=\[JIRA server URL\]: \(Required\) Full URL of the JIRA server, including HTTP://

{{<restriction>}} HTTPS is not supported.

        -   user=\[JIRA user name\]: \(Required\) Default JIRA user name to log on with.

{{<tip>}} It is recommended that the administrator create a common JIRA account available to everyone, and configure the repository to use that as the default account. Note that users with individual JIRA accounts have the option to override the default credentials when they are working with JIRA integration.

        -   auto fetch data=\[24-hour format\]: \(Optional\) Daily time at which TestArchitect is to retrieve external bug information from the JIRA server and update the registered TA bugs.
        Example: server=http://192.168.167.74; user=Joe.Doe; auto fetch data=18:00

    -   **Notes**: \(Optional\) Enter any notes.
5.  Click **Apply**.

6.  In the Enter Password dialog box, enter the JIRA password for the **user** that was entered in the **Available options** field, and then click OK.

{{<note>}} The entered password is not verified at this point.


The connection between TestArchitect and JIRA server is established.



