--- 
title: "Folding action lines into actions"
linktitle: "Folding action lines into actions"
aliases: 
    - /TA_Tutorials/Topics/Refactoring.html
---
# Folding action lines into actions {#Refactoring .concept}

Encapsulate action lines that perform a single, logical function into user-defined actions to produce tests that are easy to read and maintain.

[Action encapsulation](../../TA_Glossary/Topics/glossaryActionEncapsulation.html) involves taking an existing body of action lines and restructuring it internally without changing its functionality.

Encapsulation results in:

-   Tests that are more compact, with less redundancy
-   Tests that are easier to read and understand
-   Tests that are easier to maintain
-   Tests that are less prone to error

It's always a good idea to do some planning when creating your tests. You organize your tests into separate test modules based on commonality of purpose. For test logic that has a discrete function – especially one that may be required throughout a test and across test modules – you might create a user-defined action that can be accessed from anywhere with a single action line.

Often, however, you may discover after the fact that a set of lines you've written would be best incorporated into a discrete action. For these instances, TestArchitect offers an action lines encapsulation feature that allows you to conveniently fold such lines into their own action.

For example, the following two action lines are used to set two fields, **pickup city** and **pickup state**, of a window in the Car Rental application to the values Denver and Colorado, respectively.

![](../Images/tut.Reusability.Refactoring_concept.Test01a.2014.png)

There is nothing wrong with this, but consider the following:

-   The two lines have a very common purpose: entering a location.
-   This location entry may be something that needs to be performed elsewhere in your test module\(s\) and actions, and very possibly for other locations than Miami, Florida.
-   The lines are very application-dependent. If, for example, there is a future change in the application under test \(for example, a list box replacing the **city** field, requiring a select action to replace the enter\), you may have to change your test modules in multiple places, even though the scope of the test hasn't changed.
-   To the untrained eye, the actions enter and select are not nearly as readable as something that states exactly what the purpose is: to enter a location.

The ABT solution to this is to define a new action, which we might call enter pickup location, and which performs the individual implementation-specific tasks invisibly from the point of view of the calling entity. With a new action handling the above steps, the action line for achieving the same result could be reduced to this:

![](../Images/tut.Reusability.Refactoring_concept.Test01b.2014.png)

By folding the two action lines into an action that encompasses the overall function, the test becomes more readable, less cluttered, and helps insulate the test from its implementation. Now if a control in the target application changes, affecting how locations are entered \(such as cities being selected from a list\), the change will impact only the single action, not the tests or other actions that make use of this functionality. Moreover, you now have a reusable action that can be applied to any location.

**Note:**

The implementation of the new action, enter pickup location, would look like something this:

![](../Images/tut.Reusability.Refactoring_concept.Test01c.2014.png)

**Parent topic:**[Lesson \#6: Streamlining your tests](../../TA_Tutorials/Topics/Tutorial_Building_an_action_definition.html)

**Previous topic:**[User-defined actions](../../TA_Tutorials/Topics/High-level_actions.html)

**Next topic:**[Encapsulating action lines](../../TA_Tutorials/Topics/Refactoring_test_lines.html)

