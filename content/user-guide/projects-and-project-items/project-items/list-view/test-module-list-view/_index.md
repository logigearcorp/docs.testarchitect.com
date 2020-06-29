--- 
title: "Test module list view"
linktitle: "Test module list view"
description: "A test module list view displays a list of all test module contained within either the Tests node or one of its subfolders."
weight: 3
aliases: 
    - /TA_Help/Topics/Listview_TM.html
keywords: "test modules, list view, opening test module, list view, test modules, executing test, check in, check out, list view, test modules, undo, list view, test modules, opening latest test result, list view, test modules, opening baseline result, history, renaming, creating test suite, reporting, exporting, sorting, copying text, filters, editing multiple fields"
---

A test module list view displays a list of all test module contained within either the **Tests** node or one of its subfolders.

On the TestArchitect explorer tree, when you double-click the [**Tests**](/user-guide/tests/) node, and then select the **Test Modules** tab. TestArchitect displays a list view of test modules for the project.

{{<note>}} Test module list views are also available for subfolders of the**Tests** node.

![](/images/TA_Help/Images/Listview_example.png)

The following operations can be performed on a test module list view:

## Common operations

You can find various common operations that can be performed on test module list views [here](/user-guide/projects-and-project-items/project-items/list-view/common-operations/).

## Opening a test module

From a list view, you can open a test module in the editor by right-clicking its list view entry, then click **Open**.

{{<tip>}} You can also open multiple test modules by using your keyboard's Shift key to select a contiguous range of test modules \(or Control to select multiple noncontiguous test modules\); then right-click the selection, and click Open.

## Creating test suites

Test suites are used to organize and execute test modules based on certain criteria. They provide flexibility in managing execution plans. For example, you can create a test suite based on an existing set of test modules and then execute all of the test modules as a set with a single action. \([Learn more](/user-guide/projects-and-project-items/project-items/test-suites/static-test-suites/creating-a-static-test-suite#step.Option_4).\)

## Test execution

-   **Option \#1: Running tests through the context menu**

    From the test module list view, you can select one or multiple test modules for test execution. \(Use your keyboard's Shift key to select a contiguous range of listed test modules, or Control to select multiple noncontiguous test modules.\)

    After creating your selection, right-click and select **Execute**. The Execute Test dialog box then appears, offering you the normal options of selecting test cases, executing tests remotely, etc.

-   **Option \#2: Performing a drag and drop**

    {{<note>}} Applies to TestArchitect [8.3 Update 4](/user-guide/version-history/features-added-to-testarchitect-8-3-update-4/windows) and higher.

    Invoke the Execute Test dialog. In the test module list view, select additional preferred test modules. Next, drag these test modules from the test module list view to the desired position in the Test Modules panel of the Execute Test dialog box.

    {{<important>}} Only test modules which belong to a single project are allowed.

    ![](/images/TA_Help/Images/tm_listview_drag_drop_execution.png)


## Test results

-   **Opening latest test result**: If you run a test multiple times, you can conveniently open the most recent test result. \([Learn more](/user-guide/working-with-test-results/opening-latest-test-result).\)
-   **Opening baseline result**: If your test module currently has a [baseline test result](/user-guide/working-with-test-results/comparing-test-results/results-comparison-page) associated with it, you can easily access it. \([Learn more](/user-guide/working-with-test-results/opening-baseline-result).\)

## Revision control

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/check-out).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/check-in).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/undo-check-out).\)

## Revision history

Repository saves pertinent information on a project item at every check-in. This includes timestamp, assigned version, project name, item type, item name, user who checked in the item, and included comments. \([Learn more](/user-guide/projects-and-project-items/project-items/revision-control/revision-history/).\)

## Project item comparisons

TestArchitect's Diff Tool can be invoked from the list view, allowing you to compare the differences between two project items in the list, or two revisions of the same item.

-   For comparing two project items, see [Comparing project items with Diff Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-for-project-items/comparing-project-items).
-   For comparing two revisions of a project item, see [Comparing a project item's revisions with Diff Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/diff-tool/diff-tool-for-project-items/comparing-revisions).

## Cut-Copy-Paste operations, and Delete command

-   From a test module list view, you can remove a given test module from one test folder and paste it to another by performing a cut-and-paste operation from the context menu.
-   The copy-and-paste operation from the context menu allows you to create a duplicate of a selected test module.

    {{<tip>}}

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images/TA_Help/Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command from the context menu to remove the selected test module\(s\).

## Name change propagation

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](/user-guide/support/glossary-of-terms/name-change-propagation). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](/user-guide/projects-and-project-items/project-items/name-change-propagation).\)

## Exporting test module to external files

Test modules can be exported as [.ZIP](/user-guide/tests/exporting-and-importing-tests/exporting-to-zip-file) or [.CSV](/user-guide/tests/exporting-and-importing-tests/exporting-to-csv-files/exporting-a-single-test-module) files, which can be used as a backup or for re-importing.

## Importing test cases from CSV files

Test cases can be imported from [.CSV](/user-guide/tests/exporting-and-importing-tests/importing-from-csv-files/importing-test-cases) files into a test module.

## Reporting

TestArchitect can generate reports to show the progress of the test or automation development, as well as test run performance and results. \([Learn more](/user-guide/reporting-and-dashboard/reporting/creating-reports#choice_oj2_cwb_cw).\)

## Integration with third-party tools

TestArchitect seamlessly integrates with several powerful third-party tools, to assist in application development, continuous integration, and test management. Interfaces with [HP Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/) \(QC\), and [Team Foundation Server/Microsoft Test Manager](/user-guide/integration-with-third-party-tools/tfs-integration/) \(TFS-MTM\) are all available to extend TestArchitect's functionality and empower your and your team.

-   HP Quality Center:
    -   Importing QC tests into a TA test module \([learn more](/user-guide/integration-with-third-party-tools/hp-quality-center/features/importing-quality-center-tests-into-a-testarchitect-test-module/)\)
    -   Uploading TA test modules/test cases to QC \([learn more](/user-guide/integration-with-third-party-tools/hp-quality-center/features/uploading-testarchitect-test-modules-test-cases-to-quality-center/)\)
    -   Mapping TA test cases to QC tests \([learn more](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/mapping-testarchitect-test-cases-to-quality-center-tests)\)
-   Team Foundation Server-Microsoft Test Manager:
    -   Import TFS test cases to TA \([learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/importing-tfs-test-cases)\)
    -   Uploading TA test modules/test cases to TFS \([learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/authoring-test-procedures-under-on-premises-tfs/uploading-ta-test-modules-test-cases-to-tfs)\)
    -   Mapping TA test cases to TFS test cases \([learn more](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/mapping-ta-test-cases-to-tfs-test-cases)\)

-   **[Replacing](/user-guide/projects-and-project-items/project-items/list-view/test-module-list-view/replacing)**  
You can automatically replace a word or phrase with another in a field of a test module list view - for example, you can replace Log in with Sign in as the name of a test module.
-   **[Editing](/user-guide/projects-and-project-items/project-items/list-view/test-module-list-view/editing)**  
You can directly edit the value of a field in a test module list view.
-   **[Editing test module variations](/user-guide/projects-and-project-items/project-items/list-view/test-module-list-view/editing-test-module-variations)**  
You can re-link a test module variation to other version nodes or keywords via the Edit Variations dialog box.




