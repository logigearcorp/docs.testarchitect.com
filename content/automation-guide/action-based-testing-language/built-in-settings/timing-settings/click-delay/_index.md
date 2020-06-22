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

Specifies the delay between submission of MouseDown and subsequent MouseUp messages for mouse clicks sent to the AUT. Applicable only when built-in setting [click method](/TA_Automation/Topics/bis_click_method.html) is set to separate sendinput messages.

## Value Units

milliseconds

## Default Value

25

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: All applications.

## Applicable Built-in Settings

This built-in setting is only in effect when the value of built-in setting [click method](/TA_Automation/Topics/bis_click_method.html) is set to [separate sendinput messages](/TA_Automation/Topics/bis_click_method.html#plentry.separate_sendinput_messages).

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

-   Valid range is from 0 to 2,147,483,647 miliseconds.
-   The click delay setting is only in effect when the value of built-in setting [click method](/TA_Automation/Topics/bis_click_method.html) is set to [separate sendinput messages](/TA_Automation/Topics/bis_click_method.html#plentry.separate_sendinput_messages). This setting also affects single left-click, single right-click, and double left-click types.
-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.

## Example

![](/images/TA_Automation/Images/bis_click_delay_pgm.png)




**Related information**  


[enable click hook](/TA_Automation/Topics/bis_enable_click_hook.html)

[click method](/TA_Automation/Topics/bis_click_method.html)

