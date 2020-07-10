--- 
title: "Exporting repository test results to .TARESULT files"
linktitle: "Repository test results"
description: "How to export your repository test results to .TARESULT files."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_test_results_export_repo_results_TARESULT.html
keywords: "test results, repository, TARESULT, exporting to, exporting, test results, repository, TARESULT"
---

How to export your repository test results to .TARESULT files.

Ensure that the test results you want to export are [stored in the repository](/user-guide/working-with-test-results/adding-test-results-to-the-repository/).

1.  Select the **Results** node or repository test results that you want to export to the .TARESULT file.

    {{<tip>}} You can select repository test results in the TestArchitect explorer tree, or in the [repository result list view](/user-guide/projects-and-project-items/project-items/list-view/result-list-view/repository-result-list-view).

2.  Invoke the Export Result\(s\) To File dialog box by doing one of the following:

    -   Right-click the selection, and then click **Export** \> **to TARESULT file**.
    -   Double-click the selection, and then click the **Export test result** ![](/images/TA_Help/Images/Save_to_file_HTML_icon.png) icon on the main panel's icon bar.
    The Export Result\(s\) To File appears.

    ![](/images/TA_Help/Images/Export_Results_To_File_taresult.dlg.png)

3.  **Optional:** In the dialog box, click the **Browse** ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) button to choose a location to which to save the file \(in .TARESULT format\).

    You can accept the default location, but any place that is easy to remember will work.

    {{<note>}}

    -   On Windows: Network paths are also supported.
    -   On Linux, macOS: Mounted paths are also supported.
4.  **Optional:** To reduce the size of your repository, select the **Remove from repository** check box to delete the source test result from the repository.

5.  **Optional:** To open the parent folder containing the exported test result, select the **Open folder after saving** check box.

6.  **Optional:** If the exported test result is a master result, meaning, it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results), or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), the **Include all sub test results** check box is available. With this option chosen, the master result and its subresults are all exported into .TARESULT format.

7.  In the Export Result\(s\) To File, click **OK**.

    A notification message dialog box appears to inform that the export is successful.

    ![](/images/TA_Help/Images/export_repo_result_notification.png)

8.  In the dialog box, click **OK** to proceed.


-   After exporting the repository test results, you can import them into TestArchitect on any machine. \([Learn more](/user-guide/working-with-test-results/importing-test-results-from-taresult-files/).\)
-   Repository result \(.TARESULT\) files can be imported as either local or repository test results into TestArchitect.

.



