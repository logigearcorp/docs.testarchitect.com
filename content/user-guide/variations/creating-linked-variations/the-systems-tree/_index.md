--- 
title: "The systems tree"
linktitle: "The systems tree"
weight: 1
aliases: 
    - /TA_Help/Topics/Variations_create_linked_system_tree.html
---

The linked variations solution is based upon a user-generated model of the various systems which affect the behavior of the application under test.The model for each such system usually reflects its incremental refinement over time, with either a linear form, or a tree structure sprouting various nodes, each representing a different version or sub-version. Variations of definitions can then be linked to version nodes in this tree.

Any number of systems trees may be created for a repository, each modeling some aspect of an application \(or applications\) addressed by a project, or an aspect of the environment \(that is, a system or platform, as discussed in the [introduction](Variations_intro.html)\). The most common system to model is an AUT itself, as it undergoes development.

-   **[Creating a new system \(application under test\)](/TA_Help/Topics/Variations_create_linked_create_new_system.html)**  
Create a new system tree to represent a given dimension of variability of an application under test, or of its environment.
-   **[Creating a new version node](/TA_Help/Topics/Variations_create_linked_create_new_version_node.html)**  
Create version nodes to represent specific variations of a given system.
-   **[Create a new branch node](/TA_Help/Topics/ug_variations_create_new_branch.html)**  
A branch node is typically used to represent a minor update to a version of a system, the system usually being the AUT.
-   **[Maintaining and modifying a system tree](/TA_Help/Topics/Variations_create_linked_mainitaining_modifying_system_tree.html)**  
As is evident from the context menu for any node in the **Systems and Platforms** tree, nodes may be renamed, and can be added or deleted from the tree. What is not directly evident is that, to a limited degree, a tree's structure may also be modified by rearranging its nodes and subtrees.

**Parent topic:**[Creating linked variations](/TA_Help/Topics/Variations_create_linked.html)

**Next topic:**[Creating a variation](/TA_Help/Topics/Variations_linking.html)

