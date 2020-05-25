--- 
title: "gdi row identifier percentage"
linktitle: "gdi row identifier percentage"
aliases: 
    - /TA_Automation/Topics/bis_gdi_row_identifier_percentage.html
---
# gdi row identifier percentage {#bis_gdi_row_identifier_percentage .reference}

## Description { .section}

For [GDI technique](aut_text_recognition_techniques.html), specify a percentage value proportional to the horizontal bar's max height of a UI control. Technically, when a detected horizontal bar's value is equivalent to or higher than the specified percentage value compared to the max horizontal bar, the detected horizontal bar is treated as a separator for a row in a table.

This is a technical method to reconstruct rows belonging to a table by using GDI technique.

## Allowable values { .section}

Percentage value in the range 1-100.

## Default value { .section}

80%

## Notes { .section}

-   This built-in setting is not displayed in the editor by [Content Assist](../../TA_Help/Topics/ug_content_assist.html). To use them in the editor, you must manually enter the setting name and its value.

## Example { .section}

**Test Lines**

![](../Images/bis_gdi_gdi_row_identifier_percentage_pgm.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[gdi column identifier percentage](../../TA_Automation/Topics/bis_gdi_column_identifier_percentage.html)

**Next topic:**[lexical scoping](../../TA_Automation/Topics/bis_lexical_scoping.html)

