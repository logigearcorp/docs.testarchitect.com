--- 
title: "Features of TestArchitect-Zephyr integration"
linktitle: "Features of TestArchitect-Zephyr integration"
aliases: 
    - /TA_Help/Topics/ug_Zephyr_features.html
---
# Features of TestArchitect-Zephyr integration {#concept_y5y_2l4_jp .concept}

A discussion of key features of TestArchitect and Zephyr integration.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

At the broadest level, the steps involved in developing Zephyr test cases for integration within TestArchitect could be described as follows:

1.  Within Zephyr, define the System and Subsystem folders which will store test cases.
2.  Organize your Zephyr test cases into a folder structure that mirrors the test module structure you will create, or have created, in TestArchitect.
3.  For each folder you create in Zephyr, create a test module in TestArchitect with an identical name.
4.  Import Zephyr test cases from each test folder into the corresponding TestArchitect test module counterparts, where they will serve as test cases.
5.  Optionally, upload each TestArchitect test module to its corresponding folder in Zephyr. This creates a Zephyr test case with the same name as the TestArchitect test module’s name, preceded by a \# symbol. This is known as a test module node.
6.  For each test case, create action lines that implement the test case.

With this integration with Zephyr, you will be able to do the following:

1.  [Importing Zephyr test cases into TestArchitect](../../TA_Help/Topics/ug_Zephyr_importing_Zephyr_test_cases.html)  
Test cases residing on Zephyr can be imported into TestArchitect, which also establishes one-to-one mappings between the two sets of test cases.
2.  [Uploading TestArchitect test modules/test cases to Zephyr](../../TA_Help/Topics/ug_Zephyr_upload_TA_TM_TC.html)  
TestArchitect test cases and test modules can be uploaded to the Zephyr server, which also establishes one-to-one mappings between the two sets of test cases.
3.  [Mapping TestArchitect test cases to Zephyr test cases](../../TA_Help/Topics/ug_Zephyr_mapping_test_cases.html)  
Mappings between TestArchitect and Zephyr test cases are generated automatically when Zephyr test cases are imported to TestArchitect, and when TestArchitect test cases are uploaded to Zephyr. There may be occasions, however, when you need to create a linkage between test cases created independently on the two systems.
4.  [Mapping TestArchitect test modules to Zephyr test cases](../../TA_Help/Topics/Zephyr_mapping_TM.html)  
Apart from TestArchitect test cases, you can map TestArchitect test modules to Zephyr test cases.
5.  [Uploading TestArchitect test results to Zephyr](../../TA_Help/Topics/ug_Zephyr_uploading_results.html)  
TestArchitect test results from test projects which are mapped to Zephyr can be uploaded to Zephyr manually or automatically.
6.  [Executing tests from Zephyr](../../TA_Help/Topics/ug_Zephyr_executing_tests.html)  
As an alternative to executing tests from TestArchitect, TestArchitect test cases and test modules may be executed from Zephyr.
7.  [Creating matching custom fields in TestArchitect and Zephyr](../../TA_Help/Topics/ug_Zephyr_creating_custom_fields.html)  
User-defined fields in TestArchitect are automatically mapped to Zephyr custom fields when the names and data types match.
8.  [Rules for mapping custom fields between TestArchitect and Zephyr](../../TA_Help/Topics/ug_Zephyr_matching_custom_fields.html)  
Custom test case fields in Zephyr can be mapped to user-defined fields in TestArchitect test modules or test cases.

**Parent topic:**[Zephyr integration](../../TA_Help/Topics/ug_Zephyr.html)

**Previous topic:**[Notice about integrating TestArchitect with Zephyr](../../TA_Help/Topics/ug_Zephyr_notice.html)

