--- 
title: "Execution with only version nodes"
linktitle: "Execution with only version nodes"
aliases: 
    - /TA_Help/Topics/Variations_rules_executing_2_3.html
---
# Execution with only version nodes {#variations_rules_executing_2_3 .concept}

In this scenario, the runtime variation specification contains no keywords, but one or more system/version nodes are provided \(that is, there is a version run set\).

Scenario: At runtime, you specify version nodes in the Variation Specification panel. \(The panel is located under the **Advanced Settings** tab of the Execute Test dialog box.\) This set of system/version nodes is called the version run set, or VRS.

![](../Images/ug_systemtree30.png)

In this case, we begin to apply the **Version Compilation Order List** introduced in [Maintaining and modifying a system tree](Variations_create_linked_mainitaining_modifying_system_tree.html). This list, which exists for each system tree, informs TestArchitect of the order of precedence to apply to system versions when searching for the appropriate linked variation to invoke.

**Note:**

One thing to be aware of is the way TestArchitect regards variations linked to multiple nodes: for all practical purposes, they are treated as separate entities during the search process. For example, for searching purposes \(and for ease in understanding how the search works\), we can regard the variation:

```
login {Car Rental: 1.1, 1.2, 2.0} {Spanish, Portuguese}
```

as three separate variations as follows \(with each one, of course, having identical definitions\):

1.  `login {Car Rental: 1.1} {Spanish, Portuguese}`
2.  `login {Car Rental: 1.2} {Spanish, Portuguese}`
3.  `login {Car Rental: 2.0} {Spanish, Portuguese}`

When execution parameters include no keywords, but do include one or more version nodes, TestArchitect takes the following approach for each test module, action, interface or data set it encounters in the test:

1.  If the [variation set](../../TA_Glossary/Topics/glossaryVariationSet.html) has no system connected with it \(that is, there are no linked variations in the set\), TestArchitect selects the default variation.
2.  If the variation set has an associated system, TestArchitect asks:

    ```
    Is some version node of this system specified in the **AUT Version** box
    of the Execute Test dialog box?
    ```

    1.  If the answer is No, TestArchitect selects the default variation.
    2.  If Yes, TestArchitect asks:

        ```
        Is there a variation in the variation set that 
        i) has no associated keywords, and 
        ii) is linked to the same version node as the one specified?
        ```

        -   If the answer is Yes, TestArchitect selects that variation.
        -   If No, move one level up in the [**Version Compilation Order List**](Variations_create_linked_mainitaining_modifying_system_tree.html) for this system. Cycle back up to question [2b](#li.version_node_found), allowing the term the one specified to now refer to this new version node. Continue with this cycle until the answer to [2b](#li.version_node_found) is Yes, or the end of the list is reached. If the end of the list is reached, TestArchitect selects the default variation.

            **Important:**

            -   When your specified version node does not belong to any branch node, TestArchitect ignores other higher branch nodes in **Version Compilation Order List**, as well as its descendant nodes, if any.
                -   For example, if your automated test run specifies node **1.2**, the search order is **1.2** \> **1.1** \> **1** \> **default variation**.

                    ![](../Images/Execution_rules_variation.png)

            -   On the other hand, when your specified version node belongs to a given branch node, TestArchitect moves one level up for remaining version nodes. Note that, the higher version nodes and your selected version node must be of the same branch. Subsequently, TestArchitect again ignores other higher branch nodes and their descendant nodes, if any.
                -   For example, your automated test run specifies node **1.2 Patch 2**, the search order is **1.2 Patch 2** \> **1.2 Patch 1** \> **1.2** \> **1.1** \> **1** \> **default variation**.

                    ![](../Images/Execution_rules_variation_2.png)


**Parent topic:**[Rules for selecting variations for execution](../../TA_Help/Topics/Variations_rules_executing_2.html)

**Previous topic:**[Execution with keywords only](../../TA_Help/Topics/Variations_rules_executing_2_2.html)

**Next topic:**[Execution with both keywords and version nodes](../../TA_Help/Topics/Variations_rules_executing_2_4.html)

