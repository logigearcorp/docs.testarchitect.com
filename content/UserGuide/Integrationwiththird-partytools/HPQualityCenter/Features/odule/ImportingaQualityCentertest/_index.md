--- 
title: "Importing a Quality Center test"
linktitle: "Importing a Quality Center test"
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_QC_test_development_step_1a.html
---
# Importing a Quality Center test {#task.import_qc_test .task}

A test in the test plan of an HP Quality Center project may be imported into an existing TestArchitect test module, generating a new test case in the module.

Ensure that the machine hosting the TestArchitect repository server has the **HP ALM Connectivity Add-in** installed, to allow for integration and synchronization between TestArchitect and HP Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   [Mapped the TestArchitect project](Integration_QC_connecting_repo_to_QC_server_step_2.html) containing the test cases of interest to the Quality Center project.

If the TestArchitect test module into which you are about to import the new test case is not currently checked out, right-click its icon in the TestArchitect explorer tree, and then click **Check Out**.

**Tip:** The state of a test module is indicated by its icon:

![](../Images/icn.tm.checked_in.vs.checked_out.png)

To bring a Quality Center test into a TestArchitect test module as a new test case, observe the following steps:

1.  Right-click the test module icon and select **External Tool** \> **HP ALM** \> **Import from Quality Center**.

    **Note:** If requested, enter the password for the Quality Center account whose user name is the same as the current TestArchitect user name.

    The **Import from Quality Center** dialog box appears, displaying lists of Quality Center tests and folders in a tree structure:

    ![](../Images/QC_import_test_case.png)

2.  Select a Quality Center test to import and click **OK**.

    **Note:** When importing into a TestArchitect test module, you are limited to selecting a single Quality Center test as the source. Also note that “\#” tests are intended for Quality Center documentation purposes only and are non-importable.

    The import process begins, as indicated at the bottom of the dialog box. Note that the entire process may take anywhere from a few seconds to a minute or more, depending on the content being imported.


TestArchitect creates a corresponding test case/ test module/ test folder with the following attributes added automatically:

-   Title and other applicable fields, including user-defined fields, are populated.
-   The textual description in the Quality Center's **Description** tab within the test plan's **Detail** tab are loaded into the corresponding TestArchitect test case description located on the test case 's **Information** tab.
-   Each pre-defined step, including names and descriptions, written in the Quality Center test plan is are added as a comment in the TestArchitect test module editor.

    ![](../Images/QC_import_test_case_2.png)

-   TestArchitect maps the Quality Center **Test ID** as **Source**. This **Source** number, which cannot be edited, can be found on the **Information** tab of the corresponding TestArchitect test case. Note that, if the existing **Source** field on any other test case in the project already has this number, the field is cleared. This is done to ensure the mappings remain one-to-one.

![](../Images/QC_import_test_case_mapped_ID.png)

Note also that TestArchitect revision control is applied to each test module affected by the import. A copy of the test module as it existed prior to the import is added to the revision history, as are one or more copies produced during the import process.

**Parent topic:**[Importing Quality Center tests into a TestArchitect test module](../../TA_Help/Topics/Integration_QC_test_development_step_1.html)

**Next topic:**[Importing a Quality Center folder](../../TA_Help/Topics/Integration_QC_test_development_step_1b.html)

