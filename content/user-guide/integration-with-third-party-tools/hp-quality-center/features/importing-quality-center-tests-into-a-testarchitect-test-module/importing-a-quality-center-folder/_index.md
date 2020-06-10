--- 
title: "Importing a Quality Center folder"
linktitle: "Importing a Quality Center folder"
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_test_development_step_1b.html
---

A folder in the test plan of an HP Quality Center project may be imported into an existing TestArchitect test folder, generating new test modules and/or test folders.

Ensure that the machine hosting the TestArchitect repository server has the **HP ALM Connectivity Add-in** installed, to allow for integration and synchronization between TestArchitect and HP Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   [Mapped the TestArchitect project](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_2.html) containing the test cases of interest to the Quality Center project.

A Quality Center folder may only be imported to a TestArchitect test folder. It may contain either tests or subfolders, but not a combination of both:

-   A folder containing tests is realized as a TestArchitect test module, with each Quality Center test mapped to a unique test case.
-   A folder containing subfolders is realized as a TestArchitect test folder, with the subfolders realized as test subfolders or test modules, depending on their respective nature in Quality Center.

Note that, unlike the case with test modules, there is no need to check out the TestArchitect test folder which is to serve as your import target.

Your target test folder may contain other test folders and/or test modules prior to the import, as long as they do not pose naming conflicts with the items that are to be imported.

1.  Right-click the target test folder and select **External Tool** \> **HP ALM** \> **Import from Quality Center**.

    **Note:** If requested, enter the password for the Quality Center account whose user name is the same as the current TestArchitect user name.

    The **Import from Quality Center** dialog box appears, displaying lists of Quality Center tests and folders in a tree structure:

    ![](/images//Images/QC_import_test_case.png)

2.  Select a Quality Center source folder to import into TestArchitect and click **OK**.

    **Note:** TestArchitect imports the selected node and its subnodes, if any, recursively.

    The import process begins, as indicated at the bottom of the dialog box. Note that the entire process may take anywhere from a few seconds to a minute or more, depending on the content being imported.


Upon completion of the import process, TestArchitect creates the corresponding test cases, test modules, and/or test folders with the following attributes added automatically:

-   **Test modules and test folders**:
    -   For each generated test folder and test module, the **Name** field is populated with the name of the corresponding Quality Center folder.
    -   The `OBJECTIVES` section of each generated test module is loaded with test objectives of each of its imported test cases, which in turn receive those objectives from the **Comments** fields of their corresponding Quality Center tests.
-   **Test cases**: For test cases, the following fields are populated from their Quality Center counterparts:

    |TestArchitect test case field|supplier field in Quality Center test|
    |-----------------------------|-------------------------------------|
    |**ID**|**Test Name**|
    |**Description**|**Description**|
    |line item in **Test Objectives** tab|**Comments**|
    |**Source**|**Test ID**|
    |[user-defined fields](/TA_Administration/Topics/User_defined_fields.html)|custom fields of matching names|

    Except for **Test Objectives**, all the above TestArchitect test case fields may be found in the **Information** tab of each given test case. The Quality Center test fields are available in the **Details** tab of the respective tests.

-   **Steps**: Each pre-defined step, including names and descriptions, written in the Quality Center test plan is are added as a comment in the TestArchitect test module editor.

    ![](/images//Images/QC_import_test_case_2.png)


![](/images//Images/QC_import_test_case_mapped_ID.png)

Note also that TestArchitect history versioning is applied to each test module affected by the import. A copy of the test module as it existed prior to the import is versioned, as are one or more copies produced during the import process.

**Parent topic:**[Importing Quality Center tests into a TestArchitect test module](/TA_Help/Topics/Integration_QC_test_development_step_1.html)

**Previous topic:**[Importing a Quality Center test](/TA_Help/Topics/Integration_QC_test_development_step_1a.html)

