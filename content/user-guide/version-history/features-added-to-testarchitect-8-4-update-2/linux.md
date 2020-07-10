--- 
title: "What's new in TestArchitect for Linux"
linktitle: "Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 2 running under Linux.."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4_update_2.html
keywords: "Release Notes 8.4 Update 2, Linux, What is new, Linux, TestArchitect 8.4 Update 2, TestArchitect 8.4 Update 2, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 2 running under Linux..

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## {{< expand >}} TestArchitect Client {{< permerlink >}} {#Whats_New_Linux__section.TAC} 

**New features**

-   Ability to configure the [**number of retries for a failed connection**](/administration-guide/connections/connection-retry-configuration) which the TestArchitect Controller establishes to a repository server. This helps users deal with an unstable network efficiently.
-   **[Users are prevented from changing the values of user-defined fields used in test results](/user-guide/working-with-test-results/)**. If you adjust the value of a user-defined field on the **Information** tab of a test module, it will not take effect on the test result of this module. The test result will still adopt the default value.

## {{< expand >}} Repository Server {{< permerlink >}} {#Whats_New_Linux__section_yht_rqp_yfb} 

-   Ability to configure the **[connection backlog size](/administration-guide/repository-server-management/configuring-connection-backlog-size-for-a-repository-server)** for a repository server – allows users to specify the maximum size of the queue used for holding pending connections to a repository server.

## {{< expand >}} Known Issues {{< permerlink >}} {#Whats_New_Linux__section_wrh_brp_yfb} 

-   The repository memory is leaked after an enormous number of nodes connect to and interact with the repository server. A typical case is that 3 JPPF servers submit 13000 jobs to 72 nodes, and test results are sent to a repository server; as a result, memory leak occurs.


