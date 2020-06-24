--- 
title: "Distributed result storage"
linktitle: "Distributed result storage"
description: "You can store test results across multiple locations as an alternative to a centralized repository in TestArchitect Client."
weight: 14
aliases: 
    - /TA_Help/Topics/Test_result_distributed_storage.html
keywords: "test results, destributed storage"
---

You can store test results across multiple locations as an alternative to a centralized repository in TestArchitect Client.

## Connect to a result folder

1.  In the TestArchitect explorer tree, right-click the **LOCAL RESULTS** node and select **Connect to Remote Result Folder** from the context menu.
2.  In the Connect to Remote Result Folder dialog box,

    ![](/images/TA_Help/Images/Connect_to_remote_result_folder_dlg.png)

    1.  Click the Browse ![](/images/TA_Help/Images/Browse_btn.png) button next to the **Select a folder** box.
    2.  In the **Open** dialog box, locate the directory containing the preferred .TARESULT files.

        {{<note>}} You can choose a local directory or a shared network directory.

    3.  Select **Show virtual folder** to show a hierarchical tree structure, or subdirectories,of the mapped .TARESULT file\(s\) if any, in the result tree.
    4.  Select **Show results \(in this folder and sub-folder\)** to show all result\(s\) in subfolder\(s\), if any, in grid view.
    5.  Click the **Create** button.

        {{<note>}} The hierarchical tree only shows the structure of the mapped folder. You have to double-click on folder to view list of results in grid view.


## Edit mapped folders

In the TestArchitect explorer tree,

-   Right-click the mapped folder which you want to edit.

-   Select **Edit** from the context menu.
-   Then the **Connect to Remote Result Folder** dialog box will appears.
-   Click the Browse ![](/images/TA_Help/Images/Browse_btn.png) button next to the **Select a folder** box to locate the new directory.
-   Click **Save** button

## Disconnect from a result folder

In the TestArchitect explorer tree, right-click the mapped folder from which you want to disconnect. Select **Disconnect** from the context menu.

## Add a test result/result sub-folder to the repository

1.  In the TestArchitect explorer tree, right-click the preferred result or sub-folder in the mapped folder. Next, select **Add to Repository** from the context menu.
2.  In the **Select a Destination** dialog box, browse to the location where you want to place the result/sub-folder, and then click the **OK** button.

    {{<note>}} You can only add the result marked with the ![](/images/TA_Help/Images/result_icon_01.png) icon and sub-folder to the repository.


## Deleting test results

In the TestArchitect explorer tree, right-click the preferred result\(s\) or sub-folder in the mapped folder. Next, select **Delete** from the context menu.

{{<attention>}}

-   The mapped folder is irremovable. If you want it to disappear, disconnect from it.
-   Once you deleted a result/sub-folder in TestArchitect explorer tree, the corresponding file in the directory will be eliminated.
-   .TARESULT files are categorized into:
    -   The \*.taresult file contains a result \(marked with the ![](/images/TA_Help/Images/result_icon_01.png) icon\) which is removable.
    -   The \*.taresult file is a folder and the results inside \(marked with the ![](/images/TA_Help/Images/result_icon_02.png)icon\) which is irremovable.

{{<note>}} Support **[Verify Picture Checks...](/TA_Help/Topics/Projects_and_tests_picture_check.html#)**



