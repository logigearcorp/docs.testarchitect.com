--- 
title: "target browser instance"
linktitle: "target browser instance"
description: "Description Determine if the navigate built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL. Important: This setting is dedicated to ..."
weight: 21
aliases: 
    - /TA_Automation/Topics/bis_target_browser_instance.html
keywords: "built-in action, target browswer instance"
---

## Description

Determine if the [navigate](/TA_Automation/Topics/bia_navigate.html) built-in action opens a new tab, a new window instance, or overwrites the currently active instance with a new URL.

**Important:** This setting is dedicated to Generic WebDriver.

## Available values

-   existing: \(Default\) Overwrite the currently active browser instance with the new URL.
-   new window: Open the new URL in a new window instance
-   new tab: Open the new URL in a new tab.

## Note:

-   This built-in setting only takes effect, if the window argument of the navigate built-in action is omitted.
-   If the window argument of the navigate built-in action is specified, it will choose the exact browser window upon which the URL is navigated to.
-   To support backward compatibility for your project, if necessary, you might use this built-in setting as a [startup setting](/TA_Automation/Topics/aut_startup_settings.html) with a desired value.

## Example

Suppose you have the following the scenario:

1.  Open Google Search to carry out test actions.
2.  Open Wikipedia in a new tab to carry test actions.
3.  Open Yahoo Mail in in the currently active web instance, overriding the current URL.

## Action Lines

![](/images/TA_Automation/Images/bia_target_browser_instance_pgm.png)




