--- 
title: "FindCellWithText"
linktitle: "FindCellWithText"
weight: 5
aliases: 
    - /TA_Automation/Topics/abt_FindCellWithText_13.html
keywords: "findcellwithtext, abttable findcellwithtext, find cell with specified value, locate cell containing particular content"
---

## Syntax

`long findCellWithText(string cellText, int rowIndex, int columnIndex)`

## Description

Locate the cell with containing the specified text.

## Parameters

-   **cellText**

    String value specifying the text content ofthe cell to find.

-   ***rowIndex***

    Returned Integer value specifying row indexof cell. Note that index numbering begins with 1.

-   ***columnIndex***

    Returned Integer value specifying column indexof cell.Note that index numbering begins with 1.


## Return Value

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTable](/TA_Automation/Topics/abt_AbtTable.html)

**Previous topic:**[DoesScrollBarExist](/TA_Automation/Topics/abt_DoesScrollBarExist_13.html)

**Next topic:**[GetCellText](/TA_Automation/Topics/abt_GetCellText_13.html)

