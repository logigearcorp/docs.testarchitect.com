--- 
title: "Devices panel"
linktitle: "Devices panel"
description: "The Devices panel lists the physical devices that are currently connected (by USB cable or Wi-Fi) and visible to TestArchitect , as well as any Android emulators that are running on the host PC. In ..."
weight: 1
aliases: 
    - /Android/Topics/Devices_area.html
keywords: 
---

The Devices panel lists the physical devices that are currently connected \(by USB cable or Wi-Fi\) and visible to TestArchitect, as well as any Android emulators that are running on the host PC.

![](/images/Android/Images/AIT_devices_panel.png)

In the Devices panel, there are five possible icons representing detected device types and their current states:

|||
|------|------|
|![](/images/Android/Images/android_4.png)|Unavailable physical device on USB port|
|![](/images/Android/Images/android_5.png)|Available physical device on USB port|
|![](/images/Android/Images/android_6.png)|Available physical device on Wi-Fi connection|
|![](/images/Android/Images/android_7.png)|Unavailable emulator|
|![](/images/Android/Images/android_8.png)|Available emulator|

There is no unavailable status for Wi-Fi-connected devices. This is because the TestArchitect Agent is a prerequisite for a Wi-Fi device to be visible to TestArchitect. Hence, a device connected over Wi-Fi, if visible, must also be available.

**Tip:** When a new device is connected and detectable, or an old one removed, or an emulator is started or stopped, the change is not registered in the Android Instrumentation Tool dialog box until you refresh the display. Do this by clicking the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.



