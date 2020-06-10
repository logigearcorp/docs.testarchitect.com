--- 
title: "Creating a new version node"
linktitle: "Creating a new version node"
weight: 2
aliases: 
    - /TA_Help/Topics/Variations_create_linked_create_new_version_node.html
---

Create version nodes to represent specific variations of a given system.

The purpose of each system that you create under the **Systems & Platforms** node is to embody a tree consisting of version nodes. Typically, you would have a system node representing every “progressively variable” quantity related to your testing, such as AUT \(for version changes\), test platform O/S, etc. For each such system node, you need to create a subordinate node representing each existing variation of the given quantity \(or at least each variation with which you need to be concerned\), such as each version of the O/S on which the AUT is supported. A variation of a TestArchitect project item that is created for the purpose of accommodating a given system change would then be associated with the appropriate system:version node when created.

1.  In the TestArchitect explorer tree, right-click a system node.

    A system node is a top-level node under the **Systems & Platforms** node, like **Car Rental**, created in the [previous task](/TA_Help/Topics/Variations_create_linked_create_new_system.html).

2.  From the context menu, select **Add Version**.

    ![](/images//Images/Add_version_variation.png)

    A new version node is created with an automatically assigned name under your selected system node.

    ![](/images//Images/New_version_effect.png)

3.  Unless you're satisfied with the default name, give this version node an appropriate name \(for example: 1\), and then press Enter.


The new version node is added under the selected system node.

![](/images//Images/New_version_car_rental_1.png)

You may also create a new version, subversion, under your main version node by repeating above procedures. For example, create version 1.1 under version 1.

![](/images//Images/New_subversion_car_rental_1.1.png)

**Parent topic:**[The systems tree](/TA_Help/Topics/Variations_create_linked_system_tree.html)

