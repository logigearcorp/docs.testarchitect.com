--- 
title: "Best practices for WebDriver"
linktitle: "Best practices for WebDriver"
weight: 4
aliases: 
    - /TA_Automation/Topics/WebDriver_best_practices.html
---

## Navigating to a page in a new tab/window

When you navigate to a page, you have three options: opening the page on a new tab, a new window or the current tab. [target browser instance](target_browser_instance.html)

## Handling multiple window instances

When you are working with web applications, you are faced with multiple window instances. You can achieve your goals by using the [auto switch windows](auto_switch_windows.html) built-in setting and the [switch window](switch_window.html) built-in action.

![](/images//Images/WebDriver_multiple_window_instances.png)

When you open a new window instance and the auto switch window mode is on, the focus will be shifted to the newly opened window instance. However, when the auto switch window mode is off, the focus will stay in the current window instance. In the event that you want to interact with the newly opened window instance, you are required to explicitly use the [switch window](switch_window.html) built-in action.

## Switching frames

In a web page with multiple frames, you have to switch the focus to the frame containing the element before locating the element. Needless to say that TestArchitect is capable of switching frames automatically.

![](/images//Images/web_page_frames.png)

Also it provides you with built-in actions to move the focus among frames:

-   [switch frame by path](switch_frame_by_path.html): to switch the focus to the target frame defined by frame path.
-   [switch frame by destination](switch_frame_by_destination.html): to switch the focus back to the parent frame of the current one or the main frame \(default content\).

See also

-   [HTML <iframe\> Tag](https://www.w3schools.com/tags/tag_iframe.asp)
-   [Handling iFrames in Selenium Webdriver](https://www.guru99.com/handling-iframes-selenium.html)

## Handling popups

While you are testing a web application, one or multiple popups may be triggered.

![](/images//Images/WebDriver_popup.png)

There are three actions to handle popups.

-   [click popup](click_popup.html): to click a button in a popup.
-   [enter value in popup](enter_value_in_popup.html): to write text in a field in a popup, and click **OK**.
-   [copy popup message](copy_popup_message.html): to obtain the message in a popup and store it in a variable.

**Parent topic:**[Automated web testing with WebDriver](/TA_Automation/Topics/Generic_WebDriver.html)

**Previous topic:**[Configuring WebDriver server & client](/TA_Automation/Topics/WebDriver_server_client.html)

