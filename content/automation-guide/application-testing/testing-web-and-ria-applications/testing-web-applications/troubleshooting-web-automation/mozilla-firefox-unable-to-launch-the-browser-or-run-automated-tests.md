--- 
title: "Mozilla Firefox: Unable to launch the browser or run automated tests"
linktitle: "Mozilla Firefox: Unable to launch the browser or run automated tests"
description: "Problem Improper configuration of the Mozilla Firefox browser results in one of the following negative cases: Upon the completion of a test run, the Firefox browser is not launched successfully, and ..."
weight: 16
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.firefox.automation_not_run.html
keywords: "Troubleshooting, Mozilla Firefox, Cannot launch browser, troubleshooting, Cannot match controls"
---

## Problem

Improper configuration of the Mozilla Firefox browser results in one of the following negative cases:

-   Upon the completion of a test run, the Firefox browser is not launched successfully, and the following warning message appears in the test result of the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action. WebDriver for Firefox is not launched yet. Please start WebDriver, and try again.
-   You have already launched Firefox manually, and then run the automation playback. However, you do not use the [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) built-in action in your test. The playback is unable to properly match web controls. Hence, for example, a [check control exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-exists) built-in action would produce a Failed result despite the existence of the target control.

## Solution

This issue occurs because GeckoDriver is not started on your machine. Stop the currently running test and refer to [configuration steps](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-non-webdriver/preparing-web-browsers/preparing-mozilla-firefox-for-web-testing/configuring-geckodriver) to resolve this issue.


