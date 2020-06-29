--- 
title: "The systems tree"
linktitle: "The systems tree"
description: "The linked variations solution is based upon a user-generated model of the various systems which affect the behavior of the application under test."
weight: 1
aliases: 
    - /TA_Help/Topics/Variations_create_linked_system_tree.html
keywords: "systems tree"
---

The linked variations solution is based upon a user-generated model of the various systems which affect the behavior of the application under test.The model for each such system usually reflects its incremental refinement over time, with either a linear form, or a tree structure sprouting various nodes, each representing a different version or sub-version. Variations of definitions can then be linked to version nodes in this tree.

Any number of systems trees may be created for a repository, each modeling some aspect of an application \(or applications\) addressed by a project, or an aspect of the environment \(that is, a system or platform, as discussed in the [introduction](/user-guide/variations/introduction-to-variations)\). The most common system to model is an AUT itself, as it undergoes development.

-   **[Creating a new system \(application under test\)](/user-guide/variations/creating-linked-variations/the-systems-tree/creating-a-new-system-application-under-test)**  
Create a new system tree to represent a given dimension of variability of an application under test, or of its environment.
-   **[Creating a new version node](/user-guide/variations/creating-linked-variations/the-systems-tree/creating-a-new-version-node)**  
Create version nodes to represent specific variations of a given system.
-   **[Create a new branch node](/user-guide/variations/creating-linked-variations/the-systems-tree/create-a-new-branch-node)**  
A branch node is typically used to represent a minor update to a version of a system, the system usually being the AUT.
-   **[Maintaining and modifying a system tree](/user-guide/variations/creating-linked-variations/the-systems-tree/maintaining-and-modifying-a-system-tree)**  
As is evident from the context menu for any node in the **Systems and Platforms** tree, nodes may be renamed, and can be added or deleted from the tree. What is not directly evident is that, to a limited degree, a tree's structure may also be modified by rearranging its nodes and subtrees.



