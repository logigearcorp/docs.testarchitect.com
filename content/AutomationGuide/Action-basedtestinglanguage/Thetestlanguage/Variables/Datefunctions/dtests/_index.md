--- 
title: "Microsoft Edge: Unable to launch the browser or run automated tests"
linktitle: "Microsoft Edge: Unable to launch the browser or run automated tests"
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.edge.automation_not_run.html
---
# Microsoft Edge: Unable to launch the browser or run automated tests {#ref.faq.tshoot.chrome.automation_not_run .reference}

## Problem { .section}

Improper configuration of the Microsoft Edge browser results in one of the following negative cases:

-   Upon the completion of a test run, the Edge browser is not launched successfully, and the following warning message appears in the test result of the [navigate](../../TA_Automation/Topics/bia_navigate.html) built-in action. WebDriver for Microsoft Edge is not launched yet. Please start WebDriver, and try again.
-   You have already launched Edge manually, and then run the automation playback. However, you do not use the [navigate](../../TA_Automation/Topics/bia_navigate.html) built-in action in your test. The playback is unable to properly match web controls. Hence, for example, a [check control exists](../../TA_Automation/Topics/bia_check_control_exists.html) built-in action would produce a Failed result despite the existence of the target control.

## Solution { .section}

This issue occurs because Microsoft WebDriver is not installed or started on your machine. Stop the currently running test and refer to [configuration steps](../../TA_Automation/Topics/aut_app_testing_webdriver_ME.html) to resolve this issue.

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

**Related information**  


[Configuring WebDriver server](../../TA_Automation/Topics/aut_app_testing_webdriver_ME.html)

