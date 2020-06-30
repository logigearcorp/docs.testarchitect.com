--- 
title: "Create a new branch node"
linktitle: "Create a new branch node"
description: "A branch node is typically used to represent a minor update to a version of a system, the system usually being the AUT."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_variations_create_new_branch.html
keywords: "create a new branch, variations"
---

A branch node is typically used to represent a minor update to a version of a system, the system usually being the AUT.

A branch node is a record of a change to a given entity represented by a system node or, more commonly, a version node or other branch node. Branch nodes are most typically used to represent patches or hot fixes, usually involving such things as bug fixes or performance enhancements for a given version of an AUT.

To create a new branch, do the following:

1.  In the TestArchitect explorer tree, right-click a system or a version node where you want to create a branch.

2.  From the context menu, select **Add Branch Node**.

    ![](/images/TA_Help/Images/Add_branch_variation.png)

    A new branch node is created with an automatically assigned name under your previously selected node.

    ![](/images/TA_Help/Images/New_branch_effect.png)

3.  Unless you're satisfied with the default name, give this branch an appropriate name \(for example: Patches\), and then press Enter.


A new branch is created.

![](/images/TA_Help/Images/New_branch_car_rental.png)

Under this new branch, you may again create [new version](/user-guide/variations/creating-linked-variations/the-systems-tree/creating-a-new-version-node) nodes, as well as new branch nodes.

![](/images/TA_Help/Images/New_branch_car_rental_subversion.png)

{{<note>}} If you delete a branch node, by right-clicking a branch node and then selecting **Delete**, the following dialog box appears with two possible options:

-   **Delete All**: Delete the selected branch node and all its descendant nodes.
-   **Only Branch Node**: Delete only the selected branch node. Its descendant nodes are then moved upward to become children of the branch node's parent node.

![](/images/TA_Help/Images/delete_branch_node.png)


