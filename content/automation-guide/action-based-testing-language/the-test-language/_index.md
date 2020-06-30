--- 
title: "The test language"
linktitle: "The test language"
description: "Most tests consist of a sequence of action lines, with their action keywords and arguments. Actions are available as built-in actions, or can be created as user actions, implemented either with action definitions or programmed in an automation harness."
weight: 1
aliases: 
    - /TA_Automation/Topics/The_test_language.html
keywords: "test language"
---

Most tests consist of a sequence of action lines, with their action keywords and arguments. Actions are available as built-in actions, or can be created as user actions, implemented either with action definitions or programmed in an automation harness.

A TestArchitect action has the following syntax:

`action name <argument 1\> ... <argument n\>`

-   **`action name:`**

    The action name is the action command that tells TestArchitect what operation to perform. There are three types of actions: built-in, user-defined, and user-scripted \(see [creating and using actions](/user-guide/actions/)\).

-   **`arguments:`**

    The number of action arguments and types depends on the how the action is defined. Arguments can be of types String, Date, Value Set, Entity, Element, etc. \(see [Argument types](/user-guide/actions/user-defined-actions/argument-types/)\).


Example syntax of an enter action:

![](/images/TA_Automation/Images/Action_syntax.png)

TestArchitect supports a number of special features to provide the test developer with more control over test values and the flow of the test execution. The most important ones are:

-   Expressions and variables, which allow for calculating values and storing them for later use.
-   Control flow actions, like [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) and [while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/while).
-   [Data sets](/user-guide/projects-and-project-items/project-items/data-sets/).
-   [Data sets](/testarchitect-tutorial/part-2-becoming-a-testarchitect-power-user/lesson-7-creating-data-driven-tests/data-driven-testing-overview).

1.  [Variables](/automation-guide/action-based-testing-language/the-test-language/variables/)  
Variables are placeholders that contain values for later use in one or more action lines, and which allow for easy substitution of values within given action lines.
2.  [Expressions](/automation-guide/action-based-testing-language/the-test-language/expressions/)  
An expression is any combination of literal values, variables, operators, and functions that follows a set of rules, and which needs to be evaluated before it can be used.
3.  [Functions](/automation-guide/action-based-testing-language/the-test-language/functions/)  
Functions are prewritten operations which you can reference by name within your expressions to produce values needed by your test.
4.  [Control flow actions](/automation-guide/action-based-testing-language/the-test-language/control-flow-actions)  
Control flow actions let you change the order in which action lines are executed.
5.  [Operator precedence](/automation-guide/action-based-testing-language/the-test-language/operator-precedence)  
Operator precedence determines the order in which operators are evaluated in TestArchitect. Operators with higher precedence are evaluated first.
6.  [Working with checks](/automation-guide/action-based-testing-language/the-test-language/working-with-checks/)  
In TestArchitect, a check compares and verifies expected behavior against actual observed behavior during a test. It's good practice to incorporate checks in test procedures to verify that the procedures are running as expected.
7.  [Error handling and recovery](/automation-guide/action-based-testing-language/the-test-language/error-handling-and-recovery/)  
 Handling unanticipated errors, warnings or test failures.
8.  [Timing](/automation-guide/action-based-testing-language/the-test-language/timing/)  
Successful testing requires that the automation correctly handle the varying response times of a system under test, and not to attempt to continue with interactions before the system is finished with the previous function.
9.  [Ignoring actions](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions)  
When the ignore modifier \(the string “ignore”, surrounded by angle brackets\) is used as an argument value in supported actions, TestArchitect bypasses that action during test execution and continues at the subsequent action line.
10. [Image comparison techniques](/automation-guide/action-based-testing-language/the-test-language/image-comparison-techniques)  
TestArchitect offers you two methods for verifying the correctness of images produced by a tested application: pixel-by-pixel comparison and keypoint detection.
11. [Text recognition techniques](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques)  
TestArchitect offers you two methods for recognizing text produced by an AUT: Optical Character Recognition \(OCR\) and Graphics Device Interface \(GDI\) techniques.
12. [Stopping tests on timeout](/automation-guide/action-based-testing-language/the-test-language/stopping-tests-on-timeout)  
You can set a timeout for the test case to ensure that the test execution does not take longer than it should.



