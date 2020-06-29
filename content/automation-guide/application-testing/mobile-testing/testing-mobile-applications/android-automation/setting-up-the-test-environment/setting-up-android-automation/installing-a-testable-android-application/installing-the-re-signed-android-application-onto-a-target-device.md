--- 
title: "Installing the re-signed Android application onto a target device"
linktitle: "Installing the re-signed Android application onto a target device"
description: "After successfully re-signing the application, you can install it to a device."
weight: 2
aliases: 
    - /Android/Topics/Installing_applications_to_a_target_device.html
keywords: "Android, installing re-signed application, installing application"
---

After successfully re-signing the application, you can install it to a device.

{{<important>}} Android automation is only supported on Windows.

1.  Open the [Manage Application Under Test](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/installing-a-testable-android-application/re-signing-the-android-application) dialog box

    {{<tip>}} From the Manage Application Under Test dialog box, you can install one or more re-signed applications into any number of physical Android mobile devices that are currently connected \(by USB cable or Wi-Fi\) and visible to TestArchitect, as well as any Android emulators that are running on the host PC.

2.  From the list of re-signed applications, select the application that you want to install.

3.  From the **Select device to install AUT** drop-down list, choose the device onto which you want to install the selected application.

4.  Click **Install**.

    {{<remember>}} If you install the application via a Wi-Fi connection, a dialog box appears on your device which asks you to select either **Open** or **Done**. Select **Done** to continue the installation process.

    {{<note>}}

    -   If you encounter issues while installing, refer to [Troubleshooting custom signatures](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/configuring-customized-signatures/troubleshooting-custom-signatures-android).
    -   A particular problem with Android 6 devices has been known to occur when installing via Wi-Fi connection. Specifically, you may find your device continually repeating the installation process for no apparent reason. The solution for now is to manually intervene in the process: after completion of the first installation, press the device's **Back** button at the subsequent installation phase in order to exit from the loop.

        Following that, TestArchitect installs an instance of TestArchitect Agent, which handles all communications between the AUT and the TestArchitect controller. \(An instance of TestArchitect Agent is installed for every installed AUT.\) This process also can result in the device inadvertently repeating the installation continuously. As before, end the loop by pressing the device's **Back** button.

5.  If TestArchitect detects conflicts between your current signature setting and your signed application,\(for example, your current signature setting is LogiGear, but your application is signed with your custom signature\), TestArchitect displays a warning message asking whether you want to overwrite the application's certificate with the current signature setting.

    -   Yes: Re-sign the application with the current signature setting, then install it.
    -   No: Close the warning message, then continue installing the application with its existing certificate.
6.  If the selected application is already installed on the chosen device, a dialog box appears asking if you want to replace the installed application.

    ![](/images/Android/Images/android_13.png)


If the installation is successful, the Installation completed message appears.

{{<note>}} Installation of each application via the Android Instrumentation Tool dialog box involves the installation of a second application to handle communications. If you go to the **Manage Applications** utility:

-   On a version 4.0 or higher Android device, the **Manage Applications** utility is available under **Settings** \> **Applications manager**.
-   On a pre-4.0 Android device, the **Manage Applications** utility is available under **Settings** \> **Applications** \> **Manage applications**.

You may see multiple instances of the application AndroidAgentInstrumentation – one for each installed AUT. In the TestArchitect automation schema, the TestArchitect Agent acts as a master agent on the device, channeling all communications to and from TestArchitect. On the other end of that channel, the TestArchitect Agent talks to the appropriate AndroidAgentInstrumentation instance, which in turn handles the control of, and responses from, its companion AUT. Hence, the control path for a typical action is **TestArchitect** \> **TestArchitect Agent** \> **AndroidAgentInstrumentation** \> **AUT** \(and vice-versa for responses from check actions.\)



**Related information**  


[Installing the Android command line tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-command-line-tool/installing-the-android-command-line-tool/)

