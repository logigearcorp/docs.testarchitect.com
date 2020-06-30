--- 
title: "Creating a new user-defined setting"
linktitle: "Creating a new user-defined setting"
description: "User-defined settings are a useful way of passing information to your test modules prior to startup to get them to behave in a certain way. You can create these settings within TestArchitect Client for either a client-directed test run or to generate a test run batch file."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_defining_user_defined_settings.html
keywords: "user-defined settings, defining, defining"
---

User-defined settings are a useful way of passing information to your test modules prior to startup to get them to behave in a certain way. You can create these settings within TestArchitect Client for either a client-directed test run or to generate a test run batch file.

{{<note>}} Within TestArchitect Client, user-defined settings are created and configured within the **Startup Settings** tab of the Execute Test dialog box. Although [built-in settings](/automation-guide/action-based-testing-language/built-in-settings/) may also be configured under this tab, TestArchitect does not allow for the creation of new ones.

To create a user-defined setting from TestArchitect Client, do the following:

1.  Launch the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box.

2.  Select the **Startup Settings** tab.

    ![](/images/TA_Automation/Images/startup_settings_tab.png)

3.  Click the **Add** button.

    The Add a setting dialog box appears.

    ![](/images/TA_Automation/Images/Add_a_setting_dlg.png)

4.  In the dialog box, enter the following information:

    -   **Type**: \(Required\) Type of the setting. Select the **User Defined** option.
    -   **Name**: \(Required\) Name of the setting.

        {{<restriction>}} You cannot “reuse” the name of a built-in setting here. Built-in setting names are reserved keywords and cannot be used to label user-defined settings.

    -   **Value**: \(Optional\) Value for the specified setting.

        {{<note>}} Although setting a value is optional at this point, you cannot change a user-defined setting's value from within your test procedure. On the other hand, there is a valid reason for leaving this field empty: it allows your program to *effectively* set a value for the setting when it finds that there is no value set. This is because your test's action lines cannot directly work with a user-defined setting, but *can* work with variables. The [get setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/get-setting) action is used to transfer a value from a user-defined setting to a variable, and when that setting has no value, the value specified in the action's default argument is applied to the variable.

    -   **Description**: \(Optional\) Short description of the setting.
5.  Click **OK**.

    Your new user-defined setting appears in the Startup Settings panel.

6.  Select the **Startup Settings** check box.

    This enables all the setting assignments listed under the **Startup Settings** tab, so that all those settings are set to their specified values \(in the **Value** column\) when you click **Execute**.

    ![](/images/TA_Automation/Images/startup_settings_tab_defined_settings.png)


The new user-defined setting and its value take effect for the test run, once you click **Execute**. When the test run ends, these settings and their values are displayed in the [test result](/user-guide/working-with-test-results/overview/result-details-tab#note_vdn_psq_jt).

If you choose to generate a batch file \([learn more](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/creating-a-batch-file)\), the parameter [/ss](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/#plentry.startupsettinga_parameter) specifies the defined settings and their values. Multiple settings are separated with semi-colons.



