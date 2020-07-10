--- 
title: "Chrome was not configured in the correct manner. Please refer to web testing section in TestArchitect Help to learn how to reconfigure Chrome for testing."
linktitle: "Chrome was not configured in the correct manner. Please refer to web testing section in TestArchitect Help to learn how to reconfigure Chrome for testing."
description: "Error code: 0x80020003L Problem This happens because the Google Chrome browser is not configured properly which results in automation playback being unable to properly match web controls. Solution You ..."
weight: 22
aliases: 
    - /TA_FAQ/Topics/0x80020003L.html
keywords: "automation errors, 0x80020003L"
---

Error code: 0x80020003L

## {{< expand >}} Problem

This happens because the Google Chrome browser is not configured properly which results in automation playback being unable to properly match web controls.

## {{< expand >}} Solution

You can resolve this issue in one of two ways:

-   Option \#1**: Manually reconfigure Chrome.**

    Follow the steps below:

    1.  Stop the currently running test.
    2.  Follow the procedure discussed in [Setting command line switches](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-google-chrome-for-web-testing/configuring-google-chrome).
    3.  Re-run the automated test.
-   Option \#2**: Use the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) action.**

    {{<note>}} The built-in navigate action automatically reconfigures Chrome by setting several of its [command line switches](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-google-chrome-for-web-testing/configuring-google-chrome).

    1.  Stop the currently running test.
    2.  Close Google Chrome, if open, and terminate any running Chrome-related background processes.
    3.  Insert the navigate action in an action line prior to any actions that interact with GUI web controls.

        {{<important>}} Only a value for the action's location argument should be specified. If your test needs require you to specify a window argument as well, ensure that the specified window is [reconfigured](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-google-chrome-for-web-testing/configuring-google-chrome) and launched .

    4.  Re-run the automated test.




