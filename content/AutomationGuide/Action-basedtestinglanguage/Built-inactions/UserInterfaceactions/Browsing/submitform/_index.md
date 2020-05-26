--- 
title: "submit form"
linktitle: "submit form"
weight: 22
aliases: 
    - /TA_Automation/Topics/bia_submit_form.html
---
# submit form {#bia_submit_form .reference}

## Description { .section}

Submit the form to which the given HTML control belongs.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of a HTML control that is contained within the HTML <form\> element.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes {#section.notes .section}

-   Once you have finished filling out a form running on a mobile device, you probably want to submit it. One way to do this would be to find the **Submit** button and click it. However, some sites lack that button, requiring instead that a user press the **Submit** button on a virtual keyboard. To resolve this issue, TestArchitect offers this submit form action. When directed at any HTML control within a given form, TestArchitect finds the enclosing form and then directly calls the submit function with it.
-   Note that, should the HTML element referenced by the control argument not be enclosed within a <form\> element, an automation error is reported.

## Applicable Controls { .section}

This action is applicable to the following controls:All HTML controls.

## Example { .section}

**Scenario:** You are testing an account registration site running on a mobile device. Once the registration form has been filled out, rather than pressing the **Go** button on the virtual keyboard, the submit form action is invoked to cause the form to be submitted.

**Action Lines**

![](../Images/bia_submit_form_pgm.png)

**Result**

![](../Images/bia_submit_form_res.png)

**Parent topic:**[Browsing](../../TA_Automation/Topics/bia_browsing.html)

**Previous topic:**[send command to browser](../../TA_Automation/Topics/bia_send_command_to_browser.html)

