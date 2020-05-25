--- 
title: "index path property"
linktitle: "index path property"
aliases: 
    - /TA_Help/Topics/prop_index_path.html
---
# index path property {#ref.prop_index_path .reference}

index path is a secondary TA property that uses one or two index values to specify the position of a cell in either a table view or collection view structure in iOS.

## TA classes employing the property { .section}

|TA class|Applicable platform\(s\)|
|--------|------------------------|
|table view cell|iOS|
|collection view cell|iOS|

## Values { .section}

-   **If control is a header cell**:
    -   **format:** <integer index\>
    -   **Example:** 4
-   **If control is a subordinate cell**:
    -   **format:** <integer index\> . <integer index\>
    -   **Example:** 4.3

## Description { .section}

If the control is a header cell of a table view or collection view, index path consists of a single positive integer value representing the position of the header cell in the parent structure. Index values begin at 1.

If the control is subordinate to a header cell, its index path value has two parts: the index path value of its parent header, followed by its index \(starting at 1\) with respect to other children of the parent header. The two values are separated by a dot.

## Example { .section}

![](../Images/prop_index_path.table_view.png "index path values in a table view")

**Parent topic:**[Secondary properties](../../TA_Help/Topics/Interface_def_derived_properties.html)

