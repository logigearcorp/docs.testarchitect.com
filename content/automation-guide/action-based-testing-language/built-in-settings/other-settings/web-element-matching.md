--- 
title: "web element matching"
linktitle: "web element matching"
description: "Description Specify which technique is used to perform web UI element matching . Allowable values javascript Custom snippets of JavaScript code webdriver WebDriver API Default value javascript ..."
weight: 24
aliases: 
    - /TA_Automation/Topics/bis_web_element_matching.html
keywords: "built-in settings, web element matching, settings, web element matching (settings), web element matching, specify which technique to match web UI elements, select which technique to perform web UI element matching, select technique to match web elements, choose technique to match web elements"
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

-   Testing mobile web applications on cloud devices \([learn more](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/)\).

## Notes

-   This built-in setting only affects the stage of UI web element matching including window, control, and item matching.

## Example

Under mobile cloud test environment conditions, the test duration which includes various UI web element matching actions might vary. You might try switching between JavaScript snippets and WebDriver API techniques to see if the test duration would be shorter.

![](/images/TA_Automation/Images/bis_web_element_matching_pmg.png)




