--- 
title: "Handling repetition"
linktitle: "Handling repetition"
description: "Tests frequently perform the same steps repeatedly, often varying only the input data values, and expected responses. Sets of actions can be used to create control loops to enable such repetitive processing."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Handling_repetition.html
keywords: "loops, controls, repeat-until loops, while loops, repetition of action lines, conditions, control loops"
---

Tests frequently perform the same steps repeatedly, often varying only the input data values, and expected responses. Sets of actions can be used to create control loops to enable such repetitive processing.

Control loops enable you to repeat sequences of actions until an expression, called the condition, evaluates to either *true* or *false.* TestArchitect supports two types of loops:

-   **`[repeat](/TA_Automation/Topics/bia_repeat.html)-[until](/TA_Automation/Topics/bia_until.html)`**

    The sequence of action lines between the repeat action and its associated until action is executed continuously. The until action line includes a condition to stop argument, which generally contains a Boolean expression. When the until action is reached, the expression is evaluated. If found to be false, control is returned to the beginning of the sequence; if true, the loop is exited, with control flow continuing with the next action below the until.

    **Note:** Because the condition is not examined until control has reached the bottom of the loop, all repeat-until sequences are executed at least once.

-   **`[while](/TA_Automation/Topics/bia_while.html)-[end while](/TA_Automation/Topics/bia_end_while.html)`**

    This is also a loop with a sequence of actions contained between two loop boundary actions: while and end while. In this case, the conditional expression is attached to the while action, in the argument condition to run. If true, execution continues with the sequence of steps below the while; upon reaching the end while, control returns to the while, and the condition is evaluated again. If the while condition evaluates to false, loop execution ends and control flow continues with the first action below the end while.

    **Note:** Because the condition is examined before any of the contained action lines are executed, it is possible that the enclosed sequence will not be executed at all. This is in contrast to repeat-until.




