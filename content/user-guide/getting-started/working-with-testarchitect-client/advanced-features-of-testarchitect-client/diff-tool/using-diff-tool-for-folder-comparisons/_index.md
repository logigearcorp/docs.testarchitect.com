--- 
title: "Using Diff Tool for folder comparisons"
linktitle: "Using Diff Tool for folder comparisons"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_diff_tool_directory.html
---

The TestArchitect Diff Tool can be used to detect and display the differences between two TestArchitect explorer tree folders. It can also be used to synchronize folders.

The Diff Tool can be used to perform comparisons between top-level nodes, folders and subfolders of the following nodes in the TestArchitect explorer tree:

-   Project
-   Tests
-   Data
-   Actions
-   Interfaces
-   Picture Checks

    **Important:** Note that, in the case of image comparisons, only fully matching images \(on a pixel-by-pixel basis\) are treated as identical. \([Learn more](/TA_Automation/Topics/aut_image_comparison_techniques.html#section_bpj_xkg_wv).\)


**Note:** The Diff Tool supports folder comparisons not just within a single repository, but across different repositories and repository servers.

Important folder comparison/synchronizing features are indicated in this figure. Explanatory text for each feature can be found below.

![](/images//Images/diff_tool_node_comparison.png)

1.  **Save**:

    Save the changes you have made.

    **Note:** The changes you make, such as folder synchronization, only take immediate effect in temporary memory. Once you click the Save button, those changes are saved into repositories.

2.  **Previous Difference**:

    Selects the previous difference, relative to the currently selected line. Use this to step backwards \(upwards\) through differences between the files.

    **Fastpath:** F6.

    **Note:** This button is disabled when the currently selected line is at or above the first detected difference in the files.

3.  **Next Difference**:

    Selects the next difference, relative to the currently selected line. Use to step forwards \(downwards\) through differences between the files.

    **Fastpath:** F7.

    **Note:** This button is disabled when the currently selected line is at or below the first detected difference in the files.

4.  **Undo**:

    Undoes changes you have made.

5.  **Redo**:

    Redoes changes you have made.

6.  **Refresh**:

    Re-scans the folders or nodes and updates the differences. \(Use after changes have been made within one or both nodes/folders\).

    **Fastpath:** F5.

    **Note:**

    -   If the tool detects unsaved changes in either of the currently displayed nodes or folders, the following warning dialog box appears:

        ![](/images//Images/diff_tool_refresh.png)

        -   **Yes**: Reload data without saving changes.
        -   **No**: Cancel the refresh operation.
    -   If the repository containing the item is disconnected, the following warning message is displayed:

        ![](/images//Images/diff_tool_refresh_2.png)

        -   Yes: Close the Diff Tool window.
        -   No: Close the warning dialog box without reloading data.
7.  **Folders**:

    -   **Expand All**: Expand all folders on the Source and Target panels.
    -   **Collapse All**: Collapse all folders on the Source and Target panels.
    **Tip:**

    -   You can collapse a folder in which you are not interested by clicking the plus \(+\) button to the left of its icon. Click again to expand.
    -   To expand/collapse all child nodes belonging to a specific folder, simply right-click the folder, and then select **Expand All**/**Collapse All**.
8.  **Hide Options**:
    -   **Hide Unchanged Rows**: Hide/show unchanged items and folders.

        **Note:** By default, Diff tool omits all unchanged lines of text to avoid showing irrelevant information.

    -   **Hide Empty Folders**: Hide/show all empty folders on the Source and Target panels.
9.  **View Options**:
    -   **Highlight Background**: \(Default=on\) Show/hide the background color for each different line.
    -   **Text Color**: Show/hide text color for each different line.
10. **Selected Rows**:
    -   **Select Changed**: Select all rows on the Source and Target panels which contain items that have the same name but different content.
    -   **Select Inserted**: Select all rows containing items that are present in the Target panel.
    -   **Select Removed**: Select all rows containing items that are present in the Source panel.
    -   **Select All**: Select all rows in the Target and Source panels.
    -   **Deselect All**: Deselect all rows that were previously selected in the Target and Source panels.
11. **Copy Selected**:

    Enable folder synchronization. \([Learn more](/TA_Help/Topics/ug_diff_tool_copying_items_folders.html).\)

    -   **Copy from Source to Target Panel**: Copy selected project items and folders from the Source panel into the Target panel.
    -   **Copy from Target to Source Panel**: Copy selected project items and folders from the Target panel into the Source panel.
12. **Column separator**:

    Drag column separators in the header area to change column widths.

13. **Different project items**:

    Those folders containing any differences, anywhere in their subhierarchies, from their counterparts in the opposite panel, are indicated with a yellow star adornment.

14. **Inserted**:

    Those project items and folders which are present in the target but not the source hierarchy are indicated with a green background color, and displayed alongside unlabelled icons in the source panel.

15. **Removed**:

    Those project items and folders which are present in the source but not the target hierarchy are indicated with a peach background color, and displayed alongside unlabelled icons in the target panel.

16. **Changed**:

    Paired project items that are not identical are indicated with a small red dot adornment, and a lavender background color.

17. **Unchanged**:

    Paired project items of the source and target panels \(that is, those that exist in the same place in the respective hierarchies, have identical names, and identical contents\) are, by default, not shown. \(This is to avoid displaying excessive and unnecessary lines in the panels.\)

    **Note:** To override the default and display the unchanged elements of each hierarchy, select **Hide Options** \> **Hide Unchanged Rows** to toggle that option.

18. **Status**: \(including change summary\)

    The status bar displays the progress of the current diff process, along with a count of the comparison outcomes between the folder hierarchies.

    -   the total number of differences found
    -   the number unchanged \(identical\) project item pairs
    -   the number of changed project items
    -   the number of inserted project items \(present in the target but not the source hierarchy\)
    -   the number of removed project items \(present in the source but not target hierarchy\)

## Working with multiple Diff Tool windows

A unique Diff Tool window is launched every time you invoke the Diff Tool. Hence, it is possible to have multiple Diff Tool windows open concurrently, each displaying a separate comparison.

**Tip:** From a Diff Tool window, you can launch another Diff Tool window by right-clicking an item row, and then selecting **Launch Folder Comparisons for Selection** or **Launch Item Comparisons for Selection**.

1.  [Comparing two folders with the Diff Tool](/TA_Help/Topics/ug_diff_tool_comparing_directories.html)  
How to compare differences between two folders or nodes \(of the same project item type\) in TestArchitect.
2.  [Merging differences between folders with the Diff Tool](/TA_Help/Topics/ug_diff_tool_copying_items_folders.html)  
The Diff Tool enables you to synchronize the contents of two folder hierarchies by copying items and folders between them.

**Parent topic:**[Diff tool](/TA_Help/Topics/ug_diff_tool.html)

**Previous topic:**[Using Diff Tool for project item comparisons](/TA_Help/Topics/ug_item_comparison.html)

**Next topic:**[Using Diff Tool with other third-party products](/TA_Help/Topics/ug_diff_tool_using_other_products.html)

