--- 
title: "gdi column identifier percentage"
linktitle: "gdi column identifier percentage"
weight: 9
aliases: 
    - /TA_Automation/Topics/bis_gdi_column_identifier_percentage.html
keywords: "gdi column identifier percentage, identify column in GDI, set maximum height of vertical bar to be treated as separator for table column, column identification in GDI using GDI technique"
---

## Description

For [GDI technique](aut_text_recognition_techniques.html), specify a percentage value proportional to the vertical bar's max height of a UI control. Technically, when a detected vertical bar's value is equivalent to or higher than the specified percentage value compared to the max vertical bar, the detected vertical bar is treated as a separator for a column in a table.

This is a technical method to reconstruct columns belonging to a table by using GDI technique.

## Allowable values

Percentage value in the range 1-100.

## Default value

80%

## Notes

-   This built-in setting is not displayed in the editor by [Content Assist](/TA_Help/Topics/ug_content_assist.html). To use them in the editor, you must manually enter the setting name and its value.

## Example

**Test Lines**

![](/images//Images/bis_gdi_gdi_column_identifier_percentage_pgm.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[inverse color](/TA_Automation/Topics/bis_inverse_color.html)

**Next topic:**[gdi row identifier percentage](/TA_Automation/Topics/bis_gdi_row_identifier_percentage.html)

