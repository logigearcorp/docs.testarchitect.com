--- 
title: "ScrollIntoView"
linktitle: "ScrollIntoView"
weight: 13
aliases: 
    - /TA_Automation/Topics/abt_ScrollIntoView_17.html
---
keyword: [scrollintoview, abt scrollintoview, scroll tree node into view, scroll tree node into visible area]
---

# ScrollIntoView

## Syntax

`long ScrollIntoView(string nodepath)`

## Description

Ensure a tree node is visible by, if necessary, scrolling it into view.

## Parameters

-   **nodepath**

    String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTree](/TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetSelectedNodes](/TA_Automation/Topics/abt_GetSelectedNodes_17.html)

**Next topic:**[Select](/TA_Automation/Topics/abt_Select_17.html)

