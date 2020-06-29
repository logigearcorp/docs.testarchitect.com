--- 
title: "GetChildNodeAt"
linktitle: "GetChildNodeAt"
description: "Syntax string GetChildNodeAt(string parentPath, int index) Description Return the child node path of a tree node at a specified index. Parameters parentPath String indicating a parent node path. (Set ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/abt_GetChildNodeAt_17.html
keywords: "methods of abt, GetChildNodeAt, GetChildNodeAt (AbtTree), AbtTree, getchildnodeat, abttree getchildnodeat, tree node, tree node path, path from root to given tree node"
---

## Syntax

`string GetChildNodeAt(string parentPath, int index)`

## Description

Return the child node path of a tree node at a specified index.

## Parameters

-   **parentPath**

    String indicating a parent node path. \(Set empty value for tree's root node.\)

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).
-   **index**

    Integer value specifying the node index. Note that index numbering begins with 1.


## Return Value

String indicating the node path.




