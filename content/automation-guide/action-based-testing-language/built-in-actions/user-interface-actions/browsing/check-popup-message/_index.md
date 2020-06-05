--- 
title: "check popup message"
linktitle: "check popup message"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_popup_message.html
---
keyword: [check popup message, check message displayed in popup, check message in popup against expected value]
---

# check popup message

## Description

Check the messages displayed by one or more confirmation, prompt, or alert popups against their respective expected text strings. Result is Passed ifall values match; otherwise Failed.

## Arguments

-   **expected, expected2, expected3,…,expectedN \(not necessarily sequential\)**

    \(Optional\) Expected values of the messages displayed in the specified popups.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](aut_app_testing_safari_apps_popups.html) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](aut_app_testing_web_apps_getting_started.html#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](aut_app_testing_Android_apps_popups.html) for details.
-   expected argument:
    -   For convenience, the argument headersexpected, expected0 and expected1are all used to reference the same item \(that is, the message text of the most recently handled popup\).
    -   If no value is provided in any given expected argument, TestArchitect considers it an empty string and considers an empty popup message to be a match.
    -   Each expectedargument is numbered in accordance with the order of handled popups in the current popup session, in reverse chronological order. Specifically,expectedspecifies the most recently handled popup,expected2the second most recent, and so on.
    -   A single call to this action may be used to check any or all of the handled popup messages of the current popup session. Specify as manyexpected arguments as there are messages you wish to verify, taking care to number them in correspondence with the popups of interest. \(See [Example \#2](bia_check_popup_message.html#section.ex02).\) Note that this check action reports a PASSED result only if *every one* of the specified expected arguments matches its corresponding popup's message.
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: A single popup

**Scenario:** You are testing a shopping cart page with a button, **Delete this item**, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.
3.  The test then verifies the message of the confirmation popup.

**Action Lines**

![](/images//Images/bia_check_popup_message_single_popup_pgm.png)

**Result**

![](/images//Images/bia_check_popup_message_single_popup_res.png)

## Example - Case 2: A sequence of multiple popups

**Scenario:** You are testing a shopping cart page with a button, **Delete this item**, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.
3.  This triggers an alert popup with the message Item deleted, and a single **OK** button.
4.  The test clicks **OK** in the alert to dismiss it and proceed.
5.  The test then verifies the following in three separate action lines:
    -   The message of the most recently handled popup \(the alert popup\).
    -   The message of the second most recently handled popup \(the confirmation popup\).
    -   The messages of both popups.

**Action Lines**

![](/images//Images/bia_check_popup_message_multiple_popups_pgm.png)

**Result**

![](/images//Images/bia_check_popup_message_multiple_popups_res.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html)

**Next topic:**[check status bar value](/TA_Automation/Topics/bia_check_status_bar_value.html)

**Related information**  


[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)

[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)

[get popup message](/TA_Automation/Topics/bia_get_popup_message.html)

[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)

[check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html)

[clear popup queue](/TA_Automation/Topics/bia_clear_popup_queue.html)

