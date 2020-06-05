--- 
title: "GetChildNodeCount"
linktitle: "GetChildNodeCount"
weight: 7
aliases: 
    - /TA_Automation/Topics/abt_GetChildNodeCount_17.html
---
keyword: [getchildnodecount, abttree getchildnodecount, number of children of node, how many children of specified node, count children of node]
---

# GetChildNodeCount

## Syntax

`int GetChildNodeCount(string nodepath)`

## Description

Return the number of children of a node.

## Parameters

-   **nodepath**

    String specifying node path.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value

Integer value indicating the number of children of the specified node. A negative value indicatesfailure.

**Parent topic:**[AbtTree](/TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetChildNodeAt](/TA_Automation/Topics/abt_GetChildNodeAt_17.html)

**Next topic:**[GetNodeRect](/TA_Automation/Topics/abt_GetNodeRect_17.html)

