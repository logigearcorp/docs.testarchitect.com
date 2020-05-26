--- 
title: "The test language"
linktitle: "The test language"
weight: 1
aliases: 
    - /TA_Automation/Topics/The_test_language.html
---
# The test language {#the_test_language .concept}

Most tests consist of a sequence of action lines, with their action keywords and arguments. Actions are available as built-in actions, or can be created as user actions, implemented either with action definitions or programmed in an automation harness.

A TestArchitect action has the following syntax:

`action name <argument 1\> ... <argument n\>`

`action name:`
:   The action name is the action command that tells TestArchitect what operation to perform. There are three types of actions: built-in, user-defined, and user-scripted \(see [creating and using actions](../../reuse/reuse.Creating_and_using_actions.html)\).

`arguments:`
:   The number of action arguments and types depends on the how the action is defined. Arguments can be of types String, Date, Value Set, Entity, Element, etc. \(see [Argument types](../../reuse/reuse.Creating_and_using_actions_Arg_type.html)\).

Example syntax of an enter action:

![](../Images/Action_syntax.png)

TestArchitect supports a number of special features to provide the test developer with more control over test values and the flow of the test execution. The most important ones are:

-   Expressions and variables, which allow for calculating values and storing them for later use.
-   Control flow actions, like [if](bia_if.html) and [while](bia_while.html).
-   [Data sets](../../TA_Help/Topics/Projects_and_tests_dataset.html).
-   [Data sets](../../TA_Tutorials/Topics/Data_driven_testing_overview.html).

1.  [Variables](../../TA_Automation/Topics/The_test_language_variables.html)  
Variables are placeholders that contain values for later use in one or more action lines, and which allow for easy substitution of values within given action lines.
2.  [Expressions](../../TA_Automation/Topics/The_test_language_expressions.html)  
An expression is any combination of literal values, variables, operators, and functions that follows a set of rules, and which needs to be evaluated before it can be used.
3.  [Functions](../../TA_Automation/Topics/The_test_language_functions.html)  
Functions are prewritten operations which you can reference by name within your expressions to produce values needed by your test.
4.  [Control flow actions](../../TA_Automation/Topics/The_test_language_control_flow_actions.html)  
Control flow actions let you change the order in which action lines are executed.
5.  [Operator precedence](../../TA_Automation/Topics/aut_operator_precedence.html)  
Operator precedence determines the order in which operators are evaluated in TestArchitect. Operators with higher precedence are evaluated first.
6.  [Working with checks](../../TA_Automation/Topics/Automation_model_working_with_checks.html)  
In TestArchitect, a check compares and verifies expected behavior against actual observed behavior during a test. It's good practice to incorporate checks in test procedures to verify that the procedures are running as expected.
7.  [Error handling and recovery](../../TA_Automation/Topics/The_test_language_error_handling_and_recovery.html)  
 Handling unanticipated errors, warnings or test failures.
8.  [Timing](../../TA_Automation/Topics/Automation_practices_Timing.html)  
Successful testing requires that the automation correctly handle the varying response times of a system under test, and not to attempt to continue with interactions before the system is finished with the previous function.
9.  [Ignoring actions](../../TA_Automation/Topics/Ignoring_action.html)  
When the ignore modifier \(the string “ignore”, surrounded by angle brackets\) is used as an argument value in supported actions, TestArchitect bypasses that action during test execution and continues at the subsequent action line.
10. [Image comparison techniques](../../TA_Automation/Topics/aut_image_comparison_techniques.html)  
TestArchitect offers you two methods for verifying the correctness of images produced by a tested application: pixel-by-pixel comparison and keypoint detection.
11. [Text recognition techniques](../../TA_Automation/Topics/aut_text_recognition_techniques.html)  
TestArchitect offers you two methods for recognizing text produced by an AUT: Optical Character Recognition \(OCR\) and Graphics Device Interface \(GDI\) techniques.
12. [Stopping tests on timeout](../../TA_Automation/Topics/aut_stop_tests_after_timeout.html)  
You can set a timeout for the test case to ensure that the test execution does not take longer than it should.

**Parent topic:**[Action-based testing language](../../TA_Automation/Topics/Action_based_testing_language.html)

**Next topic:**[Built-in actions](../../TA_Automation/Topics/bia_Built_in_actions.html)

