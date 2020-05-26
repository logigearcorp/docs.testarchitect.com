--- 
title: "ResizeWindow"
linktitle: "ResizeWindow"
weight: 26
aliases: 
    - /TA_Automation/Topics/abt_ResizeWindow.html
---
# ResizeWindow {#abt_ResizeWindow .reference}

## Syntax

`long ResizeWindow(int width, int height)`

## Description {#section.desc .section}

Resize the window to the specified dimensions.

## Parameters {#section.params .section}

width
:   New width of window \(units: pixels\).

height
:   New height of window \(units: pixels\).

## Return Value {#section.return .section}

Return 0 if the call is successful \(as reported back by the operating system\); otherwise, -1.

## Notes { .section}

-   Position of the upper-left corner of the window remains fixed relative to the screen.

**Parent topic:**[AbtEntity](../../TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[MoveWindow](../../TA_Automation/Topics/abt_MoveWindow.html)

**Next topic:**[RestoreWindow](../../TA_Automation/Topics/abt_RestoreWindow.html)

