--- 
title: "min edge length"
linktitle: "min edge length"
weight: 15
aliases: 
    - /TA_Automation/Topics/bis_min_edge_length.html
---
keyword: [min edge length, specify minimum edge length to be ignored as text in OCR, set minimum edge length to be ignored as text in OCR]
---

# min edge length

## Description

Specifies the minimum length, in pixels, for an edge to be ignored as possible text in [OCR actions](bia_OCR.html). \(Or, put another way, the maximum length, plus 1, for an edge to be considered as possible text.\) During the line-removal phase of OCR, any edge \(horizontal or vertical only\) whose length is greater than the specified value is eliminated for consideration as text.

## Allowable values

Pixel value

## Default value

50

## Notes

-   min edge length can also be set through the dedicated [set ocr setting](bia_set_ocr_setting.html) action, as well as through the [setting](bia_setting.html) action.
-   For ease of use, this value can be derived with the [OCR Detector Tool](/TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.html#li_j3q_drl_ms), which allows you to establish the optimum settings for the detection of text under difficult circumstances.

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[menu interact type](/TA_Automation/Topics/bis_menu_interact_type.html)

**Next topic:**[minimum accuracy](/TA_Automation/Topics/bis_minimum_accuracy.html)

