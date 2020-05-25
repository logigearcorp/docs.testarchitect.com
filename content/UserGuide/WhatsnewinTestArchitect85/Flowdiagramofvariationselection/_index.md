--- 
title: "Flow diagram of variation selection"
linktitle: "Flow diagram of variation selection"
aliases: 
    - /TA_Help/Topics/Variations_graphical_summary.html
---
# Flow diagram of variation selection {#variations_graphical_summary .concept}

This section summarizes the guidelines for selecting the appropriate variation for each given project item at compile time.

The following flowchart presents a comprehensive guideline for TestArchitect's process of determining the [operative variation](../../TA_Glossary/Topics/glossaryOperativeVariation.html) for each action, interface, data set or test module invoked by a test. This reiterates the information presented in all the prior sections.

**Note:** For brevity, the following abbreviations are used in the flowchart:

KRS
:   [Keyword run set](../../TA_Glossary/Topics/glossaryKeywordRunSet.html): The set of keywords specified for execution.

VRS
:   Version run set: The AUT systems & versions specified for execution.

VCOL
:   [Version Compilation Order List](../../TA_Glossary/Topics/glossaryVersionCompilationOrderList.html): determines the search order for variations linked to nodes of a given system tree\*

OSV
:   Operative system version: Version node initially determined, for each project item at compile time, from the version run set \(VRS\) and the system \(if any\) to which the project item's variation set is linked. The OSV is subject to change during the process of variation selection for each given project item.

![](../Images/variations_flowchart_20160111.png)

**Note:**

\*At compile time, a distinct VCOL, or version compilation order list, is established for each **system:version** listed in the VRS \(version run set\). For each such system, the VCOL starts with the version node specified for it in the VRS. It continues up the given system tree in what's known as a "post-order" traversal. From each given node, the next node traversed is the adjacent "older" sibling \(where, from a graphical standpoint, older means physically higher in the tree\). If no such sibling is available, the parent is accessed. This traversal continues until the particular system node is reached, or a suitable match is found – whichever comes first.

For each project item with variations, the process of determining the [operative variation](../../TA_Glossary/Topics/glossaryOperativeVariation.html) begins with selecting the correct VCOL. If the project item has no linked variations, no VCOL is applied. If it does have linked variations, the VCOL chosen is the one for the system to which those variations are linked. \(Recall that all the linked variations of any given project item must be [linked to the same system](Variations_rules_1.html).\) If the system used by the given project item's variations is not listed in the VRS, then no applicable VCOL exists.

Some points to be clear on:

-   VCOLs are established at compile time, before the selection processes for operative variations begin;
-   One VCOL is established for each system listed in the VRS;
-   The makeup of a VCOL for a given system is a product of a\), the version listed in the VRS for that system, and b\), the particular **Systems and Platforms** tree for that system.
-   Once established for a test run, VCOLs remain constant – they are not affected by the variation selection processes.

**Parent topic:**[Variations](../../TA_Help/Topics/Variations.html)

**Previous topic:**[Rules for executing with variations](../../TA_Help/Topics/Variations_rules_executing.html)

**Related information**  


[Rules for executing with variations](../../TA_Help/Topics/Variations_rules_executing.html)

