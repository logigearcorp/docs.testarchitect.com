--- 
title: "Mixing types"
linktitle: "Mixing types"
description: "Text and numeric data types can be combined in cell expressions."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/Mixing_types.html
keywords: "mixed expressions, expressions, mixed types, type conversion, conversion, rules, of data types, operators, precedence"
---

Text and numeric data types can be combined in cell expressions.

Operations \(specifically, concatenation\) and functions that operate on strings can nevertheless accept numeric values as operands. These numeric values are converted to strings automatically.

Conversely, it is also possible to perform numeric operations on string values, with those strings being automatically converted to numbers. Note however that while any number may be converted to a string, not every string is convertible to a number. Strings such as `4.5` and `-21` are convertible to numbers; while strings such as `$20`, `7.5%`, and “The sales tax in New York” are not. Any attempt to use a non-convertible string as an operand in a numeric operation or function results in an error message presented in the execution results. For more details, see [Automatic conversion of data types](/automation-guide/action-based-testing-language/the-test-language/expressions/#section.data_type_conversion).

Because data types in TestArchitect can be readily converted, it is possible to mix string and numeric operations and functions in an expression.

{{<note>}} In mixed expressions, numeric calculations are performed first. All numeric operators have precedence over the `&` operator.




