--- 
title: "inverse color"
linktitle: "inverse color"
description: "Description For OCR actions , specifies a threshold value for inverting the image pixel’s color. All pixels with color in the range of the threshold are inverted; otherwise they remain intact. ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/bis_inverse_color.html
keywords: "built-in settings, inverse color, settings, inverse color (settings), specify threshold for inverting color in image, set threshold for color inversion in image"
---

## Description

For [OCR actions](/TA_Automation/Topics/bia_OCR.html), specifies a threshold value for inverting the image pixel’s color. All pixels with color in the range of the threshold are inverted; otherwise they remain intact.

## Allowable values

Integer value in the range of 0-255.

## Notes

-   This built-in setting takes effect with all of a given image's pixels. In order to define a particular one or more sets of \(x, y\) coordinate pairs representing points to be filled with an inverse of the color selected from the desired text, with each set accompanied by a color range, use the [set ocr setting](/TA_Automation/Topics/bia_set_ocr_setting.html) action.
-   For ease of use, this value can be derived with the [OCR Detector Tool](/TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.html#li_i1x_frl_ms), which allows you to establish the optimum settings for the detection of text under difficult circumstances.




