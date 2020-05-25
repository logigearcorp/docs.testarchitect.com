--- 
title: "FindCellWithText"
linktitle: "FindCellWithText"
aliases: 
    - /TA_Automation/Topics/abt_FindCellWithText_13.html
---
# FindCellWithText {#abt_FindCellWithText .reference}

## Syntax

`long findCellWithText(string cellText, int rowIndex, int columnIndex)`

## Description {#section.desc .section}

Locate the cell with containing the specified text.

## Parameters {#section.params .section}

cellText
:   String value specifying the text content ofthe cell to find.

*rowIndex*
:   Returned Integer value specifying row indexof cell. Note that index numbering begins with 1.

*columnIndex*
:   Returned Integer value specifying column indexof cell.Note that index numbering begins with 1.

## Return Value {#section.return .section}

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTable](../../TA_Automation/Topics/abt_AbtTable.html)

**Previous topic:**[DoesScrollBarExist](../../TA_Automation/Topics/abt_DoesScrollBarExist_13.html)

**Next topic:**[GetCellText](../../TA_Automation/Topics/abt_GetCellText_13.html)

