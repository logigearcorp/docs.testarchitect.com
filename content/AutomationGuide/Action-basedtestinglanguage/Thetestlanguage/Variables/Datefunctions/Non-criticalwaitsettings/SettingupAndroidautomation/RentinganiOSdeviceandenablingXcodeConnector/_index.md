--- 
title: "Renting an iOS device and enabling Xcode Connector"
linktitle: "Renting an iOS device and enabling Xcode Connector"
aliases: 
    - /TA_Automation/Topics/aut_app_cloud_testing_iOS_Xcode_connector.html
---
# Renting an iOS device and enabling Xcode Connector {#task_z1f_2hf_f5 .task}

Enabling Xcode Connector helps TestArchitect treats the cloud iOS device as a real device connected via cable.

Ensure that you have [downloaded](https://appkitbox.com/en/testkit/download) and [installed](https://appkitbox.com/en/testkit/support/signin/signin13) the Remote TestKit Client application. Note that you must also have an account to access and use the Remote TestKit Client service.

You can enable Xcode Connector from the Remote TestKit client version. \([Learn more](https://appkitbox.com/en/testkit/support/tools/tools11).\)

1.  On your macOS machine, launch the Remote TestKit Client application, and then log in with your username and password.

2.  In the Device list - Remote TestKit dialog box, rent and launch an iOS device.

3.  When your device appears, click **File** \> **Xcode connector**.

    ![](../Images/xcode_connector.png)

    A confirmation dialog box appears telling that Xcode connector is enabled successfully.

    ![](../Images/xcode_connector_enabled.png)


**Note:** Open Xcode, and ensure that Xcode detects the rented device.

**Parent topic:**[Prerequisites](../../TA_Automation/Topics/aut_app_cloud_testing_iOS_prerequisites.html)

**Next topic:**[Locating iOS device ID using Xcode](../../TA_Automation/Topics/aut_obtaining_UDID.html)

