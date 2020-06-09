--- 
title: "click method"
linktitle: "click method"
weight: 4
aliases: 
    - /TA_Automation/Topics/bis_click_method.html
---
keyword: [click method, specify whether mousemove, mousedown, mouseup events are treated as single sendinput message or separate sendinput messages, treat mousemove, mousedown and mouseup events as single message, treat mousemove, mousedown, mouseup events as separate messages]
---

# click method

## Description

Specifies which type of [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) message – that is, separate sendinput messages or single sendinput message – takes effect when TestArchitect performs click-related built-in actions on the AUT.

## Allowable values

**Note:**

Technically, in TestArchitect, when a mouse click is specified by an action or method, the following three events are triggered in sequence:

1.  MouseMove: Move the mouse pointer to the specified coordinate.
2.  MouseDown: Press the mouse button.
3.  MouseUp: Release the mouse button.

-   **separate sendinput messages**

    MouseMove, MouseDown, and MouseUp events are submitted as three separate [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) messages. The delay between MouseDown and MouseUp messages, in this case, is determined by the value of the built-in setting [click delay](click_delay.html).

-   **single sendinput message**

    MouseMove, MouseDown, and MouseUp are combined and sent as a single [sendInput\(\)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms647591(v=vs.85).aspx) message.


## Default value

single sendinput message

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: All applications.

## Applicable Built-in Actions

Use of this built-in setting is applicable to the following built-in actions:

-   [click](click.html)
-   [click list item](click_list_item.html)
-   [click picture](click_picture.html)
-   [click select menu](click_select_menu.html)
-   [click table cell](click_table_cell.html)
-   [click text](click_text.html)
-   [click toolbar button](click_toolbar_button.html)
-   [click tree node](click_tree_node.html)
-   [click window](click_window.html)
-   [select](select.html)
-   [select button menu](select_button_menu.html)
-   [select context menu item](select_context_menu_item.html)
-   [select list item menu](select_list_item_menu.html)
-   [select menu item](select_menu_item.html)
-   [select tab](select_tab.html)
-   [select toolbar menu](select_toolbar_menu.html)

## Notes

-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.

## Example

By default, the click method setting holds a value of single sendinput message. System issues such as unstable networks, poor remote desktop connections, etc., can cause click-related built-in actions to unexpectedly fail to register with the AUT during automation. Changing the value of this setting to separate sendinput messages is one means of addressing this issue.

![](/images//Images/bis_click_method_pgm.png)

Note that use of the value separate sendinput messages ensures that a certain delay exists between submissions of the MoveMouse, MouseDown and MouseUp. You can further control the delay between the MouseDown and MouseUp messages by means of the built-in setting [click delay](click_delay.html).

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[character recognition technique](/TA_Automation/Topics/bis_character_recognition_technique.html)

**Next topic:**[color format](/TA_Automation/Topics/bis_color_format.html)

**Related information**  


[click delay](/TA_Automation/Topics/bis_click_delay.html)

[enable click hook](/TA_Automation/Topics/bis_enable_click_hook.html)

