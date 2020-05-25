--- 
title: "Configuring Android testing on target devices"
linktitle: "Configuring Android testing on target devices"
aliases: 
    - /Android/Topics/Setting_up_installation_target_devices.html
---
# Configuring Android testing on target devices {#Installation_of_target_devices .concept}

Android developers have the option of hosting and testing their applications either on physical mobile devices \(phones and tablets\) or virtual devices \(emulators\) residing on a host PC.Accordingly, TestArchitect can test applications residing in either environment. For purposes of test automation, the term target device refers to both physical and virtual devices.

**Important:** Android automation is only supported on Windows.

TestArchitect running on the host PC communicates with the physical device by either USB cable or Wi-Fi. When both USB cable and Wi-Fi connections are present, TestArchitect gives precedence to the Wi-Fi connection. When TestArchitect launches an application for testing, it ascertains the state of connectivity to the physical device. If the Wi-Fi connection is good, TestArchitect uses that as the communication channel. If the Wi-Fi connection is poor, the USB cable is used.

1.  [Basic configuration for Android automation](../../Android/Topics/Android_configuring_device.html)  
This section describes the essential configurations needed to ensure that automated tests on Android devices run successfully and stably.
2.  [Setting up a physical Android device via USB cable](../../Android/Topics/Setting_up_physical_device_usb.html)  
The process of setting up a physical device via USB cable connection.
3.  [Setting up a physical Android device via Wi-Fi](../../Android/Topics/Setting_up_physical_device_wifi.html)  
The process of setting up a physical device via Wi-Fi connection is discussed.
4.  [Setting up an Android emulator](../../Android/Topics/Setting_up_Android_emulator.html)  
TestArchitect can test applications on Android emulators on the host PC.

**Parent topic:**[Setting up the test environment](../../Android/Topics/Setting_up_the_test_enviroment.html)

**Next topic:**[Setting up Android automation](../../Android/Topics/Setting_up_Android_automation.html)

