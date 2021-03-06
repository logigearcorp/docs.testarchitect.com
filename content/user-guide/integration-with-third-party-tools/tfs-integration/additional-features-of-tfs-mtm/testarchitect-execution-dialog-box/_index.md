--- 
title: "TestArchitect Execution dialog box"
linktitle: "TestArchitect Execution dialog box"
weight: 8
aliases: 
    - /TA_Help/Topics/ug_TestArchitect_execution_dialog.html
---

The TestArchitect Execution dialog box is invoked, when TestArchitect automated runs are executed via MTM.

## TestArchitect Execution dialog box

In order to invoke this dialog box, see [here](Integration_MTM_running_test_cases.html).

![](/images//Images/TA_Execution_dlg_TFS.png)

1.  TestArchitect Information panel:

    ![](/images//Images/TA_Execution_dlg_TA_info_panel.png)

    -   Repository Server: Name or IP address of TestArchitect Repository Server holding the repository of the tests.
    -   Port: Port number of the TestArchitect Repository Server host.
    -   Repository Name: Name of TestArchitect repository hosting the tests.
    -   User Name: TestArchitect user name whose account has permission to access and execute tests on the host.
    -   Password: Password for the above user account.
2.  **General** tab:

    ![](/images//Images/TFS_General_tab.png)

    1.  Screenshot recording: Select this check box to configure the capturing of screenshots of [UI-Interacting actions](/TA_Automation/Topics/timing_classifying_actions.html). \([Learn more](ug_Screenshot_recording.html#li.screenshot.exec_test_dlg.settings).\)

        ![](/images//Images/Test_execution_dialog_screenshot_recording.png)

3.  **Advanced** tab:

    ![](/images//Images/TFS_Advanced_tab.png)

    1.  **Export Result\(s\) to TARESULT**: Select this check box to export TA results as .TARESULT files.

        **Note:** .TARESULT is an archive extension, developed by LogiGear.

        ![](/images//Images/MTM_export_TARESULT_file.png)

        -   **Include screenshots**: Include all captured [screenshots](ug_Screenshot_recording.html) in the exported test result.
        -   **Include all sub test results**: If the exported test result is a master result, meaning it is a [test suite result](ug_test_results_introduction.html#section.TS_results), or it contains [subresults](ug_test_results_introduction.html#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.
    2.  **Export Result\(s\) to HTML**: Export test results to HTML file automatically once the text execution is complete \([learn more](Test_result_export_HTML.html)\).

        ![](/images//Images/Advanced_tab_Export_HMTL.png)

        -   Create folder structure: Select whether the folder structure or flat structure directory is created to store HTML results.
            -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
            -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
        -   Include all sub test results: If the exported test result is a master result, that is, it is a [test suite result](ug_test_results_introduction.html#section.TS_results) or it contains [subresults](ug_test_results_introduction.html#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.
        -   Apply customized XSLT template: Export HTML results with your own view layout.
        -   **Include screenshots**: Retain all [captured screenshots](ug_Screenshot_recording.html) in the exported HTML test result.
            -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
            -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
    3.  **Export result\(s\) to xUnit**: Export test results to a XML file automatically in xUnit-format for integrating into the [continuous integration tools](Integration_xUnit.html) once the text execution is complete.

        ![](/images//Images/Advanced_tab_Export_xUnit.png)

    4.  **Export result\(s\) to XML detail**: Export test results to XML file automatically once the text execution is complete \(see [Exporting test results to XML](Test_result_export_XML.html) for more details\).

        ![](/images//Images/Advanced_tab_Export_XML.png)

    5.  **Include screenshots**: Select this check box if you want to retain all [captured screenshots](ug_Screenshot_recording.html) in the test results attached to TFS.

        ![](/images//Images/Test_execution_dialog_include_screenshots.png)

        -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
        -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
    6.  **Upload attachment\(s\) to Team Foundation Server**: Select this check box to upload the TA test result to selected TFS test cases as an HTML file attachment. \(Selectivity is determined by the field that follows\).

        ![](/images//Images/MTM_upload_attachment.png)

        -   The By Team Foundation Server result list box allows you to specify which associated TFS test cases are to receive links to the attached test result. This determination is based, for each given test case, on its result in terms of its [TFS outcome](Integration_MTM_connecting_TFS.html#choice_xrl_w5x_xs).

            -   Passed: Attach the TA test result file if the test case's TFS outcome is Passed.
            -   Inconclusive: Attach the TA test result file if the test case's TFS outcome is Inconclusive.
            -   Failed: Attach the TA test result file if the test case's TFS outcome is Failed.
            **Note:**

            -   The mappings between TestArchitect result statuses and TFS outcomes \(that is, how TFS interprets each TA result status\) are defined during initial configuration of the TA repository's connection to the Team Foundation Server. \([Learn more](Integration_MTM_connecting_TFS.html#choice_xrl_w5x_xs).\)
            -   If more than one condition is selected, they are effectively OR'd together. For example: If both Passed and Failed check boxes are selected, any TA result that has an TFS outcome of *either* Passed or Failed is uploaded as an attachment.
        -   In the Upload attachment as panel, select the format of the uploaded test result.
            -   HTML: \(Default\) Upload the result as an HTML file.
            -   Compressed \(Zip\): Upload the result as a zipped HTML file.
            -   **Automatically compress result\(s\) if file size \> KB**: Upload the result as a compressed \(zipped\) HTML file if the file exceeds the specified size. Otherwise, upload the result as an uncompressed HTML file.
        -   Apply customized XSLT template: Export HTML results with your own view layout.

            **Note:**

            -   You are first required to customize the default XSLT template, which means you need to modify [a set of XSL files](ug_customizing_XML_report.html) to suit your desired view layout. \(See more examples [here](ug_customizing_XML_report.html).\)
            -   When your customized XSLT is invalid, the default XSLT template, located at the \{TA\_INSTALL\_DIR\}\\templates\\xsl\\ directory, is automatically applied.
            **Important:** Please ensure that your Repository Server has access rights to the location which stores the XSLT template.


**Parent topic:**[Additional features of TFS-MTM](/TA_Help/Topics/ug_MTM_features.html)

**Previous topic:**[TestArchitect-Team Foundation Server Extensibility](/TA_Help/Topics/ug_MTM_Extensibility.html)

