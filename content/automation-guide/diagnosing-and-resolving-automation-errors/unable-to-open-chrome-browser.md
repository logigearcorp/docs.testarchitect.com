--- 
title: "Unable to Open Chrome Browser"
linktitle: "Unable to Open Chrome Browser"
description: "Problem: After upgrading Chrome. TestArchitect cannot open Chrome. Cause: So that it may be upgraded anytime a new version is release, the auto-upgrade function of Chrome browser is enabled by ..."
weight: 129
aliases: 
    - /TA_FAQ/Topics/0x80020016L.html
keywords: "automation errors, Unable to Open Chrome Browser, automation errors, Cannot open Chrome Browser"
---

## Problem:  

After upgrading Chrome. TestArchitect cannot open Chrome.

## Cause:

So that it may be upgraded anytime a new version is release, the auto-upgrade function of Chrome browser is enabled by default.. This can cause version of WebDriver to be incompatible with the upgraded version of Chrome browser.

{{<note>}} Turn off the auto-upgrade function of Chrome browser to avoid this problem in the future .

## Solution:  

Manually upgrade the WebDriver installation on your machine by following these steps:

1.  Download the latest or the corresponding version of WebDriver [here](https://chromedriver.chromium.org/downloads).
2.  Unzip the downloaded package.
3.  Copy and Paste the .exe file to the following location:

    C:\\Users\\Public\\LogiGear\\TestArchitect\\Automation\\webdriver\_server

4.  Run your script again to see the result.


