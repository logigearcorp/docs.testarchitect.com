--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4_update_2.html
---
# What's new in TestArchitect for Linux {#Whats_New_Linux .concept}

The following new features and improvements are introduced in TestArchitect version 8.4 Update 2 running under Linux..

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {#section.TAC .section}

**New features**

-   Ability to configure the [**number of retries for a failed connection**](../../TA_Administration/Topics/Connection_retry_configuration.html) which the TestArchitect Controller establishes to a repository server. This helps users deal with an unstable network efficiently.
-   **[Users are prevented from changing the values of user-defined fields used in test results](../../TA_Help/Topics/Test_result.html)**. If you adjust the value of a user-defined field on the **Information** tab of a test module, it will not take effect on the test result of this module. The test result will still adopt the default value.

## Repository Server {#section_yht_rqp_yfb .section}

-   Ability to configure the **[connection backlog size](../../TA_Administration/Topics/Repo_connection_backlog.html)** for a repository server – allows users to specify the maximum size of the queue used for holding pending connections to a repository server.

## Known Issues {#section_wrh_brp_yfb .section}

-   The repository memory is leaked after an enormous number of nodes connect to and interact with the repository server. A typical case is that 3 JPPF servers submit 13000 jobs to 72 nodes, and test results are sent to a repository server; as a result, memory leak occurs.

**Parent topic:**[Features added to TestArchitect 8.4 Update 2](../../TA_ReleaseNotes/DITA_source/Whats_New_8.4_update_2.html)

