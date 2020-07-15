--- 
title: "GetParentPath"
linktitle: "GetParentPath"
description: "Syntax string GetParentPath (string nodepath) Description Return the node path of the parent node of a specified tree node. Parameters nodepath String specifying node path. The node path may be ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_GetParentPath_17.html
keywords: "methods of abt, GetParentPath, GetParentPath (AbtTree), AbtTree, getparentpath, abttree getparentpath, path of tree node's parent, path of parent of given node in tree"
---

## Syntax

`string GetParentPath (string nodepath)`

## Description {{< permerlink >}} {#abt_GetParentPath__section.desc} 

Return the node path of the parent node of a specified tree node.

## Parameters {{< permerlink >}} {#abt_GetParentPath__section.params} 

-   **nodepath**

    String specifying node path.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value {{< permerlink >}} {#abt_GetParentPath__section.return} 

A string value indicating the parent node path.

{{<note>}} The type of node path returned – that is, one composed of text or indexes – corresponds to the path type provided in parameter nodepath.




