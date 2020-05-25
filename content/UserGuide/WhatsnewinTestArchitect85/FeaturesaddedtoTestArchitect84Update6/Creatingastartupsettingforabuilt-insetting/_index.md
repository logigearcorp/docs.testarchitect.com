--- 
title: "Creating a startup setting for a built-in setting"
linktitle: "Creating a startup setting for a built-in setting"
aliases: 
    - /TA_Automation/Topics/aut_configuring_built_in_settings.html
---
# Creating a startup setting for a built-in setting {#task_rwr_hh3_jt .task}

In addition to being modifiable from within your test procedures, built-in settings can have their values set by you just prior to the launch of your test run.

As with user-defined settings, you may use the Execute Test dialog box's **Startup Settings** tab to also create new startup settings for built-in settings. Note the distinction, however: in the case of a new built-in startup setting, you are *not* creating a new built-in setting. Instead, the purpose of a built-in startup setting is to override TestArchitect's default value for that setting. That is, the value you set for a built-in startup setting becomes the value of that setting at the start of execution of each affected test run.

To set a new value for a built-in setting from TestArchitect Client, carry out the following steps:

1.  Launch the [Execute Test](../../TA_Help/Topics/Test_exec_test_execution.html) dialog box.

2.  Select the **Startup Settings** tab.

    ![](../Images/startup_settings_tab.png)

3.  Click the **Add** button.

    The Add a setting dialog box appears.

    ![](../Images/Add_a_setting_dlg.png)

4.  In the dialog box, enter the following information:

    -   **Type**: \(Required\) Type of setting. Select the **Built-in** option.
    -   **Name**: \(Required\) Name of the setting.

        **Note:** As you start typing a setting's name into the **Name** box, Content Assist pops up an autocomplete list displaying valid built-in settings. If you continue typing, the list is continuously filtered down to those built-in settings that contain the entered sequence of characters.

        ![](../Images/Add_a_setting_dlg_autocomplete.png)

    -   **Value**: \(Optional\) Value to be applied to the built-in setting at startup of the test run. Note that this value overrides the system default value of the built-in setting.
    -   **Description**: \(Optional\) Short description for the built-in setting.
5.  Click **OK**.

    The built-in setting's startup value is reconfigured and appears in the **Startup Settings** list.

6.  Select the **Startup Settings** check box.

    This enables all the setting assignments listed under the **Startup Settings** tab, so that all those settings are set to their specified values \(in the **Value** column\) when you click **Execute**.

    ![](../Images/startup_settings_tab_defined_settings.png)


The new value for the built-in setting takes effect when you click the **Execute** button, overriding the setting's default value at the start of the test run. When the test run ends, built-in settings and their startup values are displayed in the [test result](../../TA_Help/Topics/Test_result_details.md#note_vdn_psq_jt).

**Note:** Built-in setting values are persistent across test modules within a test run. That is, the value of a built-in setting upon entry into a test module will be whatever its value was upon exit of the preceding test module in the run. Neither startup setting values nor system default values are restored between test modules. Hence, be aware of the fact that, when you execute test suites or serial test runs, the value of a given built-in setting at the entry point of a test module may depend upon that test module's placement in the execution order.

If you choose to generate a batch file \([learn more](../../TA_Help/Topics/Test_exec_cmd_creating_batch_file.html)\), the parameter [/ss](../../TA_Help/Topics/Test_exec_cmd.md#plentry.startupsettinga_parameter) specifies the defined settings and their values. Multiple settings are separated with semi-colons.

**Parent topic:**[Startup settings](../../TA_Automation/Topics/aut_startup_settings.html)

**Previous topic:**[Creating a new user-defined setting](../../TA_Automation/Topics/aut_defining_user_defined_settings.html)

**Next topic:**[Editing an existing startup setting](../../TA_Automation/Topics/aut_editing_user_defined_settings.html)

