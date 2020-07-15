--- 
title: "GetNodeStates"
linktitle: "GetNodeStates"
description: "Syntax long GetNodeStates(string nodepath, string states) Description Retrieve all states of a specified node in a tree control. Parameters nodepath String specifying the path to the node. The node ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/abt_GetNodeStates_17.html
keywords: "methods of abt, GetNodeStates, GetNodeStates (AbtTree), AbtTree, getnodestates, abttree getnodestates, states of tree node, get states of specified node in tree"
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




