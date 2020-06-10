--- 
title: "Expressions"
linktitle: "Expressions"
weight: 2
aliases: 
    - /TA_Automation/Topics/The_test_language_expressions.html
---

Expressions, like variables, may appear in action line arguments in TestArchitect test modules and actions. An expression is any combination of literal values, variables, operators, and functions that follows a set of rules, and which needs to be evaluated before it can be used.Operators are symbols which specify operations to be performed, such as addition \(a numeric operation\) or concatenation \(a string operation\). \(Functions are discussed in [Functions](/TA_Automation/Topics/The_test_language_functions.html).\) Evaluating an expression means performing all the specified operations on the operands \(the values, variables, and functions\) until a value is produced. An action is invoked only after all the expressions in its arguments have been evaluated.

## The expression indicator

As a general rule, TestArchitect treats the contents of an argument literally – that is, as either a numeric or string constant. To get an argument to be treated as an expression, you must precede its contents with the “\#” symbol, which we call the expression indicator.

Note that the expression indicator is required even for arguments that contain nothing more than a single variable. \(Think of a single variable as a single-operand expression.\) In essence, any time the contents of a cell need to be evaluated before they can be used, they are an expression in TestArchitect’s view.

**Tip:** A common mistake by newbies is to attempt to prepend the \# symbol to every variable in an expression. That is wrong. It is important to keep in mind that the \# symbol applies to the cell, not to any individual element within the cell. It informs TestArchitect that the cell has contents that must be evaluated before they can be used.

CAUTION:

**Exception to the requirement of an expression indicator:** While the expression indicator is generally required for an argument that contains a variable, it should not be used for arguments in which a variable name is explicitly *expected*. That is the case for arguments that the called action is expected to return a value to. An example would be any of the built-in get... actions:

```
                          window    property    variable
get window property       login     title       logtitle
```

These actions have no need to evaluate the variables, as their only purpose is to assign values to them. \(One exception is the case in which a variable or argument holds the name of the variable you wish to write to, which is typically with case for user-defined actions that return values.\)

**Important:** **Escaping the expression indicator:** In some instances, you may need to deal with a string that begins with a pound \(\#\) symbol, and not have it treated as an expression indicator. To do so, precede the character with a backslash \(\\\). For example, the following action line allows you to check for whether the clipboard is holding the string “\# Cars”:

```
                          window       property    expected
check window property     car tally    title       \# Cars
```

## Expression parsing

Within an expression, the TestArchitect interpreter tries to resolve every non-numeric symbol to a variable, operator or function. Hence, to specify a literal string within an expression, enclose it in double quotation marks.

Also note that TestArchitect parses expressions by treating spaces and other symbols as delimiters. Because variable names may contain spaces and other symbols, it is necessary to enclose such complex variable names within single quotes, to direct the interpreter not to parse them.

The following set of action lines indicates some of the rules that the TestArchitect interpreter follows:

```
11                   variable  value
12   set variable    a         5
13   set variable    b         8
14   set variable    a + b     123
15
16                   text
17   report          a + b        
18   report          #a + b
19   report          #"a + b"
20   report          #'a + b'
```

Upon execution of the above, the results reported are as follows:

||||
|------|------|------|
|**line**|**reported value**|**why?**|
|line 17|a + b|Contents of the text argument are treated literally, since there is no expression indicator \(\#\).|
|line 18|13|The expression indicator \(\#\) causes the interpreter to parse the expression into the addition of variables a and b.|
|line 19|a + b|Double quotation marks within an expression allow its contents to be treated as a string literal.|
|line 20|123|In an expression, single quotation marks surrounding a string that would otherwise be parsed, cause it to be treated as a single symbol \(that is, a variable name\).|

## Expression operators

A cell expression consists of two classes of items: operands, which are things that are operated on \(such as numbers, strings and variables\), and operators, which specify what operations are to be performed. TestArchitect offers seven operators: six that operate on numbers and one that operates on strings.

**Note:** While the set of expression operators in TestArchitect is relatively small, they are effectively supplemented by the many [functions](/TA_Automation/Topics/The_test_language_functions.html) available. Moreover, user-defined actions can be written to provide additional functionality, with operands assigned to arguments, and the [result \(or results\) returned](/TA_Tutorials/Topics/Return_values.html) to variables in other argument\(s\).

The following expression operators are available in TestArchitect.

|Symbol|Operation|Type|Precedence|
|------|---------|----|----------|
|\*|multiplication|numeric|1|
|/|real number division|numeric|1|
|\\|integer division|numeric|1|
|%|modulo|numeric|1|
|+|addition|numeric|2|
|-|subtraction|numeric|2|
|&|concatenation|string|3|

## Order of operations

Note the **Precedence** column in the above table. All things being equal, expressions with multiple operators are processed from left to right. However, as you \(hopefully\) learned in grade school, not all operators are created equal: some have higher precedence, or priority, than others. For instance, the expression `4 + 3 * 2`, if processed from left to right, would produce a result of 14. But we all know that standard mathematical rules dictate that the multiplication operation be processed first, so that the expression evaluates to 10.

The priority assigned to operators tells us which operations are performed before others. Within a group of operators of equal priority, operations are performed from left to right.

**Parentheses** can be used to modify the order of operations in an expression. For instance, if we want the expression above to have its addition operation performed first, we need only surround the term with parentheses: `(4 + 3) * 2`.

**Note:** For the full list of operator precedence, see [here](/TA_Automation/Topics/aut_operator_precedence.html).

## Automatic conversion of data types

In general, numeric operations and functions are performed on numbers, variables holding numbers, and functions that return numbers. Similarly, string operations and functions operate on string literals, variables holding strings, and functions that return strings.

That said, TestArchitect does allow for string operations to be performed on numbers, and vice-versa, as long as the data type of the operand can be converted to what the operation expects.

In general, performing string operations on numeric operands is no problem: any numeric value can be converted into a string. This allows for the mixing of data types in operations. So, for example, the following set of action lines:

```
                  name      value
local variable    Fords     23
local variable    Toyotas   14
local variable    Buicks    28
local variable    revenue   7234.38
		
         text	
report   #"We rented " & (Fords + Toyotas + Buicks) & " cars this month, with revenue of $" & revenue & "."	
```

results in an output of: We rented 65 cars this month, with revenue of $7234.38.

By contrast, converting strings into numeric values is not always a sure thing. For automatic conversion to take place, the string must “look like” a number to TestArchitect. Looking like a number means that it must consist of only the characters 0-9, plus zero or one decimal points, plus an optional minus \(-\) sign preceding it. If an automatic string-to-number conversion is attempted on a value that does not meet TestArchitect's criteria, an error is reported in the results.

## Editing expressions

During an editing session, entering the *\#* symbol in an empty argument cell triggers an autocomplete pop-up window containing a list of variables thought to be within scope at that position in the action lines. Use the Up and Down arrow keys to select one, should you need it inserted at that point. You can bring back the pop-up list at any further point in the expression by pressing Ctrl + Space.

CAUTION:

The variables listed in the autocomplete window are purely suggested variables. The editor cannot be certain that the variables it suggests will always be in scope at that point in the test run. It is up to you to ensure that a given variable inserted in an expression will indeed be visible \(within scope\) when the test is run.

-   **[Return values](/TA_Tutorials/Topics/Return_values.html)**  
Actions can be written to return values to test modules or actions that call them.

**Parent topic:**[The test language](/TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Variables](/TA_Automation/Topics/The_test_language_variables.html)

**Next topic:**[Functions](/TA_Automation/Topics/The_test_language_functions.html)

