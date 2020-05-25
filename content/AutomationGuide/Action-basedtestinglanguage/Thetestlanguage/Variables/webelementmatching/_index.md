--- 
title: "web element matching"
linktitle: "web element matching"
aliases: 
    - /TA_Automation/Topics/bis_web_element_matching.html
---
# web element matching {#bis_web_element_matching .reference}

## Description { .section}

Specify which technique is used to perform web UI element matching.

## Allowable values { .section}

javascript
:   Custom snippets of JavaScript code

webdriver
:   [WebDriver API](https://www.w3.org/TR/2013/WD-webdriver-20130117/)

## Default value { .section}

javascript

## Applicable system/platforms { .section}

-   Testing mobile web applications on cloud devices \([learn more](aut_app_cloud_testing.html)\).

## Notes { .section}

-   This built-in setting only affects the stage of UI web element matching including window, control, and item matching.

## Example {#section_qfv_fbs_x1b .section}

Under mobile cloud test environment conditions, the test duration which includes various UI web element matching actions might vary. You might try switching between JavaScript snippets and WebDriver API techniques to see if the test duration would be shorter.

![](../Images/bis_web_element_matching_pmg.png)

**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Previous topic:**[verify picture](../../TA_Automation/Topics/bis_verify_picture.html)

**Next topic:**[webdriver mode](../../TA_Automation/Topics/bis_webdriver_mode.html)

