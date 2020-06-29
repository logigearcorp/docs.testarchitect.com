--- 
title: "Linking to one system"
linktitle: "Linking to one system"
description: "Each variation of a given project item definition must be linked to the same system, or to no system at all."
weight: 1
aliases: 
    - /TA_Help/Topics/Variations_rules_1.html
keywords: "variations, creation rules, linking to a system"
---

Each variation of a given project item definition must be linked to the same system, or to no system at all.

## Definition

The term variation set specifies the set of variations, including the default variation, that exists for a given test module, action, interface entity, or data set.

For example, say we have two **System and Platform** trees - Car Rental and Windows - and one or more variations of the login action have been linked to a node on the Car Rental tree. In this case, no other variation of login may be linked to any node on the Windows tree. This is enforced, as [mentioned earlier](/user-guide/variations/creating-linked-variations/creating-a-variation#li_pgc_d4p_2s), by the fact that the Create Variation dialog box for any new or existing login variation has its **Select System** drop-down list disabled and fixed on Car Rental. Specifically, you cannot select Windows or any other system from the drop-down list. \(You may, however, opt out of linking a variation to the Car Rental tree when you assign keywords to it.\)

-   Case \#1: You create a new variation of the login action prior to any login variation being linked to any version node. The Create Variation dialog box appears as follows.

    ![](/images/TA_Help/Images/ug_systemtree19.png)

-   **Case \#2**: The login variation linked to a version node on the Car Rental tree already exists. Upon creating a new login variation, the Create Variation dialog box appears as follows.

    ![](/images/TA_Help/Images/ug_systemtree20.png)

    This situation continues unless and until every login variation linked to a Car Rental node is de-linked – at that point, the **Select System** drop-down list is re-enabled, allowing you to choose version nodes from other system trees.




