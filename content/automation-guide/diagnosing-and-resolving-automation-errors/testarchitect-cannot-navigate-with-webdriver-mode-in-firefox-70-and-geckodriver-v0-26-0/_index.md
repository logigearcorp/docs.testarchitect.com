--- 
title: "TestArchitect cannot navigate with WebDriver mode in Firefox 70 and Geckodriver v0.26.0"
linktitle: "TestArchitect cannot navigate with WebDriver mode in Firefox 70 and Geckodriver v0.26.0"
description: "Problem: After upgrade Firefox 70 and Geckodriver v0.26.0. TestArchitect cannot navigate with webdriver mode. Cause: Geckodriver since v0.25.0 must have the the Microsoft Visual Studio ..."
weight: 128
aliases: 
    - /TA_FAQ/Topics/0x80020015L.html
keywords: "automation errors, TestArchitect cannot naviagte with WebDriver mode in Firefox 70 and Geckodriver v0.26.0"
---

## Problem:

After upgrade Firefox 70 and Geckodriver v0.26.0. TestArchitect cannot navigate with webdriver mode.

## Cause:

Geckodriver since v0.25.0 must have the the **Microsoft Visual Studio redistributable\_runtime** installed on your system for the binary to run. This is a known bug of Geckodriver version v0.26.0.

**Note:** In TestArchitect version 8.4 update 6 released, we used Geckodriver v0.24.0. Hence, it's not require the Microsoft runtime.

## Solution:

Install [Microsoft Visual Studio redistributable runtime](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) into your PCs.![](/images/TA_FAQ/Images/cannot_navigate.png)




