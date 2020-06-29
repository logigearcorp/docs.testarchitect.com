--- 
title: "Car Rental Android configuration"
linktitle: "Car Rental Android configuration"
description: "Before executing sample Car Rental automated tests on an Android device, a series of steps must be performed on both the host machine and the Android device."
weight: 1
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Android_configuration_def.html
keywords: "Car Rental, Android, configuration, Android, Car Rental, configuration"
---

Before executing sample Car Rental automated tests on an Android device, a series of steps must be performed on both the host machine and the Android device.

As a first step, you must install the TestArchitect Agent on the Android device to allow communication between TestArchitect on the host machine and the AUT on the Android device. The installation of TestArchitect Agent on the Android device must be performed via a USB cable; Wi-Fi is not an option for this purpose.

Second, you must connect the Android device to the host machine to facilitate Android re-signing of the Car Rental application, which is performed via TestArchitect's **Manage Applications Under Test** dialog box. Re-signing an Android application is necessary for it to run as a testable AUT.

Finally, the re-signed Car Rental application has to be installed on the Android device with TestArchitect's install tool. This is also performed from the **Manage Applications Under Test** dialog box.

1.  [Installing TestArchitect Agent on Android device](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/installing-testarchitect-agent-on-android-device)  
Installing TestArchitect Agent on an Android device is the first step in setting up the test environment for Android application testing.
2.  [Connecting to Android's TestArchitect Agent via Wi-Fi](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/connecting-to-android-s-testarchitect-agent-via-wi-fi)  
Establishing a connection between the Android device and the host machine allows TestArchitect to communicate with mobile applications.
3.  [Re-signing Car Rental application](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/re-signing-car-rental-application)  
In order for the Car Rental application to run as an AUT on an Android device, the application must be re-signed by TestArchitect.
4.  [Installing re-signed Car Rental application](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/installing-re-signed-car-rental-application)  
After re-signing the Car Rental Android application, you can proceed to install it on an Android device via TestArchitect's **Manage Applications Under Test** dialog box.



