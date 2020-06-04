--- 
title: "-"
linktitle: "GetParentPath"
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_GetParentPath_17.html
---
keyword: [getparentpath, abttree getparentpath, path of tree node's parent, path of parent of given node in tree]
---

# GetParentPath

## Syntax

`string GetParentPath (string nodepath)`

## Description

Return the node path of the parent node of a specified tree node.

## Parameters

-   **nodepath**

    String specifying node path.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value

A string value indicating the parent node path.

**Note:** The type of node path returned – that is, one composed of text or indexes – corresponds to the path type provided in parameter nodepath.

**Parent topic:**[AbtTree](/TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetNodeText](/TA_Automation/Topics/abt_GetNodeText_17.html)

**Next topic:**[GetSelectedNodes](/TA_Automation/Topics/abt_GetSelectedNodes_17.html)

