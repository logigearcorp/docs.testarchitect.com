--- 
title: "Preparations to invoke automatically Safari iOS"
linktitle: "Preparations to invoke automatically Safari iOS"
aliases: 
    - /TA_Automation/Topics/aut_app_testing_mobile_web_Safari_preparation.html
---
# Preparations to invoke automatically Safari iOS {#task_pfj_h13_vp .task}

This section describes the steps required to ensure that the navigate built-in action can successfully invoke Safari on iOS.

Ensure that the following requirements are met:

-   [Safari Web Inspector](aut_app_testing_mobile_web_Safari_configurations.md#step_p3z_42j_vp) is enabled on your iOS test device.
-   [TestArchitect Browser Agent](aut_app_testing_mobile_web_Safari_installing_TA_Browser_Agent.html) is installed on your iOS test device.
-   iTunes 11.1 or later is installed on the machine to be used as the test controller \(this may be a Windows or macOS machine\).

**Important:** iTunes 12.7 no longer has an App store, which means you no longer can install .ipa iOS apps within iTunes \([learn more](https://www.macworld.com/article/3230135/software-entertainment/how-to-install-itunes-1263-and-replace-itunes-127.html)\). If you want to keep your ways, you can either install iTunes 12.6.3 and get back access to the App store, or use the special version of iTunes at [here](https://support.apple.com/en-gb/HT208079).

Carry out the following procedures:

1.  Synchronize essential development libraries with your iOS test device via Xcode:

    1.  Connect the iOS device to an macOS computer via USB cable.

    2.  You'll be asked to verify that you trust the connected computer. Tap **Trust**.

    3.  Start Xcode on the macOS machine and wait for at least 10 seconds, so that the iOS device can obtain the essential development libraries.

        **Tip:** Once you see the device listed under the **Devices** heading in the panel on the left side of the Xcode application, you are assured that the transfer is complete.

2.  On your iOS device, terminate Safari, if running.

3.  Connect the iOS device to a machine via USB cable.

    This may be a Windows or macOS machine.

    **Important:** The USB cable connection must always be maintained during automation.


Now you are free to use the [navigate](bia_navigate.html) action in your test procedures to invoke Safari on iOS.

**Parent topic:**[Invoking Safari on iOS during automation](../../TA_Automation/Topics/aut_app_testing_mobile_web_invoking_Safari.html)

