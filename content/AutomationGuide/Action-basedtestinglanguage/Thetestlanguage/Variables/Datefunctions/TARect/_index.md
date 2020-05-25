--- 
title: "TARect"
linktitle: "TARect"
aliases: 
    - /TA_Automation/Topics/abt_TARect.html
---
# TARect {#abt_TARect .reference}

## Description { .section}

A TARect specifies an area in a coordinate space that is defined by the TARect object's top-left point \(x, y\) in the coordinate space, its width, and its height.

## Constructors

TARect\(\)
:   Constructs a new TARect whose top-left corner is at \(0, 0\) in the coordinate space, and whose width and height are both zero

TARect\(long left, long top, long width, long height\)
:   Constructs a new TARect whose top-left corner is specified as \(x, y\) and whose width and height are specified by the arguments of the same name.

:   left - The x coordinate of the TARect.

:   top - The y coordinate of the TARect.

:   width - The width of the TARect.

:   height - The height of the TARect.

## Methods

GetLeft\(\)
:   Return the x coordinate of the bounding TARect.

GetTop\(\)
:   Return the y coordinate of the bounding TARect.

GetWidth\(\)
:   Return the width of the bounding TARect.

GetHeight\(\)
:   Return the height of the bounding TARect.

**Parent topic:**[ABT object classes](../../TA_Automation/Topics/abt_constant.html)

**Previous topic:**[TAPoint](../../TA_Automation/Topics/abt_TAPoint.html)

**Next topic:**[TAScrollBarType](../../TA_Automation/Topics/abt_TAScrollBarType.html)

