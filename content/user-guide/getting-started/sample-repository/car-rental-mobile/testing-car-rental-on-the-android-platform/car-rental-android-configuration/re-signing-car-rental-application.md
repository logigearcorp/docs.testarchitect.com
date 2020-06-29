--- 
title: "Re-signing Car Rental application"
linktitle: "Re-signing Car Rental application"
description: "In order for the Car Rental application to run as an AUT on an Android device, the application must be re-signed by TestArchitect."
weight: 3
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Car_Rental_re-signing_application.html
keywords: "Android, Car Rental, re-signing, re-signing, Android Car Rental"
---

In order for the Car Rental application to run as an AUT on an Android device, the application must be re-signed by TestArchitect.

Ensure that the following basic requirements are met before re-signing an Android application.

-   You have administrative privileges for executing TestArchitect Client.
-   You can establish a valid connection between the host machine and the Android device, either via USB cable or over a wireless network connection with TestArchitect Agent. If you choose to establish the connection via USB cable, ensure that you have installed the necessary USB driver for your Android device on the host machine.
-   You have the Car Rental Android application file \(\*.apk\) available for re-signing. After installing TestArchitect Client, the sample Car Rental Android application file may be found at the following location:
    -   Windows: TA\_INSTALL\_DIR\\device\\android\\resource\\CarRental.apk
    -   Linux: /usr/local/logigear/testarchitect/device/android/resource/CarRental.apk

Perform the following procedures on the host machine.

1.  Establish a valid connection between the host machine and the Android device:

    **Option 1**: Connect the USB cable between the host machine and Android device. \(On a device with Android 4.0 or higher, enable the **USB debugging** option in **Settings** \> **Developer options**. On one with an Android version lower than 4.0, enable **USB debugging** in **Settings** \> **Applications** \> **Development**\)

    **Option 2**: [Connect via Wi-Fi](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/connecting-to-android-s-testarchitect-agent-via-wi-fi)

2.  Start TestArchitect Client as an administrator by right-clicking on the TestArchitect Client executable and select **Run as administrator**.

3.  In TestArchitect Client, click **Tools** on the toolbar and select **Android - Instrument Applications**.

    An Android Instrumentation Tool dialog box appears displaying the list of connected devices in the **Devices** panel.

4.  In the Android Instrumentation Tool window, click the **Install more** button.

    {{<tip>}} The **Install more** button is active only when there is a device connected to the host machine.

    The **Manage Applications Under Test** dialog box appears, displaying the list of re-signed applications in the **Devices** panel.

5.  Click the **Re-sign more** button, navigate to the location of the Android Car Rental application file you want to re-sign, and open the file.

    TestArchitect checks whether the file selected for re-signing exists on the list and prompts you as to whether you want to replace the existing file. A dialog box appears to indicate if the re-signing is successful.


The re-signed application is ready to be [installed on an Android device](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/installing-re-signed-car-rental-application) as an AUT.




