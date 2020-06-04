--- 
title: "Just-In-Time UI matching algorithm"
linktitle: "JIT UI matching algorithm"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_JIT_UI_matching.html
---

TestArchitect employs a breadth-first search \(BFS\) algorithm to match a desired MDI-child window and its controls.

**Note:** Addressing controls of MDI applications by using the JIT mode is just fully supported on [Microsoft UI Automation](/TA_Automation/Topics/aut_Using_UIA.html) \(UIA\) technology.

Mapping them as MDI-child windows improves significantly the UI matching process during automation playback. When matching a MDI-child window, JIT mode performs a BFS which is an algorithm for searching tree data structures. It starts at the tree root and explores the neighbor nodes first, before moving to the next level neighbors. The process continues until the target node is found. The following picture illustrates the BFS algorithm.

![](/images//Images/ug_BFS.png "Order in which the nodes are visited")

Each node in the above figure represents a MDI-child window. The number on each node represents the traversing sequence. TestArchitect's matching UI process ends its BFS search for a given MDI-child window as soon as one is found. Next, TestArchitect explores the found child window to discover its controls.

For example, suppose that you have TestArchitect perform a click over the **OK** control belonging to the **location directories** MDI-child window, the UI matching algorithm is as follows:

1.  Match the client window: TestArchitect enumerates and matches the given client window as usual.
2.  Match the **OK** control: After recognizing the appearance of the [interface entity setting](/TA_Automation/Topics/bia_interface_entity_setting.html) action named child window, TestArchitect changes the traditional UI matching mode into the JIT mode:
    1.  Match the **location directories** MDI-child window by performing BFS. The BFS search explores the sibling nodes first, before moving to the deeper level. The goal is to ensure that the MDI-child window is matched as soon as possible without exploring UI controls at the deeper levels.
    2.  Once the **location directories** MDI-child window is matched, TestArchitect stops populating other sibling nodes in the UI hierarchy. Subsequently, TestArchitect continues to match the target control **OK**.

**Parent topic:**[Addressing windows, controls of Multiple Document Interface applications](/TA_Help/Topics/ug_MDI.html)

**Previous topic:**[Mapping controls as MDI-child windows](/TA_Help/Topics/ug_mapping_controls_child_windows.html)

