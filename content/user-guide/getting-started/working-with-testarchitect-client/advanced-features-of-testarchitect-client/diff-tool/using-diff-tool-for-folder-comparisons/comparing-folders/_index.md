--- 
title: "Comparing folders"
linktitle: "Comparing two folders with the Diff Tool"
description: "How to compare differences between two folders or nodes (of the same project item type) in TestArchitect."
weight: 1
aliases: 
    - /TA_Help/Topics/ug_diff_tool_comparing_directories.html
keywords: "folder comparison, simple comparison, two folders, Diff Tool"
---

How to compare differences between two folders or nodes \(of the same project item type\) in TestArchitect.

We'll refer to the folder that acts as the source as the reference folder.

To compare a folder against the reference folder, do the following:

1.  In the TestArchitect explorer tree, establish a reference \(source\) folder by right-clicking a folder, then select **Diff Tool** \> **Mark to Compare**.

    For example, select the **Tests** node from the Car Rental project in the SampleRepository repository.

    ![](/images/TA_Help/Images/diff_tool_reference_dir.png)

2.  Next, right-click a node representing another folder to be compared against the reference, and select **Diff Tool** \> **Compare to Marked Item**.

    For example, right-click the **Tests** node from the Car Rental - Mobile project in the SampleRepository repository.

    ![](/images/TA_Help/Images/diff_tool_reference_dir_comparison.png)

    **Note:** If the reference folder and the folder to be compared are not of the same type, the **Compare to Marked Item** menu item is disabled.

    **Tip:** If at any time you wish to view the contents of the current reference folder, right-click any folder, and then select **Diff Tool** \> **Go to Marked Item**.


The Diff Tool window appears, with the two folders displayed in side-by-side panels, the reference \(marked\) folder on the left.

The screenshot below shows a typical comparison of two folders, in this case the **Tests** nodes. \(See [Using Diff Tool for folder comparisons](/TA_Help/Topics/ug_diff_tool_directory.html) for descriptions of the UI elements in the dialog box.\)

![](/images/TA_Help/Images/diff_tool_dlg_dir.png)



