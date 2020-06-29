--- 
title: "click delay"
linktitle: "click delay"
description: "Description Specifies the delay between submission of MouseDown and subsequent MouseUp messages for mouse clicks sent to the AUT. Applicable only when built-in setting click method is set to separate ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bis_click_delay.html
keywords: "built-in settings, click delay, settings, click delay (settings), click delay, delay between mousedown and mouseup, between mousepress and mouserelease, mouse click sensitivity"
---

## Description

Specifies the delay between submission of MouseDown and subsequent MouseUp messages for mouse clicks sent to the AUT. Applicable only when built-in setting [click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method) is set to separate sendinput messages.

## Value Units

milliseconds

## Default Value

25

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: All applications.

## Applicable Built-in Settings

This built-in setting is only in effect when the value of built-in setting [click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method) is set to [separate sendinput messages](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method#plentry.separate_sendinput_messages).

## Applicable Built-in Actions

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

-   Valid range is from 0 to 2,147,483,647 miliseconds.
-   The click delay setting is only in effect when the value of built-in setting [click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method) is set to [separate sendinput messages](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method#plentry.separate_sendinput_messages). This setting also affects single left-click, single right-click, and double left-click types.
-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.

## Example

![](/images/TA_Automation/Images/bis_click_delay_pgm.png)




**Related information**  


[enable click hook](/automation-guide/action-based-testing-language/built-in-settings/other-settings/enable-click-hook)

[click method](/automation-guide/action-based-testing-language/built-in-settings/other-settings/click-method)

