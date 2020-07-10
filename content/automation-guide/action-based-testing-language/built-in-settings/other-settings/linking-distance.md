--- 
title: "linking distance"
linktitle: "linking distance"
description: "Description In OCR actions , specifies the maximum horizontal distance between adjacent characters for those characters to be treated as members of a single bitmap text fragment . The linking distance ..."
weight: 12
aliases: 
    - /TA_Automation/Topics/bis_linking_distance.html
keywords: "built-in settings, linking distance, settings, linking distance (settings), specify maximum horizontal distance between adjacent characters to be treated as single text fragment, set mamximum spacing between two characters to be treated as single text fragment"
---

## {{< expand >}} Description

In [OCR actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/), specifies the maximum horizontal distance between adjacent characters for those characters to be treated as members of a single [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment).

The linking distance is given as a percentage of the average height \(not width\) of the detected font sizes of the text on either side of the gap. Adjacent characters are grouped together as a fragment when the distance between each is less than the specified threshold value. If the horizontal spacing between two characters exceeds this threshold, they are treated as members of separate text fragments.

## {{< expand >}} Allowable values

Percentage value in the range 1-500

## {{< expand >}} Default value

50%

## {{< expand >}} Notes

-   linking distance can also be set through the dedicated [set ocr setting](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/set-ocr-setting) action, as well as through the [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) action.
-   For ease of use, this value can be derived with the [OCR Detector Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/ocr-detector-tool/ocr-advanced-settings#li_fnx_2rl_ms), which allows you to establish the optimum settings for the detection of text under difficult circumstances.




