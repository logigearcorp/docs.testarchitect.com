--- 
title: "Features"
linktitle: "Features"
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_test_development.html
---

A discussion of the key functionalities of TestArchitect and Quality Center integration.

TestArchitect relies on test modules that are typically developed and executed as standalone units. Each test module is comprised of a sequence of test cases. By contrast, the standard unit of test development and execution in Quality Center is the test, which more closely corresponds to a test case in TestArchitect than a test module. Hence each uploaded TestArchitect test case takes the form of a Quality Center test. In general, the following correspondences are used when moving test assets between the two systems:

|TestArchitect|Quality Center|
|-------------|--------------|
|Test folder|Folder \(with subfolders representing TA test modules\)|
|Test module|FolderOptionally, a '\#' test \(QC test with '\#' prepended to the name\) may also be created to hold essential test module metadata.<br>|
|Test case|Test|

At the broadest level, the steps involved in developing Quality Center tests for integration within TestArchitect could be described as follows:

1.  Within Quality Center, you define each of your test cases as a Quality Center test. You can specify design steps, but this is not essential.
2.  Organize your Quality Center tests into a folder structure to resemble the test module structure you will create in TestArchitect.
3.  For each folder you create in Quality Center, create a test module in TestArchitect with identical name.
4.  Import the Quality Center tests from each folder into the corresponding TestArchitect test module, in which the Quality Center tests become test cases.

    **Note:** If you defined design steps in the Quality Center tests, each design step is added to the corresponding test module as a comment within the corresponding test case.

5.  Upload each TestArchitect test module to its corresponding folder in Quality Center. This creates a Quality Center test with the same name as the TestArchitect test module's name, prepended with a \# symbol. This is known as a test module node.
6.  For each test case, create action lines that implement the test.

Note that you can now run the tests from either TestArchitect or Quality Center using the Quality Center Test Lab.

The following topics provide details for the high-level steps outlined above.

1.  [Importing Quality Center tests into a TestArchitect test module](/TA_Help/Topics/Integration_QC_test_development_step_1.html)  
Tests residing in Quality Center can be imported into TestArchitect. Each Quality Center test is mapped automatically to a test case in TestArchitect.
2.  [Uploading TestArchitect test modules/test cases to Quality Center](/TA_Help/Topics/Integration_QC_test_development_step_2.html)  
TestArchitect test modules and test cases can be uploaded to Quality Center which establishes one-to-one mappings between TestArchitect test cases and Quality Center tests.
3.  [Test entity mappings between TestArchitect and Quality Center](/TA_Help/Topics/ug_QC_mapped_items.revised.html)  
This topic describes how TestArchitect test module and test case fields and contents are mapped to Quality Center tests, determining how information is transferred during the import and upload processes.
4.  [Uploading test results to Quality Center](/TA_Help/Topics/Integration_QC_Uploading_test_results_to_QC.html)  
 TestArchitect test results from projects which are mapped to Quality Center can be uploaded to Quality Center manually or automatically.
5.  [Executing tests from Quality Center](/TA_Help/Topics/Integration_QC_executing_from_QC.html)  
As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules can be executed from Quality Center.
6.  [Creating matching custom fields](/TA_Help/Topics/Integration_QC_creating_mapping_custom_field.html)  
User-defined fields in TestArchitect are automatically mapped to their counterparts in Quality Center, when such counterparts exist.

**Parent topic:**[HP Quality Center](/TA_Help/Topics/Integration_QC_intro.html)

**Previous topic:**[Configuring integration with HP Quality Center](/TA_Help/Topics/Integration_QC_config.html)

