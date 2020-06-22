--- 
title: "get popup default text"
linktitle: "get popup default text"
description: "Description Retrieve the default text of the user-entry field of one or more recent prompt popups. Arguments message Identifying message text of prompt popup(s) of interest. variable, variable2, ..."
weight: 13
aliases: 
    - /TA_Automation/Topics/bia_get_popup_default_text.html
keywords: "built-in actions, get popup default text, get popup default text (action), iOS (action), Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), get default text from popup, retrieve popup default text, get default text from propmt popup"
---

## Description

Retrieve the default text of the user-entry field of one or more recent prompt popups.

## Arguments

-   **message**

    Identifying message text of prompt popup\(s\) of interest.

-   **variable, variable2, variable3,…,variableN \(not necessarily sequential\)**

    \(Optional\) Names of one or more variables to receive the returned default text displayed in corresponding prompt popups.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](/TA_Automation/Topics/aut_app_testing_safari_apps_popups.html) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](/TA_Automation/Topics/aut_app_testing_web_apps_getting_started.html#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](/TA_Automation/Topics/aut_app_testing_Android_apps_popups.html) for details.
-   message argument:
    -   If no value is provided in this argument, any prompt without a message is considered a match.
    -   For added flexibility, wildcards may be used in this argument. For example: given a message argument with value of \{Please reenter your.\*\}, TestArchitect searches for prompt popups whose message beginnings match the string Please reenter your. \(See example below.\)

{{<tip>}} In more general terms, this argument accepts regular expressions.

-   variable argument:
    -   For convenience, the argument headersvariable, variable0 and variable1are all used to reference the same item \(that is, the default text of the most recent matching prompt popup\).
    -   Numbers appended to thevariablearguments reference only prompts in the recent popup history that have messages matching the contents of the message argument. Any other prompts, for the purposes of the current action, are ignored. The numbers correspond to the reverse order in which those popups were handled. Hence,variablereferences the most recently handled prompt popup satisfying the message text,variable2the second most recent, and so on. \(See [Example \#2](/TA_Automation/Topics/bia_get_popup_default_text.html#section.ex02).\)
    -   In cases where multiple recent prompt popups satisfy the contents of message, a single call to this action can retrieve any or all of the respective default text strings. Specify as many variable arguments as there are texts you wish to retrieve, taking care to number them in correspondence with the specific matching prompts of interest. \(See [Example \#2](/TA_Automation/Topics/bia_get_popup_default_text.html#section.ex02).\)
    -   If the variables in argumentsvariable, variable2, variable3, etc.have not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html), [standard ASCII only](/TA_Automation/Topics/bis_standard_ASCII_only.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: A single popup

**Scenario:** You are testing a customer information page with a button, **Sign up**, used for submitting one's name:

1.  Upon clicking the button, a prompt appears with one input field and two buttons: **OK** and **Cancel**.

{{<note>}} The prompt popup displays the fields:

    -   Message: Please enter your name
    -   Default text: Joe Doe
2.  The test enters a new input value, e.g. Jane Doe, and then clicks **OK** to proceed.
3.  The test then retrieves the default text of the prompt popup based on a given message.

**Action Lines**

![](/images/TA_Automation/Images/bia_get_popup_default_text_single_popup_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_popup_default_text_single_popup_res.png)

## Example - Case 2: A sequence of multiple popups

**Scenario:** You are testing an email registration page, with a button, **Sign up**, used for submitting a new email address:

1.  Upon clicking the button, a prompt popup appears with one input field and two buttons: **OK** and **Cancel**.

{{<note>}} This first prompt popup displays the following:

    -   Message: Please enter your email address
    -   Default text: Joe.doe@example.com
2.  An invalid email address is entered \(e.g. Doe\), and then **OK** is clicked to proceed.
3.  An alert popup is triggered to notify user of the invalid email address. It has one button, **OK** .
4.  The test clicks **OK** in the alert to dismiss it and proceed.
5.  An additional prompt popup appears emphasizing the need for a valid email address.

{{<note>}} This second prompt popup displays:

    -   Message: Please enter a valid email
    -   Default text: Jane.doe@example.com
6.  A valid email address, e.g. Jonnie.doe@gmail.com, is now entered, and **OK** clicked.
7.  The test then retrieves the following default texts of the user-entry prompts:

    -   The default text of the prompt popup whose message is Please enter a valid email.
    -   The default text of the prompt popup whose message is Please enter your email address.
    \(Hint: We can retrieve both default texts in a single action call by specifying prompts whose messages begin with the string Please enter\)


**Action Lines**

![](/images/TA_Automation/Images/bia_get_popup_default_text_multiple_popups_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_popup_default_text_multiple_popups_res.png)




**Related information**  


[click on next popup](/TA_Automation/Topics/bia_click_on_next_popup.html)

[enter text on next popup](/TA_Automation/Topics/bia_enter_text_on_next_popup.html)

[get popup message](/TA_Automation/Topics/bia_get_popup_message.html)

[check popup message](/TA_Automation/Topics/bia_check_popup_message.html)

[check popup default text](/TA_Automation/Topics/bia_check_popup_default_text.html)

[clear popup queue](/TA_Automation/Topics/bia_clear_popup_queue.html)

