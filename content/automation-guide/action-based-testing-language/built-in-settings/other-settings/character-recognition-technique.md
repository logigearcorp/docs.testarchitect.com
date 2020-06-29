--- 
title: "character recognition technique"
linktitle: "character recognition technique"
description: "Description Specifies which algorithm, OCR or GDI , is applied to recognize text produced by an AUT. Allowable values OCR Perform an Optical Character Recognition (OCR) technique GDI Perform a ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bis_character_recognition_technique.html
keywords: "built-in settings, character recognition technique, settings, click method (settings), character recognition technique, specify which character recognition technique is applied, choose technique for character recognition, apply optical character recognition technique, apply graphic device interface"
---

## Description

Specifies which algorithm, OCR or GDI, is applied to recognize text produced by an AUT.

## Allowable values

-   **OCR**

    Perform an [Optical Character Recognition](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(OCR\) technique

-   **GDI**

    Perform a [Graphics Device Interface](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques) \(GDI\) technique


## Default value

OCR

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: Win32, WinForms.

## Notes

-   The OCR value for this built-in setting applies to nearly every [OCR built-in action](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/). The sole exception are the following actions, since they always employ a GDI technique.
    -   [get text content](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-content)
    -   [get text color](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-color)
    -   [get text background color](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-background-color)
    -   [get text count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-count)

## Example

**Test Lines**

Note that, since the default value of this built-in setting is OCR, remember to switch to GDI when applying GDI-technique built-in actions.

![](/images/TA_Automation/Images/bis_character_recognition_technique_pgm.png)




