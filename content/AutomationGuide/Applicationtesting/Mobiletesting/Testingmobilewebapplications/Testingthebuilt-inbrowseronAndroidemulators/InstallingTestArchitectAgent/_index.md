--- 
title: "Installing TestArchitect Agent onto Android emulators"
linktitle: "Installing TestArchitect Agent"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_emulator_installing_TA_Agent.html
---
# Installing TestArchitect Agent onto Android emulators {#task_alq_cgj_xt .task}

TestArchitect Agent is an essential component in allowing TestArchitect to communicate with the built-in browser running on Android emulators during automated testing.

Perform the following steps to install TestArchitect Agent onto your Android emulator before testing web applications on the built-in browser:

1.  On your computer, start your Android emulator.

    -   AVD emulator \([Learn more](http://developer.android.com/intl/vi/tools/devices/emulator.html#starting).\)
    -   Genymotion Desktop \([Learn more](https://www.genymotion.com/#!/developers/user-guide).\)

        **Restriction:**

        -   As of version 2.0.0, the Genymotion Desktop does not include Google Apps and ARM libraries support \([Learn more](https://www.genymotion.com/#!/release-notes/200%23200)\). This results in INSTALL\_FAILED\_CPU\_ABI\_INCOMPATIBLE errors when installing TestArchitect Agent onto Genymotion. In order to bypass this issue, please restore ARM Translation to your Genymotion VM, which you can do by following this [link](https://gist.github.com/wbroek/9321145).
        -   To install TestArchitect Agent smoothly onto Genymotion Desktop, the version of adb in Genymotion must be lower than or equal to that of adb in TestArchitect.
    ![](../Images/genymotion.png)

2.  In TestArchitect, launch the Android Instrumentation Tool dialog box. \([Learn more](../../Android/Topics/Android_Instrumentation_tool.html).\)

    You should see a grey icon representing your emulator in the Devices panel on the Android Instrumentation Tool dialog box.

    ![](../Images/gray_icon.png)

    A grey icon indicates that the emulator is visible to TestArchitect, but that TestArchitect Agent is not yet installed.

3.  Right-click the icon, and then select **Install TestArchitect Automation Agent**.

    **Fastpath:** Alternatively, click the button **Install TestArchitect Automation Agent on selected device** ![](../../Android/Images/android_installing_TA_agent_btn.png), on the toolbar.


Upon successful installation, the emulator icon, formerly grey, becomes green.

![](../Images/green_icon.png)

This indicates that the functioning TestArchitect Agent application now resides on your emulator.

**Parent topic:**[Testing the built-in browser on Android emulators](../../TA_Automation/Topics/aut_app_testing_mobile_web_Android_emulators.html)

**Next topic:**[Invoking the built-in browser in Android emulator during automation](../../TA_Automation/Topics/aut_app_testing_mobile_web_emulator_invoking_browser.html)

