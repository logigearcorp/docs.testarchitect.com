--- 
title: "Importing TFS test cases"
linktitle: "Importing TFS test cases to TA"
description: "Test cases residing on TFS may be imported into TestArchitect, establishing one-to-one mappings between the two sets of test cases."
weight: 4
aliases: 
    - /TA_Help/Topics/ug_MTM_import_TC.html
keywords: "integration, TFS, importing TFS test cases, importing TFS test cases, Team Foundation Server, importing TFS test cases"
---

Test cases residing on TFS may be imported into TestArchitect, establishing one-to-one mappings between the two sets of test cases.

Ensure that you have already taken the following steps:

-   Registered the TFS server with TestArchitect. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html).\)
-   Mapped the TestArchitect project containing the test cases of interest to a TFS project. \([Learn more](/TA_Help/Topics/Integration_MTM_map_proj.html).\)

To import TFS test cases into TestArchitect:

1.  In TestArchitect, check out the test module into which you want to import TFS test cases.

2.  Perform either of the following:

    -   Right-click the target test module in the TestArchitect explorer tree. On the context menu, select **External Tool** \> **Visual Studio** \> **Import from Team Foundation Server**.
    -   Right-click the TestArchitect test editor of the target test module. On the context menu, select **External Tool** \> **Visual Studio** \> **Import from Team Foundation Server**.

        ![](/images/TA_Help/Images/ug_MTM_import_from_test_editor.png)

3.  In the Import from Team Foundation Server dialog box, select the TFS test case you want to import into TestArchitect.

    ![](/images/TA_Help/Images/TFS_Import_TC.png)

4.  Select the preferred options:

    -   Test Case\(s\): This check box must be selected.
    -   All Contents: Import all contents of the TFS test case into TestArchitect test case.
    -   Test Steps Only: Only import all steps of the TFS test case into the TestArchitect test case. The imported test steps will not be displayed in the test editor, but the **Steps** tab of the test case.
    -   Scan Project for Existing Test Cases/Modules: if selected, the whole TestArchitect project will be scanned for test cases that already exist. Otherwise, the selected test node will be scanned.

        **Note:** The **Scan Project for Existing Test Cases/Modules** function applies to Test Steps Only

5.  Click the **OK** button.

6.  Only if you have chose the Test Steps Only option in the previous step, does the Confirm Overwriting dialog box appear, showing the list of test cases/ test modules that already exists in TestArchitect. Select the check boxes for the TestArchitect test cases/ test modules that you want to overwrite with the TFS test cases. Click the **OK** button.

    ![](/images/TA_Help/Images/TFS_import_overwrite_dlg.png)

    **Note:** The **Copy to Clipboard** button is used to copy the list of existing test cases to the clipboard.

7.  An information dialog box will appear stating The importing process completed successfully if the upload was successful. Click the **OK** button.


TestArchitect creates a corresponding test case with the following attributes added automatically:

-   The TFS steps are imported as comments in the test module, which may be viewed in the TestArchitect test editor.

    ![](/images/TA_Help/Images/ug_MTM_mapped_commented_steps.png)

-   TestArchitect maps each TFS test ID to the **Source** field of the corresponding TestArchitect test case. The **Source** number can be found on the **Information** tab of the test case.




