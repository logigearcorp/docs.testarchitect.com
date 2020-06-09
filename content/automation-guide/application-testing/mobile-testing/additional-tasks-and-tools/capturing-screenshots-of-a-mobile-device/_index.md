--- 
title: "Capturing screenshots of a mobile device"
linktitle: "Capturing screenshots of a mobile device"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_capturing_mobile_screenshot.html
---

Device Live Screen is a useful tool for capturing images off of Android and iOS devices, allowing you to take full advantage of TestArchitect's picture handling functionality in automated tests.

-   **Android:** This feature, when applied to a connected Android device, requires that the [TestArchitect Agent service](/reuse/../Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images//Images/Android/Images/Refresh_device_list_btn.png) button.

1.  Launch Device Live Screen. \([Learn more.](ug_DLS.html)\)

    The Device Live Screen window displays the current screen of the selected mobile device in [fit-to-window](ug_DLS.html) mode \(the default\) on your test machine.

    ![](/images//Images/live_view_2.png)

2.  Start the [Picture Capturing Tool](Additional_features_image_capturing_tool.html) to capture the live screen of the selected mobile device on your test machine.

    The captured screenshots can be used as baseline images for [picture handling](/TA_Automation/Topics/bia_picture_handling.html) during automated tests.


**Parent topic:**[Additional tasks and tools](/TA_Automation/Topics/aut_app_testing_mobile_additional_tasks.html)

**Previous topic:**[Device Live Screen](/TA_Help/Topics/ug_DLS.html)

**Next topic:**[Running automated tests on multiple mobile devices](/TA_Automation/Topics/aut_app_testing_mobile_running_tests_multiple_devices.html)

**Related information**  


[Identifying mobile UI controls](/TA_Automation/Topics/aut_app_testing_mobile_web_Chrome_identifying_controls.html)

