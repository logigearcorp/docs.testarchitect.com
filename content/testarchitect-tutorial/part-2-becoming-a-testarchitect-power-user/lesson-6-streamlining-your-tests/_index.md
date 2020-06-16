--- 
title: 'Lesson #6: Streamlining your tests'
slug: 'lesson-6-streamlining-your-tests'
linktitle: 'Lesson #6: Streamlining your tests'
description: "How to use loops and actions to create tests that are compact, maintainable, and readable. One key to good testing is to repeat tasks multiple times, supplying the target application with new sets of ..."
weight: 5
aliases: 
    - /TA_Tutorials/Topics/Tutorial_Building_an_action_definition.html
keywords: "Action Based Testing, user-defined actions, building definition, actions, user-defined, building definition"
---

How to use loops and actions to create tests that are compact, maintainable, and readable.

One key to good testing is to repeat tasks multiple times, supplying the target application with new sets of inputs on each iteration. But clearly, repeatedly entering a set of action lines in a test module is neither an elegant nor practical approach for accomplishing this. Instead, we achieve repetition with loops. With a loop, the same set of action lines can be executed over and over again, with variations of the data or other stimuli that are sent to the AUT. With loops, your tests are far more compact and maintainable.

Another means of creating efficient, maintainable tests is through the liberal use of user-defined actions. User-defined actions are composed of other actions, which may be built-in, user-scripted, or other user-defined actions. They are used to effectively encapsulate what, from a business logic standpoint, may be considered a single task, such as log in or rent a car. User-defined actions, like loops, allow your tests to be more compact, readable and maintainable, and by eliminating redundancy, reduce the time required to write tests.

**Audience:** Testers, Automation engineers

**Prerequisites:**

-   Basic understanding of the TestArchitect user interface
-   Familiarity with the TestArchitect test editor
-   Essential understanding of TestArchitect repositories, projects, and tests
-   An understanding of basic computer programming concepts is helpful

**What you will learn:**

-   Incorporating repetitive test logic into loops
-   Creating user-defined actions
-   Generating a user-defined action by folding a set of action lines into it
-   Passing values to actions and receiving return values

1.  [Handling repetition](/TA_Tutorials/Topics/Handling_repetition.html)  
 Tests frequently perform the same steps repeatedly, often varying only the input data values, and expected responses. Sets of actions can be used to create control loops to enable such repetitive processing.
2.  [Creating a case for looping](/TA_Tutorials/Topics/Creating_loops.html)  
Create a test module / test case that reports the sales tax for cars across a range of prices.
3.  [Folding repetition into a loop](/TA_Tutorials/Topics/tut_looping_examples.html)  
How to use loop control actions to handle iterative processes.
4.  [User-defined actions](/TA_Tutorials/Topics/High-level_actions.html)  
User-defined actions consist of sequences of actions that typically relate to a single business logic function in the application under test.
5.  [Folding action lines into actions](/TA_Tutorials/Topics/Refactoring.html)  
Encapsulate action lines that perform a single, logical function into user-defined actions to produce tests that are easy to read and maintain.
6.  [Encapsulating action lines](/TA_Tutorials/Topics/Refactoring_test_lines.html)  
In this exercise you will refactor your last test case by encapsulating its report action line into a user-defined action.
7.  [Returning values from actions](/TA_Tutorials/Topics/Returning_values_from_actions.html)  
In this exercise you expand the functionality of your new action by having it derive some values and return them to the calling entity.
8.  [Summary: What you learned](/TA_Tutorials/Topics/Summary_Building_action_definition.html)  





