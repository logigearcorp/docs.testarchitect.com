--- 
title: "Local result list view"
linktitle: "Local result list view"
weight: 1
aliases: 
    - /TA_Help/Topics/Listview_results_local.html
---

The local results list view displays a list of all local test results contained within the **LOCAL RESULTS** node.

On the TestArchitect explorer tree, when you expand the **Results** node, and then double-click the **\>\>LOCAL RESULTS<<** node. TestArchitect displays in the main panel a list view of the locally-stored test results for the project.

![](/images//Images/Listview_local_result.png)

The following operations can be performed on the local test results list view:

## Common operations

You can find various common operations that can be performed on the local test result list view at [Common operations](/TA_Help/Topics/Listview_common_operations.html).

**Note:** Multiple field editing operations are not applicable to the local test results list view.

## Opening result

From a list view, you can open a local test result in the main panel by right-clicking its list view entry, then clicking **Open**.

**Tip:** You can also open multiple test results by using your keyboard's Shift key to select a contiguous range of test results \(or Control to select multiple noncontiguous test results\); then right-click the selection, and click Open.

## Storing local results to the repository

Local test results may be added to the repository manually or automatically. \([Learn more.](/TA_Help/Topics/Test_result_storing.html)\)

## Opening the source test module

You can have the editor open the test module responsible for a given test result by selecting **Open related test** on the context menu.

## Re-executing the tests

You can re-execute the test\(s\) responsible for selected test result\(s\) by selecting **Execute related test** on the context menu. \([Learn more](/TA_Help/Topics/Test_exec_test_execution.html).\)

## Opening a baseline test result

The baseline result for a test related to a selected test result can be displayed by selecting **Go to baseline result** from the context menu. \([Learn more](/TA_Help/Topics/Test_result_baselining.html#section_kyn_rmm_bl).\)

## Comparing test results

Side-by-side comparison of test results, or side-by-side comparison between a test result and a baseline result from the same test module, enable you to track your progress over time. \(For the detailed information, see [Comparing results with baseline](/TA_Help/Topics/Test_result_compare_to_baseline_results.html) and [Comparing results without baseline](/TA_Help/Topics/Test_result_compare_results.html).\)

## Delete command

Use the **Delete** command, from the context menu, to remove selected local test result\(s\).

## Converting test result to external files

From the context menu, a local test result can be converted and exported to the following files:

-   HTML files \([learn more](/TA_Help/Topics/Test_result_export_HTML.html)\)
-   XML files in xUnit format \([learn more](/TA_Help/Topics/Test_result_export_xUnit.html)\)
-   XML Detail files for backup or purpose \([learn more](/TA_Help/Topics/Test_result_export_XML.html)\)

## Previewing summary of a checkpoint failure or an automation warning/error

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

You can preview a checkpoint by selecting the desired checkpoint in the result list view and clicking its corresponding number of failures, warnings or errors. The first failure, warning or error of the checkpoint will be displayed in a tooltip.

**Restriction:** Previewing checkpoints of a master result, meaning, it is a [test suite result](/TA_Help/Topics/ug_test_results_introduction.html#section.TS_results), or it contains [subresults](/TA_Help/Topics/ug_test_results_introduction.html#section.Subresults), is currently unsupported.

![](/images//Images/Preview_checkpoint.png)

**Note:** It may take a while to load a tooltip, when the result list view contains thousands of checkpoints.

## Integration with third-party tools

TestArchitect seamlessly integrates with several powerful third-party tools, to assist in application development, continuous integration, and test management. Interfaces with [HP Quality Center](/TA_Help/Topics/Integration_QC_intro.html) \(QC\), and [Team Foundation Server/Microsoft Test Manager](/TA_Help/Topics/ug_MTM_def.html) \(TFS-MTM\) are all available to extend TestArchitect's functionality and empower your and your team.

-   HP Quality Center:
    -   Upload TA test results to QC \([learn more](/TA_Help/Topics/Integration_QC_Manually_uploading_test_results_to_QC.html)\)
-   Team Foundation Server-Microsoft Test Manager:
    -   Upload TA test results to TFS \([learn more](/TA_Help/Topics/ug_MTM_upload_result_manual.html)\)

**Parent topic:**[Result list view](/TA_Help/Topics/Listview_results.html)

**Next topic:**[Repository result list view](/TA_Help/Topics/Listview_results_repository.html)

