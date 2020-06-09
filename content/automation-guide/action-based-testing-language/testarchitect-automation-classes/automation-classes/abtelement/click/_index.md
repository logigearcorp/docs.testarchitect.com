--- 
title: "Click"
linktitle: "Click"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_Click_1.html
keywords: "click, abtelement click, mouse click, click control"
---

## Syntax

`long Click()`

## Description

Apply a mouse click to thecontrol.

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

**Parent topic:**[AbtElement](/TA_Automation/Topics/abt_AbtElement.html)

**Previous topic:**[CheckProperty](/TA_Automation/Topics/abt_CheckProperty_1.html)

**Next topic:**[clickCenter](/TA_Automation/Topics/abt_ClickCenter_2.html)

