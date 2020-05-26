--- 
title: "Configuring Google Chrome"
linktitle: "Configuring Google Chrome"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_setting_switches_GC.html
---
# Configuring Google Chrome {#task_xvs_qg4_q4 .task}

To ensure that automated web application testing in Google Chrome runs properly with TestArchitect, you first need to set some necessary command line switches.

Carry out the following procedure:

1.  If Chrome is open, close it, and terminate all running Chrome-related background processes, if any.

2.  Right-click the Google Chrome desktop icon, and select **Properties**.

3.  On the **Shortcut** tab in the Google Chrome Properties window, edit the contents of the **Target** text box. Append a white space to the existing command, followed by the following flags: --remote-debugging-port=9222 --no-first-run --disable-web-security --allow-file-access-from-file --enable-views-textfield --force-renderer-accessibility.

    The resultant command line string should look something like the following:

    ```
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222 --no-first-run --disable-web-security --allow-file-access-from-file --enable-views-textfield --force-renderer-accessibility
    ```

    ![](../../TA_Tutorials_Sample_App/Images/ug_taextension_chrome_1.png)

    **Note:** These flags have the following functions:

    -   --remote-debugging-port=9222: Enable remote debugging mode over HTTP on the specified port \(9222\). This mode supports the functioning of the [Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer.html) and [Identify](../../TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool to capture web controls, and allows for automated tests to run successfully on Google Chrome. This flag is compulsory and the most important; hence, ensure that port 9222 is always available.
    -   --no-first-run: Skip First Run tasks, whether or not it is actually the first run. Specifically, this flag prevents first run in subsequent runs by dropping the First Run beacon, which may otherwise occasionally cause your automation to fail.
    -   --disable-web-security: Turn off web security. This flag is required in order to support cross-domain testing.
    -   --allow-file-access-from-files: Allow local file loading, so that Google Chrome is not inhibited from performing this action on the target machines. \(Note that, for security purposes, the default is to prevent Chrome from loading local files.\)
    -   --enable-views-textfield: Enables the Views text field in the Windows environment, ensuring that all controls in a JavaScript popup are available for detection and capture.
    -   --force-renderer-accessibility: Enable the debugging renderer accessibility feature. This flag is required to support testing in a multi-window session, in which more than one Google Chrome instance is open concurrently.
4.  Click **OK**.

    **Note:** Depending on which version of Google Chrome is in use, the following warning may pop up each time the browser is launched:

    ![](../Images/Chrome_disable_web_security_msg.png)

    This issue occurs for versions of Google Chrome that regard the --disable-web-security switch as *unsupported*. Note, however, that there is no impact on performance. As there is no simple way to avoid this popup, please ignore the warning and/or click the **X** button next to the message to close it.


\(Optional\) If you want to check which flags are currently enabled in Google Chrome, open the browser and navigate to the URL chrome://version/. The enabled flags are listed in the **Command Line** block.

![](../Images/Chrome_active_flags.png)

**Parent topic:**[Preparing Google Chrome for web testing](../../TA_Help/Topics/ug_preparing_Chrome.html)

**Next topic:**[Setting 100% zoom](../../TA_Automation/Topics/aut_app_testing_setting_zoom_GC.html)

