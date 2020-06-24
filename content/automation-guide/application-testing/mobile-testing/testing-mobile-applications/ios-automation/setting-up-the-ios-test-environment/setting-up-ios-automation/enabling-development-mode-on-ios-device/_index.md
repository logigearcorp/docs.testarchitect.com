--- 
title: "Enabling development mode on iOS device"
linktitle: "Enabling development mode on iOS device"
description: "Enabling the development mode on an iOS device allows you to install and run applications not originating from Apple's App Store."
weight: 1
aliases: 
    - /iOS/Topics/iOS_prerequisite_enable_development_mode.html
keywords: "iOS, enabling development mode"
---

Enabling the development mode on an iOS device allows you to install and run applications not originating from Apple's App Store.

{{<important>}} iOS automation is only supported on Windows or macOS hosts.

Ensure that the following requirements are met before enabling development mode on an iOS device.

-   There is at least one open slot available to add a development device to your Apple developer account.
-   Xcode 9.4, 8.3, 7.x is installed. \([Learn more](https://developer.apple.com/library/content/releasenotes/DeveloperTools/RN-Xcode/Chapters/Introduction.html).\)
-   An Apple USB cable.

Perform the following procedures on macOS machine:

1.  Connect your iOS device to the macOS machine.

2.  On the macOS machine, select **XCode** \> **Window** \> **Organizer**.

3.  Click the **Devices** tab.

4.  In the left panel, select your connected iOS device and click **Use for development** on the main panel.

    {{<note>}} The **Use for development** button is not available if development mode has been enabled on the selected device.

5.  Log on with your developer's Apple ID and password.




