--- 
title: "version compilation order list \\(VCOL\\)"
linktitle: "version compilation order list \\(VCOL\\)"
description: ""
weight: 156
aliases: 
    - /TA_Glossary/Topics/glossaryVersionCompilationOrderList.html
keywords: "glossary, version compilation order"
---

At compile time, a distinct VCOL, or version compilation order list, is established for each **system:version** listed in the VRS \(version run set\). For each such system, the VCOL starts with the version node specified for it in the VRS. It continues up the given system tree in what's known as a "post-order" traversal. From each given node, the next node traversed is the adjacent "older" sibling \(where, from a graphical standpoint, older means physically higher in the tree\). If no such sibling is available, the parent is accessed. This traversal continues until the particular system node is reached, or a suitable match is found – whichever comes first.

For each project item with variations, the process of determining the [operative variation](/TA_Glossary/Topics/glossaryOperativeVariation.html) begins with selecting the correct VCOL. If the project item has no linked variations, no VCOL is applied. If it does have linked variations, the VCOL chosen is the one for the system to which those variations are linked. \(Recall that all the linked variations of any given project item must be [linked to the same system](/TA_Help/Topics/Variations_rules_1.html).\) If the system used by the given project item's variations is not listed in the VRS, then no applicable VCOL exists.

Some points to be clear on:

-   VCOLs are established at compile time, before the selection processes for operative variations begin;
-   One VCOL is established for each system listed in the VRS;
-   The makeup of a VCOL for a given system is a product of a\), the version listed in the VRS for that system, and b\), the particular **Systems and Platforms** tree for that system.
-   Once established for a test run, VCOLs remain constant – they are not affected by the variation selection processes.

See also: [version compilation order](/TA_Glossary/Topics/glossaryVersionCompilationOrder.html).

