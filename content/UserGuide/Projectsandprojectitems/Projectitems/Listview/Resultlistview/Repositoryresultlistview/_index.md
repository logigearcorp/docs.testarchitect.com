--- 
title: "Repository result list view"
linktitle: "Repository result list view"
weight: 2
aliases: 
    - /TA_Help/Topics/Listview_results_repository.html
---
# Repository result list view {#result_repo_list_view .concept}

A repository results list view displays a list of all repository test results contained within either the **Results** node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click the **Results** node, and then select the **Results** tab. TestArchitect displays in the main panel a list view of the repository test results for the project.

**Note:** Repository test result list views are also available for subfolders of the **Results** node.

![](../Images/Listview_repo_result.png)

The following operations can be performed on a repository test result list view:

## Common operations { .section}

You can find various common operations that can be performed on a repository test result list view at [Common operations](Listview_common_operations.html).

## Opening a result { .section}

From a list view, you can display a repository test result in the main panel by right-clicking its list view entry, then clicking **Open**.

**Tip:** You can also open multiple test results by using your keyboard's Shift key to select a contiguous range of test results \(or Control to select multiple noncontiguous test results\); then right-click the selection, and click Open.

## Opening the source test module { .section}

You can have the editor open the test module responsible for a given test result by selecting **Open related test** on the context menu.

## Re-executing the tests { .section}

You can re-execute the test\(s\) responsible for selected test result\(s\) by selecting **Execute related test** on the context menu. \([Learn more](Test_exec_test_execution.html).\)

## Setting/unsetting a baseline result { .section}

Any repository-based test result can be set as the baseline for the test module with which it is associated. Alternatively, if a given baseline result no longer needs to be designated as a baseline, you can unset it. Use the **Set as baseline result** and **Unset baseline** commands of the context menu for these purposes. \(See [Setting baseline result](Test_result_settting_baseline.html), and [Unsetting baseline results](Test_result_unsettting_baseline.html) for further information.\)

## Comparing test results { .section}

Side-by-side comparison of test results, or side-by-side comparison between a test result and a baseline result from the same test module, enable you to track your progress over time. To compare a repository test result to its corresponding baseline, use the **Compare to baseline result** command of the context menu.

The **Mark to compare**, **Compare results**, and **Go to marked result** commands may be used to compare any two "peer" results, where neither is required to be a baseline. \(More information is available at [Comparing results with baseline](Test_result_compare_to_baseline_results.html) and [Comparing results without baseline](Test_result_compare_results.html).\)

## Cut-Paste operations, and Delete command { .section}

-   From the repository test result list view, you can remove a given repository test result from one result folder and paste it to another by performing the **Cut** and **Paste** operations from the context menu.

    **Tip:**

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](../Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected repository test result\(s\).

## Renaming test results { .section}

Repository test results can be renamed using **Rename** on the context menu.

## Converting test result to external files { .section}

From the context menu, a local test result can be converted and exported to the following:

-   HTML files \([learn more](ug_test_results_export_repository_results_HTML.html).\)
-   ZIP format, for backup or re-importing. \([learn more](Test_result_export_ZIP.html).\)
-   XML files in xUnit format \([learn more](Test_result_export_xUnit.html).\)
-   XML Detail files for backup or purpose \([learn more](Test_result_export_XML.html).\)

## Integration with third-party tools { .section}

TestArchitect seamlessly integrates with several powerful third-party tools, to assist in application development, continuous integration, and test management. Interfaces with [HP Quality Center](Integration_QC_intro.html) \(QC\), and [Team Foundation Server/Microsoft Test Manager](ug_MTM_def.html) \(TFS-MTM\) are all available to extend TestArchitect's functionality and empower your and your team.

-   HP Quality Center:
    -   Upload TA test results to QC \([learn more](Integration_QC_Manually_uploading_test_results_to_QC.html)\)
-   Team Foundation Server-Microsoft Test Manager:
    -   Upload TA test results to TFS \([learn more](ug_MTM_upload_result_manual.html)\)

## Previewing summary of a checkpoint failure or an automation warning/error { .section}

**Note:** Applies to TestArchitect [8.3 Update 5](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

You can preview a checkpoint by selecting the desired checkpoint in the result list view and clicking its corresponding number of failures, warnings or errors. The first failure, warning or error of the checkpoint will be displayed in a tooltip.

**Restriction:** Previewing checkpoints of a master result, meaning, it is a [test suite result](ug_test_results_introduction.md#section.TS_results), or it contains [subresults](ug_test_results_introduction.md#section.Subresults), is currently unsupported.

![](../Images/Preview_checkpoint.png)

**Note:** It may take a while to load a tooltip, when the result list view contains thousands of checkpoints.

**Parent topic:**[Result list view](../../TA_Help/Topics/Listview_results.html)

**Previous topic:**[Local result list view](../../TA_Help/Topics/Listview_results_local.html)

