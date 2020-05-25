--- 
title: "GetChildNodeCount"
linktitle: "GetChildNodeCount"
aliases: 
    - /TA_Automation/Topics/abt_GetChildNodeCount_17.html
---
# GetChildNodeCount {#abt_GetChildNodeCount .reference}

## Syntax

`int GetChildNodeCount(string nodepath)`

## Description {#section.desc .section}

Return the number of children of a node.

## Parameters {#section.params .section}

nodepath
:   String specifying node path.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value {#section.return .section}

Integer value indicating the number of children of the specified node. A negative value indicatesfailure.

**Parent topic:**[AbtTree](../../TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetChildNodeAt](../../TA_Automation/Topics/abt_GetChildNodeAt_17.html)

**Next topic:**[GetNodeRect](../../TA_Automation/Topics/abt_GetNodeRect_17.html)

