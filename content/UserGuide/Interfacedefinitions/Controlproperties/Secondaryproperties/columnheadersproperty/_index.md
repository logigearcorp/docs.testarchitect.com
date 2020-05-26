--- 
title: "column headers property"
linktitle: "column headers property"
weight: 3
aliases: 
    - /TA_Help/Topics/prop_column_headers.html
---
# column headers property {#ref.prop_column_headers .reference}

column headers is a secondary TA property that applies to certain grid-style controls with column labels. It simply maintains the text content of all the headers in one long string.

## TA classes employing the property { .section}

|TA class|Applicable platform\(s\)|
|--------|------------------------|
|table|UIA|
|calendar|UIA|

## Values { .section}

-   **table control**: A TA class table control is a native datagrid control in UIA. Each datagrid control has a header, which in turn contains header item controls. Each header item contains the text for a single column header of the datagrid. The column headers property concatenates these values, separating them with spaces. Example:

    ```
    ID FirstName LastName Phone Address
    ```

-   **calendar control:** For a TA class calendar control, the value for column headers is derived from the native UIA ColumnHeaders property, which in turn gets its values from the individual controls making up the headers. The result is a comma-delimited string, in which each element of the string represents a single column header. Each such element consists of a pair of values taken from the respective header control: the UIA Name property \(enclosed in quotes\), followed by the LocalizedControlType property. \(Typically, the value for LocalizedControlType is text.\) Example:

    ```
    "Su" text,"Mo" text,"Tu" text,"We" text,"Th" text,"Fr" text,"Sa" text
    ```


**Parent topic:**[Secondary properties](../../TA_Help/Topics/Interface_def_derived_properties.html)

