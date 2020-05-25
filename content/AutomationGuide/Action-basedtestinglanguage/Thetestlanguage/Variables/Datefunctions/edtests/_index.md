--- 
title: "Mozilla Firefox: Unable to launch the browser or run automated tests"
linktitle: "Mozilla Firefox: Unable to launch the browser or run automated tests"
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.firefox.automation_not_run.html
---
# Mozilla Firefox: Unable to launch the browser or run automated tests {#reference_dbk_frl_jz .reference}

## Problem {#section_rfr_nrl_jz .section}

Improper configuration of the Mozilla Firefox browser results in one of the following negative cases:

-   Upon the completion of a test run, the Firefox browser is not launched successfully, and the following warning message appears in the test result of the [navigate](../../TA_Automation/Topics/bia_navigate.html) built-in action. WebDriver for Firefox is not launched yet. Please start WebDriver, and try again.
-   You have already launched Firefox manually, and then run the automation playback. However, you do not use the [navigate](../../TA_Automation/Topics/bia_navigate.html) built-in action in your test. The playback is unable to properly match web controls. Hence, for example, a [check control exists](../../TA_Automation/Topics/bia_check_control_exists.html) built-in action would produce a Failed result despite the existence of the target control.

## Solution {#section_sfr_nrl_jz .section}

This issue occurs because GeckoDriver is not started on your machine. Stop the currently running test and refer to [configuration steps](../../TA_Automation/Topics/aut_app_testing_geckodriver_FF.html) to resolve this issue.

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

