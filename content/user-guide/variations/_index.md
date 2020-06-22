--- 
title: "Variations"
linktitle: "Variations"
description: "Variations are a means of adapting your existing project base to changes in an application's functionality and/or interfaces over time, as well as to differences in platforms upon which application runs. Variations allow for minimum maintenance headaches of your project's items, with test validity maintained for all prior versions, platforms, interfaces, etc., of the tested application. Variations can be created for test modules, actions, interface entities, and data sets."
weight: 9
aliases: 
    - /TA_Help/Topics/Variations.html
keywords: "variations"
---

Variations are a means of adapting your existing project base to changes in an application's functionality and/or interfaces over time, as well as to differences in platforms upon which application runs. Variations allow for minimum maintenance headaches of your project's items, with test validity maintained for all prior versions, platforms, interfaces, etc., of the tested application. Variations can be created for test modules, actions, interface entities, and data sets.

Variations can be created for the following TestArchitect project items:

-   [test modules](/TA_Help/Topics/Project_items_tests.html)
-   [interface entities](/TA_Help/Topics/Interface_entities_and_elements.html)
-   [actions](/reuse/reuse.High_level_actions.html),
-   and [data sets](/TA_Help/Topics/Projects_and_tests_dataset.html).

1.  [Introduction to variations](/TA_Help/Topics/Variations_intro.html)  
Ideally, a test should not be sensitive to changes to the AUT, except when such changes are the subject of the test. Variations help isolate the base test from AUT variability, and lend a great measure of flexibility to your test project.
2.  [Default variations](/TA_Help/Topics/Variations_default.html)  
Every project item with variations must also have a default, or base, variation.
3.  [Creating keyword variations](/TA_Help/Topics/Variations_create_keyword.html)  
Keyword variations define certain categories of distinctions between different system/platform mixes, where the differences generally are not due to any progressive development or refinement of any aspect of the mix.
4.  [Creating linked variations](/TA_Help/Topics/Variations_create_linked.html)  
Linked variations are the preferred method for addressing what might be termed progressive variability.
5.  [Rules for creating variations](/TA_Help/Topics/Variations_rules.html)  
Rules for creating variations.
6.  [Executing a test with variations](/TA_Help/Topics/Variations_executing.html)  
As discussed, it is at the start of execution that you inform TestArchitect of the specific versions of systems \(we'll call these system/versions\) that apply to your test run, as well as any applicable keywords.
7.  [Rules for executing with variations](/TA_Help/Topics/Variations_rules_executing.html)  
At runtime setup, you have the option of supplying a variation specification to determine which variations of the required project items will be invoked for the test run. It is possible that certain invoked project items will not have variations that are exact matches with your runtime variation spec. In each such instance, TestArchitect applies a set of rules to determine the variation that is to be activated.
8.  [Flow diagram of variation selection](/TA_Help/Topics/Variations_graphical_summary.html)  
This section summarizes the guidelines for selecting the appropriate variation for each given project item at compile time.




