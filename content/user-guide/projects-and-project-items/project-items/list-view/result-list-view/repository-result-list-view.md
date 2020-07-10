--- 
title: "Repository result list view"
linktitle: "Repository result list view"
description: "A repository results list view displays a list of all repository test results contained within either the Results node or one of its subfolders."
weight: 2
aliases: 
    - /TA_Help/Topics/Listview_results_repository.html
keywords: "repository results, list view, opening results, list view, repository results, opening source test module, list view, repository results, executing, renaming, storing to repository, exporting, sorting, copying text, filters, opening baseline result, comparing result, setting baseline, unsetting baseline, editing multiple fields"
---

A repository results list view displays a list of all repository test results contained within either the **Results** node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click the **Results** node, and then select the **Results** tab. TestArchitect displays in the main panel a list view of the repository test results for the project.

{{<note>}} Repository test result list views are also available for subfolders of the **Results** node.

![](/images/TA_Help/Images/Listview_repo_result.png)

The following operations can be performed on a repository test result list view:

## {{< expand >}} Common operations

You can find various common operations that can be performed on a repository test result list view at [Common operations](/user-guide/projects-and-project-items/project-items/list-view/common-operations/).

## {{< expand >}} Opening a result

From a list view, you can display a repository test result in the main panel by right-clicking its list view entry, then clicking **Open**.

{{<tip>}} You can also open multiple test results by using your keyboard's Shift key to select a contiguous range of test results \(or Control to select multiple noncontiguous test results\); then right-click the selection, and click Open.

## {{< expand >}} Opening the source test module

You can have the editor open the test module responsible for a given test result by selecting **Open related test** on the context menu.

## {{< expand >}} Re-executing the tests

You can re-execute the test\(s\) responsible for selected test result\(s\) by selecting **Execute related test** on the context menu. \([Learn more](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client).\)

## {{< expand >}} Setting/unsetting a baseline result

Any repository-based test result can be set as the baseline for the test module with which it is associated. Alternatively, if a given baseline result no longer needs to be designated as a baseline, you can unset it. Use the **Set as baseline result** and **Unset baseline** commands of the context menu for these purposes. \(See [Setting baseline result](/user-guide/working-with-test-results/comparing-test-results/setting-baseline-result), and [Unsetting baseline results](/user-guide/working-with-test-results/comparing-test-results/unsetting-baseline-results) for further information.\)

## {{< expand >}} Comparing test results

Side-by-side comparison of test results, or side-by-side comparison between a test result and a baseline result from the same test module, enable you to track your progress over time. To compare a repository test result to its corresponding baseline, use the **Compare to baseline result** command of the context menu.

The **Mark to compare**, **Compare results**, and **Go to marked result** commands may be used to compare any two "peer" results, where neither is required to be a baseline. \(More information is available at [Comparing results with baseline](/user-guide/working-with-test-results/comparing-test-results/comparing-results-with-baseline) and [Comparing results without baseline](/user-guide/working-with-test-results/comparing-test-results/comparing-results-without-baseline).\)

## {{< expand >}} Cut-Paste operations, and Delete command

-   From the repository test result list view, you can remove a given repository test result from one result folder and paste it to another by performing the **Cut** and **Paste** operations from the context menu.

    {{<tip>}}

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images/TA_Help/Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected repository test result\(s\).

## {{< expand >}} Renaming test results

Repository test results can be renamed using **Rename** on the context menu.

## {{< expand >}} Converting test result to external files

From the context menu, a local test result can be converted and exported to the following:

-   HTML files \([learn more](/user-guide/working-with-test-results/exporting-test-results/exporting-repository-test-results-to-an-html-file).\)
-   XML files in xUnit format \([learn more](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-xunit).\)
-   XML Detail files for backup or purpose \([learn more](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-xml).\)

## {{< expand >}} Integration with third-party tools

TestArchitect seamlessly integrates with several powerful third-party tools, to assist in application development, continuous integration, and test management. Interfaces with [HP Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/) \(QC\), and [Team Foundation Server/Microsoft Test Manager](/user-guide/integration-with-third-party-tools/tfs-integration/) \(TFS-MTM\) are all available to extend TestArchitect's functionality and empower your and your team.

-   HP Quality Center:
    -   Upload TA test results to QC \([learn more](/user-guide/integration-with-third-party-tools/hp-quality-center/features/uploading-test-results-to-quality-center/manually-uploading-testarchitect-test-results-to-quality-center)\)
-   Team Foundation Server-Microsoft Test Manager:
    -   Upload TA test results to TFS \([learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/manually-uploading-testarchitect-test-results-to-tfs)\)

## {{< expand >}} Previewing summary of a checkpoint failure or an automation warning/error

{{<note>}} Applies to TestArchitect [8.3 Update 5](/user-guide/version-history/features-added-to-testarchitect-8-3-update-5/) and higher.

You can preview a checkpoint by selecting the desired checkpoint in the result list view and clicking its corresponding number of failures, warnings or errors. The first failure, warning or error of the checkpoint will be displayed in a tooltip.

{{<restriction>}} Previewing checkpoints of a master result, meaning, it is a [test suite result](/user-guide/working-with-test-results/overview/#section.TS_results), or it contains [subresults](/user-guide/working-with-test-results/overview/#section.Subresults), is currently unsupported.

![](/images/TA_Help/Images/Preview_checkpoint.png)

{{<note>}} It may take a while to load a tooltip, when the result list view contains thousands of checkpoints.



