--- 
title: "Attaching HTML test results to a TFS bug"
linktitle: "Attaching HTML test results to a TFS bug"
weight: 1
aliases: 
    - /TA_Help/Topics/Bug_working_attachments_test_results_TFS.html
---
# Attaching HTML test results to a TFS bug {#task_ih1_y1y_fm_HTML_test_results .task}

TestArchitect allows you to attach both local results and repository results, in HTML format, to a TFS bug.

Ensure that the following requirements are met before adding a single attachment to a TFS bug:

-   Your TestArchitect test machine has [registered the TFS server](Integration_MTM_connecting_TFS.md#) and [actived TFS Bug Tracker.](ug_TFS_BugTracker_Registering_bugtracker.md#)
-   You are granted permission to attach files to a TFS bug.
-   The size of the attachment does not exceed the maximum size specified on the TFS server. \(If necessary, contact your system administrator to determine this limit.\)

**Note:** At present, TestArchitect - TFS Bug Tracker integration support TFS version 2015 onward.

To attach a test result in HTML format to a TFS bug, complete the following steps:

1.  In the TestArchitect explorer tree, open a test result \(repository-based or local\) which you wish to attach to a TFS bug by double-clicking the test result's node.

    **Note:** While a TFS bug can accept multiple attachments, you are allowed to attach only a single file at a time.

2.  Click the paperclip icon ![](../Images/btn_paperclip.png) on the main panel's toolbar.

    The Attachment Result dialog box appears.

    ![](../Images/ug_attach.png)

3.  In **Bug ID**, enter the TFS bug ID to which you wish to attach the test result.

    **Optional**: By default **Automatically compress result\(s\) if file size \> KB** check box is un-selected and default value is 2048 KB, to upload the result as a compressed \(zipped\) HTML file if the file exceeds the specified size. Otherwise, upload the result as an uncompressed HTML file.

4.  Click **OK**.

    If the test result is successfully attached to the bug, a message to that effect is displayed.

    **Note:** TestArchitect will use the default user name and password configured in[Registering TFS server](Integration_MTM_connecting_TFS.md#) or [TFS Bug Tracker](ug_TFS_BugTracker_Registering_bugtracker.md#).

5.  Click **OK**.


If you now open the TFS bug, an entry for the attached test result file appears in the Attachments tab.

![](../Images/ug_TFS_attachresult_bug.png)

**Parent topic:**[Working with TFS attachments](../../TA_Help/Topics/Bug_working_attachments_TFS.html)

