--- 
title: "get popup message"
linktitle: "get popup message"
description: "Description Retrieve the messages of one or more recent confirmation, prompt, or alert popups. Arguments variable, variable2, variable3,…,variableN (not necessarily sequential) (Optional) Names of one ..."
weight: 14
aliases: 
    - /TA_Automation/Topics/bia_get_popup_message.html
keywords: "built-in actions, get popup message, get popup message (action), iOS (action), Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), retrieve popup message, get message from popup, retrive message from popup"
---

## {{< expand >}} Description

Retrieve the messages of one or more recent confirmation, prompt, or alert popups.

## {{< expand >}} Arguments

-   **variable, variable2, variable3,…,variableN \(not necessarily sequential\)**

    \(Optional\) Names of one or more variables to receive the returned messages displayed in corresponding popups.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes {{< permerlink >}} {#bia_get_popup_message__section.notes} 

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/handling-javascript-popups) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/getting-started-with-web-testing#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/handling-javascript-popups) for details.
-   variable argument:
    -   For convenience, the argument headersvariable, variable0 and variable1are all used to reference the same item \(that is, the message text of the most recently handled popup\).
    -   Each variableargument is numbered in accordance with the order of handled popups in the current popup session, in reverse chronological order. Specifically,variablespecifies the most recently handled popup,variable2the second most recent, and so on.
    -   A single call to this action may be used to retrieve any or all of the handled popup messages of the current popup session. Specify as manyvariable arguments as there are messages you wish to retrieve, taking care to number them \(variable2, variable5, etc.\) in correspondence with the popups of interest. \(See [Example \#2](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-message#section.ex02).\)
    -   If the variables in argumentsvariable, variable2, variable3, etc.have not been declared, the action creates them as globals.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells), [standard ASCII only](/automation-guide/action-based-testing-language/built-in-settings/value-settings/standard-ascii-only).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:none.

## {{< expand >}} Example - Case 1: A single popup

**Scenario:** You are testing a shopping cart page with a button, **Delete this item**, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.
3.  The test then retrieves the message of the confirmation popup.

**Action Lines**

![](/images/TA_Automation/Images/bia_get_popup_message_single_popup_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_popup_message_single_popup_res.png)

## {{< expand >}} Example - Case 2: A sequence of multiple popups {{< permerlink >}} {#bia_get_popup_message__section.ex02} 

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

![](/images/TA_Automation/Images/bia_get_popup_message_multiple_popups_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_get_popup_message_multiple_popups_res.png)




**Related information**  


[click on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-on-next-popup)

[enter text on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/enter-text-on-next-popup)

[get popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-default-text)

[check popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-message)

[check popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-default-text)

[clear popup queue](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/clear-popup-queue)

