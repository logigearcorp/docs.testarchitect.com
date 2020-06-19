--- 
title: "Automatically uploading TestArchitect test results to TFS"
linktitle: "Automatically uploading TestArchitect test results to Team Foundation Server"
description: "When launching a test run from TestArchitect Client, you can configure TestArchitect to automatically upload the test results to TFS upon conclusion of the run."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_upload_result_automatic.html
keywords: "integration, MTM, uploading TestArchitect results (automatic), uploading TestArchitect results (automatic), Microsoft Test Manager"
---

When launching a test run from TestArchitect Client, you can configure TestArchitect to automatically upload the test results to TFS upon conclusion of the run.

Ensure that you have already taken the following steps:

-   Registered the TFS server with TestArchitect. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html).\)
-   Mapped the TestArchitect project containing the test cases of interest to a TFS project. \([Learn more](/TA_Help/Topics/Integration_MTM_map_proj.html).\)
-   Mapped TA test cases to TFS test cases. This can be achieved by any of the following means:
    -   importing TFS [test suites](/TA_Help/Topics/ug_MTM_import_TS.html) or [test cases](/TA_Help/Topics/ug_MTM_import_TC.html) into TA,
    -   uploading TA [test modules/tests cases](/TA_Help/Topics/ug_upload_TAtest_MTM.html) to TFS,
    -   performing [manual mapping](/TA_Help/Topics/Integration_MTM_mapping_TA_MTM_IDs.html) between TA test cases and TFS test cases.
-   When you specify the working directory, which the build agent uses to read from or write to files, please ensure the path to the working directory is not too long. Specifically, the specified working directory must not cause the build agent to produce any physical paths that are longer than 259 characters \([learn more](https://msdn.microsoft.com/en-us/library/bb399135(v=vs.120).aspx#work_dir)\). Otherwise, your builds might fail and log this error: TF10128: The path <PhysicalPath\> contains more than the allowed 259 characters. Type or select a shorter path. When you encounter this issue, names of TestArchitect test results which are [uploaded](/TA_Help/Topics/ug_MTM_upload_result.html) to TFS are shortened \([learn more](/TA_Help/Topics/ug_MTM_upload_result_automatic.html#note.truncated_uploaded_TA_results)\).

To automatically upload TestArchitect test results to TFS after execution:

1.  Initiate TestArchitect test execution as you normally would. \([Learn more](/TA_Help/Topics/Test_exec_test_execution.html).\)

    The Execute Test dialog box appears.

2.  On the **General** tab, in the **Build Number** field, specify a build number.

    ![](/images/TA_Help/Images/ug_MTM_build_number.png)

    **Remember:**

    -   **Build number** is a built-in field for both TestArchitect and TFS, representing the AUT build.

        ![](/images/TA_Help/Images/ug_MTM_build_number_test_run.png)

    -   If your TestArchitect installation is integrated with Visual Studio Team Services, formerly known as Visual Studio Online, be aware that the **Build Number** field in Visual Studio Team Services is governed by a user-specified domain of values. That is, any build number supplied from TestArchitect must first exist in Visual Studio Team Services's list of allowable build numbers.
3.  Switch to the **Advanced** tab, and then select the **Upload result\(s\) to Team Foundation Server** check box.

    ![](/images/TA_Help/Images/ug_MTM_upload_results_auto.png)

4.  Click the browse ![](/images/TA_Help/Images/btn.browse-ellipsis.02.png) button.

5.  In the Select Location dialog box, specify a location on TFS to which you wish the result uploaded. You can do this by either of two means:

    -   By explicitly defining the location:
        1.  Click **Select a Destination Folder**.
        2.  Select the location to which the result should be uploaded, and then click **OK**.

            ![](/images/TA_Help/Images/ug_MTM_Select_Location_dlg.png)

    -   By using Work Item Query Language, only appear when user select **TFS Helper - All Version of Team Foundation Server** in **Uploading method** \([WIQL](https://msdn.microsoft.com/en-us/library/bb130306(v=vs.90).aspx)\).\([Learn more](/TA_Help/Topics/ug_MTM_WIQL_reference.html).\)
        1.  Click **Work Item Query Language \(WIQL\)**.
        2.  Enter a WIQL query to query for a collection of satisfied TFS test cases, and then click **OK**.

            ![](/images/TA_Help/Images/WIQL_command_2.png)

            **Tip:** Click the question mark icon to see the typical syntax of a WIQL query.

    -   By using Test Plan Settings, which only appear when you select **Rest API - Team Foundation Server 2015 Update 4** in the**Uploading method**
        1.  Select **Test Plan Settings**.
        2.  Enter Test Plan information to query a collection of satisfied TFS test cases, and then click **OK**.

            ![](/images/TA_Help/Images/TFS_upload_tst.png)

    -   By using Test Run Settings, which only appear when you select **Rest API - Team Foundation Server 2015 Update 4** in the **Uploading method**
        1.  Select **Test Run Settings**.
        2.  Enter Test Run information to query a collection of satisfied TFS test cases, and then click **OK**.

            ![](/images/TA_Help/Images/TFS_upload_rst.png)

            You could also configure this setting by using arguments in [execute command](/TA_Help/Topics/TA_command_line_execute.html#)

6.  Select the **Upload attachment\(s\) to Team Foundation Server** check box to upload the TestArchitect test result to selected TFS test cases as an HTML file attachment. \(Selectivity is determined by the field as follows\).

    ![](/images/TA_Help/Images/ug_MTM_upload_results_automatic_attachment.png)

7.  The By Team Foundation Server result list box allows you to specify which associated TFS test cases are to receive links to the attached test result. This determination is based, for each given test case, on its result in terms of its [TFS outcome](/TA_Help/Topics/Integration_MTM_connecting_TFS.html#choice_xrl_w5x_xs).

    ![](/images/TA_Help/Images/ug_MTM_upload_results_automatic_MTM_result_types.png)

    -   Passed: Attach the TA test result file if the test case's TFS outcome is Passed.
    -   Inconclusive: Attach the TA test result file if the test case's TFS outcome is Inconclusive.
    -   Failed: Attach the TA test result file if the test case's TFS outcome is Failed.
    **Note:**

    -   The mappings between TestArchitect result statuses and TFS outcomes \(that is, how TFS interprets each TA result status\) are defined during initial configuration of the TA repository's connection to the Team Foundation Server. \([Learn more](/TA_Help/Topics/Integration_MTM_connecting_TFS.html#choice_xrl_w5x_xs).\)
    -   If more than one condition is selected, they are effectively OR'd together. For example: If both Passed and Failed check boxes are selected, any TA result that has an TFS outcome of *either* Passed or Failed is uploaded as an attachment.
8.  In the Upload attachment as panel, select the format of the uploaded test result.

    -   HTML: \(Default\) Upload the result as an HTML file.
    -   Compressed \(Zip\): Upload the result as a zipped HTML file.
    -   **Automatically compress result\(s\) if file size \> KB**: Upload the result as a compressed \(zipped\) HTML file if the file exceeds the specified size. Otherwise, upload the result as an uncompressed HTML file.
    ![](/images/TA_Help/Images/ug_MTM_upload_results_automatic_attachment_type.png)

9.  To upload results as an HTML with your own view layout, select the **Apply customized XSLT template** check box, and then choose a location of your customized XSLT template.

    ![](/images/TA_Help/Images/ug_MTM_upload_results_HTML_layout.png)

    You are first required to customize the default XSLT template, which means you need to modify [a set of XSL files](/TA_Help/Topics/ug_customizing_XML_report.html) to suit your desired view layout. \(See more examples [here](/TA_Help/Topics/ug_customizing_XML_report.html).\)

    **Attention:** When your customized XSLT is invalid, the default XSLT template, located at the \{TA\_INSTALL\_DIR\}\\templates\\xsl\\ directory, is automatically applied.

    **Note:** if you are using a repository on another machine, make sure that the template you choose is accessible to the repository server under the account that starts the repository server service. It means that the template needs placing either on the repository server or in a network shared folder. Otherwise, the default template will be used.

10. In the Execute Test dialog box, click the **Execution** button to begin test execution.

    After the test run ends, TestArchitect automatically uploads the generated test results to TFS at the specified location and displays the upload confirmation message.

11. Click **OK** to close the confirmation dialog box.


TestArchitect test results are uploaded to TFS in the format specified in step \#8.

![](/images/TA_Help/Images/ug_MTM_uploaded_results.png)

CAUTION:

In case of test results generated from a [serial test run](/TA_Help/Topics/Test_exec_multiple_TM.html), that is, running multiple test modules sequentially within a single test run, if the given **Build Number**'s values among test modules are not identical, the test results are unable to be uploaded to TFS. \([Learn more](/TA_FAQ/Topics/faq.shoot.TFS_mismatched_build_number_values.html).\)

**Important:**

-   When name of the working directory of build agents in combination with name of TA tests have more than 260 characters, filename of TestArchitect results, uploaded to TFS, are automatically shortened based on the following format: T<"TfsTestID"\>.html. Otherwise, the uploaded test result's filename remains unchanged.
-   Similarly, for subresults in case of serial test runs, when name of the working directory of build agents in combination with name of TestArchitect tests have more than 260 characters, filename of TestArchitect results, uploaded to TFS, are automatically shortened based on the following format: T<"TFSTestCaseID"\>\_<"indexNo"\>.html. Otherwise, the uploaded test result's name remains unchanged.
-   Alternatively, you might use TFS test ID to name the TestArchitect test results attached to TFS by using [TFS-MTM Extensibility](/TA_Help/Topics/ug_MTM_Extensibility.html).



