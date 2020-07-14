--- 
title: "SetNodeStates"
linktitle: "SetNodeStates"
description: "Syntax long SetNodeStates(string nodepath, TAItemState status) Description Set the state of a check box icon of the specified node in a tree view control. Parameters nodepath String specifying the ..."
weight: 15
aliases: 
    - /TA_Automation/Topics/abt_SetNodeStates_17.html
keywords: "methods of abt, SetNodeStates, SetNodeStates (AbtTree), AbtTree, setnodestates, abttree setnodestates, set states of specified node in tree, set states of tree node"
---

## Syntax

`long SetNodeStates(string nodepath, TAItemState status)`

## Description {{< permerlink >}} {#abt_SetNodeStates__section.desc} 

Set the state of a check box icon of the specified node in a tree view control.

## Parameters {{< permerlink >}} {#abt_SetNodeStates__section.params} 

-   **nodepath**

    String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).
-   **status**

    [TAItemState](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abt-object-classes/taitemstate) value specifying the item state to set.

    Allowable values are:

    -   CHECKED
    -   UNCHECKED
    -   DIMMED
    -   SELECTED
    -   UNSELECTED

## Return Value {{< permerlink >}} {#abt_SetNodeStates__section.return} 

Return 0 if the call is successful; otherwise, -1..



