--- 
title: "click delay"
linktitle: "click delay"
weight: 2
aliases: 
    - /TA_Automation/Topics/bis_click_delay.html
---
keyword: [click delay, delay between mousedown and mouseup, between mousepress and mouserelease, mouse click sensitivity]
---

# click delay

## Description

Specifies the delay between submission of MouseDown and subsequent MouseUp messages for mouse clicks sent to the AUT. Applicable only when built-in setting [click method](click_method.html) is set to separate sendinput messages.

## Value Units

milliseconds

## Default Value

25

## Applicable Systems/Platforms

This built-in setting is supported on the following systems/platforms:

-   Windows: All applications.

## Applicable Built-in Settings

This built-in setting is only in effect when the value of built-in setting [click method](click_method.html) is set to [separate sendinput messages](click_method.html#plentry.separate_sendinput_messages).

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

-   Valid range is from 0 to 2,147,483,647 miliseconds.
-   The click delay setting is only in effect when the value of built-in setting [click method](click_method.html) is set to [separate sendinput messages](click_method.html#plentry.separate_sendinput_messages). This setting also affects single left-click, single right-click, and double left-click types.
-   Use this built-in setting to avoid problems that can result from unstable network connections, virtual machines, remote desktops, etc. Such issues may cause click-related built-in actions to unexpectedly fail to register with the AUT.

## Example

![](/images//Images/bis_click_delay_pgm.png)

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[cleanup timeout](/TA_Automation/Topics/bis_cleanup_timeout.html)

**Next topic:**[control condition](/TA_Automation/Topics/bis_control_condition.html)

**Related information**  


[enable click hook](/TA_Automation/Topics/bis_enable_click_hook.html)

[click method](/TA_Automation/Topics/bis_click_method.html)

