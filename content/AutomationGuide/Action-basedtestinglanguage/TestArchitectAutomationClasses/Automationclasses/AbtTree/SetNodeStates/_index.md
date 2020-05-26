--- 
title: "SetNodeStates"
linktitle: "SetNodeStates"
weight: 15
aliases: 
    - /TA_Automation/Topics/abt_SetNodeStates_17.html
---
# SetNodeStates {#abt_SetNodeStates .reference}

## Syntax

`long SetNodeStates(string nodepath, TAItemState status)`

## Description {#section.desc .section}

Set the state of a check box icon of the specified node in a tree view control.

## Parameters {#section.params .section}

nodepath
:   String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

status
:   [TAItemState](../../reuse/../TA_Automation/Topics/abt_TAItemState.html) value specifying the item state to set.

:   Allowable values are:

    -   CHECKED
    -   UNCHECKED
    -   DIMMED
    -   SELECTED
    -   UNSELECTED

## Return Value {#section.return .section}

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTree](../../TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[Select](../../TA_Automation/Topics/abt_Select_17.html)

