--- 
title: "Deleting a startup setting"
linktitle: "Deleting a startup setting"
aliases: 
    - /TA_Automation/Topics/aut_removing_user_defined_settings.html
---
# Deleting a startup setting {#task_ljl_vxc_jt .task}

You can delete startup settings of both user-defined and built-in settings.

From TestArchitect Client's Execute Test dialog box, you can delete the startup settings that will be used in [client-directed test runs](../../TA_Glossary/Topics/glossaryClientDirectedExecution.html) as well as batch files. Note that deleting a user-defined setting from the **Startup Settings** tab is effectively removing the setting from existence. By contrast, a built-in setting cannot be deleted – deleting its startup setting simply ensures that each test module in the test run begins execution with that built-in setting set to its system default value.

1.  Launch the [Execute Test](../../TA_Help/Topics/Test_exec_test_execution.html) dialog box.

2.  Select the **Startup Settings** tab.

3.  From the **Startup Settings** list, select a setting you would like to remove, and then click **Remove**.

    ![](../Images/startup_settings_tab_edit.png)

    A confirmation dialog box appears.

    ![](../Images/delete_user_setting.png)

4.  Click **Yes** to confirm the deletion.


The startup setting is removed from the **Startup Settings** list of that repository.

**Parent topic:**[Startup settings](../../TA_Automation/Topics/aut_startup_settings.html)

**Previous topic:**[Editing an existing startup setting](../../TA_Automation/Topics/aut_editing_user_defined_settings.html)

