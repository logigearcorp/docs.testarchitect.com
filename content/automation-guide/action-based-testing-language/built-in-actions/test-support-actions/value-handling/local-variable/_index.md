--- 
title: "local variable"
linktitle: "local variable"
weight: 8
aliases: 
    - /TA_Automation/Topics/bia_local_variable.html
---
keyword: [local variable, define local variable, declare local variable, local variable declaration and assignment]
---

# local variable

## Description

Define a [local variable](The_test_language_variables.html) and \(optionally\) assign a value to it, or assign a value to an existing local variable.

## Arguments

-   **name**

    Name of the local variable.

-   **value**

    \(Optional\) Value to assign to the local variable.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   For a given execution of local variable, if name specifies a variable that already exists, and whose scope is identical to the variable that would be created, the action merely assigns a new value \(in the value argument\) to the existing variable, without creating a new variable.
-   Restrictions on usage:
    -   A variable may not be declared within a [use data set](use_data_set.html) block if it has the same name as any of the data set headers.
    -   Same-named local and global variables may not be declared within the same local variable scope level.
-   Use variables within pound sign \(\#\) expressions to access their contained values.

## Usage

Unlike global variables, a local variable has limited scope, depending on where it is declared:

-   All local variables declared prior to the first test case \(regardless of whether an [`INITIAL`](initial.html) section exists\), have scope throughout the entire test module, including in the `FINAL` section. \(It is recommended that such variables be declared in the `INITIAL` section.\)
-   If a local variable is declared inside a [`TEST CASE`](test_case.html) section, the scope of that local variable is limited to the test case.
-   If a local variable is declared inside a [`FINAL`](final.html) section, that local variable's scope lasts from the point of its declaration to the end of the test module.
-   If a local variable is declared inside an action, that local variable has scope within the entire action following its declaration, but not to any actions or test module higher up in the calling chain. Note that, from the standpoint of scope, an action argument is identical to a local variable declared at the beginning of the action.

It should be noted that in all the above cases, a local variable having scope at a given point continues to have scope throughout the call chain of actions originating at that point. That is, for example, if a local variable is declared within a test case, its scope extends to all actions called within the test case, as well as all actions called by them, on down the line.

In the [use data set](use_data_set.html) block:

-   TestArchitect supports block scoping for the [use data set](use_data_set.html) block. Therefore, local variables declared between a [use data set](use_data_set.html) action and its associated [repeat for data set](repeat_for_data_set.html) cannot be accessed from outside of that block.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html)none.

## Example \#1: Demonstrating test case scope

**Action Lines**

![](/images//Images/bia_local_variable_test_case_scope_pgm.png)

In Example \#1:

-   Local variable a is accessible throughout the test module because it is declared in the INITIAL section. The value of variable a on lines \#20, \#30 and \#40 is 5.
-   Local variable b is only accessible in test case TC 01 because it is declared inside that test case section. The value of variable b on line \#21 is 10, whereas, where b is referenced on line \# 41, it is undefined.
-   Likewise, local variable c is only accessible in test case TC 02 because it is declared inside that test case section. The value of variable c on line \#31 is 15, whereas it is undefined when used on line \# 42.
-   Local variable d is accessible anywhere after its declaration on line \#37, but only inside the same test module. The value of the variable d on line \#43 is 20.

## Example \#2: Demonstrating block scope \(use data set/repeat for data set\)

**Action Lines**

![](/images//Images/bia_local_variable_block_scope_pgm.png)

In Example \#2:

-   Local variables a and b are not accessible outside of the use data set/repeat for data set block because they are declared inside that block. The value of the variable a on line \#36 and the value of the variable b on line \#37 are 5 and 10, respectively; whereas, on lines \# 43 and \#44, the two variables are undefined.

## Example \#3: Demonstrating test module scope

**Action Lines**

![](/images//Images/bia_local_variable_test_module_scope_pgm.png)

In Example \#3:

-   Local variable a declared within test module Sample 1 is not accessible outside of that test module, and this local variable is visible in every test cases of the test module. The value of variable a on line \#20 of the test module Sample 1 is 5. However, variable a on line \# 20 of test module Sample 2 is undefined, because a is not declared in Sample 2.

## Example \#4: Demonstrating action scope

**Action Lines**

![](/images//Images/bia_local_variable_action_scope_pgm.png)

In Example \#4:

-   Local variable a is declared in test case TC01 and TC01 section calls actions Action 1 and Action 2. Variable a is visible in TC01 and is accessible in Action 1 and Action 2, since both of those actions are children of TC01. Consequently, the value of the variable b will be 10, and the value of the variable c will be 30.

**Parent topic:**[Value Handling](/TA_Automation/Topics/bia_Value_handling.html)

**Previous topic:**[global variable](/TA_Automation/Topics/bia_global_variable.html)

**Next topic:**[set global variable](/TA_Automation/Topics/bia_set_global_variable.html)

