--- 
title: "Re-signing the AUT"
linktitle: "Re-signing the AUT"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Android_resign_app.html
---

Resigning applications is the first step in the process of installing them for testing purposes.

Every application that runs under the Android system has been digitally signed with a certificate that is unique to the application’s developer. However, TestArchitect cannot properly interface with any application unless it is re-signed with a certificate that has been configured to allow for testing by TestArchitect. \(You may use TestArchitect Client’s own certificate, or your own, as long as it has been configured correctly\). This must take place before the application is installed on any target device.

To re-sign your application, follow these steps:

1.  Launch a cloud Android device from the Remote TestKit Client application. \([Learn more](aut_app_cloud_testing_Android_adb.html).\)

2.  In TestArchitect, open the [Android Instrumentation Tool](/Android/Topics/Android_Instrumentation_tool.html) dialog box.

3.  In the dialog box, click **Install more**.

    **Note:** The **Install more** button is enabled only if at least one device is running and is recognized by the Android Instrumentation Tool dialog box.

    The Manage Application Under Test dialog box appears.

    ![](/images//Images/RTK_Manage_app_dlg.png)

4.  In the dialog box, to re-sign a new .apk application file, click the **Re-sign more** button.

    **Important:** By default, TestArchitect re-signs an Android application with a LogiGear signature. You may alternatively select to re-sign the application with your self-signed signatures \(refer to [Configuring customized signatures](/Android/Topics/Android_configuring_customized_certificate.html) for details\).

    **Note:** If you encounter issues while re-signing, refer to [Troubleshooting custom signatures](/TA_FAQ/Topics/faq.tshoot.Android_custom_signature.html).

5.  Navigate to and select the .apk application file, and then click **Open**.

6.  A dialog box appears confirming that the AUT application has been re-signed successfully. Click **OK**.


In the Manage Application Under Test dialog box, the re-signed package is added to the list of available applications.

**Parent topic:**[Installing a testable AUT on an Android cloud device](/TA_Automation/Topics/aut_app_cloud_testing_install_AUT_app.html)

**Next topic:**[Installing the re-signed AUT](/TA_Automation/Topics/aut_app_cloud_testing_Android_install_resigned_app.html)

