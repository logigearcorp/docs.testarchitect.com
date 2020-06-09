--- 
title: "Configuring customized signatures"
linktitle: "Configuring customized signatures"
weight: 6
aliases: 
    - /Android/Topics/Android_configuring_customized_certificate.html
---

Allowing TestArchitect to test your Android application requires that it be re-signed. The easiest approach is to allow the application to be re-signed with a special LogiGear certificate. Alternatively, you can have TestArchitect re-sign the application with your own custom certificate, but it must be configured correctly.

To configure a custom certificate, observe the following steps:

1.  Open the [Android Instrumentation Tool](Android_Instrumentation_tool.html) dialog box.

2.  In the dialog box, click the **Settings** ![](/images//Images/Settings_btn.png) button.

3.  In the Settings dialog box, select the **Use custom signature** option.

    The **Use LogiGear signature** options is selected by default.

4.  Specify the following details for your self-signed certificate:

    -   Select a keystore file location: \(Required\) Click ![](/images//Images/btn.browse-ellipsis.01.png) to browse to your keystore file.

        **Note:** The supported keystore types are PKCS\#12, which includes the .P12 and .PFX extensions, and .JKS.

    -   Keystore alias name: \(Required\) Alias for the key.
    -   Keystore password: \(Required\) Password for the keystore.
    -   Private key password: \(Required\) Password for the key.

        **Note:** Based on the selected keystore types, the Private key password option is disabled for PKCS\#12; whereas, it is enabled for .JKS.

    ![](/images//Images/Android_settings_dlg.png)

5.  Click **OK**.

    The Settings dialog box closes, and you are returned to the Android Instrumentation Tool dialog box.


Your custom signature is now configured successfully. If you encounter issues while configuring, refer to [Troubleshooting custom signatures](/TA_FAQ/Topics/faq.tshoot.Android_custom_signature.html).

You are now ready to [re-sign your application](Installing_applications_resigning.html) with your custom certificate.

-   **[Troubleshooting custom signatures \(Android\)](/TA_FAQ/Topics/faq.tshoot.Android_custom_signature.html)**  
Typical issues you may encounter when working with your custom Android certificate.

**Parent topic:**[Android Automation](/Android/Topics/Android_Automation_begin.html)

**Previous topic:**[Android command line tool](/Android/Topics/Android_command_line_tool.html)

