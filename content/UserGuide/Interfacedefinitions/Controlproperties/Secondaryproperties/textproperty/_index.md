--- 
title: "text property"
linktitle: "text property"
weight: 7
aliases: 
    - /TA_Help/Topics/prop_text.html
---
# text property {#ref.prop_text .reference}

text, in some cases, is a secondary property, with its value derived from other controls.

## TA classes employing the property { .section}

**Note:** This is not the complete list of TA classes that employ the text property. It only covers those cases in which text is a secondary property.

|TA class|Applicable platform\(s\)|
|--------|------------------------|
|cell|WPF|
|listbox item|WPF|
|listview item|WPF|
|menu item|WPF|
|tree node|WPF|

## Description { .section}

As a secondary property, text is handled differently depending on both the control class and its configuration. In general, the value of text for a control is a concatenation of text values, and in some cases the state \(such as for a check box\), of the child controls.

In the simplest cases, text may act like a primary property. For example, a table cell containing only a text string will have its text property set to that string value. On the other hand, if the cell contains certain other controls, the cell's text property is set to the concatenation of their text and/or state values. Delimiters used in the concatenated strings vary between control classes.

**Parent topic:**[Secondary properties](../../TA_Help/Topics/Interface_def_derived_properties.html)

