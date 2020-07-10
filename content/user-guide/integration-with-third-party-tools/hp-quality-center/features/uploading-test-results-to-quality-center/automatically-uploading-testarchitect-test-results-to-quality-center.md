--- 
title: "Automatically uploading TestArchitect test results to Quality Center"
linktitle: "Automatically uploading TestArchitect test results to Quality Center"
description: "You can configure TestArchitect to automatically upload test results to Quality Center upon conclusion of a test run."
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_QC_Automatically_uploading_test_results_to_QC.html
keywords: "Quality Center, automatically uploading test modules, HP Quality Center integration, automatically uploading test modules, test modules, HP Quality Center, automatically, uploading, integration"
---

You can configure TestArchitect to automatically upload test results to Quality Center upon conclusion of a test run.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection).
-   Mapped the TestArchitect project or test module of interest to Quality Center.

To automatically upload test results to Quality Center after test execution:

1.  Initiate the test execution as you normally would. When the Execute Test dialog box appears, select the **Upload result to Quality Center** check box on the **Advanced Settings** tab.

    ![](/images/TA_Help/Images/Auto_upload_results_to_QC.png)

2.  Specify a destination folder in Quality Center to upload the test results to. Alternatively, click the browse ![](/images/TA_Help/Images/btn.browse-ellipsis.02.png) button to select a Quality Center test set location.

3.  If you elect to browse to a Quality Center test set location, the Select Test Set To Upload dialog box appears for you to specify where in Quality Center to upload the test results. Select a test set node to upload to and click **OK**.


After the test run terminates, TestArchitect automatically uploads the generated test results to Quality Center at the specified location. Successfully uploaded test results can be viewed in Quality Center at **Testing** \> **Test Lab** \> **Test Runs tab**.



