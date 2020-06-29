--- 
title: "click method"
linktitle: "click method"
description: "Description Specifies which type of sendInput() message – that is, separate sendinput messages or single sendinput message – takes effect when TestArchitect performs click -related built-in actions on ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bis_click_method.html
keywords: "built-in settings, click method, settings, click method (settings), click method, specify whether mousemove, mousedown, mouseup events are treated as single sendinput message or separate sendinput messages, treat mousemove, mousedown and mouseup events as single message, treat mousemove, mousedown, mouseup events as separate messages"
---

## Description

Specifies which type of [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) message – that is, separate sendinput messages or single sendinput message – takes effect when TestArchitect performs click-related built-in actions on the AUT.

## Allowable values

{{<note>}}

Technically, in TestArchitect, when a mouse click is specified by an action or method, the following three events are triggered in sequence:

1.  MouseMove: Move the mouse pointer to the specified coordinate.
2.  MouseDown: Press the mouse button.
3.  MouseUp: Release the mouse button.

-   **separate sendinput messages**

    MouseMove, MouseDown, and MouseUp events are submitted as three separate [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) messages. The delay between MouseDown and MouseUp messages, in this case, is determined by the value of the built-in setting [click delay](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/click-delay).

-   **single sendinput message**

    MouseMove, MouseDown, and MouseUp are combined and sent as a single [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) message.


## Default value

single sendinput message

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: All applications.

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

-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.

## Example

By default, the click method setting holds a value of single sendinput message. System issues such as unstable networks, poor remote desktop connections, etc., can cause click-related built-in actions to unexpectedly fail to register with the AUT during automation. Changing the value of this setting to separate sendinput messages is one means of addressing this issue.

![](/images/TA_Automation/Images/bis_click_method_pgm.png)

Note that use of the value separate sendinput messages ensures that a certain delay exists between submissions of the MoveMouse, MouseDown and MouseUp. You can further control the delay between the MouseDown and MouseUp messages by means of the built-in setting [click delay](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/click-delay).




**Related information**  


[click delay](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/click-delay)

[enable click hook](/automation-guide/action-based-testing-language/built-in-settings/other-settings/enable-click-hook)

