--- 
title: "character recognition technique"
linktitle: "character recognition technique"
weight: 3
aliases: 
    - /TA_Automation/Topics/bis_character_recognition_technique.html
---
keyword: [character recognition technique, specify which character recognition technique is applied, choose technique for character recognition, apply optical character recognition technique, apply graphic device interface]
---

# character recognition technique

## Description

Specifies which algorithm, OCR or GDI, is applied to recognize text produced by an AUT.

## Allowable values

-   **OCR**

    Perform an [Optical Character Recognition](aut_text_recognition_techniques.html) \(OCR\) technique

-   **GDI**

    Perform a [Graphics Device Interface](aut_text_recognition_techniques.html) \(GDI\) technique


## Default value

OCR

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: Win32, WinForms.

## Notes

-   The OCR value for this built-in setting applies to nearly every [OCR built-in action](OCR.html). The sole exception are the following actions, since they always employ a GDI technique.
    -   [get text content](get_text_content.html)
    -   [get text color](get_text_color.html)
    -   [get text background color](get_text_background_color.html)
    -   [get text count](get_text_count.html)

## Example

**Test Lines**

Note that, since the default value of this built-in setting is OCR, remember to switch to GDI when applying GDI-technique built-in actions.

![](/images//Images/bis_character_recognition_technique_pgm.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[auto switch window](/TA_Automation/Topics/bis_auto_switch_windows.html)

**Next topic:**[click method](/TA_Automation/Topics/bis_click_method.html)

