--- 
title: "Locating iOS device ID using Xcode"
linktitle: "Locating iOS device ID using Xcode"
description: "iOS device ID, or UDID, of the rented iOS device is required to start Appium locally."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_obtaining_UDID.html
keywords: "cloud testing, Remote TestKit, UDID, Safari iOS, Remote TestKit, UDID, Safari iOS"
---

iOS device ID, or UDID, of the rented iOS device is required to start Appium locally.

Ensure that the following requirements are met:

-   Rent an iOS device in the Remote TestKit service, and enable Xcode Connector. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_iOS_Xcode_connector.html).\)
-   Xcode detected the iOS device.

For the device identifier, perform the following steps:

1.  Open Xcode, and then click **Devices** from the **Window** menu.

2.  Select **Connected device**.

3.  Under Device Information, you will get an identifier, or UDID, of the device.

    **Remember:** This UDID is necessary when [configuring](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS.html) Appium server locally, and defining desired capabilities for the [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html) built-in action. \([Learn more](/TA_Automation/Topics/aut_app_cloud_testing_Appium_RTK_iOS_workflow.html).\)





