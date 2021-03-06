--- 
title: "GetNodeStates"
linktitle: "GetNodeStates"
weight: 9
aliases: 
    - /TA_Automation/Topics/abt_GetNodeStates_17.html
keywords: "getnodestates, abttree getnodestates, states of tree node, get states of specified node in tree"
---

## Syntax

`long GetNodeStates(string nodepath, string states)`

## Description

Retrieve all states of a specified node in a tree control.

## Parameters

-   **nodepath**

    String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).
-   ***states***

    Returned string listing all current states of the node, separated by commas. Possible listed states are:

    -   CHECKED or UNCHECKED or DIMMED
    -   SELECTED or UNSELECTED
    -   EXPANDED or COLLAPSED

## Return Value

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTree](/TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetNodeRect](/TA_Automation/Topics/abt_GetNodeRect_17.html)

**Next topic:**[GetNodeText](/TA_Automation/Topics/abt_GetNodeText_17.html)

