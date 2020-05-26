--- 
title: "GetChildNodeAt"
linktitle: "GetChildNodeAt"
weight: 6
aliases: 
    - /TA_Automation/Topics/abt_GetChildNodeAt_17.html
---
# GetChildNodeAt {#abt_GetChildNodeAt .reference}

## Syntax

`string GetChildNodeAt(string parentPath, int index)`

## Description {#section.desc .section}

Return the child node path of a tree node at a specified index.

## Parameters {#section.params .section}

parentPath
:   String indicating a parent node path. \(Set empty value for tree's root node.\)

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

index
:   Integer value specifying the node index. Note that index numbering begins with 1.

## Return Value {#section.return .section}

String indicating the node path.

**Parent topic:**[AbtTree](../../TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[ExpandAll](../../TA_Automation/Topics/abt_ExpandAll_17.html)

**Next topic:**[GetChildNodeCount](../../TA_Automation/Topics/abt_GetChildNodeCount_17.html)

