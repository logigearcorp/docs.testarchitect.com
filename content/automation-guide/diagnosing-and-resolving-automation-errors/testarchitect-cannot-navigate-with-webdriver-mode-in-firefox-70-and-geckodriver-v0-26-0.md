--- 
title: "TestArchitect cannot navigate with WebDriver mode in Firefox 70 and Geckodriver v0.26.0"
linktitle: "TestArchitect cannot navigate with WebDriver mode in Firefox 70 and Geckodriver v0.26.0"
description: "Problem: After upgrade Firefox 70 and Geckodriver v0.26.0. TestArchitect cannot navigate with webdriver mode. Cause: Geckodriver since v0.25.0 must have the the Microsoft Visual Studio ..."
weight: 128
aliases: 
    - /TA_FAQ/Topics/0x80020015L.html
keywords: "automation errors, TestArchitect cannot naviagte with WebDriver mode in Firefox 70 and Geckodriver v0.26.0"
---

## {{< expand >}} Problem: {{< permerlink >}} {#reference_0x80020012L__section_hbk_tk4_c3b} 

After upgrade Firefox 70 and Geckodriver v0.26.0. TestArchitect cannot navigate with webdriver mode.

## {{< expand >}} Cause:

Geckodriver since v0.25.0 must have the the **Microsoft Visual Studio redistributable\_runtime** installed on your system for the binary to run. This is a known bug of Geckodriver version v0.26.0.

{{<note>}} In TestArchitect version 8.4 update 6 released, we used Geckodriver v0.24.0. Hence, it's not require the Microsoft runtime.

## {{< expand >}} Solution: {{< permerlink >}} {#reference_0x80020012L__section_n5h_f2j_dkb} 

Install [Microsoft Visual Studio redistributable runtime](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads) into your PCs.![](/images/TA_FAQ/Images/cannot_navigate.png)




