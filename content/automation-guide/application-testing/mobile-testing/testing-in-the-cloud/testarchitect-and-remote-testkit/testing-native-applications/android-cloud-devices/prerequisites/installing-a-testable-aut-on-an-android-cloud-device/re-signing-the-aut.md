--- 
title: "Re-signing the AUT"
linktitle: "Re-signing the AUT"
description: "Resigning applications is the first step in the process of installing them for testing purposes."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Android_resign_app.html
keywords: 
---

Resigning applications is the first step in the process of installing them for testing purposes.

Every application that runs under the Android system has been digitally signed with a certificate that is unique to the application’s developer. However, TestArchitect cannot properly interface with any application unless it is re-signed with a certificate that has been configured to allow for testing by TestArchitect. \(You may use TestArchitect Client’s own certificate, or your own, as long as it has been configured correctly\). This must take place before the application is installed on any target device.

To re-sign your application, follow these steps:

1.  Launch a cloud Android device from the Remote TestKit Client application. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-native-applications/android-cloud-devices/prerequisites/enabling-the-android-adb-command).\)

2.  In TestArchitect, open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.

3.  In the dialog box, click **Install more**.

    {{<note>}} The **Install more** button is enabled only if at least one device is running and is recognized by the Android Instrumentation Tool dialog box.

    The Manage Application Under Test dialog box appears.

    ![](/images/TA_Automation/Images/RTK_Manage_app_dlg.png)

4.  In the dialog box, to re-sign a new .apk application file, click the **Re-sign more** button.

    {{<important>}} By default, TestArchitect re-signs an Android application with a LogiGear signature. You may alternatively select to re-sign the application with your self-signed signatures \(refer to [Configuring customized signatures](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/configuring-customized-signatures/) for details\).

    {{<note>}} If you encounter issues while re-signing, refer to [Troubleshooting custom signatures](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/configuring-customized-signatures/troubleshooting-custom-signatures-android).

5.  Navigate to and select the .apk application file, and then click **Open**.

6.  A dialog box appears confirming that the AUT application has been re-signed successfully. Click **OK**.


In the Manage Application Under Test dialog box, the re-signed package is added to the list of available applications.



