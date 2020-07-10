--- 
title: "check popup default text"
linktitle: "check popup default text"
description: "Description Check the default text of the user-entry fields of one or more prompt popups against their respective expected values. Result is Passed if all values match ; otherwise Failed . Arguments ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_check_popup_default_text.html
keywords: "built-in actions, check popup default text, check popup default text (action), iOS (action), check popup default text, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), check default text in popup, check default text in prompt poppup against exepected value"
---

## {{< expand >}} Description

Check the default text of the user-entry fields of one or more prompt popups against their respective expected values. Result is Passed if all values match; otherwise Failed.

## {{< expand >}} Arguments

-   **message**

    Identifying message text of prompt popup\(s\) of interest.

-   **expected, expected2, expected3,…,expectedN \(not necessarily sequential\)**

    \(Optional\) Expected values of the default texts displayed in the specified prompt popups.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes {{< permerlink >}} {#bia_check_popup_default_text__section.notes} 

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/handling-javascript-popups) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/getting-started-with-web-testing#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/handling-javascript-popups) for details.
-   message argument:
    -   If no value is provided in this argument, any prompt without a message is considered a match.
    -   For added flexibility, wildcards may be used in this argument. For example: given a message argument with value of \{Please reenter your.\*\}, TestArchitect searches for prompt popups whose message beginnings match the string Please reenter your. \(See example below.\)

        {{<tip>}} In more general terms, this argument accepts regular expressions.

-   expected argument:
    -   For convenience, the argument headersexpected, expected0 and expected1are all used to reference the same item \(that is, the default text of the most recent matching prompt popup\).
    -   Numbers appended to theexpectedarguments reference only prompts in the recent popup history that have messages matching the contents of the message argument. Any other prompts, for the purposes of the current action, are ignored. The numbers correspond to the reverse order in which those popups were handled. Hence,expectedreferences the most recently handled prompt popup satisfying the message text,expected2the second most recent, and so on.
    -   In cases where multiple prompts satisfy the contents of message, a single call to this action can be used to check any or all of the respective default text strings. Specify as many expected arguments as there are texts you wish to verify, taking care to number them in correspondence with the specific matching prompts of interest. \(See [Example \#2](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-default-text#section.ex02).\) Note that this check action reports a PASSED result only if *every one* of the specified expected arguments matches the default text of its corresponding prompt.
    -   If you want to verify a default text of a single specific prompt popup, replace expected with your desire expectedN, for example, expected2. \(See example \#2.\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:none.

## {{< expand >}} Example - Case 1: A single popup

**Scenario:** You are testing a customer information page with a button, **Sign up**, used for submitting one's name:

1.  Upon clicking the button, a prompt appears with one input field and two buttons: **OK** and **Cancel**.

    {{<note>}} The prompt popup displays the fields:

    -   Message: Please enter your name
    -   Default text: Joe Doe
2.  The test enters a new input value, e.g. Jane Doe, and then clicks **OK** to proceed.
3.  The test then verifies the default text of the prompt popup based on a given message.

**Action Lines**

![](/images/TA_Automation/Images/bia_check_popup_default_text_single_popup_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_popup_default_text_single_popup_res.png)

## {{< expand >}} Example - Case 2: A sequence of multiple popups

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
7.  The test then verifies the following default texts:

    -   The default text of the prompt popup whose message is Please enter a valid email.
    -   The default text of the prompt popup whose message is Please enter your email address.
    \(Hint: We can verify both default texts in a single action call by specifying prompts whose messages begin with the string Please enter\)


**Action Lines**

![](/images/TA_Automation/Images/bia_check_popup_default_text_multiple_popups_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_popup_default_text_multiple_popups_res.png)



**Related information**  


[click on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-on-next-popup)

[enter text on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/enter-text-on-next-popup)

[get popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-message)

[get popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-default-text)

[check popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-message)

[clear popup queue](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/clear-popup-queue)

