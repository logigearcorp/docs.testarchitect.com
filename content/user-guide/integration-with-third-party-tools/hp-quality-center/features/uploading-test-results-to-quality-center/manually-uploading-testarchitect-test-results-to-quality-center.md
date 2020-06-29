--- 
title: "Manually uploading TestArchitect test results to Quality Center"
linktitle: "Manually uploading TestArchitect test results to Quality Center"
description: "TestArchitect test results from projects or test cases which are mapped to Quality Center can be uploaded to Quality Center."
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_Manually_uploading_test_results_to_QC.html
keywords: "Quality Center, manually uploading test modules, HP Quality Center integration, manually uploading test modules, test modules, HP Quality Center, manually, uploading, integration, manually uploading test modules"
---

TestArchitect test results from projects or test cases which are mapped to Quality Center can be uploaded to Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection).
-   Mapped the TestArchitect project or test case of interest to a Quality Center project or test.
-   All required fields are specified.

To manually upload TestArchitect test results to Quality Center

1.  In the TestArchitect explorer tree or [a result list view](/user-guide/projects-and-project-items/project-items/list-view/result-list-view/), right-click a test result, and then select **External Tool** \> **HP ALM** \> **Upload to Quality Center**.

    {{<important>}} The context menu **Upload to Quality Center** is enabled only for test results produced from mapped projects or test cases.

2.  On the Select Test Set To Upload dialog box, select a test set node in Quality Center to upload the test results to, and click **OK**.


TestArchitect uploads test results to Quality Center and displays the uploading status confirmation dialog box. Successfully uploaded test results can be viewed in Quality Center at **Testing** \> **Test Lab** \> **Test Runs tab**.



