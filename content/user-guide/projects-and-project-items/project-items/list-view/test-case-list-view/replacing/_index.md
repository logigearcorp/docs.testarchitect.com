--- 
title: "Replacing"
linktitle: "Replacing"
weight: 1
aliases: 
    - /TA_Help/Topics/Listview_test_case_replacing.html
---

You can automatically replace a word or phrase with another in a field of a test case list view.

The contents of fields belonging to test cases can be replaced if they are [editable fields](/TA_Help/Topics/Listview_editable_fields.html).

1.  Open the test case list view.

    For example: Double-click the **Tests** node on the TestArchitect explorer tree, and then select the **Test Cases** tab.

    The test case list view appears in the main panel.

2.  Right-click a test case in the test case list view.

3.  Click **Replace** on the context menu \(or press Ctrl-F\).

    The Replace dialog box appears.

4.  In the **Find What** box, type the text that you want to search for.

5.  In the **Replace With** box, type the replacement text.

6.  Do one of the following:

    1.  To replace an occurrence of the text, click **Replace**.

        TestArchitect searches the editable fields of each test case listed for the item to be replaced. The search path is cell-by-cell beginning from left to right and down row-by-row starting from the active cell until a match is found. TestArchitect replaces the first matched item \(if that item is in an editable field\), and sets the active focus to the replaced cell.

    2.  To replace all occurrences of the text, click **Replace All**.

        TestArchitect replaces all occurrences of the item \(wherever they belong to editable fields\).


**Parent topic:**[Test case list view](/TA_Help/Topics/Listview_test_case.html)

