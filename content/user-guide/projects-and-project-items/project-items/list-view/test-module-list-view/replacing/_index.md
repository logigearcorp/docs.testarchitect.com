--- 
title: "Replacing"
linktitle: "Replacing"
weight: 1
aliases: 
    - /TA_Help/Topics/Listview_test_module_replacing.html
---

You can automatically replace a word or phrase with another in a field of a test module list view - for example, you can replace Log in with Sign in as the name of a test module.

The contents of fields in test modules can be replaced if they are [editable fields](Listview_editable_fields.html). Note that this includes the **Name** field \(that is, the name of the test module\), and that, when the Replace function is used to change a test module name, name change propagation is applied \(see [Name change propagation](Project_and_project_items_rename_refactoring.html)\).

1.  Open the test module list view.

    For example: Double-click the **Tests** node on the TestArchitect explorer tree.

    The test module list view appears in the main panel.

2.  On the test module list view, right-click a test module, and then click **Replace**.

    The Replace dialog box appears.

    ![](/images//Images/replace_dlg.png)

3.  In the **Find What** box, type the text that you want to search for.

4.  In the **Replace With** box, type the replacement text.

5.  Do one of the following:

    1.  To replace an occurrence of the text, click **Replace**.

        TestArchitect searches the editable fields of each test module listed for the item to be replaced. The search path is cell-by-cell beginning from left to right and down row-by-row starting from the active cell until a match is found. TestArchitect replaces the first matched item \(if that item is in an editable field\), performs name change propagation where applicable \(that is, on test module names\), and sets the active focus to the replaced cell.

    2.  To replace all occurrences of the text, click **Replace All**.

        TestArchitect replaces all occurrences of the item \(wherever they belong to editable fields\) and performs name change propagation where applicable.


**Parent topic:**[Test module list view](/TA_Help/Topics/Listview_TM.html)

