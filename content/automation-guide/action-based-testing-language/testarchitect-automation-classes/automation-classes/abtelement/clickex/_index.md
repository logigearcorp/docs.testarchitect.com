--- 
title: "ClickEx"
linktitle: "ClickEx"
weight: 5
aliases: 
    - /TA_Automation/Topics/abt_ClickEx_1.html
---
keyword: [press button, ]
---

# ClickEx

## Syntax

`long ClickEx(int x, int y, mouseType)`

## Description

Apply a context-based mouse click simulation to the control.

## Parameters

-   **x**

    Integer value specifying the x-coordinate of the click \(Units: pixels\).

-   **y**

    Integer value specifying the y-coordinate of the click \(Units: pixels\).

-   **mouseType**

    Type of mouse click.

    Allowable values:

    -   **LEFT or 1**

        Single left-click

    -   **RIGHT or 2**

        Single right-click

    -   **DOUBLE or 4**

        Double left-click


## Return Value

Return 0 if theclickis successful; otherwise, -1.

## Notes

-   This method simulates a mouse click. The exact automation event depends on the class of control or HTML element. For example, for a button in a dialog box, the button is *pressed*, whereas a link in a web page is *clicked*.

**Parent topic:**[AbtElement](/TA_Automation/Topics/abt_AbtElement.html)

**Previous topic:**[clickCenter](/TA_Automation/Topics/abt_ClickCenter_2.html)

**Next topic:**[DragMouse](/TA_Automation/Topics/abt_DragMouse_1.html)

