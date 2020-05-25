--- 
title: "Operator precedence"
linktitle: "Operator precedence"
aliases: 
    - /TA_Automation/Topics/aut_operator_precedence.html
---
# Operator precedence {#concept_isk_rvl_1y .concept}

Operator precedence determines the order in which operators are evaluated in TestArchitect. Operators with higher precedence are evaluated first.

The following table lists the precedence of TestArchitect operators. Operators are listed top to bottom, in descending precedence.

|Precedence|Operator|Description|
|----------|--------|-----------|
|1|\*|multiplication|
|1|/|real number division|
|1|\\|integer division|
|1|%|modulo|
|2|+|addition|
|2|-|subtraction|
|3|&|concatenation|
|4|=|equal to|
|4|<\>|not equal to|
|4|\>|greater than|
|4|\>=|greater than or equal to|
|4|<|less than|
|4|<=|less than or equal to|
|5|not|Value is TRUE if its operand is FALSE.|
|6|and|Value is TRUE if and only if both sides of the and operator are TRUE.|
|7|or|Value is TRUE if either side of the or operator is TRUE.|

**Parent topic:**[The test language](../../TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Control flow actions](../../TA_Automation/Topics/The_test_language_control_flow_actions.html)

**Next topic:**[Working with checks](../../TA_Automation/Topics/Automation_model_working_with_checks.html)

