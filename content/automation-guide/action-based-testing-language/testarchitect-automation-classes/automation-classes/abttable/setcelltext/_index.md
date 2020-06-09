--- 
title: "SetCellText"
linktitle: "SetCellText"
weight: 16
aliases: 
    - /TA_Automation/Topics/abt_SetCellText_13.html
keywords: "setcelltext, set content of cell, assign value to cell, "
---

## Syntax

`long setCellText(int rowIndex, int columnIndex, string cellText)`

## Description

Set the contents of a table cell to the specified text data.

## Parameters

-   **rowIndex**

    Integer value specifying row indexof cell.Note that index numbering begins with 1.

-   **columnIndex**

    Integer value specifying column indexof cell.Note that index numbering begins with 1.

-   **cellText**

    String value specifying the cell content to set.


## Return Value

Return 0 if the call is successful; otherwise, -1.

**Parent topic:**[AbtTable](/TA_Automation/Topics/abt_AbtTable.html)

**Previous topic:**[SelectRow](/TA_Automation/Topics/abt_SelectRow_13.html)

