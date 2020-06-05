--- 
title: "ResizeWindow"
linktitle: "ResizeWindow"
weight: 26
aliases: 
    - /TA_Automation/Topics/abt_ResizeWindow.html
---
keyword: [resizewindow, abtentity resizewindow, resize window, change window dimensions, adjust window size]
---

# ResizeWindow

## Syntax

`long ResizeWindow(int width, int height)`

## Description

Resize the window to the specified dimensions.

## Parameters

-   **width**

    New width of window \(units: pixels\).

-   **height**

    New height of window \(units: pixels\).


## Return Value

Return 0 if the call is successful \(as reported back by the operating system\); otherwise, -1.

## Notes

-   Position of the upper-left corner of the window remains fixed relative to the screen.

**Parent topic:**[AbtEntity](/TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[MoveWindow](/TA_Automation/Topics/abt_MoveWindow.html)

**Next topic:**[RestoreWindow](/TA_Automation/Topics/abt_RestoreWindow.html)

