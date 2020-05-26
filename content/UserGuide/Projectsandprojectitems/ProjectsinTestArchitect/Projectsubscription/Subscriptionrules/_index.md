--- 
title: "Subscription rules"
linktitle: "Subscription rules"
weight: 3
aliases: 
    - /TA_Help/Topics/Project_subscription_rules.html
---
# Subscription rules {#Project_subscription_rules .concept}

TestArchitect employs a depth-first search \(DFS\) algorithm to locate, among subscribed projects, the definitions for actions, interface entities, interface elements, data sets, and picture checks.

## Depth-first search { .section}

When searching for a definition, TestArchitect performs a depth-first search \(DFS\), starting from the [host project](../../reuse/../TA_Glossary/Topics/glossaryHostProject.html). DFS is an algorithm for searching for a given node by traversing the data tree starting from the root. Each branch is explored as far as possible, before backtracking. The process continues until the target node is found. The following picture illustrates the DFS algorithm.

![](../../reuse/../TA_Help/Images/Test_results_DFS_2.png "Order in which the nodes are visited")

**Note:** An arrow from node **x** to node **y** means **x** subscribes to **y**. In the above diagram, node 1 subscribes to nodes 2, 7, and 8 which, conversely, are the suppliers for node 1.

Each node in the above figure represents a TestArchitect project. The number on each node represents the traversing sequence. The search order amongst sibling nodes is from left to right,with the left-most child node representing the project that is first in its parent's suppliers list \(the **Selected supplier\(s\)** field of the Subscription dialog box\). The suppliers higher up on the list are searched first. TestArchitect ends its search for a given definition as soon as one is found.

Because a project may act as a supplier for any number of other projects, a given subscription tree may have one or more cross edges, in which more than one subscription path may exist between a subscriber and a non-immediate supplier. When that is the case, TestArchitect still follows the DFS algorithm, traversing all suppliers of each node it encounters in its search, *as long as they have not already been traversed*. That is, during the search, any node that has already been traversed is skipped. The following figure indicates the changes in the traversing order when there is a cross edge from node 2 to node 9 in the above diagram.

![](../../reuse/../TA_Help/Images/Test_results_DFS_2.cross_link.png "Order in which the nodes are visited in case of cross edges")

**Note:** The orange nodes highlight the changes in the traversing order due to cross edging.

**Important:** Circularly linked subscriptions are not allowed. For example, if project A subscribes to project B and project B in turn subscribes to project A.

![](../../reuse/../TA_Help/Images/Circularly_linked_subscription.png)

## Search rules by definition type { .section}

**Actions**

To search for an action, TestArchitect applies a depth-first search \(DFS\) algorithm, starting from the [host project](../../reuse/../TA_Glossary/Topics/glossaryHostProject.html). Once the target action is found, if that action calls another action, the DFS algorithm is again applied, this time starting the search at the supplying project, and using the supplying project's suppliers list.

**Interface entities and elements**

The method by which TestArchitect searches for an interface definition is similar to that used for actions, but with the following rules applied:

-   If the test procedure does not specify which interface to use, only the [default interface](../../reuse/../TA_Help/Topics/Interface_def_set_default_interface.html) of the host project is searched. Non-default interfaces are not candidates for supplying the definition.
-   If the test does specify the interface, only interfaces of the same name in the host and supplier projects are searched. Default interfaces are not eligible as suppliers of the definition.

**Interface entities & elements**

The method by which TestArchitect searches for the interface entities & elements is similar to the method used to search for actions.

**Picture checks**

The method by which TestArchitect searches for the picture checks is similar to the method used to search for actions.

**Data sets**

TestArchitect applies the depth-first search algorithm when searching for a data set definition, in a manner similar to that discussed for actions. Note that, if a required data set definition is defined in the [host project](../../reuse/../TA_Glossary/Topics/glossaryHostProject.html), TestArchitect uses that definition regardless of where the [use data set](../../reuse/../TA_Automation/Topics/bia_use_data_set.html) action is invoked from. That is, while it is possible that the invoked use data set action originates in a user-defined action provided by a supplier project, that fact has no bearing on which project the data set comes from. To put it more generally, the DFS search for a data set starts with the host project and proceeds from there based on that project's suppliers list, independent of the suppliers of any other project items.

The figure below depicts the situation in which data sets of the same name are defined in both the subscriber's and supplier's projects.

![](../../reuse/../TA_Help/Images/Test_results_rules_dataset.png)

![](../../reuse/../TA_Help/Images/Test_results_rules_dataset.png)

Project TEST1 subscribes to project TEST2. Test1 contains the definitions for data set ds1 and test module tm1, the latter of which calls action act1. Project TEST2 contains an action act1 \(which TEST1 does not\) and a definition for data set ds1. Hence both projects have definitions for data set ds1, while only TEST2 has a definition for action act1.

When tm1 calls action act1 \(which uses the data set ds1\), the action is supplied by project TEST2, but the use data set action uses project TEST1's definition of data set ds1, rather than the ds1 defined in TEST2.

The results below, for execution of TEST1's tm1 test module, do indeed indicate that it is TEST1's copy of ds1 that supplied the data.

![](../../reuse/../TA_Help/Images/Test_results_rules_dataset_run_results.png)

**Variations**

TestArchitect also applies a similar depth-first search algorithm when searching for a given variation of any project item, but with qualifications. If a test is run with a variation specification, and a given project item is invoked, and no qualified variation of that item exists in the [host project](../../reuse/../TA_Glossary/Topics/glossaryHostProject.html), the default variation of that host project's item is used. This happens regardless of whether or not a more qualified variation exists in any supplier projects. Only if the given item itself \(that is, the default variation of it\) does not exist in the host project, does the search algorithm expand to the suppliers. And then it applies the same rule to each supplier it encounters as it did the host project.

The figure below depicts the situation in which a specified keyword variation is not defined in the subscriber's project; only the default variation exists within it.

![](../../reuse/../TA_Help/Images/Test_results_rules_variations.png)

If test module tm1 is executed with keyword variation `win`, and tm1 calls action act1, TestArchitect uses the default definition \(act1 in project 1\) because, as shown, there is no variation of act1 defined in Project 1 for keyword `win`. However, if there were also no act1 \(default\) in project 1, TestArchitect would then use `act1 {win}`, as defined in the project Project 2.

**Parent topic:**[Project subscription](../../TA_Help/Topics/Project_subscription.html)

**Previous topic:**[Subscribing to projects](../../TA_Help/Topics/Projects_and_project_items_subscribe_to_projects.html)

