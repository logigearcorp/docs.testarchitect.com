--- 
title: "Understanding variables and expressions"
linktitle: "Understanding variables and expressions"
description: "Action arguments may contain variables (symbols that hold actual values) or expressions, involving operations on variables and constants."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Understanding_variables_and_expressions.html
keywords: "expressions, preceded by #, variables, # sign, to introduce an expression"
---

Action arguments are not limited to containing literal values, such as strings and numbers. Action arguments may contain variables \(symbols that hold actual values\) or expressions, involving operations on variables and constants.

## Variables

Variables may be thought of as containers that hold values within your test. They are especially useful when you need to execute blocks of action lines repeatedly with different values, or when your test needs to retrieve a value from the AUT for later use. The argument names inside an action are essentially just variables used to hold the values passed into the action, allowing the action to act upon different sets of data each time it is called.

Variables can also be used in expressions, allowing the same expression to be applied to varying data values.

Refer to [Variables](/automation-guide/action-based-testing-language/the-test-language/variables/) for further information on variables, including variable scope \(that is, global vs. local variables\), and variable naming rules.

## Expressions

Expressions, like variables, may appear in action line arguments in TestArchitect test modules and user-defined actions. An expression is any combination of literal values, variables, operators, and functions that follows a set of rules, and which needs to be evaluated before it can be used.

Refer to [Expressions](/automation-guide/action-based-testing-language/the-test-language/expressions/) for more information on expressions and related topics.



