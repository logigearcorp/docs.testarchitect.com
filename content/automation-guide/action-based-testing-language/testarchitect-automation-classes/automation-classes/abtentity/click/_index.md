--- 
title: "-"
linktitle: "Click"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_Click.html
---
keyword: [click, abtentity click, mouse click, click on window]
---

# Click

## Syntax

`long Click(int x, int y, TAMouseClickType mouseType)`

## Description

Apply a mouse click to thewindow.

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

**Parent topic:**[AbtEntity](/TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[CheckProperty](/TA_Automation/Topics/abt_CheckProperty.html)

**Next topic:**[ClickCenter](/TA_Automation/Topics/abt_ClickCenter_1.html)

