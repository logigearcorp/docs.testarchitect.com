--- 
title: "Devices panel"
linktitle: "Devices panel"
weight: 1
aliases: 
    - /Android/Topics/Devices_area.html
---

The Devices panel lists the physical devices that are currently connected \(by USB cable or Wi-Fi\) and visible to TestArchitect, as well as any Android emulators that are running on the host PC.

![](/images//Images/AIT_devices_panel.png)

In the Devices panel, there are five possible icons representing detected device types and their current states:

|||
|------|------|
|![](/images//Images/android_4.png)|Unavailable physical device on USB port|
|![](/images//Images/android_5.png)|Available physical device on USB port|
|![](/images//Images/android_6.png)|Available physical device on Wi-Fi connection|
|![](/images//Images/android_7.png)|Unavailable emulator|
|![](/images//Images/android_8.png)|Available emulator|

There is no unavailable status for Wi-Fi-connected devices. This is because the TestArchitect Agent is a prerequisite for a Wi-Fi device to be visible to TestArchitect. Hence, a device connected over Wi-Fi, if visible, must also be available.

**Tip:** When a new device is connected and detectable, or an old one removed, or an emulator is started or stopped, the change is not registered in the Android Instrumentation Tool dialog box until you refresh the display. Do this by clicking the **Refresh devices list** ![](/images//Images/Refresh_device_list_btn.png) button.

**Parent topic:**[Android Instrumentation Tool](/Android/Topics/Android_Instrumentation_tool.html)

**Next topic:**[Applications Under Test panel](/Android/Topics/Application_under_test_area.html)

