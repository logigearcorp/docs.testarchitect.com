--- 
title: "Creating a variation"
linktitle: "Creating a variation"
weight: 2
aliases: 
    - /TA_Help/Topics/Variations_linking.html
---
# Creating a variation {#variations_linking .task}

How to create a variation of a project item.

1.  Copy the definition \(test module, action, interface entity or data set\) that you want to create the variation of by right-clicking its node, and selecting **Copy**:

    ![](../Images/ug_systemtree3.png)

2.  Right-click the folder node in which you want the variation to reside, and then select **Paste as Variation**.

    ![](../Images/ug_systemtree4.png)

    **Remember:** For test modules and data sets only, the variation must be pasted into the same folder as the source definition .

3.  If no keywords are to apply to this variation, proceed to step [3](Variations_linking.md#step.linked_var).
4.  In the Create Variation dialog box, enter any [variation keywords](Variations_create_keyword.html) that apply into the **Use keyword\(s\)** box.

    For example, enter spanish.

5.  If no system versions are to be linked to this variation, proceed to step [6](Variations_linking.md#step.finished).
6.  Select the **Links to version node** check box, and then select a system from the **Select system** drop-down list.

    For example, select the **Car Rental** system.

    ![](../Images/ug_systemtree33.png)

    **Note:**

    -   A [branch node](ug_variations_create_new_branch.html) is not linkable to a variation. In other words, you are not allowed to link a variation to a branch node.
    -   If the **Select system** drop-down list is disabled, it is for one of two possible reasons:
        -   Only one system \(e.g., **Car Rental**\) currently exists under the **Systems & Platforms** node, or
        -   Another variation of this project item has already been linked to a node of some system \(specifically, the system displayed in the header of the list\). Such linking restricts each variation of the entire [variation set](../../TA_Glossary/Topics/glossaryVariationSet.html) to that system, or to no system at all. \(See [Linking to one system](Variations_rules_1.md#p_gkf_3dy_dm).\)
7.  Link the variation to one or more system versions by selecting the appropriate check boxes under the selected system.

    For example, select nodes **1.1** and **1.2**.

    ![](../Images/ug_systemtree16.png)

8.  Click **OK**.


The new variation appears as a node in theTestArchitect explorer tree, identified by its name and variation signature, in the form of <default definition name\> \{<System\>:<node1\>, <node2\>\} \{<keyword1\>, <keyword2\>\}

![](../Images/ug_systemtree17.png)

**Parent topic:**[Creating linked variations](../../TA_Help/Topics/Variations_create_linked.html)

**Previous topic:**[The systems tree](../../TA_Help/Topics/Variations_create_linked_system_tree.html)

**Next topic:**[Inspecting and changing links](../../TA_Help/Topics/Variations_inspecting_removing.html)

