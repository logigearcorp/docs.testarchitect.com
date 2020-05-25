--- 
title: "Google Chrome: Unable to run automated tests"
linktitle: "Google Chrome: Unable to run automated tests"
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.chrome.automation_not_run.html
---
# Google Chrome: Unable to run automated tests {#ref.faq.tshoot.chrome.automation_not_run .reference}

## Problem { .section}

During an automated test run, the following warning message appears in the Automation Problem dialog box or test result:

Chrome was not configured in the correct manner. Please refer to web testing section in TestArchitect Help to learn how to reconfigure Chrome for testing.

Note that improper configuration of Chrome results in automation playback being unable to properly match web controls. Hence, for example, a [check control exists](../../TA_Automation/Topics/bia_check_control_exists.html) action would produce a Failed result despite the existence of the target control.

## Solution {#section.Sol .section}

You can resolve this issue in one of two ways:

-   Option \#1**: Manually reconfigure Chrome.**

    Follow the steps below:

    1.  Stop the currently running test.
    2.  Follow the procedure discussed in [Setting command line switches](../../TA_Automation/Topics/aut_setting_switches_GC.html).
    3.  Re-run the automated test.
-   Option \#2**: Use the [navigate](../../TA_Automation/Topics/bia_navigate.html) action.**

    **Note:** The built-in navigate action automatically reconfigures Chrome by setting several of its [command line switches](../../TA_Automation/Topics/aut_setting_switches_GC.html).

    1.  Stop the currently running test.
    2.  Close Google Chrome, if open, and terminate any running Chrome-related background processes.
    3.  Insert the navigate action in an action line prior to any actions that interact with GUI web controls.

        **Important:** Only a value for the action's location argument should be specified. If your test needs require you to specify a window argument as well, ensure that the specified window is [reconfigured](../../TA_Automation/Topics/aut_setting_switches_GC.html) and launched .

    4.  Re-run the automated test.

**Parent topic:**[Troubleshooting web automation](../../TA_Automation/Topics/web_troubleshooting.html)

