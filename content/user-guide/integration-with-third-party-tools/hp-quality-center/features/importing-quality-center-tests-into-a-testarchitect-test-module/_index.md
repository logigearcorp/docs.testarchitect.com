--- 
title: "Importing Quality Center tests into a TestArchitect test module"
linktitle: "Importing Quality Center tests into a TestArchitect test module"
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_QC_test_development_step_1.html
---

Tests residing in Quality Center can be imported into TestArchitect. Each Quality Center test is mapped automatically to a test case in TestArchitect.

Ensure that the machine hosting the TestArchitect repository server has the **HP ALM Connectivity Add-in** installed, to allow for integration and synchronization between TestArchitect and HP Quality Center.

Ensure that you have already taken the following steps:

-   [Registered the Quality Center server with TestArchitect](Integration_QC_connecting_repo_to_QC_server_step_1.html).
-   [Mapped the TestArchitect project](Integration_QC_connecting_repo_to_QC_server_step_2.html) containing the test cases of interest to the Quality Center project.

**Note:**

TestArchitect relies on test modules that are typically developed and executed as standalone units. Each test module is comprised of a sequence of test cases. By contrast, the standard unit of test development and execution in Quality Center is the test, which more closely corresponds to a test case in TestArchitect than a test module. Hence each uploaded TestArchitect test case takes the form of a Quality Center test. In general, the following correspondences are used when moving test assets between the two systems:

|TestArchitect|Quality Center|
|-------------|--------------|
|Test folder|Folder \(with subfolders representing TA test modules\)|
|Test module|FolderOptionally, a '\#' test \(QC test with '\#' prepended to the name\) may also be created to hold essential test module metadata.|
|Test case|Test|

You have two options when importing tests from Quality Center to TestArchitect:

1.  [Importing a Quality Center test](/TA_Help/Topics/Integration_QC_test_development_step_1a.html)  
A test in the test plan of an HP Quality Center project may be imported into an existing TestArchitect test module, generating a new test case in the module.
2.  [Importing a Quality Center folder](/TA_Help/Topics/Integration_QC_test_development_step_1b.html)  
A folder in the test plan of an HP Quality Center project may be imported into an existing TestArchitect test folder, generating new test modules and/or test folders.

**Parent topic:**[Features](/TA_Help/Topics/Integration_QC_test_development.html)

**Next topic:**[Uploading TestArchitect test modules/test cases to Quality Center](/TA_Help/Topics/Integration_QC_test_development_step_2.html)

