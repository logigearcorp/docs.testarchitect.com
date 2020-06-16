--- 
title: "Editing"
linktitle: "Editing"
description: "You can directly edit the value of a field in a test module list view."
weight: 2
aliases: 
    - /TA_Help/Topics/Listview_test_module_editing.html
keywords: "editing, list view, test modules"
---

You can directly edit the value of a field in a test module list view.

[Editable fields](/TA_Help/Topics/Listview_editable_fields.html) fields of test modules listed in test module list views can be edited directly. Where applicable \(that is, in the case of modifying a test module's **Name** field\) the change is propagated to all references to the changed item, in a process called name change propagation \(see [Name change propagation](/TA_Help/Topics/Project_and_project_items_rename_refactoring.html)\).

1.  Open the test module list view.

    For example: On the TestArchitect explorer tree, double-click the **Tests** node.

    The test module list view appears in the main panel.

2.  Select a test module in the test module list view.

    For example, Calculation.

3.  Double-click an [editable field](/TA_Help/Topics/Listview_editable_fields.html) of the selected test module \(for example, the **Name** field\), or press F2 on the keyboard.

    The selected field becomes the active cell, and editable.

4.  Enter the new data.

    **Tip:** For multi-line fields, such as **Notes**, **Description**, etc., press Alt + Enter to insert new lines within the cell.

5.  Press the Enter key to complete the change.


The field is edited and updated. If it is a **Name** field, name change propagation replaces all references to it with the new name.


