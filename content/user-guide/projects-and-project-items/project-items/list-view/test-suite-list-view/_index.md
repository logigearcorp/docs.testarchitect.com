--- 
title: "Test suite list view"
linktitle: "Test suite list view"
description: "The test suite list view displays a list of all test suite items contained in a Test Suites node and its subfolders."
weight: 10
aliases: 
    - /TA_Help/Topics/Listview_test_suite.html
keywords: "test suites, list view, opening test suites, list view, test suites, renaming, list view, test modules, executing test suite, generating batch file, sorting, copying text, filters"
---

The test suite list view displays a list of all test suite items contained in a **Test Suites** node and its subfolders.

When you double-click the **Test Suites** node in the TestArchitect explorer tree, and then select the **Test suites** tab, TestArchitect opens a list view of test suite items for the selected node in the main panel. \([Learn more](/TA_Help/Topics/Test_suite.html).\)

{{<note>}} Test suite list views are also available for subfolders of the**Test Suites** node.

![](/images/TA_Help/Images/Listview_test_suite.png)

The following operations can be performed on a test suite list view:

## Common operations

You can find various common operations that can be performed on a test suite list view in [Common operations](/TA_Help/Topics/Listview_common_operations.html).

{{<restriction>}} Editing multiple fields is not applicable to a test suite list view.

## Opening a test suite

Test suites are containers for sets of test modules that reside in the same repository and belong to the same project. You can check which test modules a given test suite contains by right-clicking it in the list view and then clicking **Open**.

{{<tip>}} You can also open multiple test suites by using your keyboard's Shift key to select a contiguous range of test suites \(or Control to select multiple noncontiguous test suites\); then right-click the selection, and click Open.

## Executing test suites

You can execute a desired test suite by clicking **Execute Test** on the context menu, which launches the Execute Test dialog. For further information regarding how to execute tests, see [Test execution](/TA_Help/Topics/Test_exec_test_execution.html).

## Generating a batch file

You can create a [batch file](/TA_Help/Topics/Test_exec_batch_file.html) from a test suite by clicking **Generate batch file** on the context menu.

## Cut-Copy-Paste operations, and Delete command

-   From the test suite list view, you can move a test suite from one test suite folder to another by performing a **cut-and-paste** operation from the context menu.
-   The **copy-and-paste** operation from the context menu allows you to create a duplicate of the selected test suite.

    {{<tip>}}

    -   In addition to the conventional cut-and-paste and copy-and-paste from the context menu, you can drag and drop a project item, or a selection of items, from a list view into a folder or node of the same type in the TestArchitect explorer tree.
    -   Performing drag-and-drop within the same project is equivalent to cutting and pasting. Performing a drag-and-drop across different projects, on the other hand, is a copy-and-paste operation.
    -   During a drag operation, at any time your mouse pointer is over a location that cannot accept the type of item being dragged, the pointer turns into a black crossed circle ![](/images/TA_Help/Images/black_cross_icon.png). Releasing the mouse button at this point simply cancels the operation.
-   Use the **Delete** command, from the context menu, to remove the selected test suite\(s\).

## Name change propagation

The process of renaming a given entity so that the change propagates to all references to that item is known as [name change propagation](/TA_Glossary/Topics/glossaryNameChangePropagation.html). Renaming an entity automatically updates all applicable action lines, test modules, and action definitions where the entity name appears. \([Learn more](/TA_Help/Topics/Project_and_project_items_rename_refactoring.html).\)

## Editing data profiles

Dynamic test suites are created based on specific data profiles. You can edit a data profile by clicking **Edit data profile** on the context menu. \([Learn more](/TA_Help/Topics/Test_suite_dynamic_add_new_test_module.html).\)

## Rearranging test modules in a static test suite

You are able to specify a custom execution order of test module invocations. Specifically, you might change the test execution order in a given static test suite. \([Learn more](/TA_Help/Topics/Test_suite_static_rearrange_test_modules.html).\)




