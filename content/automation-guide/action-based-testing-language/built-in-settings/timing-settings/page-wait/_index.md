--- 
title: "page wait"
linktitle: "page wait"
weight: 10
aliases: 
    - /TA_Automation/Topics/bis_page_wait.html
---
keyword: [page wait, maximum webpage loading time, maximum wait time for webpage to load, maximum wait time for loading webpage]
---

# page wait

## Description

The maximum wait time for a webpage to load.

## Value units

seconds

## Default value

30

## Notes

-   Automation platforms:
    -   Internet Explorer: page wait applies to either the complete loading of a web page, or to the loading of a page only up to the point where it is in an interactive state. This behavior is defined by the [page wait state](bis_page_wait_state.html) built-in setting.
    -   Other platforms: page wait always applies to the complete loading of a web page.
-   To improve the automation performance on browsers, set a small value for page wait \(as low as 1 second\) depending on how responsive your webpage is.
-   During automation execution, for all actions in which page wait is applied, the [window wait](bis_window_wait.html) setting goes into effect first. In other words, TestArchitect first looks for the presence of the specified window; once that condition is satisfied, TestArchitect waits the allotted page wait time for the web page to be rendered and available.

**Parent topic:**[Timing settings](/TA_Automation/Topics/bis_timing.html)

**Previous topic:**[object wait probe](/TA_Automation/Topics/bis_object_wait_probe.html)

**Next topic:**[page wait state](/TA_Automation/Topics/bis_page_wait_state.html)

**Related information**  


[window wait](/TA_Automation/Topics/bis_window_wait.html)

[window wait probe](/TA_Automation/Topics/bis_window_wait_probe.html)

