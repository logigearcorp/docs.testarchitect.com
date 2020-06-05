--- 
title: "GetNodeRect"
linktitle: "GetNodeRect"
weight: 8
aliases: 
    - /TA_Automation/Topics/abt_GetNodeRect_17.html
---
keyword: [getnoderect, abttree getnoderect, bounding rectangle of tree node, rectangle encircles tree node]
---

# GetNodeRect

## Syntax

`long GetNodeRect(string nodepath, TARect rect)`

## Description

Retrieve the bounding rectangle of a specified node in the tree control.

## Parameters

-   **nodepath**

    String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).
-   ***rect***

    Returned [TARect](abt_TARect.html) object specifying the bounding rectangle of the node.


## Return Value

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTree](/TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetChildNodeCount](/TA_Automation/Topics/abt_GetChildNodeCount_17.html)

**Next topic:**[GetNodeStates](/TA_Automation/Topics/abt_GetNodeStates_17.html)

