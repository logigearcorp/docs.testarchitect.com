--- 
title: "Creating a new user-defined setting"
linktitle: "Creating a new user-defined setting"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_defining_user_defined_settings.html
---

User-defined settings are a useful way of passing information to your test modules prior to startup to get them to behave in a certain way. You can create these settings within TestArchitect Client for either a client-directed test run or to generate a test run batch file.

**Note:** Within TestArchitect Client, user-defined settings are created and configured within the **Startup Settings** tab of the Execute Test dialog box. Although [built-in settings](/TA_Automation/Topics/bis_Built_in_settings.html) may also be configured under this tab, TestArchitect does not allow for the creation of new ones.

To create a user-defined setting from TestArchitect Client, do the following:

1.  Launch the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html) dialog box.

2.  Select the **Startup Settings** tab.

    ![](/images//Images/startup_settings_tab.png)

3.  Click the **Add** button.

    The Add a setting dialog box appears.

    ![](/images//Images/Add_a_setting_dlg.png)

4.  In the dialog box, enter the following information:

    -   **Type**: \(Required\) Type of the setting. Select the **User Defined** option.
    -   **Name**: \(Required\) Name of the setting.

        **Restriction:** You cannot “reuse” the name of a built-in setting here. Built-in setting names are reserved keywords and cannot be used to label user-defined settings.

    -   **Value**: \(Optional\) Value for the specified setting.

        **Note:** Although setting a value is optional at this point, you cannot change a user-defined setting's value from within your test procedure. On the other hand, there is a valid reason for leaving this field empty: it allows your program to *effectively* set a value for the setting when it finds that there is no value set. This is because your test's action lines cannot directly work with a user-defined setting, but *can* work with variables. The [get setting](/TA_Automation/Topics/bia_get_setting.html) action is used to transfer a value from a user-defined setting to a variable, and when that setting has no value, the value specified in the action's default argument is applied to the variable.

    -   **Description**: \(Optional\) Short description of the setting.
5.  Click **OK**.

    Your new user-defined setting appears in the Startup Settings panel.

6.  Select the **Startup Settings** check box.

    This enables all the setting assignments listed under the **Startup Settings** tab, so that all those settings are set to their specified values \(in the **Value** column\) when you click **Execute**.

    ![](/images//Images/startup_settings_tab_defined_settings.png)


The new user-defined setting and its value take effect for the test run, once you click **Execute**. When the test run ends, these settings and their values are displayed in the [test result](/TA_Help/Topics/Test_result_details.html#note_vdn_psq_jt).

If you choose to generate a batch file \([learn more](/TA_Help/Topics/Test_exec_cmd_creating_batch_file.html)\), the parameter [/ss](/TA_Help/Topics/Test_exec_cmd.html#plentry.startupsettinga_parameter) specifies the defined settings and their values. Multiple settings are separated with semi-colons.

**Parent topic:**[Startup settings](/TA_Automation/Topics/aut_startup_settings.html)

**Next topic:**[Creating a startup setting for a built-in setting](/TA_Automation/Topics/aut_configuring_built_in_settings.html)

