--- 
title: "node path property"
linktitle: "node path property"
description: "node path is a secondary TA property that specifies the position of a cell in a treeview control in the WPF and UIA platforms."
weight: 6
aliases: 
    - /TA_Help/Topics/prop_node_path.html
keywords: "node path property, TA property, node path, properties, secondary, node path"
---

node path is a secondary TA property that specifies the position of a cell in a treeview control in the WPF and UIA platforms.

## {{< expand >}} TA classes employing the property

|TA class|Applicable platform\(s\)|
|--------|------------------------|
|table view node|WPF, UIA|

## {{< expand >}} Values

-   **format:** <element1\>/<element2\>/... <elementN\>, where <elementX\> at any given level is concatenated text of qualifying controls \(discussed below\).
-   **Examples:**
    -   Europe/France/Paris
    -   Europe/France Italy Germany/Paris Rome Berlin

## {{< expand >}} Description

The node path property of a given tree node contains a hierarchical path leading from the root node of the tree view control to the node itself. Elements of the path are delimited by forward slashes \(/\), with each element representing a tree node in the path.

Each element consists of text that serves to identify its tree node. This text is taken from any textblock controls \(name property\) and/or textbox controls \(text property\) that are immediate children of the given tree node.:

Typically, a tree node will have only one child control of one of the above classes. Should more than one exist, however, the text that comprises that element of the node path is a concatenation of all the qualifying controls' contributed text strings \(as seen in level 2 of the tree in the example below\). The order of contribution is based on the linking order of the child nodes.

If no eligible child controls exist for a given tree node, its element in the node path depends on whether UIA is being employed:

-   if UIA is not used, the element is null \(e.g., /b/c/d, a//c/d, a/b/c/, etc.\).
-   if UIA is used, the element is equivalent to the parent tree node's name value, which is a concatenation of the native control class and other property values.

## {{< expand >}} Example

![](/images/TA_Help/Images/prop_node_path.png "node path values for a tree node ")


