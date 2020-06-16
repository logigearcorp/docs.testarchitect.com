--- 
title: "Installing TestArchitect Agent"
linktitle: "Installing TestArchitect Agent"
description: "TestArchitect Agent is an essential component in allowing TestArchitect to communicate with Chrome, WebView, or native applications running on a cloud Android device during automated testing."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Android_agent.html
keywords: "cloud testing, Remote TestKit, Android, installing TA agen, Remote TestKit, Android, installing TA agen"
---

TestArchitect Agent is an essential component in allowing TestArchitect to communicate with Chrome, WebView, or native applications running on a cloud Android device during automated testing.

Perform the following steps to install TestArchitect Agent onto your cloud device before testing web applications on Chrome, WebView, or native applications:

1.  Activate a device from the Remote TestKit Client application. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_Android_adb.html).\)

2.  In TestArchitect, launch the Android Instrumentation Tool dialog box. \([Learn more](/Android/Topics/Android_Instrumentation_tool.html).\)

    In the Devices panel, on the Android Instrumentation Tool dialog box, you should see a grey icon representing your cloud device.

    ![](/images/TA_Automation/Images/gray_icon_RTK.png)

    A grey icon indicates that the cloud device is visible to TestArchitect, but that TestArchitect Agent is not yet installed.

3.  Right-click the icon, and then select **Install TestArchitect Automation Agent**.

    **Fastpath:** Alternatively, click the button **Install TestArchitect Automation Agent on selected device** ![](/images/Android/Images/android_installing_TA_agent_btn.png) on the toolbar.


Upon successful installation, the cloud device icon, formerly grey, becomes green. This indicates that the functioning TestArchitect Agent application now resides on your cloud device.

![](/images/TA_Automation/Images/green_icon_RTK.png)

Additionally, on the cloud device, you will see the TestArchitect Automation Agent icon.

![](/images/TA_Automation/Images/RTK_TA_agent.png)

If you'd like to test WebView and native applications on your cloud device, please proceed to the next prerequisite.




