--- 
title: "Variable naming rules"
linktitle: "Variable naming rules"
weight: 1
aliases: 
    - /TA_Automation/Topics/The_test_language_variable_naming.html
---
# Variable naming rules {#concept.the_test_language_variables_naming .reference}

Rules that must be observed when naming variables.

Variable names in TestArchitect must comply with the following rules:

-   Allowable characters: alphabetic characters \(upper and lowercase\), numeric digits, underscore \(\_\), and space. Also keep in mind that the name you choose must not be a TestArchitect [function](The_test_language_functions.html), or a TestArchitect reserved word. Here is the list of TestArchitect reserved words.
    -   and
    -   or
    -   xor
    -   not
    -   true
    -   false
    -   \( \)
-   The first character of a variable name must be an alphabetic character or an underscore. A number or space may not appear as the first character.
-   Leading or trailing spaces in a variable name are ignored.

Note also that the TestArchitect interpreter is case-insensitive. Hence, the names apple, APPLE and aPpLE are treated as the same variable.

**Parent topic:**[Variables](../../TA_Automation/Topics/The_test_language_variables.html)

