--- 
title: "Capturing screenshots of a mobile device"
linktitle: "Capturing screenshots of a mobile device"
description: "Device Live Screen is a useful tool for capturing images off of Android and iOS devices, allowing you to take full advantage of TestArchitect's picture handling functionality in automated tests."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_capturing_mobile_screenshot.html
keywords: "device live screen, mobile devices, displaying screen, capturing image"
---

Device Live Screen is a useful tool for capturing images off of Android and iOS devices, allowing you to take full advantage of TestArchitect's picture handling functionality in automated tests.

-   **Android:** This feature, when applied to a connected Android device, requires that the [TestArchitect Agent service](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
    3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.

1.  Launch Device Live Screen. \([Learn more.](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/device-live-screen/)\)

    The Device Live Screen window displays the current screen of the selected mobile device in [fit-to-window](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/device-live-screen/) mode \(the default\) on your test machine.

    ![](/images/TA_Help/Images/live_view_2.png)

2.  Start the [Picture Capturing Tool](/user-guide/projects-and-project-items/project-items/picture-checks/picture-capturing-tool/) to capture the live screen of the selected mobile device on your test machine.

    The captured screenshots can be used as baseline images for [picture handling](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/) during automated tests.





**Related information**  


[Identifying mobile UI controls](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/identifying-mobile-ui-controls)

