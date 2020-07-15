--- 
title: "GetNodeRect"
linktitle: "GetNodeRect"
description: "Syntax long GetNodeRect(string nodepath, TARect rect) Description Retrieve the bounding rectangle of a specified node in the tree control. Parameters nodepath String specifying the path to the node. ..."
weight: 8
aliases: 
    - /TA_Automation/Topics/abt_GetNodeRect_17.html
keywords: "methods of abt, GetNodeRect, GetNodeRect (AbtTree), AbtTree, getnoderect, abttree getnoderect, bounding rectangle of tree node, rectangle encircles tree node"
---

## Syntax

`long GetNodeRect(string nodepath, TARect rect)`

## Description {{< permerlink >}} {#abt_GetNodeRect__section.desc} 

Retrieve the bounding rectangle of a specified node in the tree control.

## Parameters {{< permerlink >}} {#abt_GetNodeRect__section.params} 

-   **nodepath**

    String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).
-   ***rect***

    Returned [TARect](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/tarect) object specifying the bounding rectangle of the node.


## Return Value {{< permerlink >}} {#abt_GetNodeRect__section.return} 

Return 0 if the call is successful; otherwise, -1..




