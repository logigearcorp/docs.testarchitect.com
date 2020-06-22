--- 
title: "DragMouse"
linktitle: "DragMouse"
description: "Syntax long DragMouse(int x1, int y1, int x2, int y2) Description Perform a drag-and-drop operation from one specified location within the window to another. Parameters x1 Horizontal position of ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/abt_DragMouse.html
keywords: "methods of abt, DragMouse, DragMouse (AbtEntity), AbtEntity, dragmouse, abtentity dragmouse, mouse drag, drag and drop in the same window"
---

## Syntax

`long DragMouse(int x1, int y1, int x2, int y2)`

## Description

Perform a drag-and-drop operation from one specified location within the window to another.

## Parameters

-   **x1**

    Horizontal position of starting point of drag operation \(units: pixels, relative to left edge ofwindow\).

-   **y1**

    Vertical position of starting point of drag operation \(units: pixels, relative to top edge ofwindow\).

-   **x2**

    Horizontal position of destination of drag operation \(units: pixels, relative to left edge ofwindow\).

-   **y2**

    Vertical position of destination of drag operation \(units: pixels, relative to top edge ofwindow\).


## Return Value

Return 0 ifthe drag-and-drop is successful; otherwise, -1.




