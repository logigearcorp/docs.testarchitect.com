--- 
title: "clear popup queue"
linktitle: "clear popup queue"
description: "Description Clear any remaining actions from the popup-handler queue, and clear the popup history buffer. Arguments There are no arguments for this action. Valid contexts This action may be used ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_clear_popup_queue.html
keywords: "built-in actions, clear popup queue, clear popup queue (action), iOS (action), clear popup queue, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), stop popup queue"
---

## Description

Clear any remaining actions from the popup-handler queue, and clear the popup history buffer.

## Arguments

There are no arguments for this action.

## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](/TA_Automation/Topics/aut_app_testing_safari_apps_popups.html) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](/TA_Automation/Topics/aut_app_testing_web_apps_getting_started.html#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](/TA_Automation/Topics/aut_app_testing_Android_apps_popups.html) for details.
-   This action is especially useful in ensuring that the proper operation of a new popup session is not corrupted by any popup-handling actions left in the FIFO queue from a previous session. It is recommended that you call this action at the end of a popup session, when the contents of the current popup-handler queue are no longer needed. \(See [Handling one or a series of popups](/TA_Automation/Topics/aut_app_testing_safari_apps_popups.html#section_iv1_x5x_vp) for further information\).

## Applicable Built-In Settings

The following settings are applicable to this action:none

## Applicable Controls

This action is applicable to the following controls:none.

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_clear_popup_queue_pgm.png)




**Related information**  


[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)

[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)

[get popup message](/TA_Automation/Topics/bia_get_popup_message.html)

[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)

[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)

[check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html)

