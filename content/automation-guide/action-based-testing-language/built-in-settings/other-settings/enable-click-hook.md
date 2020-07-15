--- 
title: "enable click hook"
linktitle: "enable click hook"
description: "Description Specifies whether, after a click -related built-in action is executed and fails to register, a second attempt is made with the hook mechanism enabled. ( Learn more. ) Enabling of hook ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bis_enable_click_hook.html
keywords: "built-in settings, enable click hook, settings, enable click hook (settings), enable click hook, try again when click action fails to register, determine whether, after click action fails to register, second attempt with made"
---

## Description

Specifies whether, after a click-related built-in action is executed and fails to register, a second attempt is made with the hook mechanism enabled. \([Learn more.](https://msdn.microsoft.com/en-us/library/windows/desktop/ms644959(v=vs.85).aspx)\) Enabling of hook helps ensure a successful click.

## Allowable values

-   **yes**

    Enables hook.

-   **no**

    Disables hook.


## Default value

no

## Applicable Systems/Platforms

Use of this built-in setting is supported on the following systems/platforms:

-   Windows: Win32 applications.

## Applicable Built-in Actions {{< permerlink >}} {#bis_enable_click_hook__section_n5n_tgq_sv} 

Use of this built-in setting is applicable to the following built-in actions:

-   [click](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click)
-   [click list item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-list-item)
-   [click picture](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/picture-handling/click-picture)
-   [click select menu](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/click-select-menu)
-   [click table cell](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/click-table-cell)
-   [click text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/click-text)
-   [click toolbar button](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/click-toolbar-button)
-   [click tree node](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/click-tree-node)
-   [click window](/automation-guide/action-based-testing-language/built-in-actions/system-actions/mouse/click-window)
-   [select](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/select)
-   [select button menu](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/select-button-menu)
-   [select context menu item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/select-context-menu-item)
-   [select list item menu](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/select-list-item-menu)
-   [select menu item](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/select-menu-item)
-   [select tab](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tab-controls/select-tab)
-   [select toolbar menu](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/select-toolbar-menu)

## Notes

-   This built-in setting affects only single left-click and right-click types.
-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.
-   This built-in setting is not displayed in the editor by [Content Assist](/user-guide/getting-started/the-test-editor/content-assist/). To use it in the editor, you must manually enter the setting name and its value.
-   The use of hooks tends to slow down the system because they increase the amount of processing the system must perform for each message. Hence it is recommended that you use enable click hook only as a last resort, and disable it as soon as possible. Preferred alternatives for addressing the issue of lost mouse clicks are the built-in settings [click delay](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/click-delay) and [click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method).

## Example

Under various test environment conditions, your click-related built-in actions may fail to properly register with the AUT. Setting enable click hook to yes directs TestArchitect to re-execute such built-in actions when they do fail, in each case with the hook mechanism enabled on the subsequent attempt.

![](/images/TA_Automation/Images/bis_enable_click_hook_pgm.png)




**Related information**  


[click delay](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/click-delay)

[click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method)

