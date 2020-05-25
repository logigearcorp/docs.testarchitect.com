--- 
title: "winforms raw class"
linktitle: "winforms raw class"
aliases: 
    - /TA_Automation/Topics/bis_winforms_raw_class.html
---
# winforms raw class {#bis_winform_raw_class .reference}

## Description { .section}

Determines whether, during automation, the legacy classes of captured WinForms application controls should be used in identifying those controls, in cases where the option to use TA classes exists.

## Allowable values { .section}

yes
:   Executes the automated test with legacy WinForms class mappings, when the option to do so exists.

no
:   Executes the automated test with new WinForms class mappings \(to TA classes\), when the option to do so exists.

## Default value { .section}

yes

## Notes { .section}

-   This built-in setting is not displayed in the editor by [Content Assist](../../TA_Help/Topics/ug_content_assist.html).
-   This setting only affects controls mapped to WinForms legacy classes which have, in turn, been remapped to TA classes in the applicable $ Class Maps file. Controls mapped to legacy classes which have not been remapped to TA classes are unaffected by this setting.
-   This setting will be deprecated in 2018. It is highly recommended that you use the WinForms command-line tool to update the class mappings for your legacy WinForms captured controls. \([Learn more](../../TA_Help/Topics/ug_class_mapping_WinForms.html).\)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[webdriver mode](../../TA_Automation/Topics/bis_webdriver_mode.html)

