--- 
title: "Click"
linktitle: "Click"
description: "Syntax long Click(int x, int y, TAMouseClickType mouseType) Description Apply a mouse click to the window. Parameters x Integer value specifying the x-coordinate of the click (Units: pixels). y ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_Click.html
keywords: "methods of abt, Click, Click (AbtEntity), AbtEntity, click, abtentity click, mouse click, click on window"
---

## Syntax

`long Click(int x, int y, TAMouseClickType mouseType)`

## {{< expand >}} Description {{< permerlink >}} {#abt_Click_entity__section.desc} 

Apply a mouse click to thewindow.

## {{< expand >}} Parameters {{< permerlink >}} {#abt_Click_entity__section.params} 

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




