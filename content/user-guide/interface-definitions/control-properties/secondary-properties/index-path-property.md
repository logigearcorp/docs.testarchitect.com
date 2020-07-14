--- 
title: "index path property"
linktitle: "index path property"
description: "index path is a secondary TA property that uses one or two index values to specify the position of a cell in either a table view or collection view structure in iOS."
weight: 4
aliases: 
    - /TA_Help/Topics/prop_index_path.html
keywords: "index path property, TA property, index path, properties, secondary, index path"
---

index path is a secondary TA property that uses one or two index values to specify the position of a cell in either a table view or collection view structure in iOS.

## TA classes employing the property

|TA class|Applicable platform\(s\)|
|--------|------------------------|
|table view cell|iOS|
|collection view cell|iOS|

## Values

-   If control is a header cell:
    -   format: <integer index\>
    -   Example: 4
-   If control is a subordinate cell:
    -   format: <integer index\> . <integer index\>
    -   Example: 4.3

## Description

If the control is a header cell of a table view or collection view, index path consists of a single positive integer value representing the position of the header cell in the parent structure. Index values begin at 1.

If the control is subordinate to a header cell, its index path value has two parts: the index path value of its parent header, followed by its index \(starting at 1\) with respect to other children of the parent header. The two values are separated by a dot.

## Example

![](/images/TA_Help/Images/prop_index_path.table_view.png "index path values in a table view")

