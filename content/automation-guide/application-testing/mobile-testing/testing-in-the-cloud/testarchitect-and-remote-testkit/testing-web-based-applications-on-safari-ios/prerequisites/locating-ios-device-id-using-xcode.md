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

-   Rent an iOS device in the Remote TestKit service, and enable Xcode Connector. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-safari-ios/prerequisites/renting-an-ios-device-and-enabling-xcode-connector).\)
-   Xcode detected the iOS device.

For the device identifier, perform the following steps:

1.  Open Xcode, and then click **Devices** from the **Window** menu.

2.  Select **Connected device**.

3.  Under Device Information, you will get an identifier, or UDID, of the device.

    {{<remember>}} This UDID is necessary when [configuring](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-safari-ios/prerequisites/configuring-appium-server-locally) Appium server locally, and defining desired capabilities for the [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device) built-in action. \([Learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/testarchitect-and-remote-testkit/testing-web-based-applications-on-safari-ios/creating-a-test/a-single-cloud-device).\)





