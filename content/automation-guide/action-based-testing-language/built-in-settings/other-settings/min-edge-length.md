--- 
title: "min edge length"
linktitle: "min edge length"
description: "Description Specifies the minimum length, in pixels, for an edge to be ignored as possible text in OCR actions . (Or, put another way, the maximum length, plus 1, for an edge to be considered as ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/bis_min_edge_length.html
keywords: "built-in settings, min edge length, settings, min edge length, min edge length (settings), specify minimum edge length to be ignored as text in OCR, set minimum edge length to be ignored as text in OCR"
---

## {{< expand >}} Description

Specifies the minimum length, in pixels, for an edge to be ignored as possible text in [OCR actions](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/). \(Or, put another way, the maximum length, plus 1, for an edge to be considered as possible text.\) During the line-removal phase of OCR, any edge \(horizontal or vertical only\) whose length is greater than the specified value is eliminated for consideration as text.

## {{< expand >}} Allowable values

Pixel value

## {{< expand >}} Default value

50

## {{< expand >}} Notes

-   min edge length can also be set through the dedicated [set ocr setting](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/set-ocr-setting) action, as well as through the [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) action.
-   For ease of use, this value can be derived with the [OCR Detector Tool](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/ocr-detector-tool/ocr-advanced-settings#li_j3q_drl_ms), which allows you to establish the optimum settings for the detection of text under difficult circumstances.




