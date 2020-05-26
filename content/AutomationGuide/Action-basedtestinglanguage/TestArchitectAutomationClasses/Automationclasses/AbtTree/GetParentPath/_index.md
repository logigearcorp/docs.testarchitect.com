--- 
title: "GetParentPath"
linktitle: "GetParentPath"
weight: 11
aliases: 
    - /TA_Automation/Topics/abt_GetParentPath_17.html
---
# GetParentPath {#abt_GetParentPath .reference}

## Syntax

`string GetParentPath (string nodepath)`

## Description {#section.desc .section}

Return the node path of the parent node of a specified tree node.

## Parameters {#section.params .section}

nodepath
:   String specifying node path.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value {#section.return .section}

A string value indicating the parent node path.

**Note:** The type of node path returned – that is, one composed of text or indexes – corresponds to the path type provided in parameter nodepath.

**Parent topic:**[AbtTree](../../TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[GetNodeText](../../TA_Automation/Topics/abt_GetNodeText_17.html)

**Next topic:**[GetSelectedNodes](../../TA_Automation/Topics/abt_GetSelectedNodes_17.html)

