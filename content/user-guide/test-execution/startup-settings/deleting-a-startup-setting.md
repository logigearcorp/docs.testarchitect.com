--- 
title: "Deleting a startup setting"
linktitle: "Deleting a startup setting"
description: "You can delete startup settings of both user-defined and built-in settings."
weight: 4
aliases: 
    - /TA_Automation/Topics/aut_removing_user_defined_settings.html
keywords: "user defined settings, editing, deleting, user-defined settings, removing"
---

You can delete startup settings of both user-defined and built-in settings.

From TestArchitect Client's Execute Test dialog box, you can delete the startup settings that will be used in [client-directed test runs](/user-guide/support/glossary-of-terms/client-directed-execution) as well as batch files. Note that deleting a user-defined setting from the **Startup Settings** tab is effectively removing the setting from existence. By contrast, a built-in setting cannot be deleted – deleting its startup setting simply ensures that each test module in the test run begins execution with that built-in setting set to its system default value.

1.  Launch the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box.

2.  Select the **Startup Settings** tab.

3.  From the **Startup Settings** list, select a setting you would like to remove, and then click **Remove**.

    ![](/images/TA_Automation/Images/startup_settings_tab_edit.png)

    A confirmation dialog box appears.

    ![](/images/TA_Automation/Images/delete_user_setting.png)

4.  Click **Yes** to confirm the deletion.


The startup setting is removed from the **Startup Settings** list of that repository.



