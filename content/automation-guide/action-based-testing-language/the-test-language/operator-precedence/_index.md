--- 
title: "Operator precedence"
linktitle: "Operator precedence"
description: "Operator precedence determines the order in which operators are evaluated in TestArchitect. Operators with higher precedence are evaluated first."
weight: 5
aliases: 
    - /TA_Automation/Topics/aut_operator_precedence.html
keywords: "operator precedence"
---

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




