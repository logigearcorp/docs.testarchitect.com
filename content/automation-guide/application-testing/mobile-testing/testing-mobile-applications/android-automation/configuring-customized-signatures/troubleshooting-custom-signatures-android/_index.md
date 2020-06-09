--- 
title: "Troubleshooting custom signatures \\(Android\\)"
linktitle: "Troubleshooting custom signatures \\(Android\\)"
weight: 1
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.Android_custom_signature.html
---

Typical issues you may encounter when working with your custom Android certificate.

The following table describes the output messages you may encounter while configuring a custom signature.

|Message|Description|
|-------|-----------|
|Please fill out all required fields.|One or more required fields are empty.|
|The keystore password does not match the keystore password in your keystore file.|The keystore password you entered does not match the password defined in your keystore file.|
|The private key password does not match the private key password in your keystore file.|The private key password you entered does not match the password defined in your keystore file.|
|The format of the keystore file is invalid or corrupted. Select a valid file and try again.|Your keystore file is not supported, or it is corrupted. The supported keystore types are PKCS\#12, which includes the .P12 and .PFX extensions, and .JKS.|
|The keystore alias name does not match the keystore alias name in your keystore file.|The alias you entered does not match the name defined in your keystore file.|

The following table describes the output messages you may encounter while re-signing an Android application with custom signature.

|Message|Description|
|-------|-----------|
|The keystore file is not found. Please, re-specify the keystore file via the “Select a keystore file location” text box on the “Settings” dialog box.|This error is commonly encountered when re-signing with a custom signature, but the keystore file could not be found.|
|Unexpected error has occurred. Error Detail: <Exceptions caught by Jarsigner\>|An error not recognized by TestArchitect has been returned from Jarsigner, the tool which TestArchitect calls to perform the re-signing. The exception thrown by Jarsigner is displayed in the message.|

**Parent topic:**[Configuring customized signatures](/Android/Topics/Android_configuring_customized_certificate.html)

