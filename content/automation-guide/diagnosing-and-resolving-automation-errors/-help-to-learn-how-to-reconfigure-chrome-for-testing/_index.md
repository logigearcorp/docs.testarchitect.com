--- 
title: "Chrome was not configured in the correct manner. Please refer to web testing section in TestArchitect Help to learn how to reconfigure Chrome for testing."
linktitle: "Chrome was not configured in the correct manner. Please refer to web testing section in TestArchitect Help to learn how to reconfigure Chrome for testing."
weight: 22
aliases: 
    - /TA_FAQ/Topics/0x80020003L.html
---

Error code: 0x80020003L

## Problem

This happens because the Google Chrome browser is not configured properly which results in automation playback being unable to properly match web controls.

## Solution

You can resolve this issue in one of two ways:

-   Option \#1**: Manually reconfigure Chrome.**

    Follow the steps below:

    1.  Stop the currently running test.
    2.  Follow the procedure discussed in [Setting command line switches](/TA_Automation/Topics/aut_setting_switches_GC.html).
    3.  Re-run the automated test.
-   Option \#2**: Use the [navigate](/TA_Automation/Topics/bia_navigate.html) action.**

    **Note:** The built-in navigate action automatically reconfigures Chrome by setting several of its [command line switches](/TA_Automation/Topics/aut_setting_switches_GC.html).

    1.  Stop the currently running test.
    2.  Close Google Chrome, if open, and terminate any running Chrome-related background processes.
    3.  Insert the navigate action in an action line prior to any actions that interact with GUI web controls.

        **Important:** Only a value for the action's location argument should be specified. If your test needs require you to specify a window argument as well, ensure that the specified window is [reconfigured](/TA_Automation/Topics/aut_setting_switches_GC.html) and launched .

    4.  Re-run the automated test.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Argument header\(s\) <headerName\> is invalid. Please look up or retype the action to determine the correct header name\(s\).](/TA_FAQ/Topics/0x80010015L.html)

**Next topic:**[Invalid interface element: <controlName\>. An interface element cannot be identified by both its 'xpath' and other properties.](/TA_FAQ/Topics/0x80020004L.html)

