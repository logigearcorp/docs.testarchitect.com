--- 
title: "Uploading TestArchitect test modules/test cases to Team Foundation Server"
linktitle: "Uploading TA test modules/test cases to TFS"
weight: 6
aliases: 
    - /TA_Help/Topics/ug_upload_TAtest_MTM.html
---

TestArchitect test cases and test modules can be uploaded to the TFS server, which also establishes one-to-one mappings between the two sets of test cases.

Ensure that you have already taken the following steps:

-   Registered the TFS server with TestArchitect. \([Learn more](Integration_MTM_connecting_TFS.html).\)
-   Mapped the TestArchitect project containing the test cases of interest to a TFS project. \([Learn more](Integration_MTM_map_proj.html).\)

To upload TestArchitect test cases/test modules to TFS:

1.  In the TestArchitect explorer tree, right-click the desired test node, test folder or test module to be uploaded.

2.  On the context menu, select **External Tool** \> **Visual Studio** \> **Upload to Team Foundation Server**.

3.  In the Upload to Team Foundation Server dialog box, locate the target folder in TFS to which you want to upload the tests.

    ![](/images//Images/TFS_upload.png)

4.  Select the preferred options:

    -   Test Module\(s\): Create a test case in TFS corresponding to each TestArchitect test module to be uploaded. The TFS test cases will bear the names of the TestArchitect test modules.
    -   Test Case\(s\): Create a test case in TFS corresponding to each TestArchitect test case to be uploaded. The TFS test cases will bear the name of the TestArchitect test cases.
    -   All Contents: Upload all contents of the TestArchitect test cases/ modules to the TFS test cases.

        ![](/images//Images/TFS_upload_all_contents.png)

    -   Test Steps Only: Upload test steps of TestArchitect test cases/ modules to TFS test cases.

        ![](/images//Images/TFS_upload_test_steps.png)

    -   Keep Folder Structure: Organize the uploaded tests in TFS in a similar way to those in TestArchitect. A folder in TFS will turn into a test suite in TestArchitect.
    -   Create Test Suite Corresponding to Test Module: Create a test suite in TFS corresponding to each TestArchitect test module; then upload the test module and its test cases to Team Foundation Server as test cases in the test suite.
    -   Scan Team Project for Existing Tests: If selected, the whole TFS project will be scanned for test cases that already exists. Otherwise, the selected test node will be scanned.
5.  Click the **OK** button.

6.  The Confirm Overwriting dialog box appears, showing a list of test cases that already exists in TFS if any. Select the check boxes for the TFS test cases that you want to overwrite with TestArchitect test cases/ test modules. Click the **OK** button.

    ![](/images//Images/TFS_upload_overwrite_dlg.png)

    **Note:** the **Copy to Clipboard** button is used to copy the list of existing test cases to the clipboard.

7.  An information dialog box will appear stating “Upload process completed successfully” if the upload was successful. Click the **OK** button.


Assuming you upload tests with the structure below in **TestArchitect**:

![](/images//Images/TFS_upload_TA_tests_illustration.png)

The corresponding tests in **TFS** will be organized as follows:

![](/images//Images/TFS_upload_TM_illustration.png)

![](/images//Images/TFS_upload_TC_illustration.png)

![](/images//Images/TFS_upload_TM_TC_illustration.png)

**Important:** It's possible for TFS to have custom fields which are required. If you attempt to upload TestArchitect test cases that have corresponding user-defined fields with empty values, an error message appears.

**Parent topic:**[Authoring test procedures under Team Foundation Server](/TA_Help/Topics/ug_MTM_set_up_TA.html)

**Previous topic:**[Importing Team Foundation Server test suites to TestArchitect](/TA_Help/Topics/ug_MTM_import_TS.html)

