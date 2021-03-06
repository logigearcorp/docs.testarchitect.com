--- 
title: "Syntax error in entity dynamic identifiers"
linktitle: "Syntax error in entity dynamic identifiers"
weight: 119
aliases: 
    - /TA_FAQ/Topics/0x80020006L.html
---

Error code: 0x80020006L

## Problem

This issue happens when you use dynamic identifiers to identify UI controls, but the defined identifier has syntax errors.

## Solution

Please read this [topic](/TA_Help/Topics/The_test_language_dynamic_identifiers.html) to understand the dynamic identifier's structure and syntax.

For convenience, you can obtain dynamic identifiers of UI controls quickly via either the [point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html) tool or the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_reading.html).

## Special characters for dynamic identifiers

-   **Commas, square brackets, or equal signs**

    If the property value of a dynamic UI control contains any of these special characters, TestArchitect might fail to parse the property value, since those characters are used as delimiters in a dynamic UI control. Therefore, the simple solution is to enclose the property value in single quotes.

    For example: Value of the value property is AAA1001, John Doe, Male. Its dynamic identifier will be as follows.

    ```
    [ta class=textbox, value='AAA1001, John Doe, Male']
    ```


**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[TestArchitect is unable to expand the <path\> tree node in the <controlName\> control, which resides in the <windowName\> window.](/TA_FAQ/Topics/0x80010304L.html)

**Next topic:**[Syntax error in element dynamic identifiers](/TA_FAQ/Topics/0x80020006L-1.html)

