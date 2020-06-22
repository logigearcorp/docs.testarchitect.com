--- 
title: "Re-signing and installing TestArchitect Browser Agent"
linktitle: "Re-signing and installing TestArchitect Browser Agent"
description: "If your tests are to make use of the built-in navigate action to automatically invoke web pages in the Safari browser, then any iOS device subject to such testing must by prepped by having TestArchitect Browser Agent re-signed and installed. (Note, however, that this procedure may be bypassed if you instead plan to start Safari manually by tapping the Safari icon on the device.)"
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari_installing_TA_Browser_Agent.html
keywords: "mobile web testing, Safari, installing browser agent, Safari testing, iOS, TestArchitect Browser Agent, Safari, iOS"
---

If your tests are to make use of the built-in navigate action to automatically invoke web pages in the Safari browser, then any iOS device subject to such testing must by prepped by having TestArchitect Browser Agent re-signed and installed. \(Note, however, that this procedure may be bypassed if you instead plan to start Safari manually by tapping the Safari icon on the device.\)

{{<remember>}} While web testing within Safari iOS can be hosted from either a Windows or macOS controller, the process of re-signing and installing TestArchitect Browser Agent on the target device must be performed from an macOS machine.

Before re-signing and installing TestArchitect Browser Agent, ensure that the device has already been configured in accordance with the [iOS testing prerequisites](/iOS/Topics/iOS_prerequisite.html).\)

Carry out the following procedures on an macOS machine:

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
    -   TestArchitectBrowserAgent.ipa
    -   FileInfo
    -   iOSInstrumentationDyLib.dylib
{{<note>}} The files resign.sh, TestArchitectBrowserAgent.ipa, FileInfo, and iOSInstrumentationDyLib.dylib may be found at the following location when TestArchitect is installed: Applications/TestArchitect/device/iOS/resource

3.  Start the command line terminal and navigate to the directory to which you copied the files in the preceding step.

4.  Make the script file resign.sh executable by entering the following command to the terminal, followed by pressing Enter.

    `chmod +x resign.sh`

5.  Execute the resign.sh script with the name of the private key obtained in the earlier step as the first parameter, the name of the provisional profile file as the second parameter, and the name of the application file to re-sign as the third parameter.

    Syntax: resign.sh <Common Name of private key in Keychain Access\> <file name of the provisional profile\> <file name \(without or with the .ipa suffix\) of the application file to re-sign\>

{{<note>}} Providing the file name's extension \(.ipa\) is optional. If not provided, the script assumes an extension of .ipa.

    `./resign.sh "iPhone Developer: John Doe (3M2DBQ46ZG)" iOS_Team_Provisioning_Profile_.mobileprovision TestArchitectBrowserAgent`

    The resign.sh script terminates with the message replacing existing signature, to indicate that re-signing was successful.

6.  Connect the iOS device to the test machine using a USB cable, and install the re-signed TestArchitectBrowserAgent onto the device via iTunes.

    1.  Double-click the TestArchitectBrowserAgent.ipa application file that you re-signed.

    2.  Using iTunes, synchronize TestArchitectBrowserAgent with the device.

        A re-signed TestArchitectBrowserAgent is installed onto the device.

{{<note>}} You can perform step [6](/TA_Automation/Topics/aut_app_testing_mobile_web_Safari_installing_TA_Browser_Agent.html#step_u4p_xyq_kn) on either an macOS or Windows machine.




