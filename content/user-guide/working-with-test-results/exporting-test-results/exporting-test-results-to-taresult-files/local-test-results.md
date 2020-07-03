--- 
title: "Exporting local test results to .TARESULT files"
linktitle: "Local test results"
description: "How to export your local test results to .TARESULT files."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_test_results_export_local_results_TARESULT.html
keywords: "test results, local, TARESULT, exporting to, exporting, test results, local, TARESULT"
---

How to export your local test results to .TARESULT files.

-   **Option \#1**: Manually exporting test results to .TARESULT.

    1.  Select a local test result that you want to export to the .TARESULT file.

        {{<tip>}} You can select a local test result in the TestArchitect explorer tree, or in the [local result list view](/user-guide/projects-and-project-items/project-items/list-view/result-list-view/local-result-list-view).

    2.  Invoke the Export Result\(s\) To File dialog box by doing one of the following:

        -   Right-click the selection, and then click **Export** \> **to TARESULT file**.
        -   Alternatively, double-click the selection, and then click the **Save to file** ![](/images/TA_Help/Images/Save_to_file_HTML_icon.png) icon on the main panel's toolbar.
        The Export Result\(s\) To File dialog appears.

        ![](/images/TA_Help/Images/Export_Results_To_File_local_result_dlg.png)

    3.  In the dialog box, click the **Browse** ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) button to choose a location to which to save the file \(in .TARESULT format\).

        You can accept the default location, but any place that is easy to remember will work.

        {{<note>}}

        -   On Windows: Network paths are also supported.
        -   On Linux, macOS: Mounted paths are also supported.
    4.  To include all captured [screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the exported test result, select the **Include screenshots** check box.

    5.  To open the parent folder containing the exported test result, select the **Open folder after saving** check box.

    6.  If the exported test result is a master result, meaning, it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results), or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.

    7.  In the Export Result\(s\) To File, click **OK**.

        A notification message dialog box appears to inform that the export is successful.

        ![](/images/TA_Help/Images/export_repo_result_notification.png)

    8.  In the dialog box, click **OK** to proceed.

    -   After exporting the local test results, you can import them into TestArchitect on any machine. \([Learn more](/user-guide/working-with-test-results/importing-test-results-from-taresult-files/).\)
    -   Local result \(.TARESULT\) files can be imported as either local or repository test results into TestArchitect.

        {{<warning>}} When your local result files \(.TARESULT\) contain [captured screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/), but they are imported as repository test results, the screenshots are totally discarded.

-   **Option \#2**: Directing TestArchitect to automatically export test results to .TARESULT upon test completion.

    1.  In TestArchitect Client, select the test module\(s\) that you want to execute.

    2.  Click the **Execute** ![](/images/TA_Help/Images/btn.TAC_toolbar.Execute.png) button on the toolbar.

        The Execute Test dialog box appears.

    3.  Click the Advanced tab.

    4.  Select the **Export Result\(s\) to TARESULT** check box.

        ![](/images/TA_Help/Images/Export_TARESULT_execute_dlg.png)

    5.  Click ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) to choose a location to which to save the .TARESULT file.

        You can accept the default location, but any place that is easy to remember will work.

        {{<note>}}

        -   On Windows: Network paths are also supported.
        -   On Linux, macOS: Mounted paths are also supported.
    6.  To include all captured [screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/) in the exported test result, select the **Include screenshots** check box.

    7.  If the exported test result is a master result, meaning, it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results), or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.

    8.  Click **Execute**.

        -   TestArchitect saves the settings in the Advanced tab and executes the test\(s\). Once execution is complete, the test results are automatically exported to a .TARESULT file at the specified location.
        -   Local result \(.TARESULT\) files can be imported as either local or repository test results into TestArchitect. \([Learn more](/user-guide/working-with-test-results/importing-test-results-from-taresult-files/).\)

            {{<warning>}} When your local result files \(.TARESULT\) contain [captured screenshots](/user-guide/finding-bugs-with-testarchitect/screenshot-recording/), but they are imported as repository test results, the screenshots are totally discarded.

        {{<note>}} If you opt to generate a batch file \(rather than execute the test immediately\), the following parameters are written to the generated file. \([Learn more](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/#plentry.paramters_tares)\).

        -   **-tares <TAresult\>**

            Location to which to store the test result report in .TARESULT form.

        -   **-subtares <0\|1 \>**

            \(Optional\) The master result and its subresults are all exported into .TARESULT files.

            Options:

            -   0: \(Default\) Do not export the master result and its subresults
            -   1: Export the master result and its subresults
        -   **-taresscrn <0\|1 \>**

            \(Optional\) Keeps captured screenshots when exporting test results to .TARESULT files.

            Options:

            -   0: \(Default\) Do not export captured screenshots.
            -   1: Export screenshots.



