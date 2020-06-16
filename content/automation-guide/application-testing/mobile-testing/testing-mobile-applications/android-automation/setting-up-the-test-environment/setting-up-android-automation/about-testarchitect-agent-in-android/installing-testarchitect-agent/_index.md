--- 
title: "Installing TestArchitect Agent onto Android devices"
linktitle: "Installing TestArchitect Agent"
description: "How to install TestArchitect Agent onto Android devices."
weight: 1
aliases: 
    - /Android/Topics/Installing_TA_agent.html
keywords: "Android, installing TestArchitect Agent, TestArchitect Agent, Android, installing"
---

How to install TestArchitect Agent onto Android devices.

**Important:** Android automation is only supported on Windows.

At the present time, installation to a physical device requires a USB cable connection to the host PC. \(Hence, if working with a physical device that has not yet been set up for communication with the host PC, refer to the instructions given in [Setting up a physical Android device via USB cable](/Android/Topics/Setting_up_physical_device_usb.html).\)

Do the following to install the TestArchitect Agent onto your Android device:

1.  With your physical Android device connected via USB cable, or emulator up and running, launch the [Android Instrumentation Applications](/Android/Topics/Android_Instrumentation_tool.html) dialog box.

    You should see a grey icon representing your device in the Devices panel on the Android Instrumentation Applications dialog box. A grey icon indicates that the device is visible to TestArchitect, but that the TestArchitect Agent is not yet installed.

    ![](/images/Android/Images/android_9.png)

2.  Right-click the icon and select **Install TestArchitect Automation Agent**.

    **Fastpath:** Alternatively, click the button **Install TestArchitect Automation Agent on selected device** ![](/images/Android/Images/android_installing_TA_agent_btn.png), on the toolbar.

    Upon successful installation, the device icon, formerly grey, becomes green. This indicates that the functioning TestArchitect Agent application now resides on your device.

    ![](/images/Android/Images/android_10.png)

3.  You may remove the USB cable connection after you have installed the TestArchitect Agent onto the physical device that you intend to test.


In addition to the presence of a green icon in the Android Instrumentation Applications dialog box, you may verify that the TestArchitect Agent is running on a device by checking Android’s **Manage Applications** utility:

-   On a device with Android 4.0 or higher, the **Manage Applications** utility is available under **Settings** \> **Applications manager**.
-   On a device with Android version lower than 4.0, the **Manage Applications** utility is available under **Settings** \> **Applications** \> **Manage applications**.

![](/images/Android/Images/android_11.png)



