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

On the TestArchitect explorer tree, when you double-click the [**Tests**](/TA_Help/Topics/Project_items_tests.html) node, and then select the **Test Modules** tab. TestArchitect displays a list view of test modules for the project.

{{<note>}} Test module list views are also available for subfolders of the**Tests** node.

![](/images/TA_Help/Images/Listview_example.png)

The following operations can be performed on a test module list view:

## Common operations

You can find various common operations that can be performed on test module list views [here](/TA_Help/Topics/Listview_common_operations.html).

## Opening a test module

From a list view, you can open a test module in the editor by right-clicking its list view entry, then click **Open**.

{{<tip>}} You can also open multiple test modules by using your keyboard's Shift key to select a contiguous range of test modules \(or Control to select multiple noncontiguous test modules\); then right-click the selection, and click Open.

## Creating test suites

Test suites are used to organize and execute test modules based on certain criteria. They provide flexibility in managing execution plans. For example, you can create a test suite based on an existing set of test modules and then execute all of the test modules as a set with a single action. \([Learn more](/TA_Help/Topics/Test_suite_item_static.html#step.Option_4).\)

## Test execution

-   **Option \#1: Running tests through the context menu**

    From the test module list view, you can select one or multiple test modules for test execution. \(Use your keyboard's Shift key to select a contiguous range of listed test modules, or Control to select multiple noncontiguous test modules.\)

    After creating your selection, right-click and select **Execute**. The Execute Test dialog box then appears, offering you the normal options of selecting test cases, executing tests remotely, etc.

-   **Option \#2: Performing a drag and drop**

    {{<note>}} Applies to TestArchitect [8.3 Update 4](/TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.

    Invoke the Execute Test dialog. In the test module list view, select additional preferred test modules. Next, drag these test modules from the test module list view to the desired position in the Test Modules panel of the Execute Test dialog box.

    {{<important>}} Only test modules which belong to a single project are allowed.

    ![](/images/TA_Help/Images/tm_listview_drag_drop_execution.png)


## Test results

-   **Opening latest test result**: If you run a test multiple times, you can conveniently open the most recent test result. \([Learn more](/TA_Help/Topics/Test_result_open_latest_test_result.html).\)
-   **Opening baseline result**: If your test module currently has a [baseline test result](/TA_Help/Topics/Test_result_comparison_dialog_box.html) associated with it, you can easily access it. \([Learn more](/TA_Help/Topics/Test_result_open_baseline_result.html).\)

## Revision control

-   Check-out is the process of creating a local working copy from the repository. When a project item is checked out, a lock is placed on that item preventing other users from modifying it. \([Learn more](/TA_Help/Topics/Project_items_checkout.html).\)
-   Check-in is the process of writing the changes made to a local working copy back to the repository. Checking in a project item releases the lock on it, allowing other authorized users to check out the item and modify it as needed. \([Learn more](/TA_Help/Topics/Project_items_checkin.html).\)
-   Undoing a checkout allows you to cancel a checkout and discard any changes you have made to the local copy. \([Learn more](/TA_Help/Topics/Project_items_undo_checkout.html).\)

## Revision history

Repository saves pertinent information on a project item at every check-in. This includes timestamp, assigned version, project name, item type, item name, user who checked in the item, and included comments. \([Learn more](/TA_Help/Topics/Project_items_history.html).\)

## Project item comparisons

TestArchitect's Diff Tool can be invoked from the list view, allowing you to compare the differences between two project items in the list, or two revisions of the same item.

-   For comparing two project items, see [Comparing project items with Diff Tool](/TA_Help/Topics/ug_diff_tool_comparing_items.html).
-   For comparing two revisions of a project item, see [Comparing a project item's revisions with Diff Tool](/TA_Help/Topics/ug_diff_tool_comparing_revisions.html).

## Cut-Copy-Paste operations, and Delete command

-   From a test module list view, you can remove a given test module from one test folder and paste it to another by performing a cut-and-paste operation from the context menu.
-   The copy-and-paste operation from the context menu allows you to create a duplicate of a selected test module.

    {{<tip>}}

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images/TA_Help/Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command from the context menu to remove the selected test module\(s\).

## Name change propagation

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](/TA_Glossary/Topics/glossaryNameChangePropagation.html). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](/TA_Help/Topics/Project_and_project_items_rename_refactoring.html).\)

## Exporting test module to external files

Test modules can be exported as [.ZIP](/TA_Help/Topics/Test_module_exporting_to_zip.html) or [.CSV](/TA_Help/Topics/Exporing_to_CSV_single_test_module.html) files, which can be used as a backup or for re-importing.

## Importing test cases from CSV files

Test cases can be imported from [.CSV](/TA_Help/Topics/Importing_from_CSV_test_cases.html) files into a test module.

## Reporting

TestArchitect can generate reports to show the progress of the test or automation development, as well as test run performance and results. \([Learn more](/TA_Help/Topics/Report_producing.html#choice_oj2_cwb_cw).\)

## Integration with third-party tools

TestArchitect seamlessly integrates with several powerful third-party tools, to assist in application development, continuous integration, and test management. Interfaces with [HP Quality Center](/TA_Help/Topics/Integration_QC_intro.html) \(QC\), and [Team Foundation Server/Microsoft Test Manager](/TA_Help/Topics/ug_MTM_def.html) \(TFS-MTM\) are all available to extend TestArchitect's functionality and empower your and your team.

-   HP Quality Center:
    -   Importing QC tests into a TA test module \([learn more](/TA_Help/Topics/Integration_QC_test_development_step_1.html)\)
    -   Uploading TA test modules/test cases to QC \([learn more](/TA_Help/Topics/Integration_QC_test_development_step_2.html)\)
    -   Mapping TA test cases to QC tests \([learn more](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_3.html)\)
-   Team Foundation Server-Microsoft Test Manager:
    -   Import TFS test cases to TA \([learn more](/TA_Help/Topics/ug_MTM_import_TC.html)\)
    -   Uploading TA test modules/test cases to TFS \([learn more](/TA_Help/Topics/ug_upload_TAtest_MTM.html)\)
    -   Mapping TA test cases to TFS test cases \([learn more](/TA_Help/Topics/Integration_MTM_mapping_TA_MTM_IDs.html)\)

-   **[Replacing](/TA_Help/Topics/Listview_test_module_replacing.html)**  
You can automatically replace a word or phrase with another in a field of a test module list view - for example, you can replace Log in with Sign in as the name of a test module.
-   **[Editing](/TA_Help/Topics/Listview_test_module_editing.html)**  
You can directly edit the value of a field in a test module list view.
-   **[Editing test module variations](/TA_Help/Topics/ug_Listview_test_module_editing_variations.html)**  
You can re-link a test module variation to other version nodes or keywords via the Edit Variations dialog box.




