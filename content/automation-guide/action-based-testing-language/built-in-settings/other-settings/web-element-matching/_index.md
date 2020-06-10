--- 
title: "web element matching"
linktitle: "web element matching"
weight: 24
aliases: 
    - /TA_Automation/Topics/bis_web_element_matching.html
keywords: "web element matching, specify which technique to match web UI elements, select which technique to perform web UI element matching, select technique to match web elements, choose technique to match web elements"
---

## Description

Specify which technique is used to perform web UI element matching.

## Allowable values

-   **javascript**

    Custom snippets of JavaScript code

-   **webdriver**

    [WebDriver API](https://www.w3.org/TR/2013/WD-webdriver-20130117/)


## Default value

javascript

## Applicable system/platforms

-   Testing mobile web applications on cloud devices \([learn more](/TA_Automation/Topics/aut_app_cloud_testing.html)\).

## Notes

-   This built-in setting only affects the stage of UI web element matching including window, control, and item matching.

## Example

Under mobile cloud test environment conditions, the test duration which includes various UI web element matching actions might vary. You might try switching between JavaScript snippets and WebDriver API techniques to see if the test duration would be shorter.

![](/images//Images/bis_web_element_matching_pmg.png)

**Parent topic:**[Other settings](/TA_Automation/Topics/bis_other.html)

**Previous topic:**[verify picture](/TA_Automation/Topics/bis_verify_picture.html)

**Next topic:**[webdriver mode](/TA_Automation/Topics/bis_webdriver_mode.html)

