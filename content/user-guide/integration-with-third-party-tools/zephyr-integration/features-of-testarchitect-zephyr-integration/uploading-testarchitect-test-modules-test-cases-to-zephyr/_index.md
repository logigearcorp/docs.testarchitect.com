--- 
title: "Uploading TestArchitect test modules/test cases to Zephyr"
linktitle: "Uploading TestArchitect test modules/test cases to Zephyr"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Zephyr_upload_TA_TM_TC.html
---

TestArchitect test cases and test modules can be uploaded to the Zephyr server, which also establishes one-to-one mappings between the two sets of test cases.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Ensure that you have already taken the following steps:

-   [Registered the Zephyr server with TestArchitect](ug_Zephyr_registering_server.html).
-   [Mapped the TestArchitect project containing the test cases of interest to a Zephyr project](ug_Zephyr_mapping_projects.html).

**Attention:** From TestArchitect 8.4 Update 3 onwards, only test steps of TestArchitect test cases/ modules are uploaded to Zephyr.

To upload TestArchitect test cases and test modules to Zephyr, do as follows:

1.  In the TestArchitect explorer tree, right-click the desired test node, test folder or test module to be uploaded.

2.  On the context menu, select **External Tool** \> **Zephyr** \> **Upload to Zephyr**.

3.  In the Upload Test Module to Zephyr dialog box, locate the target folder in Zephyr to which you want to upload the tests.

    ![](/images//Images/Zephyr_upload_dlg.png)

4.  Select the preferred options:

    -   Test Module\(s\): Create a test case in Zephyr corresponding to each TestArchitect test module to be uploaded. The Zephyr test cases will bear the names of the TestArchitect test modules.
    -   Test Case\(s\): Create a test case in Zephyr corresponding to each TestArchitect test case to be uploaded. The Zephyr test cases will bear the name of the TestArchitect test cases.

        **Note:** In case both the **Test Module\(s\)** and **Test Case\(s\)** options are selected, the test module and its test cases will be uploaded to Zephyr as test cases.

    -   Keep Folder Structure: Organize the uploaded tests in Zephyr in a similar way to those in TestArchitect.
    -   Create Folder Corresponding to Test Module: Create a test folder in Zephyr corresponding to each test module; then upload the test module and its test cases to Zephyr as test cases in the test folder.
    -   Scan Project for Existing Tests: If selected, the whole Zephyr project will be scanned for test cases that already exists. Otherwise, only the selected test node will be scanned.
5.  Click the **OK** button.

6.  The Confirm Overwriting dialog box appears, showing a list of test cases that already exists in Zephyr if any. Select the check boxes for the Zephyr test cases that you want to overwrite with TestArchitect test cases/ test modules. Click the **OK** button.

    ![](/images//Images/Zephyr_upload_overwrite_dlg.png)

    **Note:** The **Copy to Clipboard** button is used to copy the list of existing test cases to the clipboard.

7.  An information dialog box will appear stating Upload process completed successfully if the upload was successful. Click the **OK** button.


**Uploading TestArchitect test steps to Zephyr test steps:**

Test steps from TestArchitect test cases/test modules are uploaded to Zephyr with their corresponding column name. See the example below for more details.

![](/images//Images/Zephyr_upload_teststeps.png)

**Note:** If you want to upload test steps from a custom column to Zephyr, you must first create a new column in Zephyr with the same name. In this example, you must [create new a column](/TA_Administration/Topics/User_defined_fields_create.html#) in TestArchitect first and naming Test Data. Then it will be uploaded on Zephyr by matching the name.

1.  [Mapped items between TestArchitect and Zephyr](/TA_Help/Topics/ug_Zephyr_mapped_items.html)  
This topic describes how TestArchitect test case information is mapped to the corresponding Zephyr test case fields.

**Parent topic:**[Features of TestArchitect-Zephyr integration](/TA_Help/Topics/ug_Zephyr_features.html)

**Previous topic:**[Importing Zephyr test cases into TestArchitect](/TA_Help/Topics/ug_Zephyr_importing_Zephyr_test_cases.html)

**Next topic:**[Mapping TestArchitect test cases to Zephyr test cases](/TA_Help/Topics/ug_Zephyr_mapping_test_cases.html)

