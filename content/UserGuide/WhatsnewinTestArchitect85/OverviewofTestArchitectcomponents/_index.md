--- 
title: "**Overview of TestArchitect components**"
linktitle: "Overview of TestArchitect components"
aliases: 
    - /TA_InstallationGuide/DITA_source/Topics/inst_TA_components.html
---
# **Overview of TestArchitect components** {#concept_uh5_jbp_zw .concept}

The basic TestArchitect infrastructure includes Repository Server, License Server, client machines, and execution machines.

|Component|Description|
|---------|-----------|
|[Repository Server](../../../TA_Tutorials/Topics/Repository_basics.html)|The component responsible for managing one or more TestArchitect repositories. Each repository holds the test assets for one or more of your test projects. You can choose to have a repository server running on your local machine, along with TestArchitect Client. You may also connect to repositories hosted on other machines on your network, possibly including machines dedicated to hosting TestArchitect repositories.**Note:**

-   It is possible to set up a [Replication Repository Server](../../../TA_Administration/Topics/Repo_server_management_replication_repo_intro.html), which is highly desirable in the event that the primary repository server, for whatever reason, becomes unavailable.
-   The Repository Server also manages other TestArchitect components, such as [Lab Manager](../../../TA_Help/Topics/Lab_manager.html) and [Dashboard](../../../TA_Help/Topics/Dashboard_intro.html)

|
|[License Server](../../../TA_Administration/Topics/LS_TA_managing_start_stop.html)|Responsible for issuing licenses to your client machines and test controllers. You can manage your purchased licenses using this tool's control panel.**Note:** It is possible to set up a [Redundant License Server](../../../TA_Administration/Topics/LS_TA_managing_creating_redundant_license.html), which is highly desirable in the event that the primary license server, for whatever reason, becomes unavailable.

|
|Client machine|A workstation having TestArchitect Client installed, from which you can author tests, direct the execution of tests, generate reports, etc.|
|Execution machine|Real or virtual machine which has TestArchitect Controller and necessary automation libraries installed, and which can be used to execute tests, either locally or on attached mobile devices.

Note that any client machine \(with TestArchitect Client installed\) also has TestArchitect Controller installed, and so can be used to execute tests. Tests can also be executed on remote machines.|

## Sample model { .section}

Since one machine can take on many roles \(as long as it has the necessary components installed\), you don’t need a dedicated machine for each component. The following picture illustrates a typical network topology for a small test team.

![](../Images/TA_sample_model_components.jpg)

**Note:**

-   All TestArchitect test-related components, including TestArchitect Repository Server, TestArchitect Client, and TestArchitect Controller, are packaged in a single installation file, simplifying installation \(see the [installation guide](inst_TA.html) for more information\).
-   For step-by-step details on installing the TestArchitect License Server, see the [License Server installation guide](inst_LS.html).

**Parent topic:**[Getting started](../../../TA_Help/Topics/Getting_started.html)

**Previous topic:**[Supported platforms](../../../TA_ReleaseNotes/DITA_source/Supported_platforms.html)

**Next topic:**[Installing TestArchitect in silent mode](../../../TA_InstallationGuide/DITA_source/Topics/inst_TA_silent_mode.html)

