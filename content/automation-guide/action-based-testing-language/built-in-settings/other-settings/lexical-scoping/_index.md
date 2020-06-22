--- 
title: "lexical scoping"
linktitle: "lexical scoping"
description: "Description Specify which scope binding, dynamic scoping or lexical scoping , is used for TestArchitect local variables and user-defined action arguments. Allowable values yes Employ lexical scoping . ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bis_lexical_scoping.html
keywords: "built-in settings, lexical scoping, settings, lexical scoping, lexical scoping (settings), determine whether to employ lexical scoping or dynamic scoping, specify which scope binding to use, choose which scope binding is used, select scope binding to be applied to local variables and user-define action arguments"
---

## Description

Specify which scope binding, [dynamic scoping](/TA_Automation/Topics/The_test_language_variables.html) or [lexical scoping](/TA_Automation/Topics/The_test_language_variables.html), is used for TestArchitect local variables and user-defined action arguments.

## Allowable values

-   **yes**

    Employ lexical scoping.

-   **no**

    Employ dynamic scoping.


## Default value

yes

## Notes

-   This built-in setting is not displayed in the editor by [Content Assist](/TA_Help/Topics/ug_content_assist.html).
-   Versions of TestArchitect prior to [8.1 Update 1](/TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_1.html) automatically employ dynamic scoping, and do not offer this built-in setting. Hence if your pre-8.1 Update 1 tests rely on the scope of local variables being carried over to child actions, or you are unsure as to whether that was the case, you may want to set lexical scoping to no in the `INITIAL` section of your test modules.




