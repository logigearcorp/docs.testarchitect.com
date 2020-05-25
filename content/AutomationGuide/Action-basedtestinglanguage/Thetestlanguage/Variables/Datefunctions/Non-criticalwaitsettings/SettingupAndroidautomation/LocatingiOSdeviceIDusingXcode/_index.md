--- 
title: "Locating iOS device ID using Xcode"
linktitle: "Locating iOS device ID using Xcode"
aliases: 
    - /TA_Automation/Topics/aut_obtaining_UDID.html
---
# Locating iOS device ID using Xcode {#task_j2w_l1p_3y .task}

iOS device ID, or UDID, of the rented iOS device is required to start Appium locally.

Ensure that the following requirements are met:

-   Rent an iOS device in the Remote TestKit service, and enable Xcode Connector. \([Learn more](aut_app_cloud_testing_iOS_Xcode_connector.html).\)
-   Xcode detected the iOS device.

For the device identifier, perform the following steps:

1.  Open Xcode, and then click **Devices** from the **Window** menu.

2.  Select **Connected device**.

3.  Under Device Information, you will get an identifier, or UDID, of the device.

    **Remember:** This UDID is necessary when [configuring](aut_app_cloud_testing_Appium_RTK_iOS.html) Appium server locally, and defining desired capabilities for the [assign cloud device](bia_assign_cloud_device.html) built-in action. \([Learn more](aut_app_cloud_testing_Appium_RTK_iOS_workflow.html).\)


**Parent topic:**[Prerequisites](../../TA_Automation/Topics/aut_app_cloud_testing_iOS_prerequisites.html)

**Previous topic:**[Renting an iOS device and enabling Xcode Connector](../../TA_Automation/Topics/aut_app_cloud_testing_iOS_Xcode_connector.html)

**Next topic:**[Configuring Appium server locally](../../TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS.html)

