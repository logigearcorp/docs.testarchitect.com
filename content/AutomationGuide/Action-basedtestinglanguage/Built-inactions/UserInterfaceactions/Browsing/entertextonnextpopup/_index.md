--- 
title: "enter text on next popup"
linktitle: "enter text on next popup"
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_enter_text_on_next_popup.html
---
# enter text on next popup {#bia_enter_text_on_next_popup .reference}

## Description { .section}

Write text to the user-entry field of a prompt popup, then click **OK**.

## Arguments { .section}

text
:   The input text.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section.notes .section}

-   Prior to using this built-in action, it is recommended that you become familiar with the different kinds of modal JavaScript popups and how to handle them properly.
    -   For Safari
        -   on iOS, refer to [Handling JavaScript popups on Safari iOS](aut_app_testing_safari_apps_popups.html) for details.
        -   on macOS, refer to [Handling JavaScript popups on Safari macOS](aut_app_testing_web_apps_getting_started.md#section_f1f_hgd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling JavaScript popups on Chrome Android](aut_app_testing_Android_apps_popups.html) for details.
-   Because it is not possible for TestArchitect to interface with JavaScript popups in a conventional manner, this action suppresses the display of the popup to which it is targeted.

    CAUTION:

    The actual appearance of a popup on your AUT's display during testing will prevent automation from proceeding. If you do indeed see a popup, probable causes are:

    -   you specified a button that does not exist, or
    -   your sequence of popup-handling action lines \(click on next popup and enter text on next popup\) did not properly account for the order in which the actual popups were invoked.
-   To handle a sequence of multiple popups, use several popup-handling actions \(click on next popup and enter text on next popup\) in your test. These actions are stored to a FIFO \(First-In, First-Out\) queue and each is retrieved from the queue when required for the invocation of a new popup.
    -   For Safari
        -   on iOS, refer to [Handling one or a series of popups](aut_app_testing_safari_apps_popups.md#section_iv1_x5x_vp) for details.
        -   on macOS, refer to [Handling one or a series of popups](aut_app_testing_web_apps_getting_started.md#sectiondiv_o5w_nkd_4s) for details.
    -   For Google Chrome on Android, refer to [Handling one or a series of popups](aut_app_testing_Android_apps_popups.md#section_iv1_x5x_vp) for details.
-   If the text argument is empty, TestArchitect clears the popup's existing default text, if any, leaving the input field blank.
-   Note that this action does not support the case of writing text to the user-entry field of a prompt popup, followed by clicking **Cancel**. To cancel a prompt, use [click on next popup](bia_click_on_next_popup.html).
-   If this action is applied \(inadvertently or otherwise\) to an alert or a confirmation popup, TestArchitect ignores the text argument and clicks **OK** on the popup.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html).

## Applicable Controls { .section}

This action is applicable to the following controls:none.

## Example - Case 1: A single popup { .section}

**Scenario:** You are testing a customer information page with a button, **Sign up**, used for submitting one's name:

1.  Upon clicking the button, a prompt appears with one input field and two buttons: **OK** and **Cancel**.

    **Note:** The prompt popup displays the fields:

    -   Message: Please enter your name
    -   Default text: Joe Doe
2.  The test enters a new input value, e.g. Jane Doe, and then clicks **OK** to proceed.

**Action Lines**

![](../Images/bia_enter_text_on_next_popup_single_popup_pgm.png)

**Result**

![](../Images/bia_enter_text_on_next_popup_single_popup_res.png)

## Example - Case 2: A sequence of multiple popups { .section}

**Scenario:** You are testing a customer information page with a button, **Sign up**, used for submitting one's name:

1.  Upon clicking the button, a prompt popup appears with one input field and two buttons: **OK** and **Cancel**.
2.  The test enters a new input value, e.g. Jane Doe, and then clicks **OK** to proceed.
3.  An alert popup is next triggered to confirm acceptance of the name just entered.
4.  The test clicks **OK** in the alert to dismiss it and proceed.

**Action Lines**

![](../Images/bia_enter_text_on_next_popup_multiple_popups_pgm.png)

**Result**

![](../Images/bia_enter_text_on_next_popup_multiple_popups_res.png)

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[delete cookies](../../TA_Automation/Topics/bia_delete_cookies.html)

**Next topic:**[enter value in popup](../../TA_Automation/Topics/bia_enter_value_in_popup.html)

**Related information**  


[click on next popup](../../TA_Automation/Topics/bia_click_on_next_popup.html)

[get popup message](../../TA_Automation/Topics/bia_get_popup_message.html)

[get popup default text](../../TA_Automation/Topics/bia_get_popup_default_text.html)

[check popup message](../../TA_Automation/Topics/bia_check_popup_message.html)

[check popup default text](../../TA_Automation/Topics/bia_check_popup_default_text.html)

[clear popup queue](../../TA_Automation/Topics/bia_clear_popup_queue.html)

