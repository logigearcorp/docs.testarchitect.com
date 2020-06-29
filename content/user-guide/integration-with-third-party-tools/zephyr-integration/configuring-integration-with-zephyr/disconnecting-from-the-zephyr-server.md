--- 
title: "Disconnecting from the Zephyr server"
linktitle: "Disconnecting from the Zephyr server"
description: "If it is no longer required, you may terminate the connection between the Zephyr server and your TestArchitect repository."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Zephyr_disconnection.html
keywords: "integration, Zephyr, terminating connection, terminating connection"
---

If it is no longer required, you may terminate the connection between the Zephyr server and your TestArchitect repository.

{{<tip>}} It should be noted that the following is not an essential process. A connection to a third party tool \(such as Quality Center or Team Foundation Server\) is only active when it is in use. Hence, leaving a tool “connected” only really means that the repository is configured to allow for such a connection to be activated when needed. Also, while it is true that only a single external tool may be connected at a given time, configuring a repository to connect to a new tool has the effect of *automatically* disconnecting any other tool that is already connected.

{{<important>}} TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

To disconnect TestArchitect from a Zephyr server, do the following:

1.  In the TestArchitect explorer tree, expand the **Administration** \> **Tool Profiles** \> **External Tool** \> **Test Management** node.

    {{<note>}} Only TestArchitect users belonging to the administrator group are able to view and modify the **Administration** node in the explorer tree.

2.  In the expanded list of options, double-click the **Zephyr** node.

    The **Test Management** tab appears in the editor.

3.  Clear the **Active** check box to terminate the connection to Zephyr.

4.  Click **Apply**.


TestArchitect terminates the connection with Zephyr, and is now available to connect with another external tool.



