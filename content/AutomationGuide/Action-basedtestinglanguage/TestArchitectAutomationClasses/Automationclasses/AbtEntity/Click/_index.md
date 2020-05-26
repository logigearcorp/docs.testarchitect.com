--- 
title: "Click"
linktitle: "Click"
weight: 3
aliases: 
    - /TA_Automation/Topics/abt_Click.html
---
# Click {#abt_Click_entity .reference}

## Syntax

`long Click(int x, int y, TAMouseClickType mouseType)`

## Description {#section.desc .section}

Apply a mouse click to thewindow.

## Parameters {#section.params .section}

x
:   Integer value specifying the x-coordinate of the click \(Units: pixels\).

y
:   Integer value specifying the y-coordinate of the click \(Units: pixels\).

mouseType
:   Type of mouse click.

:   Allowable values:

    LEFT or 1
    :   Single left-click

    RIGHT or 2
    :   Single right-click

    DOUBLE or 4
    :   Double left-click

## Return Value {#section.return .section}

Return 0 if theclickis successful; otherwise, -1.

**Parent topic:**[AbtEntity](../../TA_Automation/Topics/abt_AbtEntity.html)

**Previous topic:**[CheckProperty](../../TA_Automation/Topics/abt_CheckProperty.html)

**Next topic:**[ClickCenter](../../TA_Automation/Topics/abt_ClickCenter_1.html)

