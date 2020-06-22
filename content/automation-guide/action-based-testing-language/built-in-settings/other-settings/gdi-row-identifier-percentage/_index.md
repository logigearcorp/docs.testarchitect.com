--- 
title: "gdi row identifier percentage"
linktitle: "gdi row identifier percentage"
description: "Description For GDI technique , specify a percentage value proportional to the horizontal bar's max height of a UI control. Technically, when a detected horizontal bar's value is equivalent to or ..."
weight: 10
aliases: 
    - /TA_Automation/Topics/bis_gdi_row_identifier_percentage.html
keywords: "built-in settings, gdi row identifier percentage, settings, gdi row identifier percentage (settings), identify row in GDI, specify maximum height of horizontal bar to be treated as row separator, set maximum height of horizontal bar to be treated as separator for table row"
---

## Description

For [GDI technique](/TA_Automation/Topics/aut_text_recognition_techniques.html), specify a percentage value proportional to the horizontal bar's max height of a UI control. Technically, when a detected horizontal bar's value is equivalent to or higher than the specified percentage value compared to the max horizontal bar, the detected horizontal bar is treated as a separator for a row in a table.

This is a technical method to reconstruct rows belonging to a table by using GDI technique.

## Allowable values

Percentage value in the range 1-100.

## Default value

80%

## Notes

-   This built-in setting is not displayed in the editor by [Content Assist](/TA_Help/Topics/ug_content_assist.html). To use them in the editor, you must manually enter the setting name and its value.

## Example

**Test Lines**

![](/images/TA_Automation/Images/bis_gdi_gdi_row_identifier_percentage_pgm.png)




