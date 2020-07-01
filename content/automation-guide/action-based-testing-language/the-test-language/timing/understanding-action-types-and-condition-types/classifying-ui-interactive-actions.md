--- 
title: "Classifying UI-interactive actions"
linktitle: "Classifying UI-interactive actions"
description: "Timing settings used for a given action are largely determined by the type of action it is. Actions that interact with the AUT can be classified into UI-testing and UI-interfacing actions. Each group can be further classified into subgroups."
weight: 1
aliases: 
    - /TA_Automation/Topics/timing_classifying_actions.html
keywords: "timing, and action types, action types, UI-testing and UI-interfacing"
---

Timing settings used for a given action are largely determined by the type of action it is. Actions that interact with the AUT can be classified into UI-testing and UI-interfacing actions. Each group can be further classified into subgroups.

In TestArchitect, there are several types of actions which test the user interface in some way. Additionally, another set of actions interact with the AUT in a non-testing manner, such as clicking a button. All these actions use one or more timing settings. Let’s examine how we might categorize these actions.

For purposes of this topic, we only consider TestArchitect actions that relate to the user interface of the AUT, as they are *almost* the only ones that involve timing settings1. These make up the majority of built-in actions, and can be grouped into two sets, with each set further divisible into subgroups:

-   **UI-testing actions**

    Actions of this type each impose some condition on the UI of the tested application. The satisfaction or non-satisfaction of that condition produces a Boolean outcome. One way to classify actions of this type is in the manner in which that outcome is returned to the test, which takes three forms:

    -   pass/fail tests \(check... actions\): There are over 50 actions that test the AUT in some way and, under normal conditions, cause a pass or fail to be reported for the test. All such actions are check... actions \(in the sense that their names all begin with the word *check*\). These can be further divided into two groups: those that perform existence checks, and those that test for a given value or state:

        -   **existence checks**: These actions test for the existence, or nonexistence, of a specific element of the AUT's user interface. Examples include: check window exists, check control not exists, check menu item exists. \(In general, this group includes all actions of the form check...exists.\)
        -   **value/state checks**: Another set of check actions works by sampling some value or state of an element of the UI, and comparing it against an expected value or state. A match results in a pass, non-match in a fail. Some examples: check list cell value, check tab order, check toolbar button state.
        {{<note>}} The above two subgroups do not quite account for all check... actions. There are also a handful \(check file exists, check text contains, etc.\) which do not directly test or interact with the AUT. These actions do not make use of any timing settings, so we will not concern ourselves with them in this discussion.

    -   those that return a 1\(true\)/0\(false\) value to a specified variable \(does…exist2 and is… actions\)
    -   those in which the resulting Boolean outcome determines control flow of the test \(if…exists2 actions\)
-   **UI-interfacing actions**

    UI-interfacing actions do not explicitly test the UI. An action of this type may, however, apply one or more tests that check for certain preconditions that must exist to allow the action to carry out its prime function. UI-interfacing actions can be divided into two subgroups:

    -   **UI-modifying**

        those actions that act upon UI elements \(e.g., click, enter, set\)

    -   **UI-sampling**

        actions that retrieve values from the UI \(e.g., get, get table cell value\)


{{<note>}}

1One exception to this rule is get clipboard, which does not interact with the AUT, but does use a timing setting.

2Note that, when we refer to these actions, we’re including the not exists actions as well.



