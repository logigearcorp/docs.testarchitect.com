--- 
title: "enable click hook"
linktitle: "enable click hook"
weight: 6
aliases: 
    - /TA_Automation/Topics/bis_enable_click_hook.html
---
keyword: [enable click hook, try again when click action fails to register, determine whether, after click action fails to register, second attempt with made]
---

# enable click hook

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

-   [click](bia_click.html)
-   [click list item](bia_click_list_item.html)
-   [click picture](bia_click_picture.html)
-   [click select menu](bia_click_select_menu.html)
-   [click table cell](bia_click_table_cell.html)
-   [click text](bia_click_text.html)
-   [click toolbar button](bia_click_toolbar_button.html)
-   [click tree node](bia_click_tree_node.html)
-   [click window](bia_click_window.html)
-   [select](bia_select.html)
-   [select button menu](bia_select_button_menu.html)
-   [select context menu item](bia_select_context_menu_item.html)
-   [select list item menu](bia_select_list_item_menu.html)
-   [select menu item](bia_select_menu_item.html)
-   [select tab](bia_select_tab.html)
-   [select toolbar menu](bia_select_toolbar_menu.html)

## Notes

-   This built-in setting affects only single left-click and right-click types.
-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.
-   This built-in setting is not displayed in the editor by [Content Assist](/TA_Help/Topics/ug_content_assist.html). To use it in the editor, you must manually enter the setting name and its value.
-   The use of hooks tends to slow down the system because they increase the amount of processing the system must perform for each message. Hence it is recommended that you use enable click hook only as a last resort, and disable it as soon as possible. Preferred alternatives for addressing the issue of lost mouse clicks are the built-in settings [click delay](bis_click_delay.html) and [click method](bis_click_method.html).

## Example

Under various test environment conditions, your click-related built-in actions may fail to properly register with the AUT. Setting enable click hook to yes directs TestArchitect to re-execute such built-in actions when they do fail, in each case with the hook mechanism enabled on the subsequent attempt.

![](/images//Images/bis_enable_click_hook_pgm.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[color format](/TA_Automation/Topics/bis_color_format.html)

**Next topic:**[ignore html input types](/TA_Automation/Topics/bis_ignore_html_input_types.html)

**Related information**  


[click delay](/TA_Automation/Topics/bis_click_delay.html)

[click method](/TA_Automation/Topics/bis_click_method.html)

