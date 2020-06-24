--- 
title: "Manually uploading TestArchitect test results to Team Foundation Server"
linktitle: "Manually uploading TestArchitect test results to Team Foundation Server"
description: "TestArchitect test results from projects or test cases which are mapped to TFS can also be uploaded to TFS by manual means."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_upload_result_manual.html
keywords: "integration, MTM, uploading TestArchitect results (manual), uploading TestArchitect results (manual), Microsoft Test Manager, uploading TestArchitect results (manual)"
---

TestArchitect test results from projects or test cases which are mapped to TFS can also be uploaded to TFS by manual means.

Ensure that you have already taken the following steps:

-   Registered the TFS server with TestArchitect. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html).\)
-   Mapped the TestArchitect project containing the test cases of interest to a TFS project. \([Learn more](/TA_Help/Topics/Integration_MTM_map_proj.html).\)
-   Mapped TA test cases to TFS test cases. This can be achieved by any of the following means:
    -   importing TFS [test suites](/TA_Help/Topics/ug_MTM_import_TS.html) or [test cases](/TA_Help/Topics/ug_MTM_import_TC.html) into TA,
    -   uploading TA [test modules/tests cases](/TA_Help/Topics/ug_upload_TAtest_MTM.html) to TFS,
    -   performing [manual mapping](/TA_Help/Topics/Integration_MTM_mapping_TA_MTM_IDs.html) between TA test cases and TFS test cases.

To manually upload TestArchitect test results to TFS:

1.  In the TestArchitect explorer tree or [a result list view](/TA_Help/Topics/Listview_results.html), right-click a test result, and then select **External Tool** \> **Visual Studio** \> **Upload to Team Foundation Server** .

2.  In the Select Location dialog box, specify a location on TFS that you want to upload the result to through either of the following:

    -   Explicitly defining the location:
        1.  Click **Select a Destination Folder**.
        2.  Select a location that you want to upload the result to.

            ![](/images/TA_Help/Images/ug_MTM_Select_Location_dlg_manual.png)

    -   By using Work Item Query Language, only appear when user select **TFS Helper - All Version of Team Foundation Server** in **Uploading method** \([WIQL](https://msdn.microsoft.com/en-us/library/bb130306(v=vs.90).aspx)\).\([Learn more](/TA_Help/Topics/ug_MTM_WIQL_reference.html).\)
        1.  Click **Work Item Query Language \(WIQL\)**.
        2.  Enter a WIQL query to query for a collection of satisfied TFS test cases, and then click **OK**.

            ![](/images/TA_Help/Images/WIQL_command_2.png)

            {{<tip>}} Click the question mark icon to see the typical syntax of a WIQL query.

    -   {{<note>}} TestArchitect only support **Rest API** option for Automatically uploading test results to TFS.
3.  In the **Build Number** box, specify a build number.

    ![](/images/TA_Help/Images/ug_MTM_build_number_enter.png)

    {{<note>}} **Build Number** field:

    -   It is a built-in field in both TestArchitect and TFS, used to represent the AUT build.
        -   If this field is empty, specify a value.
        -   If this test result's built-in field already has a value defined from a previous run, this field is automatically filled in and is non-modifiable.
    -   You only need to fill in this field, if you are using [TFS 2015 RTM](https://www.visualstudio.com/en-us/news/releasenotes/tfs2015-rtm-vs) \(Release to Manufacturing\) and/or earlier versions.
    {{<important>}} If your TestArchitect installation is integrated with Visual Studio Team Services, formerly known as Visual Studio Online, be aware that the **Build Number** field in Visual Studio Team Services is governed by a user-specified domain of values. That is, any build number supplied from TestArchitect must first exist in Visual Studio Team Services's list of allowable build numbers.

4.  Select the **Upload attachment\(s\) to Team Foundation Server** check box to upload the TestArchitect test result to selected TFS test cases as an HTML file attachment. \(Selectivity is determined by the field as follows\).

    ![](/images/TA_Help/Images/ug_MTM_upload_results_manual.png)

5.  Use the By Team Foundation Server result list box to specify which type\(s\) of TFS test result accept an attached TestArchitect test result.

    ![](/images/TA_Help/Images/ug_MTM_upload_results_manual_MTM_result_types.png)

    -   Passed: Upload the TA test result as an attachment if the TFS result status is Passed.
    -   Inconclusive: Upload the TA test result as an attachment if the TFS result status is Inconclusive.
    -   Failed: Upload the TA test result as an attachment if the TFS result status is Failed.
    {{<note>}}

    -   The mappings between TestArchitect and TFS test result statuses \(that is, how TFS interprets each TA result status\) are defined during initial configuration of the TA repository's connection to the Team Foundation Server. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html#choice_xrl_w5x_xs).\)
    -   If more than one condition is selected, they are effectively OR'd together. For example: If both Passed and Failed check boxes are selected, any TA result that has an TFS status of *either* Passed or Failed is uploaded as an attachment.
6.  Select the format of the uploaded test result:

    -   HTML: \(Default\) Upload the result as an HTML file.
    -   Compressed \(Zip\): Upload the result as a zipped HTML file.
    -   **Automatically compress result\(s\) if file size \> KB**: Upload the result as a compressed \(zipped\) HTML file if the file exceeds the specified size. Otherwise, upload the result as an uncompressed HTML file.
    ![](/images/TA_Help/Images/ug_MTM_upload_results_manual_attachment_type.png)

7.  Click **OK**.

    TestArchitect uploads the selected test results to TFS at the specified location and displays the upload confirmation message.

8.  Click **OK** to close the confirmation dialog box.


TestArchitect test results are uploaded to TFS in the format specified in step \#6.

![](/images/TA_Help/Images/ug_MTM_uploaded_results.png)

{{<caution>}}

In case of test results generated from a [serial test run](/TA_Help/Topics/Test_exec_multiple_TM.html), that is, running multiple test modules sequentially within a single test run, if the given **Build Number**'s values among test modules are not identical, the test results are unable to be uploaded to TFS. \([Learn more](/TA_FAQ/Topics/faq.shoot.TFS_mismatched_build_number_values.html).\)

{{<important>}}

-   When name of the working directory of build agents in combination with name of TA tests have more than 260 characters, filename of TestArchitect results, uploaded to TFS, are automatically shortened based on the following format: T<"TfsTestID"\>.html. Otherwise, the uploaded test result's filename remains unchanged.
-   Similarly, for subresults in case of serial test runs, when name of the working directory of build agents in combination with name of TestArchitect tests have more than 260 characters, filename of TestArchitect results, uploaded to TFS, are automatically shortened based on the following format: T<"TFSTestCaseID"\>\_<"indexNo"\>.html. Otherwise, the uploaded test result's name remains unchanged.
-   Alternatively, you might use TFS test ID to name the TestArchitect test results attached to TFS by using [TFS-MTM Extensibility](/TA_Help/Topics/ug_MTM_Extensibility.html).




