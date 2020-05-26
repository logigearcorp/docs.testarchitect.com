--- 
title: "ScrollIntoView"
linktitle: "ScrollIntoView"
weight: 13
aliases: 
    - /TA_Automation/Topics/abt_ScrollIntoView_17.html
---
# ScrollIntoView {#abt_ScrollIntoView .reference}

## Syntax

`long ScrollIntoView(string nodepath)`

## Description {#section.desc .section}

Ensure a tree node is visible by, if necessary, scrolling it into view.

## Parameters {#section.params .section}

nodepath
:   String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value {#section.return .section}

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTree](../../TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetSelectedNodes](../../TA_Automation/Topics/abt_GetSelectedNodes_17.html)

**Next topic:**[Select](../../TA_Automation/Topics/abt_Select_17.html)

