--- 
title: "Configuring Appium server locally"
linktitle: "Configuring Appium server locally"
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS.html
---

Describes detailed steps to configure Appium server locally on macOS machines.

Ensure that the following requirements are met:

-   Rent an iOS device in the Remote TestKit service, and enable Xcode Connector. \([Learn more](aut_app_cloud_testing_iOS_Xcode_connector.html).\)
-   Xcode detected the iOS device.
-   [Obtain](aut_obtaining_UDID.html) UDID of the iOS device.

1.  Launch the Appium application.

2.  In the Appium dialog box, click the **iOS Settings** ![](/images//Images/appium_settings_iOS_btn.png) button.

    ![](/images//Images/mainwindow_appium_mac.png)

3.  Select the **Use Mobile Safari** check box.

    ![](/images//Images/appium_macOS.png)

4.  Under Device Settings panel, specify the following information.

    -   **Platform Version**: From the drop-down list, select the correct iOS version of the [rented device](aut_app_cloud_testing_iOS_Xcode_connector.html) in Remote TestKit.
    -   **UDID**: Type in the device identifier. \([Learn more.](aut_obtaining_UDID.html)\)
    ![](/images//Images/appium_macOS.png)

5.  In the Appium dialog box, click the **Developer Setting** ![](/images//Images/devopler_setting_btn.png) button.

6.  In the Developer Settings dialog box, select the **Custom Server Flags** check box, and then input --log-level warn.

    This [flag](http://appium.io/slate/en/v1.2.0/?ruby#server-flags) suppresses debugging messages, including warning, error, and fatal messages, logging to the console to prevent the Appium server from crashing unexpectedly.

    ![](/images//Images/appium_ios_dev_settings.png)

7.  In the Appium dialog box, start the Appium server by clicking the **Launch** button.

    The Appium server is started successfully from your local host.


**Parent topic:**[Prerequisites](/TA_Automation/Topics/aut_app_cloud_testing_iOS_prerequisites.html)

**Previous topic:**[Locating iOS device ID using Xcode](/TA_Automation/Topics/aut_obtaining_UDID.html)

**Next topic:**[Installing SafariLauncher application](/TA_Automation/Topics/aut_app_cloud_testing_safarilauncher.html)

