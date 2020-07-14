--- 
title: "TestArchitect Execution dialog box"
linktitle: "TestArchitect Execution dialog box"
description: "The TestArchitect Execution dialog box is invoked, when TestArchitect automated runs are executed via MTM."
weight: 8
aliases: 
    - /TA_Help/Topics/ug_TestArchitect_execution_dialog.html
keywords: "integration, MTM, TestArchitect Execution, TestArchitect Execution, Microsoft Test Manager, TestArchitect Execution, TFS, TAScheduler, Team Foundation Server"
---

The TestArchitect Execution dialog box is invoked, when TestArchitect automated runs are executed via MTM.

## TestArchitect Execution dialog box

In order to invoke this dialog box, see [here](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/running-ta-tests-from-mtm).

![](/images/TA_Help/Images/TA_Execution_dlg_TFS.png)

1.  TestArchitect Information panel:

    ![](/images/TA_Help/Images/TA_Execution_dlg_TA_info_panel.png)

    -   Repository Server: Name or IP address of TestArchitect Repository Server holding the repository of the tests.
    -   Port: Port number of the TestArchitect Repository Server host.
    -   Repository Name: Name of TestArchitect repository hosting the tests.
    -   User Name: TestArchitect user name whose account has permission to access and execute tests on the host.
    -   Password: Password for the above user account.
2.  **General** tab:

    ![](/images/TA_Help/Images/TFS_General_tab.png)

    1.  Screenshot recording: Select this check box to configure the capturing of screenshots of [UI-Interacting actions](/automation-guide/action-based-testing-language/the-test-language/timing/understanding-action-types-and-condition-types/classifying-ui-interactive-actions). \([Learn more](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/#li.screenshot.exec_test_dlg.settings).\)

        ![](/images/TA_Help/Images/Test_execution_dialog_screenshot_recording.png)

3.  **Advanced** tab:

    ![](/images/TA_Help/Images/TFS_Advanced_tab.png)

    1.  **Export Result\(s\) to TARESULT**: Select this check box to export TA results as .TARESULT files.

        {{<note>}} .TARESULT is an archive extension, developed by LogiGear.

        ![](/images/TA_Help/Images/MTM_export_TARESULT_file.png)

        -   **Include screenshots**: Include all captured [screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the exported test result.
        -   **Include all sub test results**: If the exported test result is a master result, meaning it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results), or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.
    2.  **Export Result\(s\) to HTML**: Export test results to HTML file automatically once the text execution is complete \([learn more](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file)\).

        ![](/images/TA_Help/Images/Advanced_tab_Export_HMTL.png)

        -   Create folder structure: Select whether the folder structure or flat structure directory is created to store HTML results.
            -   Folder structure \(the **Create folder structure** check box is enabled\): TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
            -   Flat structure \(the **Create folder structure** check box is cleared\): TestArchitect does not create subdirectories. There is only a single top-level directory that contains all HTML results.
        -   Include all sub test results: If the exported test result is a master result, that is, it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results) or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into HTML files.
        -   Apply customized XSLT template: Export HTML results with your own view layout.
        -   **Include screenshots**: Retain all [captured screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the exported HTML test result.
            -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
            -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
    3.  **Export result\(s\) to xUnit**: Export test results to a XML file automatically in xUnit-format for integrating into the [continuous integration tools](/user-guide/integration-with-third-party-tools/continuous-integration-ci-tools/) once the text execution is complete.

        ![](/images/TA_Help/Images/Advanced_tab_Export_xUnit.png)

    4.  **Export result\(s\) to XML detail**: Export test results to XML file automatically once the text execution is complete \(see [Exporting test results to XML](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-xml) for more details\).

        ![](/images/TA_Help/Images/Advanced_tab_Export_XML.png)

    5.  **Include screenshots**: Select this check box if you want to retain all [captured screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the test results attached to TFS.

        ![](/images/TA_Help/Images/Test_execution_dialog_include_screenshots.png)

        -   Optimized resolution: Included screenshot's dimensions are optimized to save space in the exported HTML test results. Specifically, the screenshots are saved as thumbnail images.
        -   Regular resolution: Original resolution of included screenshots is retained. Specifically, the screenshots are saved as full size images.
    6.  **Upload attachment\(s\) to Team Foundation Server**: Select this check box to upload the TA test result to selected TFS test cases as an HTML file attachment. \(Selectivity is determined by the field that follows\).

        ![](/images/TA_Help/Images/MTM_upload_attachment.png)

        -   The By Team Foundation Server result list box allows you to specify which associated TFS test cases are to receive links to the attached test result. This determination is based, for each given test case, on its result in terms of its [TFS outcome](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection#choice_xrl_w5x_xs).

            -   Passed: Attach the TA test result file if the test case's TFS outcome is Passed.
            -   Inconclusive: Attach the TA test result file if the test case's TFS outcome is Inconclusive.
            -   Failed: Attach the TA test result file if the test case's TFS outcome is Failed.
            {{<note>}}

            -   The mappings between TestArchitect result statuses and TFS outcomes \(that is, how TFS interprets each TA result status\) are defined during initial configuration of the TA repository's connection to the Team Foundation Server. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/configuring-ta-for-a-tfs-connection#choice_xrl_w5x_xs).\)
            -   If more than one condition is selected, they are effectively OR'd together. For example: If both Passed and Failed check boxes are selected, any TA result that has an TFS outcome of *either* Passed or Failed is uploaded as an attachment.
        -   In the Upload attachment as panel, select the format of the uploaded test result.
            -   HTML: \(Default\) Upload the result as an HTML file.
            -   Compressed \(Zip\): Upload the result as a zipped HTML file.
            -   **Automatically compress result\(s\) if file size \> KB**: Upload the result as a compressed \(zipped\) HTML file if the file exceeds the specified size. Otherwise, upload the result as an uncompressed HTML file.
        -   Apply customized XSLT template: Export HTML results with your own view layout.

            {{<note>}}

            -   You are first required to customize the default XSLT template, which means you need to modify [a set of XSL files](/user-guide/working-with-test-results/customizing-xml-test-results/) to suit your desired view layout. \(See more examples [here](/user-guide/working-with-test-results/customizing-xml-test-results/).\)
            -   When your customized XSLT is invalid, the default XSLT template, located at the \{TA\_INSTALL\_DIR\}\\templates\\xsl\\ directory, is automatically applied.
            {{<important>}} Please ensure that your Repository Server has access rights to the location which stores the XSLT template.




