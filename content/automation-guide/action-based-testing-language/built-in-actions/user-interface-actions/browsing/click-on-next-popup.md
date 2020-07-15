--- 
title: "click on next popup"
linktitle: "click on next popup"
description: "Description Click a specified button in a prompt, alert, or confirmation popup. Arguments button Displayed text of button to click. Valid contexts This action may be used within the following project ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_click_on_next_popup.html
keywords: "built-in actions, click on next popup, click on next popup (action), iOS (action), click on next popup, Safari, iOS (action), iOS, Safari (action), Android (action), Android, Google Chrome (action), Google Chrome, Android (action), Safari, macOS (action), macOS, Safari (action), click on specified button in next popup"
---

## Description

Click a specified button in a prompt, alert, or confirmation popup.

## Arguments

-   **button**

    Displayed text of button to click.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes  

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/handling-javascript-popups) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/getting-started-with-web-testing#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/handling-javascript-popups) for details.
-   Because it is not possible for TestArchitect to interface with JavaScript popups in a conventional manner, this action suppresses the display of the popup to which it is targeted.

    {{<caution>}}

    The actual appearance of a popup on your AUT's display during testing will prevent automation from proceeding. If you do indeed see a popup, probable causes are:

    -   you specified a button that does not exist, or
    -   your sequence of popup-handling action lines \(click on next popup and enter text on next popup\) did not properly account for the order in which the actual popups were invoked.
-   To handle a sequence of multiple popups, use several popup-handling actions \(click on next popup and enter text on next popup\) in your test. These actions are stored to a FIFO \(First-In, First-Out\) queue and each is retrieved from the queue when required for the invocation of a new popup.
    -   For Safari
        -   on iOS, refer to [Handling one or a series of popups](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-safari-on-ios/handling-javascript-popups#section_iv1_x5x_vp) for details.
        -   on macOS, refer to [Handling one or a series of popups](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/getting-started-with-web-testing#sectiondiv_o5w_nkd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling one or a series of popups](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-chrome-on-android/handling-javascript-popups#section_iv1_x5x_vp) for details.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## Applicable Controls

This action is applicable to the following controls:none.

## Example - Case 1: A single popup

Scenario: You are testing a shopping cart page with a button, Delete this item, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.

Action Lines

![](/images/TA_Automation/Images/bia_click_on_next_popup_single_popup_pgm.png)

Result

![](/images/TA_Automation/Images/bia_click_on_next_popup_single_popup_res.png)

## Example - Case 2: A sequence of multiple popups

Scenario: You are testing a shopping cart page with a button, Delete this item, for removing an item from your cart:

1.  Upon clicking the button, a confirmation popup appears with the message Do you want to delete this item?. Two buttons, **OK** and **Cancel**, are displayed.
2.  In the popup, the **OK** button is clicked.
3.  This triggers an alert popup with the message Item deleted, and a single **OK** button.
4.  The test clicks **OK** in the alert to dismiss it and proceed.

Action Lines

![](/images/TA_Automation/Images/bia_click_on_next_popup_multiple_popups_pgm.png)

Result

![](/images/TA_Automation/Images/bia_click_on_next_popup_multiple_popups_res.png)




**Related information**  


[enter text on next popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/enter-text-on-next-popup)

[get popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-message)

[get popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/get-popup-default-text)

[check popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-message)

[check popup default text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/check-popup-default-text)

[clear popup queue](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/clear-popup-queue)
