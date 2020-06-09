--- 
title: "linking distance"
linktitle: "linking distance"
weight: 12
aliases: 
    - /TA_Automation/Topics/bis_linking_distance.html
keywords: "linking distance, specify maximum horizontal distance between adjacent characters to be treated as single text fragment, set mamximum spacing between two characters to be treated as single text fragment"
---

## Description

In [OCR actions](OCR.html), specifies the maximum horizontal distance between adjacent characters for those characters to be treated as members of a single [bitmap text fragment](/TA_Glossary/Topics/glossaryTextFragment.html).

The linking distance is given as a percentage of the average height \(not width\) of the detected font sizes of the text on either side of the gap. Adjacent characters are grouped together as a fragment when the distance between each is less than the specified threshold value. If the horizontal spacing between two characters exceeds this threshold, they are treated as members of separate text fragments.

## Allowable values

Percentage value in the range 1-500

## Default value

50%

## Notes

-   linking distance can also be set through the dedicated [set ocr setting](set_ocr_setting.html) action, as well as through the [setting](setting.html) action.
-   For ease of use, this value can be derived with the [OCR Detector Tool](/TA_Help/Topics/ug_OCR_detector_tool_advanced_settings.html#li_fnx_2rl_ms), which allows you to establish the optimum settings for the detection of text under difficult circumstances.

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[lexical scoping](/TA_Automation/Topics/bis_lexical_scoping.html)

**Next topic:**[load invisible controls](/TA_Automation/Topics/bis_load_invisible_controls.html)

