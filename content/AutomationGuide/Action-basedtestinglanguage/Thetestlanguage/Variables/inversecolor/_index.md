--- 
title: "inverse color"
linktitle: "inverse color"
aliases: 
    - /TA_Automation/Topics/bis_inverse_color.html
---
# inverse color {#bis_inverse_color .reference}

## Description { .section}

For [OCR actions](bia_OCR.html), specifies a threshold value for inverting the image pixel’s color. All pixels with color in the range of the threshold are inverted; otherwise they remain intact.

## Allowable values { .section}

Integer value in the range of 0-255.

## Notes { .section}

-   This built-in setting takes effect with all of a given image's pixels. In order to define a particular one or more sets of \(x, y\) coordinate pairs representing points to be filled with an inverse of the color selected from the desired text, with each set accompanied by a color range, use the [set ocr setting](bia_set_ocr_setting.html) action.
-   For ease of use, this value can be derived with the [OCR Detector Tool](../../TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.md#li_i1x_frl_ms), which allows you to establish the optimum settings for the detection of text under difficult circumstances.

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[ignore html input types](../../TA_Automation/Topics/bis_ignore_html_input_types.html)

**Next topic:**[gdi column identifier percentage](../../TA_Automation/Topics/bis_gdi_column_identifier_percentage.html)

