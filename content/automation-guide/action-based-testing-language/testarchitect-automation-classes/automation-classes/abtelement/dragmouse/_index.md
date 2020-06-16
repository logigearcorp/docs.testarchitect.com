--- 
title: "DragMouse"
linktitle: "DragMouse"
description: "Syntax long DragMouse(int x1, int y1, int x2, int y2) Description Perform a drag-and-drop operation from one specified location within the element to another. Parameters x1 Horizontal position of ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/abt_DragMouse_1.html
keywords: "methods of abt, DragMouse, DragMouse (AbtElement), AbtElement, dragmouse, abtentity dragmouse, mouse drage inside control, drag and drop within control, drag and drop HTML element"
---

## Syntax

`long DragMouse(int x1, int y1, int x2, int y2)`

## Description

Perform a drag-and-drop operation from one specified location within the element to another.

## Parameters

-   **x1**

    Horizontal position of starting point of drag operation \(units: pixels, relative to left edge ofelement\).

-   **y1**

    Vertical position of starting point of drag operation \(units: pixels, relative to top edge ofelement\).

-   **x2**

    Horizontal position of destination of drag operation \(units: pixels, relative to left edge ofelement\).

-   **y2**

    Vertical position of destination of drag operation \(units: pixels, relative to top edge ofelement\).


## Return Value

Return 0 ifthe drag-and-drop is successful; otherwise, -1.




