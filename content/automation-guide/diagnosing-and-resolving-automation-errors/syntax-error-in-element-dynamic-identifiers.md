--- 
title: "Syntax error in element dynamic identifiers"
linktitle: "Syntax error in element dynamic identifiers"
description: "Error code: 0x80020006L Problem This issue happens when you use dynamic identifiers to identify UI controls, but the defined identifier has syntax errors. Solution Please read this topic to understand ..."
weight: 120
aliases: 
    - /TA_FAQ/Topics/0x80020006L-1.html
keywords: "automation errors, 0x80020006L"
---

Error code: 0x80020006L

## Problem

This issue happens when you use dynamic identifiers to identify UI controls, but the defined identifier has syntax errors.

## Solution

Please read this [topic](/user-guide/interface-definitions/dynamic-identifiers) to understand the dynamic identifier's structure and syntax.

For convenience, you can obtain dynamic identifiers of UI controls quickly via either the [point-to-identify](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/) tool or the [Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/interpreting-the-interface-viewer/).

## Special characters for dynamic identifiers

-   **Commas, square brackets, or equal signs**

    If the property value of a dynamic UI control contains any of these special characters, TestArchitect might fail to parse the property value, since those characters are used as delimiters in a dynamic UI control. Therefore, the simple solution is to enclose the property value in single quotes.

    For example: Value of the value property is AAA1001, John Doe, Male. Its dynamic identifier will be as follows.

    ```
    [ta class=textbox, value='AAA1001, John Doe, Male']
    ```




