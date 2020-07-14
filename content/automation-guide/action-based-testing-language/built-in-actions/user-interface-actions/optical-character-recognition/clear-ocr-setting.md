--- 
title: "clear ocr setting"
linktitle: "clear ocr setting"
description: "Description Reset the adjustable OCR settings to their respective default values. Arguments There are no arguments for this built-in action. Valid contexts This action may be used within the following ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_clear_ocr_setting.html
keywords: "built-in actions, clear ocr setting, clear ocr setting (action), iOS (action), clear ocr setting, Android (action), clear OCR setting, Reset OCR settings, Reset optimal character recognition settings"
---

## Description

Reset the adjustable OCR settings to their respective default values.

## Arguments

There are no arguments for this built-in action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action resets any OCR settings whose values have been modified by any prior invocations of action [set ocr setting](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/set-ocr-setting).
-   On an iOS device, the default logical coordinate space is measured using points. Therefore, all values are specified in points instead of pixels.
-   clear ocr setting sets the following values:
    -   min edge length: 50pixels[1](#fn.iOS_screen_units).
    -   linking distance: 50%.
    -   inverse color range: 128.

        In addition, the fill color setting is cleared of any points \(x,y coordinates\) it may contain.

-   Android: This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/setting-up-the-test-environment/setting-up-android-automation/about-testarchitect-agent-in-android/) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/android-instrumentation-tool/) dialog box.
    3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

Action Lines

![](/images/TA_Automation/Images/bia_clear_ocr_setting_pgm.png)




{{<anchor fn.iOS_screen_units >}}
1 In the case of iOS device testing, the units are points, not pixels.
