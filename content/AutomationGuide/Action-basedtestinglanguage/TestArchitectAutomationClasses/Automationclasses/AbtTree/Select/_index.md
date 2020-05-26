--- 
title: "Select"
linktitle: "Select"
weight: 14
aliases: 
    - /TA_Automation/Topics/abt_Select_17.html
---
# Select {#abt_Select_tree .reference}

## Syntax

`long Select(string nodepath)`

## Description {#section.desc .section}

Select a node from the TreeView control based on its node path.

## Parameters {#section.params .section}

nodepath
:   String specifying the path to the node.

    The node path may be specified as one of the following:

    -   A string containing all node texts separated by forward slashes \( / \).
    -   A string containing all node indexes separated by forward slashes \( / \).

## Return Value {#section.return .section}

Return 0 if the call is successful; otherwise, -1..

**Parent topic:**[AbtTree](../../TA_Automation/Topics/abt_AbtTree.html)

**Previous topic:**[ScrollIntoView](../../TA_Automation/Topics/abt_ScrollIntoView_17.html)

**Next topic:**[SetNodeStates](../../TA_Automation/Topics/abt_SetNodeStates_17.html)

