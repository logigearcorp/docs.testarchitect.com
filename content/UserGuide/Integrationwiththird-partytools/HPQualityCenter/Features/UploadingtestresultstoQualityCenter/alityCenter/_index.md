--- 
title: "Automatically uploading TestArchitect test results to Quality Center"
linktitle: "Automatically uploading TestArchitect test results to Quality Center"
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_QC_Automatically_uploading_test_results_to_QC.html
---
# Automatically uploading TestArchitect test results to Quality Center {#QC_upload_automatic_results .task}

You can configure TestArchitect to automatically upload test results to Quality Center upon conclusion of a test run.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   Mapped the TestArchitect project or test module of interest to Quality Center.

To automatically upload test results to Quality Center after test execution:

1.  Initiate the test execution as you normally would. When the Execute Test dialog box appears, select the **Upload result to Quality Center** check box on the **Advanced Settings** tab.

    ![](../Images/Auto_upload_results_to_QC.png)

2.  Specify a destination folder in Quality Center to upload the test results to. Alternatively, click the browse ![](../Images/btn.browse-ellipsis.02.png) button to select a Quality Center test set location.

3.  If you elect to browse to a Quality Center test set location, the Select Test Set To Upload dialog box appears for you to specify where in Quality Center to upload the test results. Select a test set node to upload to and click **OK**.


After the test run terminates, TestArchitect automatically uploads the generated test results to Quality Center at the specified location. Successfully uploaded test results can be viewed in Quality Center at **Testing** \> **Test Lab** \> **Test Runs tab**.

**Parent topic:**[Uploading test results to Quality Center](../../TA_Help/Topics/Integration_QC_Uploading_test_results_to_QC.html)

**Next topic:**[Manually uploading TestArchitect test results to Quality Center](../../TA_Help/Topics/Integration_QC_Manually_uploading_test_results_to_QC.html)

