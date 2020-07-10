--- 
title: "Re-signing and installing TestArchitect Agent on iOS"
linktitle: "Re-signing and installing TestArchitect Agent on iOS"
description: "TestArchitect Agent is an essential component in allowing TestArchitect to communicate with iOS devices during automated testing."
weight: 3
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_iOS_installing_TA_Agent.html
keywords: 
---

TestArchitect Agent is an essential component in allowing TestArchitect to communicate with iOS devices during automated testing.TestArchitect Agent is installed onto an iOS device in a two-step process involving re-signing of the Agent, followed by its installation.

Ensure that basic requirements are met before installing TestArchitect Agent onto an iOS device \(see the section [Prerequisites](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/prerequisites) for details\).

The following procedures for re-signing the TestArchitect Agent app can only be performed from an macOS machine:

1.  If the test machine does not yet have a development private key already imported into the Keychain Access application, go ahead and import the private key file \(\*.p12\) on your test machine:

    1.  If you need to export the development private key from another test machine, select **Applications** \> **Utilities** \> **Keychain Access**. In the Keychain Access window, click **login** in the **Keychains** panel, then click **Keys** in the **Category** panel. In the **Name** panel, expand the imported private key node you want to use, right-click the certificate, select **Export** and save the keychain file.

    2.  Import a development private key file \(\*.p12\) into the test machine's Keychain Access by double-clicking the private key file. If requested, enter the file's password.

        The development private key is imported into Keychain Access on the test machine.

2.  Obtain the full name of the private key of your iOS developer account from **Keychain Access**:

    1.  Open Keychain Access from **Applications** \> **Utilities** \> **Keychain Access**.

    2.  In the Keychain Access window, click **login** in the Keychains panel, and then click **Keys** in the Category panel.

    3.  In the Name panel, expand the imported private key node you want to use, right-click the certificate, and select **Get Info** on the context menu.

        ![](/images/iOS/Images/iOS_get_key_info.png)

    4.  Make note of the device's provisional **Common Name**.

        ![](/images/iOS/Images/iOS_get_key_common_name.png)

3.  Place the following files into a folder with full read and write permissions.

    -   resign.sh
    -   The provisional profile file \(\*.mobileprovision\)
    -   TestArchitectAgent.ipa
    -   FileInfo
    -   iOSInstrumentationDyLib.dylib
    {{<note>}} resign.sh, TestArchitectAgent.ipa, FileInfo and iOSInstrumentationDyLib.dylib files can be found at the following location when TestArchitect is installed: Applications/TestArchitect/device/iOS/resource.

4.  Start the command line terminal and navigate to the directory to which you copied the files in the preceding step.

5.  Make the script file resign.sh executable by entering the following command to the terminal, followed by pressing Enter.

    `chmod +x resign.sh`

6.  Execute the resign.sh script with the name of the private key obtained in the earlier step as the first parameter, the name of the provisional profile file as the second parameter, and the name of the application file to re-sign as the third parameter.

    Syntax: resign.sh <Common Name of private key in Keychain Access\> <file name of the provisional profile\> <file name \(without or with the .ipa suffix\) of the application file to re-sign\>

    {{<note>}} Providing the file name's extension \(.ipa\) is optional. If not provided, the script assumes an extension of .ipa.

    `./resign.sh "iPhone Developer: John Doe (3M2DBQ46ZG)" iOS_Team_Provisioning_Profile_.mobileprovision TestArchitectAgent`

    The resign.sh script terminates with the message replacing existing signature, to indicate that re-signing was successful.

7.  Connect the iOS device to the test machine using a USB cable, and install a re-signed TestArchitect Agent onto the device with iTunes.

    1.  Double-click the TestArchitectAgent.ipa file that you re-signed.

    2.  Using iTunes, synchronize TestArchitect Agent with the device.

        A re-signed TestArchitect Agent is installed onto the device.

    {{<tip>}} Step [7](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/setting-up-ios-automation/re-signing-and-installing-testarchitect-agent#step_tww_zzq_kn) may be performed on either an macOS or Windows machine.

8.  You must synchronize essential TestArchitect Agent development libraries with the iOS device before TestArchitect Agent can be launched on the device.

    1.  If you haven't done so already, connect the iOS device to the test machine using a USB cable.

    2.  Start Xcode on the test machine and wait at least ten seconds before disconnecting the iOS device or closing Xcode.

        {{<note>}} If the device is not a development device, [enable development mode](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/setting-up-ios-automation/enabling-development-mode-on-ios-device) on it.

    {{<important>}} TestArchitect Agent libraries are purged each time the iOS device restarts or reboots. Therefore, in order to run the Agent on a rebooted iOS device, you must resynchronize the TestArchitect Agent development libraries with the device by repeating step [8](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/setting-up-the-ios-test-environment/setting-up-ios-automation/re-signing-and-installing-testarchitect-agent#step_bmh_5rd_3n).


After installing a re-signed TestArchitect Agent onto an iOS device, the TestArchitect Agent icon is visible on the device's desktop.




