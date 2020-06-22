--- 
title: "set ocr setting"
linktitle: "set ocr setting"
description: "Description Set various thresholds to optimize the detection of bitmapped text in an image under test. Arguments fill color (Optional) One or more sets of (x, y) coordinate pairs representing points ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_set_ocr_setting.html
keywords: "built-in actions, set ocr setting, set ocr setting (action), iOS (action), tap, Android (action), set ocr setting, set ocr, optimal character recognition setting, threshold to detect bitmapped text, OCR detection thresholds"
---

## Description

Set various thresholds to optimize the detection of bitmapped text in an image under test.

## Arguments

-   **fill color**

    \(Optional\) One or more sets of \(x, y\) coordinate pairs representing points to be filled with an inverse of the color selected from the desired text, with each set accompanied by a color range.

    The format is as follows: `x1, y1|inverse color range; x2, y2|inverse color range 2; ... ; x(i), y(i)|inverse color range(i);`

    -   x: Horizontal coordinate of point in which the inverse color is to be filled. Position is relative to the left edge of the active area. \(Units: pixels[1](#fn.iOS_screen_units); default = 0.\)
    -   y: Vertical coordinate of point in which the inverse color is to be filled. Position is relative to the top of the active area. \(Units: pixels[1](#fn.iOS_screen_units); default = 0.\)
    -   inverse color range: Threshold for inverting the image pixel’s color. Only pixels with color in the range of the threshold are inverted; otherwise they remain intact. \(Default: = 128; valid range: 0 to 255.\)
-   **min edge length**

    \(Optional\) Minimum length, in pixels[1](#fn.iOS_screen_units), for an edge to be ignored as possible text. \(Or, if you prefer, the maximum length, plus 1, for an edge to be considered as possible text.\) During the line-removal phase, any edge \(horizontal or vertical only\) whose length is greater than the specified value is eliminated for consideration as text.

    \(Default = 50 pixels.\)

-   **linking distance**

    \(Optional\) Maximum horizontal distance between adjacent characters for those characters to be treated as members of a single [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html). The linking distance is given as a percentage of the average height \(not width\) of the detected font sizes of the text on either side of the gap. Adjacent characters are grouped together as a fragment when the distance between each is less than the specified threshold value. If the horizontal spacing between two characters exceeds this threshold, they are treated as members of separate bitmap text fragments.

    The default value is 50%. \(Valid range is 1 to 500.\)


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Built-in UI actions applied to iOS devices specify screen coordinates in points rather than pixels. \(For further details, refer to the built-in action [get screen resolution](/reuse/../TA_Automation/Topics/bia_get_screen_resolution.html#li.ios.get_screen_resolution).\)
-   In most cases of text detection, the default OCR detection thresholds are acceptable. Use this action in difficult cases, such as images with noisy backgrounds, or ones whose text color is very similar to the background.
-   For ease of use, values of the arguments to this action can be derived with the [OCR Detector Tool](/TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.html#note_b2f_pwg_g4), which allows you to establish the optimum settings for the detection of text under difficult circumstances. Values may be copied from the tool and pasted into the test editor.
-   If no set ocr setting action\(s\) are declared in action lines, default values of its arguments' values are used.
-   It is recommended that whenever you no longer need the current advanced OCR settings' values, clear them by using the built-in action [clear ocr setting](/TA_Automation/Topics/bia_clear_ocr_setting.html).
-   **Android:** This built-in action, when applied to a connected Android device, requires that the [TestArchitect Agent service](/reuse/../Android/Topics/Android_TA_agent.html) be running. Note also that, if and when an Android device is restarted, TestArchitect Agent is then stopped. Should this be the case, it is essential that you reactivate the service by observing the following steps:
    1.  Connect the Android device to the test controller through a USB cable \(not Wi-Fi\), if not already so connected.
    2.  Open the [Android Instrumentation Tool](/reuse/../Android/Topics/Android_Instrumentation_tool.html) dialog box.
    3.  Click the **Refresh devices list** ![](/images/Android/Images/Refresh_device_list_btn.png) button.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_set_ocr_setting_pgm.png)



<div id="fn.iOS_screen_units"></div>
1 In the case of iOS device testing, screen units are points. \(See Notes.\)

