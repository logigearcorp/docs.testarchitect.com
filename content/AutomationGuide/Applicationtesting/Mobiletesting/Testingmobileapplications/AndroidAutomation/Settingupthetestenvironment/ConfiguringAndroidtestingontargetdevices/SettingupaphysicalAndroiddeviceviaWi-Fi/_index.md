--- 
title: "Setting up a physical Android device via Wi-Fi"
linktitle: "Setting up a physical Android device via Wi-Fi"
weight: 3
aliases: 
    - /Android/Topics/Setting_up_physical_device_wifi.html
---
# Setting up a physical Android device via Wi-Fi {#Setting_up_a_physical_device_wifi .task}

The process of setting up a physical device via Wi-Fi connection is discussed.

**Important:** Android automation is only supported on Windows.

Ensure that the following requirements are met:

-   You have configured your Android device to accept installation of applications from TestArchitect \(see [Enabling Unknown source](Android_configuring_device.html)\).
-   You have established a Wi-Fi connection on your device to a network to which your host PC has access. If necessary, refer to your Android device’s user manual, and get any necessary information \(wireless network name, WEP/WPA password\) from your systems administrator.
-   The TestArchitect Agent application resides on your device to facilitate the Wi-Fi communication link between TestArchitect and any testable applications. TestArchitect Agent is installed from the host PC and must be installed via the USB cable connection \(see [Installing TestArchitect Agent onto Android devices](Installing_TA_agent.html) for details\).

1.  Start the TestArchitect Agent on your Android device.

2.  On the TestArchitect Agent logon screen, enter the host machine IP address.

    ![](../Images/android_1.png)

3.  Click **Connect**.


If a connection to the host machine is successfully established, a Connected Successfully message appears on the Android device. To disconnect the Android device from the host machine, click the **Disconnect** button.

**Tip:** The Android icon, in the Devices panel of the Android Instrumentation Tool dialog box, changes to ![](../Images/android_6.png) after the physical device has successfully connected to TestArchitect via Wi-Fi.

**Parent topic:**[Configuring Android testing on target devices](../../Android/Topics/Setting_up_installation_target_devices.html)

**Previous topic:**[Setting up a physical Android device via USB cable](../../Android/Topics/Setting_up_physical_device_usb.html)

**Next topic:**[Setting up an Android emulator](../../Android/Topics/Setting_up_Android_emulator.html)

