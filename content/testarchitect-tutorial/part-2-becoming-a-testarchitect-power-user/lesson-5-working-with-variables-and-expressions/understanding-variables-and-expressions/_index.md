--- 
title: "Understanding variables and expressions"
linktitle: "Understanding variables and expressions"
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Understanding_variables_and_expressions.html
---

Action arguments are not limited to containing literal values, such as strings and numbers. Action arguments may contain variables \(symbols that hold actual values\) or expressions, involving operations on variables and constants.

## Variables

Variables may be thought of as containers that hold values within your test. They are especially useful when you need to execute blocks of action lines repeatedly with different values, or when your test needs to retrieve a value from the AUT for later use. The argument names inside an action are essentially just variables used to hold the values passed into the action, allowing the action to act upon different sets of data each time it is called.

Variables can also be used in expressions, allowing the same expression to be applied to varying data values.

Refer to [Variables](/TA_Automation/Topics/The_test_language_variables.html) for further information on variables, including variable scope \(that is, global vs. local variables\), and variable naming rules.

## Expressions

Expressions, like variables, may appear in action line arguments in TestArchitect test modules and user-defined actions. An expression is any combination of literal values, variables, operators, and functions that follows a set of rules, and which needs to be evaluated before it can be used.

Refer to [Expressions](/TA_Automation/Topics/The_test_language_expressions.html) for more information on expressions and related topics.

**Parent topic:**[Lesson \#5: Working with variables and expressions](/TA_Tutorials/Topics/Tutorial_Working_with_variables_and_expressions.html)

**Next topic:**[Using string expressions](/TA_Tutorials/Topics/Using_string_expressions.html)

