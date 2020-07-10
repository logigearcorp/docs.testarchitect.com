--- 
title: "Copying and pasting data set values"
linktitle: "Copying and pasting data set values"
description: "One means of contributing data values to a data set is by pasting them in, using the traditional copy-and-paste technique. The source of such values can be another application (for example, Microsoft Excel, MS Word, or Notepad) or another item in the TestArchitect editor itself. The copied data may be pasted into the grid of data set items as either raw data or data set values."
weight: 8
aliases: 
    - /TA_Help/Topics/Projects_and_tests_dataset_copy_paste.html
keywords: "data sets, copying, pasting as data row, pasting"
---

One means of contributing data values to a data set is by pasting them in, using the traditional copy-and-paste technique. The source of such values can be another application \(for example, Microsoft Excel™, MS Word™, or Notepad\) or another item in the TestArchitect editor itself. The copied data may be pasted into the grid of data set items as either raw data or data set values.

1.  Open a document of data values - an MS Excel spreadsheet, for instance.

2.  In the document, select, then copy, the area of data of interest.

3.  If not already running, launch the [TestArchitect Client](/user-guide/getting-started/launching-testarchitect-client-for-the-first-time).

4.  In the TestArchitect explorer tree, double-click a data set node.

    The data set editor appears on the main panel.

5.  Choose one of the following options:

    -   In the editor, right-click any cell and select **Paste As Data Row**.

        **Fastpath:** Ctrl + Shift + V

    -   If you want to paste the data into the grid of data set items as raw data, select **Paste**.

        **Fastpath:** Ctrl + V


The [row](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/row) actions are automatically generated in the first column along with the pasted data.

{{<note>}} If raw data is pasted into the test editor, the [row](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/row) actions are not generated.



