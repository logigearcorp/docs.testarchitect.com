--- 
title: "Setting up a physical Android device via USB cable"
linktitle: "Setting up a physical Android device via USB cable"
aliases: 
    - /Android/Topics/Setting_up_physical_device_usb.html
---
# Setting up a physical Android device via USB cable {#task_t2l_m55_5q .task}

The process of setting up a physical device via USB cable connection.

**Important:** Android automation is only supported on Windows.

Ensure that you have configured your Android device to accept installation of applications from TestArchitect \(see [Enabling Unknown source](Android_configuring_device.html)\).

To set up an Android device via USB cable, perform the following steps:

1.  Install the appropriate USB driver for the device on the host PC.

    **Note:** Generally, a suitable device driver is available from the software CD that accompanies the device. Refer to the [Original Equipment Manufacturers \(OEMs\) USB Drivers](http://developer.android.com/tools/extras/oem-usb.html#InstallingDriver) website for details.

2.  Connect your physical device directly to the host PC via USB cable.

    **Remember:**

    -   When you connect a device running Android 4.2.2 or higher to your computer, the system displays a dialog box asking whether to accept an RSA key that allows debugging through this computer. Click **OK**.

        **Note:**

        -   To skip this dialog box in the future, select the **Always allow from this computer** check box.
        -   This security mechanism protects user devices because it ensures that USB debugging and other adb commands cannot be executed unless you are able to unlock the device and acknowledge the dialog box.
    -   For HTC smart phones running Android 2.3 or later, when you plug in the USB cable, a pop-up window appears offering two options: **HTC synchronize** and **Charge only**. Select the **Charge only** option.

**Parent topic:**[Configuring Android testing on target devices](../../Android/Topics/Setting_up_installation_target_devices.html)

**Previous topic:**[Basic configuration for Android automation](../../Android/Topics/Android_configuring_device.html)

**Next topic:**[Setting up a physical Android device via Wi-Fi](../../Android/Topics/Setting_up_physical_device_wifi.html)

