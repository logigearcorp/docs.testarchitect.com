--- 
title: "character recognition technique"
linktitle: "character recognition technique"
aliases: 
    - /TA_Automation/Topics/bis_character_recognition_technique.html
---
# character recognition technique {#bis_character_recognition_technique .reference}

## Description { .section}

Specifies which algorithm, OCR or GDI, is applied to recognize text produced by an AUT.

## Allowable values { .section}

OCR
:   Perform an [Optical Character Recognition](aut_text_recognition_techniques.html) \(OCR\) technique

GDI
:   Perform a [Graphics Device Interface](aut_text_recognition_techniques.html) \(GDI\) technique

## Default value { .section}

OCR

## Applicable Systems/Platforms {#section_t5m_gsg_5v .section}

This built-in setting is supported on the following systems/platforms:

-   Windows: Win32, WinForms.

## Notes { .section}

-   The OCR value for this built-in setting applies to nearly every [OCR built-in action](bia_OCR.html). The sole exception are the following actions, since they always employ a GDI technique.
    -   [get text content](bia_get_text_content.html)
    -   [get text color](bia_get_text_color.html)
    -   [get text background color](bia_get_text_background_color.html)
    -   [get text count](bia_get_text_count.html)

## Example { .section}

**Test Lines**

Note that, since the default value of this built-in setting is OCR, remember to switch to GDI when applying GDI-technique built-in actions.

![](../Images/bis_character_recognition_technique_pgm.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[auto switch window](../../TA_Automation/Topics/bis_auto_switch_windows.html)

**Next topic:**[click method](../../TA_Automation/Topics/bis_click_method.html)

