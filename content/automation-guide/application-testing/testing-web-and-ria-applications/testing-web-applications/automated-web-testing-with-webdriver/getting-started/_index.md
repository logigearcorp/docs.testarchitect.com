--- 
title: "Getting Started"
linktitle: "Getting Started"
weight: 1
aliases: 
    - /TA_Automation/Topics/WebDriver_basic_structure.html
---

**Restriction:** TestArchitect currently provides partial support for Generic WebDriver. Built-in actions and settings can only work on the platforms and browsers listed in [this topic](WebDriver_supported_platforms.html).

![](/images//Images/WebDriver_basic_structure_of_test.png)

A WebDriver test often starts with:

1.  [setting](bia_setting.html) \[[webdriver mode](bis_webdriver_mode.html)\] \[on\]: to activate the WebDriver mode.
2.  [navigate](bia_navigate.html): to go to the test web page.

**Important:** To run a test with WebDriver, you have little choice other than to go to the test page using navigate.

--- o0o ---

## Configuration

To execute tests with WebDriver, it is required to configure [WebDriver server & client](WebDriver_server_client.html).

**Note:** Providing that you use Safari, configure it to enable WebDriver support. \([Learn more](https://developer.apple.com/documentation/webkit/testing_with_webdriver_in_safari)\)

## Setting an environment

You can set up an environment using the [configure webdriver](bia_configure_webdriver.html) built-in action.

## Navigation

When you navigate to a page, you have three options: opening the page on a new tab, a new window or the current tab. [target browser instance](bis_target_browser_instance.html)

**Parent topic:**[Automated web testing with WebDriver](/TA_Automation/Topics/Generic_WebDriver.html)

**Next topic:**[Platform support](/TA_Automation/Topics/WebDriver_supported_platforms.html)

