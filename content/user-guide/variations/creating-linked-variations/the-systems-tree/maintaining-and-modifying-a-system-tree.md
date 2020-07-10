--- 
title: "Maintaining and modifying a system tree"
linktitle: "Maintaining and modifying a system tree"
description: "As is evident from the context menu for any node in the Systems and Platforms tree, nodes may be renamed, and can be added or deleted from the tree. What is not directly evident is that, to a limited degree, a tree's structure may also be modified by rearranging its nodes and subtrees."
weight: 4
aliases: 
    - /TA_Help/Topics/Variations_create_linked_mainitaining_modifying_system_tree.html
keywords: "maintaining, system tree, modifying"
---

As is evident from the context menu for any node in the **Systems and Platforms** tree, nodes may be renamed, and can be added or deleted from the tree. What is not directly evident is that, to a limited degree, a tree's structure may also be modified by rearranging its nodes and subtrees.

Nodes cannot be made to ascend or descend to a different level – or, to put it more generally, once a node is created, the node can never change its parent. However, the order of the sibling nodes – nodes that are subnodes of the same parent node – can be changed. This is important because the order of sibling nodes can determine which variations of test modules, actions, interface entities, and data sets are invoked for a given test run. This is called the version compilation order and its implications are discussed in [Rules for executing with variations](/user-guide/variations/rules-for-executing-with-variations/). For now though, let's just see how to modify this version compilation order.

To demonstrate, first of all, let's create several additional nodes, residing under the **Car Rental** system tree as follows: \(See [Creating new system tree](/user-guide/variations/creating-linked-variations/the-systems-tree/creating-a-new-system-application-under-test/) for details.\)

![](/images/TA_Help/Images/ug_systemtree11.png)

1.  Once you've re-created the system tree shown above, complete the following steps:
2.  Double-click the node labelled **2.1**.

3.  In the main panel, click the **Version** tab. This tab presents a Version Compilation Order List panel for version node **2.1**, which is simply an ordered list of the descendants of node **2.1**, presented in the same order as they exist on the tree.

    {{<note>}}

    -   The **Version** tabs of subnodes of any given system tree are provided for convenience. This tab facilitates the node-reordering process.
    -   The **Up** and **Down** buttons are used to alter the order of nodes in the list.
    ![](/images/TA_Help/Images/ug_systemtree24.png)

4.  In the Version Compilation Order panel, select node **2.1.3**.

5.  Click the **Up** button.

    The node **2.1.3** moves up one position. This is also immediately reflected in the **Car Rental** tree.

    ![](/images/TA_Help/Images/ug_systemtree13.png)

6.  Double-click the **Car Rental** node, and then select the **Version** tab.

    The Version Compilation Order List panel, comprised of all of the subnodes of the **Car Rental** tree \(that is, all of the descendant nodes of **Car Rental**\), appears.

    ![](/images/TA_Help/Images/ug_systemtree14.png)

7.  Select node **2.1.1** from the list, and then click the **Up** button.

    Node **2.1.1** does not move. As mentioned, nodes can only be repositioned relative to their siblings, and node **2.1.1** is already at the top of its sibling list.

8.  Select node **1** from the list, and then click the **Down** button.

    Node **1** has been repositioned below node **2**, its sibling. But, in the process, it has taken its entire sub tree along with it:

    ![](/images/TA_Help/Images/ug_systemtree15.png)



