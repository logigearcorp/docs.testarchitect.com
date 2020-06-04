--- 
title: "Disconnecting the Quality Center server"
linktitle: "Disconnecting the Quality Center server"
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_4.html
---

If no further connection between a TestArchitect repository and Quality Center is required, you may terminate it.

**Tip:** It should be noted that the following is not an essential process. A connection to a third party tool \(such as Quality Center or Team Foundation Server\) is only active when it is in use. Hence, leaving a tool “connected” only really means that the repository is configured to allow for such a connection to be activated when needed. Also, while it is true that only a single external tool may be connected at a given time, configuring a repository to connect to a new tool has the effect of *automatically* disconnecting any other tool that is already connected.

To disconnect a TestArchitect repository from a Quality Center server:

1.  Expand the repository's **Administration** \> **Tool Profiles** \> **External Tool** node in the TestArchitect explorer tree.

2.  In the expanded list of options, double-click the **Quality Center** node.

3.  In the **Test Management** panel of the **Quality Center** tab, clear the **Active** check box to terminate the connection to Quality Center.

4.  Click **Apply**.


TestArchitect terminates the connection with Quality Center, and the repository is now available to connect with another external tool.

**Parent topic:**[Configuring integration with HP Quality Center](/TA_Help/Topics/Integration_QC_config.html)

**Previous topic:**[Setting up the connection with Quality Center](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server.html)

