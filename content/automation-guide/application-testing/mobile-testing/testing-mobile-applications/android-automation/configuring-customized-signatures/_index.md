--- 
title: "Configuring customized signatures"
linktitle: "Configuring customized signatures"
description: "Allowing TestArchitect to test your Android application requires that it be re-signed. The easiest approach is to allow the application to be re-signed with a special LogiGear certificate. Alternatively, you can have TestArchitect re-sign the application with your own custom certificate, but it must be configured correctly."
weight: 6
aliases: 
    - /Android/Topics/Android_configuring_customized_certificate.html
keywords: "Android, re-signing application, self-signed signatures, re-signing, Android application, self-signed signatures, applications, re-signing (self-signed signatures), Android"
---

Allowing TestArchitect to test your Android application requires that it be re-signed. The easiest approach is to allow the application to be re-signed with a special LogiGear certificate. Alternatively, you can have TestArchitect re-sign the application with your own custom certificate, but it must be configured correctly.

To configure a custom certificate, observe the following steps:

1.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.

2.  In the dialog box, click the **Settings** ![](/images/Android/Images/Settings_btn.png) button.

3.  In the Settings dialog box, select the **Use custom signature** option.

    The **Use LogiGear signature** options is selected by default.

4.  Specify the following details for your self-signed certificate:

    -   Select a keystore file location: \(Required\) Click ![](/images/Android/Images/btn.browse-ellipsis.01.png) to browse to your keystore file.

        {{<note>}} The supported keystore types are PKCS\#12, which includes the .P12 and .PFX extensions, and .JKS.

    -   Keystore alias name: \(Required\) Alias for the key.
    -   Keystore password: \(Required\) Password for the keystore.
    -   Private key password: \(Required\) Password for the key.

        {{<note>}} Based on the selected keystore types, the Private key password option is disabled for PKCS\#12; whereas, it is enabled for .JKS.

    ![](/images/Android/Images/Android_settings_dlg.png)

5.  Click **OK**.

    The Settings dialog box closes, and you are returned to the Android Instrumentation Tool dialog box.


Your custom signature is now configured successfully. If you encounter issues while configuring, refer to [Troubleshooting custom signatures](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/configuring-customized-signatures/troubleshooting-custom-signatures-android).

You are now ready to [re-sign your application](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/installing-a-testable-android-application/re-signing-the-android-application) with your custom certificate.

-   **[Troubleshooting custom signatures \(Android\)](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/configuring-customized-signatures/troubleshooting-custom-signatures-android)**  
Typical issues you may encounter when working with your custom Android certificate.



