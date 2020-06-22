--- 
title: "What's new in TestArchitect for Linux"
linktitle: "What's new in TestArchitect for Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 4 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.4_update_4.html
keywords: "Release Notes 8.4 Update 4, Linux, What is new, Linux, TestArchitect 8.4 Update 4, TestArchitect 8.4 Update 4, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 4 running under Linux.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   [Distributed Result Storage](/TA_Help/Topics/Test_result_distributed_storage.html#) - This feature allows you to store test results across multiple locations as an alternative to a centralized repository in TestArchitect Client. Hence, you could connect to local or shared network storage space that contains TestArchitect result. All \*.taresult files will be loaded and displayed on the Explorer tree of TestArchitect Client. Moreover, the workload and size of Repository Server as well as result uploading time will be reduced significantly.

**Enhancements to existing features**

-   **Zephyr 6.2 is fully supported**. Now TestArchitect communicates with the Zephyr server using the Zephyr REST API. This protocol helps you easily interact with Amazon Web Services.
-   The TestArchitect handles Deputy for Running test with multiple remote desktop sessions.
-   The TestArchitect supported platforms is supplemented with Windows Server 2019 \(WPF and MFC\).
-   [Automatically uploading TestArchitect test results to Team Foundation Server](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#) - Previously, you could only upload test result\(s\) to TFS with TFS Helper uploading method. From 8.4 Update 4 onwards, the TestArchitect supports one more method using REST API.

## TestArchitect Automation

**New features**

-   Expose New API that helps you retrieve the statistics of results such as the number of pass, fail, warning, error...by inputting the corresponding type and level: int getResultStatistics \(string resultType, integer level\)
    -   Purpose: Return the statistic number of desired "resultType".
    -   Parameters:
        -   resultType - string value of result type.
        -   level - integer value of a level.
            -   1: Current level. user defined action or test module
            -   2: Whole \(failed in test module and fails in currently user defined action\)

**Enhancements to existing features**

-   [Support capturing screenshot with Generic WebDriver mode](/TA_Help/Topics/ug_Screenshot_recording_GWD.html#) - TestArchitect captures screenshots in accordance with the [new rules](/TA_Help/Topics/ug_Screenshot_recording_GWD.html#), This kind of capturing provides the capability to capture more than one web page simultaneously, headless browser\(s\) and minimize window\(s\).


