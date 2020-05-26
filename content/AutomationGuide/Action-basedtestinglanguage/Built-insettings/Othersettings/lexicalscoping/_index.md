--- 
title: "lexical scoping"
linktitle: "lexical scoping"
weight: 11
aliases: 
    - /TA_Automation/Topics/bis_lexical_scoping.html
---
# lexical scoping {#reference_v43_1pl_kq .reference}

## Description { .section}

Specify which scope binding, [dynamic scoping](The_test_language_variables.html) or [lexical scoping](The_test_language_variables.html), is used for TestArchitect local variables and user-defined action arguments.

## Allowable values { .section}

yes
:   Employ lexical scoping.

no
:   Employ dynamic scoping.

## Default value { .section}

yes

## Notes { .section}

-   This built-in setting is not displayed in the editor by [Content Assist](../../TA_Help/Topics/ug_content_assist.html).
-   Versions of TestArchitect prior to [8.1 Update 1](../../TA_ReleaseNotes/DITA_source/Whats_New_8.1_update_1.html) automatically employ dynamic scoping, and do not offer this built-in setting. Hence if your pre-8.1 Update 1 tests rely on the scope of local variables being carried over to child actions, or you are unsure as to whether that was the case, you may want to set lexical scoping to no in the `INITIAL` section of your test modules.

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[gdi row identifier percentage](../../TA_Automation/Topics/bis_gdi_row_identifier_percentage.html)

**Next topic:**[linking distance](../../TA_Automation/Topics/bis_linking_distance.html)

