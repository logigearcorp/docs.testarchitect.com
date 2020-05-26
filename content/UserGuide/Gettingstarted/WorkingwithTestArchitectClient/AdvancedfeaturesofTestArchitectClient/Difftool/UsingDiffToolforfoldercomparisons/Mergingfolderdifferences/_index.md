--- 
title: "****Merging differences between folders with the Diff Tool****"
linktitle: "Merging folder differences"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_diff_tool_copying_items_folders.html
---
# ****Merging differences between folders with the Diff Tool**** {#task_tdt_5pr_cv .task}

The Diff Tool enables you to synchronize the contents of two folder hierarchies by copying items and folders between them.

**Remember:** Ensure that the your user account belongs to a group that is able to save merged items. These groups include administrators, test managers, automation leads, and test leads. For membership in either of the groups automation engineers or testers, your account must be assigned to the given project\(s\).

To merge differences from one panel to the other \(either source to target, or target to source\), do the following:

1.  Invoke the Diff Tool dialog box. \([Learn more](ug_diff_tool_comparing_directories.html).\)

    ![](../Images/Diff_tool_merge_item_dlg.png)

2.  To copy items and folders from one folder hierarchy into the other, first select those items and/or folders to be copied.

    **Important:** If you suspect that a folder or project item might have changed, it is highly recommended that you run Refresh before performing any merge operation. Click **Refresh** \(![](../Images/btn_refresh_diff_tool.png)\) on the toolbar, or press F5.

3.  The merge function can be applied in several ways:

    -   Copy Right: Copies the currently selected items from Source hierarchy \(left panel\) to the Target hierarchy \(right panel\). Those corresponding items that already exist in the Target are replaced.

        **Note:**

        -   ![](../Images/Diff_tool_copy_right_btn.png) button, or
        -   **Copy Selected** \> **Copy from Source to Panel** from the toolbar, or
        -   **Copy Selected from Source to Target Panel** from the context menu.
    -   Copy Left: Copies the current project item from Target hierarchy \(right\) to Source hierarchy \(left\). Those corresponding items that already exist in the Source are replaced.

        **Note:**

        -   ![](../Images/Diff_tool_copy_left_btn.png) button, or
        -   **Copy Selected** \> **Copy from Target to Source** from the toolbar, or
        -   **Copy Selected from Target to Source Panel** from the context menu.
    -   All Right: Copies all difference items from Source hierarchy \(left\) to Target hierarchy \(right\). Use this to synchronize two folders with one single merge command.

        **Note:**

        1.  Right-click the **Tests**, **Data**, **Interfaces**, or **Actions** node, or a folder, and then select **Copy Selected from Source to Target Panel**.
        2.  The Merge Option dialog box appears with two options:

            -   Paste and keep those items: \(Default\) Replaces the items in the Target \(right panel\) with the items in the Source \(left panel\), and preserves all items that do not exist in the Source.
            -   Paste and delete those items: Replaces the items in the Target with the items in the Source, and deletes from the Target hierarchy all items that do not exist in the Source.
            ![](../Images/Merge_options_dlg.png)

    -   All Left: Copies all differences from Target hierarchy \(right\) to Source hierarchy \(left\). Use to synchronize two folders with one single merge command.

        **Note:**

        1.  Right-click the **Tests**, **Data**, **Interfaces**, or **Actions** node, or a folder, and then select **Copy Selected from Target to Source Panel**.
        2.  The Merge Option dialog box appears with two options:

            -   Paste and keep those items: \(Default\) Replaces the items in the Source \(left panel\) with the items in the Target \(right panel\), and preserves all items that do not exist in the Target.
            -   Paste and delete those items: Replaces the items in the Source with the items in the Target, and deletes from the Source hierarchy all items that do not exist in the right panel.
            ![](../Images/Merge_options_dlg.png)

    The merged nodes are indicated with an icon containing a small green arrow adornment \(![](../Images/left_green.png) and ![](../Images/right_green.png)\).

    **Tip:** If the result of a merge operation is not what you expected, click **Undo** ![](../Images/btn_undo_diff_tool.png) on the toolbar, or Ctrl + Z, to reverse the operation. Then rescan the files and try merging again.

4.  Click **Save** on the toolbar.

    **Fastpath:** Ctrl + S.

    **Note:** At this point, you will be given one last chance to decide which of the items targeted for merging will actually be written to disk.

    A confirmation dialog box appears displaying which items will be copied and where they will go. The **Name** column lists all the selected items. The **To Location** column shows you where those items will be copied to.

    ![](../Images/Diff_tool_merge_confirmation_dlg.png)

5.  Select the items to be copied, and then click **OK**.

    The status of Done indicates that the merging is successful.

    ![](../Images/Diff_tool_merge_confirmation_dlg_status.png)

    **Important:**

    -   When you merge to add more test modules, if the allowed number of tests modules is exceeded under your specific TestArchitect license, you will receive the following message:

        *The allowed number of created test modules in the "<repositoryName\>" repository has been reached under your license. However, you are still able to run automated tests with TestArchitect. To resolve this issue, please contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com) to upgrade your TestArchitect license to a higher tier.*

    -   Similarly, when you merge to add more test cases, if the allowed number of tests cases is exceeded under your specific TestArchitect license, you will receive the following message:

        *The allowed number of created test cases in the "<repositoryName\>" repository has been reached under your license. However, you are still able to run automated tests with TestArchitect. To resolve this issue, please contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com) to upgrade your TestArchitect license to a higher tier.*

6.  Click **Close** to dismiss the confirmation dialog box.


**Parent topic:**[Using Diff Tool for folder comparisons](../../TA_Help/Topics/ug_diff_tool_directory.html)

**Previous topic:**[Comparing two folders with the Diff Tool](../../TA_Help/Topics/ug_diff_tool_comparing_directories.html)

