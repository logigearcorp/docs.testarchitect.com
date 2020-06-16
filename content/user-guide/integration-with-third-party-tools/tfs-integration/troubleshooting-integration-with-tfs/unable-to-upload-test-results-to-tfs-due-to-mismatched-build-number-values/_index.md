--- 
title: "Unable to upload test results to Team Foundation Server due to mismatched build number values"
linktitle: "Unable to upload test results to TFS due to mismatched build number values"
description: "Whether you upload test results to TFS manually or automatically , the upload will fail when the given build number values among test modules belonging to a serial test run are not identical. In case ..."
weight: 2
aliases: 
    - /TA_FAQ/Topics/faq.shoot.TFS_mismatched_build_number_values.html
keywords: "Troubleshooting, Team Foundation Server, mismatched build number values"
---

Whether you upload test results to TFS [manually](/TA_Help/Topics/ug_MTM_upload_result_manual.html) or [automatically](/TA_Help/Topics/ug_MTM_upload_result_automatic.html), the upload will fail when the given build number values among test modules belonging to a serial test run are not identical.

-   In case of uploading results to TFS automatically, TestArchitect shows the following error message: Unable to upload results to Microsoft Test Manager: Mismatch between Build Numbers in results of tests selected for execution. This condition is required because the Build Number field is a mandatory field in Microsoft Test Manager.
-   In case of uploading results to TFS manually, TestArchitect shows the following error message: There is a mismatch between Build Number’s values in the test results of executed tests. You are required to select another build number. Do you want to continue?

To resolve this issue, perform the following:

1.  In the TestArchitect explorer tree, select a serial test run's results containing the mismatched values of build number.

2.  Right-click it, and then select **External Tool** \> **Visual Studio** \> **Upload to Team Foundation Server**.

    TestArchitect displays an error message indicating that the build number values are not identical.

3.  Click **Yes** to choose a different build number.

    The Select Location dialog box appears.

4.  From the **Build Number** box, by default, TestArchitect automatically assigns a build number value for the master test result. This value is determined based on the build number of the most recently executed subtest module. You can accept the default value, or select a different one.

    ![](/images/TA_FAQ/Images/mismatched_build_number_values.png)

5.  Click **OK**.

    TestArchitect uploads the test results of the serial test run to TFS, and displays the upload confirmation message.

6.  Click **OK** to close the confirmation dialog box.


TestArchitect test results are uploaded to TFS. The specified build number value is filled into the **Build number** column of the test run's status.

![](/images/TA_FAQ/Images/mismatched_build_number_values_result.png)




