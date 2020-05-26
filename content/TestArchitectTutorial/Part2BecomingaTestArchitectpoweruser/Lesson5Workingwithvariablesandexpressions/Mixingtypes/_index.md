--- 
title: "Mixing types"
linktitle: "Mixing types"
weight: 5
aliases: 
    - /TA_Tutorials/Topics/Mixing_types.html
---
# Mixing types {#Mixing_types .concept}

Text and numeric data types can be combined in cell expressions.

Operations \(specifically, concatenation\) and functions that operate on strings can nevertheless accept numeric values as operands. These numeric values are converted to strings automatically.

Conversely, it is also possible to perform numeric operations on string values, with those strings being automatically converted to numbers. Note however that while any number may be converted to a string, not every string is convertible to a number. Strings such as `4.5` and `-21` are convertible to numbers; while strings such as `$20`, `7.5%`, and “The sales tax in New York” are not. Any attempt to use a non-convertible string as an operand in a numeric operation or function results in an error message presented in the execution results. For more details, see [Automatic conversion of data types](../../TA_Automation/Topics/The_test_language_expressions.md#section.data_type_conversion).

Because data types in TestArchitect can be readily converted, it is possible to mix string and numeric operations and functions in an expression.

**Note:** In mixed expressions, numeric calculations are performed first. All numeric operators have precedence over the `&` operator.

**Parent topic:**[Lesson \#5: Working with variables and expressions](../../TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Previous topic:**[Performing numeric operations](../../TA_Tutorials/Topics/Performing_numeric_operations.html)

**Next topic:**[Working with mixed types](../../TA_Tutorials/Topics/Working_with_mixed_types.html)

