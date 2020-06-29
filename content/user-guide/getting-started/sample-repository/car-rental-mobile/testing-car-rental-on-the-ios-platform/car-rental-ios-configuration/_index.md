--- 
title: "Car Rental iOS configuration"
linktitle: "Car Rental iOS configuration"
description: "Before executing tests on an iOS device with the sample Car Rental application, you must install required software and configure the device."
weight: 1
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_iOS_configuration_def.html
keywords: "Car Rental, iOS, configuring, iOS, Car Rental, configuration"
---

Before executing tests on an iOS device with the sample Car Rental application, you must install required software and configure the device.

1.  For starters, the iOS device must be a [development device](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/enabling-development-mode-in-ios). \(Alternatively, you can use an iOS device for which development use is temporarily enabled\).
2.  Second, you must install [TestArchitect Agent](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-testarchitect-agent-on-ios) onto the device. This allows for communication between TestArchitect on the host machine and the AUT on the iOS device. The installation of TestArchitect Agent on the device must be performed using a USB cable. \(Installation over a wireless network is not supported.\)
3.  Next, several settings on the iOS device must be properly configured, such as setting **Triple-Click Home** to control **Toggle VoiceOver**, and turning on **Location Services** for TestArchitect Agent. Refer to [Configuring an iOS device](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/configuring-an-ios-device) for complete instructions.
4.  After completing configuration of the device's settings, install the [Car Rental iOS](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-car-rental-for-ios) application onto it.
5.  Finally, use TestArchitect Agent to establish a connection between the host machine and the device.

1.  [Prerequisites](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/prerequisites)  
Basic prerequisites for testing iOS applications.
2.  [Enabling development mode in iOS](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/enabling-development-mode-in-ios)  
Enabling the development mode on an iOS device allows you to install and run applications not originating from Apple's App Store.
3.  [Re-signing and installing TestArchitect Agent on iOS](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-testarchitect-agent-on-ios)  
TestArchitect Agent is an essential component in allowing TestArchitect to communicate with iOS devices during automated testing.
4.  [Re-signing and installing Car Rental for iOS](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-car-rental-for-ios)  
In order for the Car Rental application to run as an AUT on an iOS device, the application must be re-signed, then installed.
5.  [Configuring an iOS device](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/configuring-an-ios-device)  
Configuring an iOS device for test automation.



