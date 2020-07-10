--- 
title: "Re-signing and installing Car Rental for iOS"
linktitle: "Re-signing and installing Car Rental for iOS"
description: "In order for the Car Rental application to run as an AUT on an iOS device, the application must be re-signed, then installed."
weight: 4
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_iOS_installing_Car_Rental.html
keywords: 
---

In order for the Car Rental application to run as an AUT on an iOS device, the application must be re-signed, then installed.

Ensure that basic requirements are met before re-signing and installing Car Rental onto an iOS device \(see [Prerequisites](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/prerequisites) for details\).

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
    -   CarRental.ipa
    -   Debug.entitlements
    -   FileInfo
    -   iOSInstrumentationDyLib.dylib
    {{<note>}} Assuming that TestArchitect is installed, resign.sh, Debug.entitlements, FileInfo, iOSInstrumentationDyLib.dylib and CarRental.ipa files can be found at the following location: Applications/TestArchitect/device/iOS/resource

3.  Start the command line terminal and navigate to the directory to which you copied the files in the preceding step.

4.  Make the script file resign.sh executable by entering the following command to the terminal, followed by pressing Enter.

    `chmod +x resign.sh`

5.  Execute the resign.sh script with the name of the private key obtained in the earlier step as the first parameter, the name of the provisional profile file as the second parameter, and the name of the application file to re-sign as the third parameter.

    `./resign.sh "iPhone Developer: John Doe (3M2DBQ46ZG)" iOS_Team_Provisioning_Profile_.mobileprovision CarRental`

    The resign.sh script terminates with the message replacing existing signature, to indicate that re-signing was successful.

6.  Connect the iOS device to the test machine using a USB cable, and use iTunes to install the re-signed Car Rental application file onto the device:

    1.  Double-click the CarRental.ipa file that you re-signed.

    2.  Using iTunes, synchronize the re-signed Car Rental application file with the device.

        The re-signed Car Rental application is installed onto the device.

    {{<tip>}} You can perform step [6](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-car-rental-for-ios#step_jbb_m1r_kn) on either an macOS or Windows machine.


With the re-signed Car Rental application installed onto the iOS device, the Car Rental icon is available on the device's desktop.




