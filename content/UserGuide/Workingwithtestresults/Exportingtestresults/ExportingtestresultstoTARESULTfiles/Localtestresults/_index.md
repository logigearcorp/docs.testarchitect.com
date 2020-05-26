--- 
title: "Exporting local test results to .TARESULT files"
linktitle: "Local test results"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_test_results_export_local_results_TARESULT.html
---
# Exporting local test results to .TARESULT files {#task_krq_blp_p1b .task}

How to export your local test results to .TARESULT files.

-   **Option \#1**: Manually exporting test results to .TARESULT.

    1.  Select a local test result that you want to export to the .TARESULT file.

        **Tip:** You can select a local test result in the TestArchitect explorer tree, or in the [local result list view](Listview_results_local.html).

    2.  Invoke the Export Result\(s\) To File dialog box by doing one of the following:

        -   Right-click the selection, and then click **Export** \> **to TARESULT file**.
        -   Alternatively, double-click the selection, and then click the **Save to file** ![](../Images/Save_to_file_HTML_icon.png) icon on the main panel's toolbar.
        The Export Result\(s\) To File dialog appears.

        ![](../Images/Export_Results_To_File_local_result_dlg.png)

    3.  In the dialog box, click the **Browse** ![](../Images/btn.browse-ellipsis.01.png) button to choose a location to which to save the file \(in .TARESULT format\).

        You can accept the default location, but any place that is easy to remember will work.

        **Note:**

        -   On Windows: Network paths are also supported.
        -   On Linux, macOS: Mounted paths are also supported.
    4.  To include all captured [screenshots](ug_Screenshot_recording.html) in the exported test result, select the **Include screenshots** check box.

    5.  To open the parent folder containing the exported test result, select the **Open folder after saving** check box.

    6.  If the exported test result is a master result, meaning, it is a [test suite result](ug_test_results_introduction.md#section.TS_results), or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.

    7.  In the Export Result\(s\) To File, click **OK**.

        A notification message dialog box appears to inform that the export is successful.

        ![](../Images/export_repo_result_notification.png)

    8.  In the dialog box, click **OK** to proceed.

    -   After exporting the local test results, you can import them into TestArchitect on any machine. \([Learn more](ug_importing_test_results.html).\)
    -   Local result \(.TARESULT\) files can be imported as either local or repository test results into TestArchitect.

        **Warning:** When your local result files \(.TARESULT\) contain [captured screenshots](ug_Screenshot_recording.html), but they are imported as repository test results, the screenshots are totally discarded.

-   **Option \#2**: Directing TestArchitect to automatically export test results to .TARESULT upon test completion.

    1.  In TestArchitect Client, select the test module\(s\) that you want to execute.

    2.  Click the **Execute** ![](../Images/btn.TAC_toolbar.Execute.png) button on the toolbar.

        The Execute Test dialog box appears.

    3.  Click the Advanced tab.

    4.  Select the **Export Result\(s\) to TARESULT** check box.

        ![](../Images/Export_TARESULT_execute_dlg.png)

    5.  Click ![](../Images/btn.browse-ellipsis.01.png) to choose a location to which to save the .TARESULT file.

        You can accept the default location, but any place that is easy to remember will work.

        **Note:**

        -   On Windows: Network paths are also supported.
        -   On Linux, macOS: Mounted paths are also supported.
    6.  To include all captured [screenshots](ug_Screenshot_recording.html) in the exported test result, select the **Include screenshots** check box.

    7.  If the exported test result is a master result, meaning, it is a [test suite result](ug_test_results_introduction.md#section.TS_results), or it contains [subresults](ug_test_results_introduction.md#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.

    8.  Click **Execute**.

        -   TestArchitect saves the settings in the Advanced tab and executes the test\(s\). Once execution is complete, the test results are automatically exported to a .TARESULT file at the specified location.
        -   Local result \(.TARESULT\) files can be imported as either local or repository test results into TestArchitect. \([Learn more](ug_importing_test_results.html).\)

            **Warning:** When your local result files \(.TARESULT\) contain [captured screenshots](ug_Screenshot_recording.html), but they are imported as repository test results, the screenshots are totally discarded.

        **Note:** If you opt to generate a batch file \(rather than execute the test immediately\), the following parameters are written to the generated file. \([Learn more](Test_exec_cmd.md#plentry.paramters_tares)\).

        -tares <TAresult\>
        :   Location to which to store the test result report in .TARESULT form.

        -subtares <0\|1 \>
        :   \(Optional\) The master result and its subresults are all exported into .TARESULT files.

        :   Options:

            -   0: \(Default\) Do not export the master result and its subresults
            -   1: Export the master result and its subresults
        -taresscrn <0\|1 \>
        :   \(Optional\) Keeps captured screenshots when exporting test results to .TARESULT files.

        :   Options:

            -   0: \(Default\) Do not export captured screenshots.
            -   1: Export screenshots.

**Parent topic:**[Exporting test results to .TARESULT files](../../TA_Help/Topics/ug_test_results_export_TARESULT.html)

**Next topic:**[Exporting repository test results to .TARESULT files](../../TA_Help/Topics/ug_test_results_export_repo_results_TARESULT.html)

