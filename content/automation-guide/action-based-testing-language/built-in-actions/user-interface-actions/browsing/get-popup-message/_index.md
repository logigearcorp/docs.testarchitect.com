--- 
title: "-"
linktitle: "get popup message"
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_popup_message.html
---
keyword: [get popup message, retrieve popup message, get message from popup, retrive message from popup]
---

# get popup message

## Description

Retrieve the messages of one or more recent confirmation, prompt, or alert popups.

## Arguments

-   **variable, variable2, variable3,…,variableN \(not necessarily sequential\)**

    \(Optional\) Names of one or more variables to receive the returned messages displayed in corresponding popups.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](aut_app_testing_safari_apps_popups.html) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](aut_app_testing_web_apps_getting_started.html#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](aut_app_testing_Android_apps_popups.html) for details.
-   variable argument:
    -   For convenience, the argument headersvariable, variable0 and variable1are all used to reference the same item \(that is, the message text of the most recently handled popup\).
    -   Each variableargument is numbered in accordance with the order of handled popups in the current popup session, in reverse chronological order. Specifically,variablespecifies the most recently handled popup,variable2the second most recent, and so on.
    -   A single call to this action may be used to retrieve any or all of the handled popup messages of the current popup session. Specify as manyvariable arguments as there are messages you wish to retrieve, taking care to number them \(variable2, variable5, etc.\) in correspondence with the popups of interest. \(See [Example \#2](bia_get_popup_message.html#section.ex02).\)
    -   If the variables in argumentsvariable, variable2, variable3, etc.have not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: A single popup

**Scenario:** You are testing a shopping cart page with a button, **Delete this item**, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.
3.  The test then retrieves the message of the confirmation popup.

**Action Lines**

![](/images//Images/bia_get_popup_message_single_popup_pgm.png)

**Result**

![](/images//Images/bia_get_popup_message_single_popup_res.png)

## Example - Case 2: A sequence of multiple popups

**Scenario:** You are testing a shopping cart page with a button, **Delete this item**, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.
3.  This triggers an alert popup with the message Item deleted, and a single **OK** button.
4.  The test clicks **OK** in the alert to dismiss it and proceed.
5.  The test then retrieves the following messages in three separate action lines:
    -   The message of the most recently handled popup \(the alert popup\).
    -   The message of the second most recently handled popup \(the confirmation popup\).
    -   The messages of both popups.

**Action Lines**

![](/images//Images/bia_get_popup_message_multiple_popups_pgm.png)

**Result**

![](/images//Images/bia_get_popup_message_multiple_popups_res.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)

**Next topic:**[get status bar value](/TA_Automation/Topics/bia_get_status_bar_value.html)

**Related information**  


[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)

[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)

[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)

[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)

[check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html)

[clear popup queue](/TA_Automation/Topics/bia_clear_popup_queue.html)

