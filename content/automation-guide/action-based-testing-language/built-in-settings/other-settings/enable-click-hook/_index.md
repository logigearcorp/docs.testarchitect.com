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

## Applicable Built-in Actions

Use of this built-in setting is applicable to the following built-in actions:

-   [click](/TA_Automation/Topics/bia_click.html)
-   [click list item](/TA_Automation/Topics/bia_click_list_item.html)
-   [click picture](/TA_Automation/Topics/bia_click_picture.html)
-   [click select menu](/TA_Automation/Topics/bia_click_select_menu.html)
-   [click table cell](/TA_Automation/Topics/bia_click_table_cell.html)
-   [click text](/TA_Automation/Topics/bia_click_text.html)
-   [click toolbar button](/TA_Automation/Topics/bia_click_toolbar_button.html)
-   [click tree node](/TA_Automation/Topics/bia_click_tree_node.html)
-   [click window](/TA_Automation/Topics/bia_click_window.html)
-   [select](/TA_Automation/Topics/bia_select.html)
-   [select button menu](/TA_Automation/Topics/bia_select_button_menu.html)
-   [select context menu item](/TA_Automation/Topics/bia_select_context_menu_item.html)
-   [select list item menu](/TA_Automation/Topics/bia_select_list_item_menu.html)
-   [select menu item](/TA_Automation/Topics/bia_select_menu_item.html)
-   [select tab](/TA_Automation/Topics/bia_select_tab.html)
-   [select toolbar menu](/TA_Automation/Topics/bia_select_toolbar_menu.html)

## Notes

-   This built-in setting affects only single left-click and right-click types.
-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.
-   This built-in setting is not displayed in the editor by [Content Assist](/TA_Help/Topics/ug_content_assist.html). To use it in the editor, you must manually enter the setting name and its value.
-   The use of hooks tends to slow down the system because they increase the amount of processing the system must perform for each message. Hence it is recommended that you use enable click hook only as a last resort, and disable it as soon as possible. Preferred alternatives for addressing the issue of lost mouse clicks are the built-in settings [click delay](/TA_Automation/Topics/bis_click_delay.html) and [click method](/TA_Automation/Topics/bis_click_method.html).

## Example

Under various test environment conditions, your click-related built-in actions may fail to properly register with the AUT. Setting enable click hook to yes directs TestArchitect to re-execute such built-in actions when they do fail, in each case with the hook mechanism enabled on the subsequent attempt.

![](/images/TA_Automation/Images/bis_enable_click_hook_pgm.png)




**Related information**  


[click delay](/TA_Automation/Topics/bis_click_delay.html)

[click method](/TA_Automation/Topics/bis_click_method.html)

