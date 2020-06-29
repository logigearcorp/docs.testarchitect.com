--- 
title: "Re-signing and installing applications on iOS"
linktitle: "Re-signing and installing applications on iOS"
description: "In order for an application to run as AUT on an iOS device, that application must be re-signed, then installed."
weight: 3
aliases: 
    - /iOS/Topics/iOS_installing_applications.html
keywords: "iOS, re-sign, install apps, re-signing, iOS apps, installing"
---

In order for an application to run as AUT on an iOS device, that application must be re-signed, then installed.

{{<important>}} iOS automation is only supported on Windows or macOS hosts.

Ensure that the basic requirements are met before re-signing and installing your applications \(see [Prerequisites](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/ios-testing-prerequisites) for details\).

The following procedures for re-signing the TestArchitect Agent app must be performed on an macOS machine:

1.  Obtain the full name of the private key of your iOS developer account from **Keychain Access**:

    1.  Open Keychain Access from **Applications** \> **Utilities** \> **Keychain Access**.

    2.  In the Keychain Access window, click **login** in the Keychains panel, and then click **Keys** in the Category panel.

    3.  In the Name panel, expand the imported private key node you want to use, right-click the certificate, and select **Get Info** on the context menu.

        ![](/images/iOS/Images/iOS_get_key_info.png)

    4.  Make note of the device's provisional **Common Name**.

        ![](/images/iOS/Images/iOS_get_key_common_name.png)

2.  Place the following files into a folder with full read and write permissions.

    -   resign.sh
    -   The provisional profile file \(\*.mobileprovision\)
    -   your .ipa application file
    -   FileInfo
    -   iOSInstrumentationDyLib.dylib
    {{<note>}} resign.sh, FileInfo and iOSInstrumentationDyLib.dylib files can be found at the following location when TestArchitect is installed: Applications/TestArchitect/device/iOS/resource.

3.  Start the command line terminal and navigate to the directory to which you copied the files in the preceding step.

4.  Make the script file resign.sh executable by entering the following command to the terminal, followed by pressing Enter.

    `chmod +x resign.sh`

5.  Execute the resign.sh script with the name of the private key obtained in the earlier step as the first parameter, the name of the provisional profile file as the second parameter, and the name of the application file to re-sign as the third parameter.

    Syntax: resign.sh <Common Name of private key in Keychain Access\> <file name of the provisional profile\> <file name \(without or with the .ipa suffix\) of the application file to re-sign\>

    {{<note>}} Providing the file name's extension \(.ipa\) is optional. If not provided, the script assumes an extension of .ipa.

    The resign.sh script terminates with the message replacing existing signature, to indicate that re-signing was successful.

6.  Connect the iOS device to the test machine using a USB cable, and install the re-signed application file onto the device with iTunes.

    1.  Double-click the .ipa application file that you re-signed.

    2.  Using iTunes, synchronize the re-signed application file with the device.

        The re-signed application is installed onto the device.

    {{<tip>}} You can perform step [6](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/setting-up-ios-automation/re-signing-and-installing-applications-on-ios#step_u4p_xyq_kn) on either an macOS or Windows machine.


After installing the re-signed application onto the iOS device, the application icon is available on the device's desktop.



