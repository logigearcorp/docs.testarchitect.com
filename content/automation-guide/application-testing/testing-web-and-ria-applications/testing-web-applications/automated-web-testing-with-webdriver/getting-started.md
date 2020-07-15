--- 
title: "Getting Started"
linktitle: "Getting Started"
description: "Restriction: TestArchitect currently provides partial support for Generic WebDriver. Built-in actions and settings can only work on the platforms and browsers listed in this topic . A WebDriver test ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/WebDriver_basic_structure.html
keywords: "of a webdriver test, basic structure, WebDriver basic structure"
---

{{<restriction>}} TestArchitect currently provides partial support for Generic WebDriver. Built-in actions and settings can only work on the platforms and browsers listed in [this topic](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/platform-support).

![](/images/TA_Automation/Images/WebDriver_basic_structure_of_test.png)

A WebDriver test often starts with:

1.  [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) \[[webdriver mode](/automation-guide/action-based-testing-language/built-in-settings/other-settings/webdriver-mode)\] \[on\]: to activate the WebDriver mode.
2.  [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate): to go to the test web page.

{{<important>}} To run a test with WebDriver, you have little choice other than to go to the test page using navigate.

--- o0o ---

## Configuration  

To execute tests with WebDriver, it is required to configure [WebDriver server & client](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/automated-web-testing-with-webdriver/configuring-webdriver-server-amp-client).

{{<note>}} Providing that you use Safari, configure it to enable WebDriver support. \([Learn more](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)\)

## Setting an environment  

You can set up an environment using the [configure webdriver](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/configure-webdriver) built-in action.

## Navigation  

When you navigate to a page, you have three options: opening the page on a new tab, a new window or the current tab. [target browser instance](/automation-guide/action-based-testing-language/built-in-settings/other-settings/target-browser-instance)



