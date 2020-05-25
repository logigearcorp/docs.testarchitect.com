--- 
title: "Manually uploading TestArchitect test results to Quality Center"
linktitle: "Manually uploading TestArchitect test results to Quality Center"
aliases: 
    - /TA_Help/Topics/Integration_QC_Manually_uploading_test_results_to_QC.html
---
# Manually uploading TestArchitect test results to Quality Center {#QC_manual_upload_results .task}

TestArchitect test results from projects or test cases which are mapped to Quality Center can be uploaded to Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   Mapped the TestArchitect project or test case of interest to a Quality Center project or test.
-   All required fields are specified.

To manually upload TestArchitect test results to Quality Center

1.  In the TestArchitect explorer tree or [a result list view](Listview_results.html), right-click a test result, and then select **External Tool** \> **HP ALM** \> **Upload to Quality Center**.

    **Important:** The context menu **Upload to Quality Center** is enabled only for test results produced from mapped projects or test cases.

2.  On the Select Test Set To Upload dialog box, select a test set node in Quality Center to upload the test results to, and click **OK**.


TestArchitect uploads test results to Quality Center and displays the uploading status confirmation dialog box. Successfully uploaded test results can be viewed in Quality Center at **Testing** \> **Test Lab** \> **Test Runs tab**.

**Parent topic:**[Uploading test results to Quality Center](../../TA_Help/Topics/Integration_QC_Uploading_test_results_to_QC.html)

**Previous topic:**[Automatically uploading TestArchitect test results to Quality Center](../../TA_Help/Topics/Integration_QC_Automatically_uploading_test_results_to_QC.html)

