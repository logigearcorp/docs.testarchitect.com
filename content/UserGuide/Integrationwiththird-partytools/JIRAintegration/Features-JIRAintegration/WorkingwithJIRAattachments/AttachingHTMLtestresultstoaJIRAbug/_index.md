--- 
title: "Attaching HTML test results to a JIRA bug"
linktitle: "Attaching HTML test results to a JIRA bug"
weight: 1
aliases: 
    - /TA_Help/Topics/Bug_working_attachments_test_results.html
---
# Attaching HTML test results to a JIRA bug {#task_ih1_y1y_fm_HTML_test_results .task}

TestArchitect allows you to attach both local results and repository results, in HTML format, to a JIRA bug.

Ensure that the following requirements are met before adding a single attachment to a JIRA bug:

-   Your TestArchitect test machine has [registered the JIRA server](JIRA_registering.html).
-   You are granted permission to attach files to a JIRA bug.
-   The size of the attachment does not exceed the maximum size specified on the JIRA server. \(If necessary, contact your system administrator to determine this limit.\)
-   The current JIRA bug's status is not Closed.

**Note:**

-   At present, TestArchitect-JIRA integration supports versions 5 and 6 of JIRA.

To attach a test result in HTML format to a JIRA bug, complete the following steps:

1.  In the TestArchitect explorer tree, open a test result \(repository-based or local\) which you wish to attach to a JIRA bug by double-clicking the test result's node.

    **Note:** While a JIRA bug can accept multiple attachments, you are allowed to attach only a single file at a time.

2.  Click the paperclip icon ![](../Images/btn_paperclip.png) on the main panel's toolbar.

    The Attachment Result dialog box appears with the default user name and password configured in [Registering the JIRA server](JIRA_registering.md#step_wxv_tc5_2m).

    ![](../Images/Attach_result_dlg.png)

    **Tip:** At your option, you may override the default user name and password with your own credentials for an existing account on the JIRA server.

3.  In **Bug ID**, enter the JIRA bug ID to which you wish to attach the test result.

4.  Click **OK**.

    If the test result is successfully attached to the bug, a message to that effect is displayed.

5.  Click **OK**.


If you now open the JIRA bug, an entry for the attached test result file appears in the Attachments panel.

![](../Images/Attachment_panel_JIRA.png)

**Parent topic:**[Working with JIRA attachments](../../TA_Help/Topics/Bug_working_attachments.html)

