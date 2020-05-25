--- 
title: "Advanced settings"
linktitle: "Advanced settings"
aliases: 
    - /TA_Automation/Topics/aut_advanced_settings_IE.html
---
# Advanced settings {#task_w3c_hgc_fq .task}

Some settings in Internet Explorer must be set correctly to ensure that TestArchitect can properly conduct automated tests within the browser.

To configure the browser settings, carry out the following steps:

1.  Within Internet Explorer, click **Tools** \> **Internet Options**.

2.  In the Internet Options dialog box, click the **Advanced** tab.

3.  First, enable Active Content by doing the following:

    1.  In the Settings panel of the **Advanced** tab, scroll down to the **Security** section.

    2.  Select the **Allow active content to run in files on My computer** check box.

        ![](../../TA_Tutorials_Sample_App/Images/ug_taextension_ie_1.png)

4.  With Internet Explorer version 10 or 11 running on the Windows Server 2008, Windows Server 2012, Windows 8, or Windows 8.1 platform, the following additional configurations must be set:

    -   Third-party extensions option enabled, and
    -   Enhanced Protected Mode disabled.

        **Note:** TestArchitect comes in both 32-bit and 64-bit versions; the same is true for Internet Explorer. If your TestArchitect bit-width does not match your Internet Explorer bit-width, Internet Explorer will not load TestArchitect Automation Agent. You can bypass this problem, however, by simply disabling Internet Explorer’s Enhanced Protected Mode security feature. For example, you can use TestArchitect 64-bit to test applications running on Internet Explorer 32-bit.

    1.  Enable the third-party extensions option:

        1.  On the same tab \(**Advanced**\), scroll to the **Browsing** section.
        2.  Select the **Enable third-party browser extensions** check box.

            ![](../../TA_Tutorials_Sample_App/Images/ug_taextension_ie_2.png)

    2.  Disable Enhanced Protected Mode:

        1.  In the same Settings panel, scroll to the **Security** section.
        2.  Clear the **Enable Enhanced Protected Mode** check box.

            ![](../../TA_Tutorials_Sample_App/Images/ug_taextension_ie_3.png)

5.  Click **OK** to save your changes.

6.  Restart your computer to ensure that the changes take effect.


**Parent topic:**[Preparing Internet Explorer for web testing](../../TA_Help/Topics/ug_preparing_Internet_Explorer.html)

**Previous topic:**[Enabling TestArchitect Automation Agent](../../TA_Automation/Topics/aut_enabling_automation_agent_IE.html)

**Next topic:**[Setting 100% zoom](../../TA_Automation/Topics/aut_app_testing_setting_zoom_IE.html)

