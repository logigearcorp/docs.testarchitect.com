--- 
title: "Enabling development mode in iOS"
linktitle: "Enabling development mode in iOS"
weight: 2
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_iOS_prerequisite_enable_development_mode.html
---
# Enabling development mode in iOS {#Enabling_development_mode_COPY .task}

Enabling the development mode on an iOS device allows you to install and run applications not originating from Apple's App Store.

**Important:** iOS automation is only supported on Windows or macOS hosts.

Ensure that the following requirements are met before enabling development mode on an iOS device.

-   There is at least one open slot available to add a development device to your Apple developer account.
-   Xcode 9.4, 8.3, 7.x is installed. \([Learn more](https://developer.apple.com/library/content/releasenotes/DeveloperTools/RN-Xcode/Chapters/Introduction.html).\)
-   An Apple USB cable.

Perform the following procedures on macOS machine:

1.  Connect your iOS device to the macOS machine.

2.  On the macOS machine, select **XCode** \> **Window** \> **Organizer**.

3.  Click the **Devices** tab.

4.  In the left panel, select your connected iOS device and click **Use for development** on the main panel.

    **Note:** The **Use for development** button is not available if development mode has been enabled on the selected device.

5.  Log on with your developer's Apple ID and password.


**Parent topic:**[Car Rental iOS configuration](../../TA_Tutorials_Sample_App/Topics/SR_iOS_configuration_def.html)

**Previous topic:**[Prerequisites](../../TA_Tutorials_Sample_App/Topics/SR_iOS_prerequisite.html)

**Next topic:**[Re-signing and installing TestArchitect Agent on iOS](../../TA_Tutorials_Sample_App/Topics/SR_iOS_installing_TA_Agent.html)

