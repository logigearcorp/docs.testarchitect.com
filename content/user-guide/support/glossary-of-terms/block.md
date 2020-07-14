--- 
title: "block"
linktitle: "block"
description: ""
weight: 30
aliases: 
    - /TA_Glossary/Topics/glossaryBlock.html
keywords: "glossary, block"
---

A logical grouping of action lines at a level below that of test module divisions, test cases, or user-defined actions. In TestArchitect, blocks are defined as the areas between the following control flow actions lines:

-   [repeat](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/repeat) and [until](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/until)
-   [while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/while) and [end while](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-while)
-   [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) and [repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set)
-   Any if action line \(including [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if), [if control exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-control-exists), [if control not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-control-not-exists), etc.\) as well as [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else) or [else if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else-if), and a subsequent [else](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else), [else if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/else-if) or [end if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/end-if).

Scope: In many programming languages, blocks of code also define the scope of local variables declared within their midst. In TestArchitect, that is true only of the [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set)...[repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set) block.
