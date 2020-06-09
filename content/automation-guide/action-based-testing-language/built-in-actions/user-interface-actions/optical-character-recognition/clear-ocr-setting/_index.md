--- 
title: "clear ocr setting"
linktitle: "clear ocr setting"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_clear_ocr_setting.html
keywords: "clear OCR setting, Reset OCR settings, Reset optimal character recognition settings"
---

## Description

Reset the adjustable OCR settings to their respective default values.

## Arguments

There are no arguments for this built-in action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This built-in action resets any OCR settings whose values have been modified by any prior invocations of action [set ocr setting](set_ocr_setting.html).
-   On an iOS device, the default logical coordinate space is measured using points. Therefore, all values are specified in points instead of pixels.
-   clear ocr setting sets the following values:
    -   min edge length: 50pixels[1](#fn.iOS_screen_units).
    -   linking distance: 50%.
    -   inverse color range: 128.

        In addition, the fill color setting is cleared of any points \(x,y coordinates\) it may contain.

-   **Android:** This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/reuse/../Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images//Images/Android/Images/Refresh_device_list_btn.png) button.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images//Images/bia_clear_ocr_setting_pgm.png)

**Parent topic:**[Optical Character Recognition](/TA_Automation/Topics/bia_OCR.html)

**Previous topic:**[check text not exists](/TA_Automation/Topics/bia_check_text_not_exists.html)

**Next topic:**[click text](/TA_Automation/Topics/bia_click_text.html)

1 In the case of iOS device testing, the units are points, not pixels.

