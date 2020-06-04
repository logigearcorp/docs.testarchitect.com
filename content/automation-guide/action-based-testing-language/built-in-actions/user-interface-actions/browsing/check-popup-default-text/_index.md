--- 
title: "-"
linktitle: "check popup default text"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_popup_default_text.html
---
keyword: [check popup default text, check default text in popup, check default text in prompt poppup against exepected value]
---

# check popup default text

## Description

Check the default text of the user-entry fields of one or more prompt popups against their respective expected values. Result is Passed ifall values match; otherwise Failed.

## Arguments

-   **message**

    Identifying message text of prompt popup\(s\) of interest.

-   **expected, expected2, expected3,…,expectedN \(not necessarily sequential\)**

    \(Optional\) Expected values of the default texts displayed in the specified prompt popups.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](aut_app_testing_safari_apps_popups.html) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](aut_app_testing_web_apps_getting_started.html#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](aut_app_testing_Android_apps_popups.html) for details.
-   message argument:
    -   If no value is provided in this argument, any prompt without a message is considered a match.
    -   For added flexibility, wildcards may be used in this argument. For example: given a message argument with value of \{Please reenter your.\*\}, TestArchitect searches for prompt popups whose message beginnings match the string Please reenter your. \(See example below.\)

        **Tip:** In more general terms, this argument accepts regular expressions.

-   expected argument:
    -   For convenience, the argument headersexpected, expected0 and expected1are all used to reference the same item \(that is, the default text of the most recent matching prompt popup\).
    -   Numbers appended to theexpectedarguments reference only prompts in the recent popup history that have messages matching the contents of the message argument. Any other prompts, for the purposes of the current action, are ignored. The numbers correspond to the reverse order in which those popups were handled. Hence,expectedreferences the most recently handled prompt popup satisfying the message text,expected2the second most recent, and so on.
    -   In cases where multiple prompts satisfy the contents of message, a single call to this action can be used to check any or all of the respective default text strings. Specify as many expected arguments as there are texts you wish to verify, taking care to number them in correspondence with the specific matching prompts of interest. \(See [Example \#2](bia_get_popup_default_text.html#section.ex02).\) Note that this check action reports a PASSED result only if *every one* of the specified expected arguments matches the default text of its corresponding prompt.
    -   If you want to verify a default text of a single specific prompt popup, replace expected with your desire expectedN, for example, expected2. \(See example \#2.\)
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html), [standard ASCII only](bis_standard_ASCII_only.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: A single popup

**Scenario:** You are testing a customer information page with a button, **Sign up**, used for submitting one's name:

1.  Upon clicking the button, a prompt appears with one input field and two buttons: **OK** and **Cancel**.

    **Note:** The prompt popup displays the fields:

    -   Message: Please enter your name
    -   Default text: Joe Doe
2.  The test enters a new input value, e.g. Jane Doe, and then clicks **OK** to proceed.
3.  The test then verifies the default text of the prompt popup based on a given message.

**Action Lines**

![](/images//Images/bia_check_popup_default_text_single_popup_pgm.png)

**Result**

![](/images//Images/bia_check_popup_default_text_single_popup_res.png)

## Example - Case 2: A sequence of multiple popups

**Scenario:** You are testing an email registration page, with a button, **Sign up**, used for submitting a new email address:

1.  Upon clicking the button, a prompt popup appears with one input field and two buttons: **OK** and **Cancel**.

    **Note:** This first prompt popup displays the following:

    -   Message: Please enter your email address
    -   Default text: Joe.doe@example.com
2.  An invalid email address is entered \(e.g. Doe\), and then **OK** is clicked to proceed.
3.  An alert popup is triggered to notify user of the invalid email address. It has one button, **OK** .
4.  The test clicks **OK** in the alert to dismiss it and proceed.
5.  An additional prompt popup appears emphasizing the need for a valid email address.

    **Note:** This second prompt popup displays:

    -   Message: Please enter a valid email
    -   Default text: Jane.doe@example.com
6.  A valid email address, e.g. Jonnie.doe@gmail.com, is now entered, and **OK** clicked.
7.  The test then verifies the following default texts:

    -   The default text of the prompt popup whose message is Please enter a valid email.
    -   The default text of the prompt popup whose message is Please enter your email address.
    \(Hint: We can verify both default texts in a single action call by specifying prompts whose messages begin with the string Please enter\)


**Action Lines**

![](/images//Images/bia_check_popup_default_text_multiple_popups_pgm.png)

**Result**

![](/images//Images/bia_check_popup_default_text_multiple_popups_res.png)

**Parent topic:**[Browsing](/TA_Automation/Topics/bia_browsing.html)

**Next topic:**[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)

**Related information**  


[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)

[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)

[get popup message](/TA_Automation/Topics/bia_get_popup_message.html)

[get popup default text](/TA_Automation/Topics/bia_get_popup_default_text.html)

[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)

[clear popup queue](/TA_Automation/Topics/bia_clear_popup_queue.html)

