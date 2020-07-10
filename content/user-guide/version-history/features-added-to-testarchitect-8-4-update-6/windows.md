--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.4 Update 6 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.4_update_6.html
keywords: "Release Notes 8.4 Update 6, Windows, What is new, Windows, TestArchitect 8.4 Update 6, TestArchitect 8.4 Update 6, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 6 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## {{< expand >}} TestArchitect Client {{< permerlink >}} {#Whats_New_Windows__section.TAC} 

**Enhancements to existing features**

-   **Copy & Paste and Paste with Variation for Test Modules**: Now when you copy a Test Module and use paste or paste with variation, the picture checks tab is copied too. This means you can run actions related to local picture checks without any extra steps.

## {{< expand >}} TestArchitect Automation {{< permerlink >}} {#Whats_New_Windows__section.Auto} 

**New features**

-   **Keep the Browser Open**: From now on Test Architect will support keeping the browser open after a test has been executed in Generic Webdriver \(GWD\) mode. There are two methods to do so:
    -   Setting a new JSON key named [cleanup](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/webdriver/configure-webdriver#).
    -   In [Start-up](/automation-guide/diagnosing-and-resolving-automation-errors/using-start-up-setting-for-configure-cleanup-key#) settings.

**Enhancements to existing features**

-   **Support for [Chrome 77](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/) and [Firefox 69](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.

## {{< expand >}} Known issues {{< permerlink >}} {#Whats_New_Windows__section_hhf_pk5_4jb} 

-   While uploading results to TFS when successfully authenticating with a local domain using RESTAPI mode, you may experience inconsistencies.
-   Hold key and release key may not work as expected when using the key combination alt + f4
-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

{{<note>}} These changes do not effect non-GWD mode.


