--- 
title: "Installing re-signed Car Rental application"
linktitle: "Installing re-signed Car Rental application"
description: "After re-signing the Car Rental Android application, you can proceed to install it on an Android device via TestArchitect's Manage Applications Under Test dialog box."
weight: 4
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Car_Rental_installing_re-signed_application.html
keywords: "Android, Car Rental, installing, installing, Car Rental application"
---

After re-signing the Car Rental Android application, you can proceed to install it on an Android device via TestArchitect's **Manage Applications Under Test** dialog box.

Ensure that the following basic requirements are met before the installing the Android application on the device:

-   The Car Rental Android application file has been [re-signed](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/re-signing-car-rental-application) by TestArchitect.
-   You can establish a valid connection between the host machine and the Android device, either via USB cable or [Wi-Fi connection](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/connecting-to-android-s-testarchitect-agent-via-wi-fi) with TestArchitect Agent. If you choose to establish the connection via USB cable, ensure that you have installed the required USB driver for your Android device on the host machine.

Perform the following procedures on the host machine.

1.  Establish a valid connection between the host machine and the Android device.

    **Option 1**: Connect the USB cable between the host machine and the device. \(On a device with Android 4.0 or higher, enable the **USB debugging** option in **Settings** \> **Developer options**. On one with an Android version lower than 4.0, enable **USB debugging** in **Settings** \> **Applications** \> **Development**\)

    **Option 2**: [Connect via Wi-Fi](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-android-platform/car-rental-android-configuration/connecting-to-android-s-testarchitect-agent-via-wi-fi)

2.  Start TestArchitect Client.

3.  In TestArchitect Client, click **Tools** on the toolbar and select **Android - Instrument Applications**.

    An Android Instrumentation Tool dialog box appears displaying the list of connected devices in the **Devices** panel.

4.  If you have more than one device connected, click, on the **Devices** panel, the device into which you want to install the re-signed application file.

5.  On the Android Instrumentation Tool dialog box, click the **Install more** button.

    {{<tip>}} The **Install more** button is active only when there is a device connected to the host machine.

    The **Manage Applications Under Test** dialog box appears to allow you to add Android applications.

6.  In the **Manage Applications Under Test** dialog box, select the **Car** application with the package name `com.logigear`. Click the **Install** button to install the Car Rental application.

    ![](/images/TA_Tutorials_Sample_App/Images/android_re-signed_list.png)

    TestArchitect installs the selected application on the device. If the application is already installed on the device, TestArchitect prompts you as to whether you want to replace the existing file.


The installed Car Rental applications are available on the device desktop ready to be tested.



