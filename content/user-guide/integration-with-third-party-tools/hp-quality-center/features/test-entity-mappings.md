--- 
title: "Test entity mappings between TestArchitect and Quality Center"
linktitle: "Test entity mappings"
description: "This topic describes how TestArchitect test module and test case fields and contents are mapped to Quality Center tests, determining how information is transferred during the import and upload processes."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_QC_mapped_items.revised.html
keywords: "integration, Quality Center, mapped items, mapped items"
---

This topic describes how TestArchitect test module and test case fields and contents are mapped to Quality Center tests, determining how information is transferred during the import and upload processes.

The following discussion of element mappings is organized by the affected TestArchitect project entities:

-   [test folder](#testarchitect-test-folder)
-   [test module](#testarchitect-test-module)
-   [test case](#testarchitect-test-case)

These sections summarize the transfer of data between TestArchitect and Quality Center during both import and upload transmissions. Further details are provided in the notes and details following these sections.

## TestArchitect test folder

|TA field|Direction of flow1|QC field|QC entity|Notes / Conditions|
|--------|------------------|--------|---------|------------------|
|**Name**|![](/images/TA_Help/Images/TA-QC.flow.bidirectional.png)|\(folder label\)|folder containing subfolders5|This is the label applied to a QC folder. Folders have no **Details** tabs, hence the related field or property name is not available.|

Example:

![](/images/TA_Help/Images/QC_test_folder.mapping.01.png)

## TestArchitect test module {{< permerlink >}} {#concept.ta_qc_mappings__section.ta_test_module} 

|TA field|Direction of flow1|QC field2|QC entity|Notes / Conditions|
|--------|------------------|---------|---------|------------------|
|**Name**|![](/images/TA_Help/Images/TA-QC.flow.bidirectional.png)|\(folder label\)|folder containing tests5|This is the label applied to a QC folder. Folders have no **Details** tabs, hence the related field or property name is not available.|
|**Name**|![](/images/TA_Help/Images/TA-QC.flow.upload.png)<br><br>'\#' prepended to **Name**|**Test Name**|\#test4| |<br>
|**Description**|![](/images/TA_Help/Images/TA-QC.flow.bidirectional.png)|**Description**|\#test4| |
|**Source** \(value auto-gen'd on upload\*\)|![](/images/TA_Help/Images/TA-QC.flow.upload.png)|**Test ID**|\#test4|\*Values for **Source** are auto-generated on upload \(regardless of whether a value already exists in the field – thus ensuring mappings with Quality Center remain unique\).|
|**Source**|![](/images/TA_Help/Images/TA-QC.flow.import.png)|**Test ID**|\#test4|Note that on import, uniqueness is enforced by clearing the **Source** values of any test modules in the project that conflict with the uploaded one.|
|**Test Objectives** tab: **ID**, **Title** fields|![](/images/TA_Help/Images/TA-QC.flow.upload.png)\*|**test objective**6|\#test4|\*Fields are concatenated, separated with ':'. Multiple objectives separated by newlines.|
|**Editor** tab: line\(s\) in OBJECTIVES section|![](/images/TA_Help/Images/TA-QC.flow.import.png)<br><br>content parsed\*|**test objective**6|\#test|\*Content is parsed into **ID** and **Title** columns of the action line, with 'test objective' in the action column, prepended with '//' to form comment. Note that the actual test objective fields \(on the test module's **Test Objectives** tab\) are not populated.|<br>
|action line|![](/images/TA_Help/Images/TA-QC.flow.upload.png)|single step within **Design Steps** tab|\#test4|See below for processing and distribution of action line information on upload|

![](/images/TA_Help/Images/QC_test_module.mapping.01.png "Handling of test module fields on import and upload")

![](/images/TA_Help/Images/QC_test_module.mapping.02.png "Handling of test module's test objectives on import and upload")

## TestArchitect test case {{< permerlink >}} {#concept.ta_qc_mappings__section.ta_test_case} 

|TA field|Direction of flow1|QC field2|QC entity|Notes / Conditions|
|--------|------------------|---------|---------|------------------|
|**ID**|![](/images/TA_Help/Images/TA-QC.flow.bidirectional.png)\*|**Test Name**|test|\*Upload only applies when [`title in comment=yes`](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection#li.title_in_comment) \(see next entry\)|
|**ID**, **Title**|![](/images/TA_Help/Images/TA-QC.flow.upload.png)<br><br>**ID** + ', ' + **Title**\*|**Test Name**|test|\*Conditioned on [`title in comment=no`](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection#li.title_in_comment) \(default\)|<br>
|**Title**|![](/images/TA_Help/Images/TA-QC.flow.upload.png)<br><br>'Title: ' + **Title**|**Comments**|test|Conditioned on [`title in comment=yes`](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection#li.title_in_comment)|<br>
|**Description**|![](/images/TA_Help/Images/TA-QC.flow.bidirectional.png)|**Description**|test| |
|**Source** \(value auto-gen'd on upload\*\)|![](/images/TA_Help/Images/TA-QC.flow.upload.png)\*|**Test ID**|test|\*Values for **Source** are auto-generated on upload \(regardless of whether a value already exists in the field – thus ensuring mappings with Quality Center remain unique\).|
|**Source**|![](/images/TA_Help/Images/TA-QC.flow.import.png)|**Test ID**|test|Note that on import, uniqueness is enforced by clearing the **Source** values of any test cases in the project that conflict with the uploaded one.|
|**Test Objectives** tab: **ID**, **Title** fields|![](/images/TA_Help/Images/TA-QC.flow.upload.png)\*|**test objective**6|test|\*Fields are concatenated, separated with ':'. Multiple objectives separated by newlines.|
|Test module's **Editor** tab: line\(s\) directly under appropriate TEST CASE header|![](/images/TA_Help/Images/TA-QC.flow.import.png)content parsed\*|**test objective**6|test|\*Content is parsed into **ID** and **Title** columns of the action line, with 'test objective' in the action column, prepended with '//' to form comment. Note that the actual test objective fields \(on the test case's **Test Objectives** tab\) are not populated.|
|action line|![](/images/TA_Help/Images/TA-QC.flow.upload.png)|single step within **Design Steps** tab|test|See below for processing and distribution of action line information on upload|

![](/images/TA_Help/Images/QC_test_case.mapping.01.png)

1 Direction of flow:

|||
|------|------|
|![](/images/TA_Help/Images/TA-QC.flow.import.png)|applies to import \(QC to TA\)|
|![](/images/TA_Help/Images/TA-QC.flow.upload.png)|applies to upload \(TA to QC\)|
|![](/images/TA_Help/Images/TA-QC.flow.bidirectional.png)|applies bidirectionally|

2 Unless otherwise specified, referenced fields belonging to Quality Center test entities may be found under the **Details** tab or, in the case of action line-specific fields, the **Design Steps** tab.

3 Note that values for **Source** are either autogenerated \(on upload\) or loaded from Quality Center on import. Note also that **Source** values are modified on every upload \(to ensure mappings with Quality Center tests remain unique\). On import, uniqueness is enforced by deleting the **Source** values of any test modules that conflict with the uploaded one.

4 The creation of a \#test in Quality Center during an upload is contingent on the **Map Test Module \(\#\)** check box being selected in the Upload Test Module dialog box.

5 There is a distinction made in TestArchitect–Quality Center integration between Quality Center folders containing tests, and ones holding other folders. A folder containing tests is the analog of the TestArchitect test module, whereas a folder containing subfolders corresponds to a TestArchitect test folder.

6 Requires that the **test objective** field exist in Quality Center test entities, as a subtab in **Details**. See [Creating a custom test objective field in Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/features/creating-matching-custom-fields-in-testarchitect-and-quality-center/mapping-test-objective-to-qc).

TestArchitect items are uploaded to Quality Center as follows:

-   Uploading a test module to Quality Center also uploads that module's test cases.
-   Each TestArchitect test case's **Title** and **ID** fields are combined and joined by an underscore to become a Quality Center **test case name**.
-   Each TestArchitect test module/test case description \(found on the **Information** tab of the item\) is copied to the corresponding Quality Center test case, where it may be found in the **Description** subtab under the test plan's **Detail** tab.

    ![](/images/TA_Help/Images/Integration_QC_description.png)

-   Each TestArchitect **test objective** is copied to the corresponding Quality Center test case or test module. However, for this to take effect, you must have created a **Memo** user field in Quality Center, naming it test objective, prior to the upload. The textual objective is located in the Quality Center's **test objective** tab within the test plan's **Detail** tab.

    ![](/images/TA_Help/Images/Integration_QC_test_objective.png)

-   If you declare the option `title in comment=yes` in the [Registering the Quality Center server](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/configuring-the-quality-center-connection#cmd_qjl_z23_tm) step, each TestArchitect test case's title is transferred to the corresponding Quality Center test case. This textual title is located in Quality Center's **Comments** tab within the test plan's **Detail** tab.![](/images/TA_Help/Images/Integration_QC_TC_title.png)


-   Detailed step levels for both test module and test cases are uploaded to Quality Center. You can view the detailed step-by-step execution results in Quality Center from its Test Lab's **Execution Grid** tab. Select a test module or test case on the **Execution Grid** tab to view its step-by-step results in the **Last Run Report** tab as illustrated below:

    ![](/images/TA_Help/Images/Integration_QC_step_levels.png)




