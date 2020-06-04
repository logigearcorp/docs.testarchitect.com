--- 
title: "Name change propagation"
linktitle: "Name change propagation"
weight: 6
aliases: 
    - /TA_Help/Topics/Project_and_project_items_rename_refactoring.html
---

A TestArchitect feature that automatically updates all references to a given entity when you rename that entity.

## Name change propagation

In TestArchitect explorer tree, the following entities can be renamed using the context menu's **Rename** command:

-   arguments,
-   high-level actions,
-   test modules,
-   interfaces,
-   interface entities,
-   interface elements,
-   data sets,
-   test suites,
-   system nodes, and version nodes of a given variation.

**Restriction:** Built-in actions and local results cannot be renamed.

The process of modifying all associated references to a renamed entity is known as name change propagation. Renaming an entity automatically updates all applicable action lines, test modules, action definitions, and variations where the entity name appears. For example, if the name of an action is changed, all references to that action's name will also be changed.

**Note:** Name change propagation within a given project item is possible only when that item is in a writable state. \(For example, a test module which includes an action line that calls a just-renamed action must be checked out for name change propagation to succeed in the case of that action line\).

**Restriction:**

Name change propagation is not supported in the TestArchitect test editor. Changing the name of an entity in the Editor window will not change the name of that entity elsewhere. \([Learn more](/TA_Tutorials/Topics/Test_editor_basics.html).\)

## Subscription renaming

Name change propagation applies to eligible entities that are subscribed to from other modules and projects. In large-scale test development environments, entities such as actions and data sets may be shared among different projects using [Project subscription](Project_subscription.html). Renaming an eligible subscribed entity results in all associated entity name definitions being automatically renamed in all subscribing modules and projects.

## Variation renaming

Name change propagation also applies to eligible entities that are created by copying an entity and pasting using the **Paste as Variation** command \(see [Variations](Variations.html)\). Well-designed tests incorporate variations to maximize test code reusability. TestArchitect allows different versions of any given entity to coexist with each other to handle small variations in test cases. Renaming eligible system or version nodes results in all corresponding entity name definitions being automatically renamed across all associated variations.

-   **[Renaming an entity for automatic propagation](/TA_Help/Topics/Projects_and_project_items_renaming_entity.html)**  
Arguments, actions, test modules, interfaces, interface entities, interface elements, data sets, test suites, system nodes, and version nodes of a given variation can be renamed using the context menu's **Rename** command in TestArchitect explorer tree.

**Parent topic:**[Project items](/TA_Help/Topics/Project_items_def.html)

**Previous topic:**[Revision control](/TA_Help/Topics/Revision_control.html)

**Next topic:**[List view](/TA_Help/Topics/Projects_and_tests_list_view.html)

