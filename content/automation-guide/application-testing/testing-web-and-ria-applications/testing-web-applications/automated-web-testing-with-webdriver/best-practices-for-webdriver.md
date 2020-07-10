--- 
title: "Best practices for WebDriver"
linktitle: "Best practices for WebDriver"
description: "Navigating to a page in a new tab/window When you navigate to a page, you have three options: opening the page on a new tab, a new window or the current tab. target browser instance Handling multiple ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/WebDriver_best_practices.html
keywords: "for generic webdriver, best practices, webdriver best practices"
---

## Navigating to a page in a new tab/window

When you navigate to a page, you have three options: opening the page on a new tab, a new window or the current tab. [target browser instance](/automation-guide/action-based-testing-language/built-in-settings/other-settings/target-browser-instance)

## {{< expand >}} Handling multiple window instances {{< permerlink >}} {#WebDriver_best_practices__section_qg1_csv_yfb} 

When you are working with web applications, you are faced with multiple window instances. You can achieve your goals by using the [auto switch windows](/automation-guide/action-based-testing-language/built-in-settings/other-settings/auto-switch-window) built-in setting and the [switch window](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-window) built-in action.

![](/images/TA_Automation/Images/WebDriver_multiple_window_instances.png)

When you open a new window instance and the auto switch window mode is on, the focus will be shifted to the newly opened window instance. However, when the auto switch window mode is off, the focus will stay in the current window instance. In the event that you want to interact with the newly opened window instance, you are required to explicitly use the [switch window](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-window) built-in action.

## {{< expand >}} Switching frames {{< permerlink >}} {#WebDriver_best_practices__section_ljs_lqv_yfb} 

In a web page with multiple frames, you have to switch the focus to the frame containing the element before locating the element. Needless to say that TestArchitect is capable of switching frames automatically.

![](/images/TA_Automation/Images/web_page_frames.png)

Also it provides you with built-in actions to move the focus among frames:

-   [switch frame by path](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-frame-by-path): to switch the focus to the target frame defined by frame path.
-   [switch frame by destination](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/switch-frame-by-destination): to switch the focus back to the parent frame of the current one or the main frame \(default content\).

See also

-   [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
-   [Handling iFrames in Selenium Webdriver](https://www.guru99.com/handling-iframes-selenium.html)

## {{< expand >}} Handling popups {{< permerlink >}} {#WebDriver_best_practices__section_nj5_v4v_yfb} 

While you are testing a web application, one or multiple popups may be triggered.

![](/images/TA_Automation/Images/WebDriver_popup.png)

There are three actions to handle popups.

-   [click popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/click-popup): to click a button in a popup.
-   [enter value in popup](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/enter-value-in-popup): to write text in a field in a popup, and click **OK**.
-   [copy popup message](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/copy-popup-message): to obtain the message in a popup and store it in a variable.



