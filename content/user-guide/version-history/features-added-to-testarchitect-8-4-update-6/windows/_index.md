--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.4_update_6.html
---

The following new features and improvements are introduced in TestArchitect version 8.4 Update 6 running under Windows.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories and check in all test artifacts.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**Enhancements to existing features**

-   **Copy & Paste and Paste with Variation for Test Modules**: Now when you copy a Test Module and use paste or paste with variation, the picture checks tab is copied too. This means you can run actions related to local picture checks without any extra steps.

## TestArchitect Automation

**New features**

-   **Keep the Browser Open**: From now on Test Architect will support keeping the browser open after a test has been executed in Generic Webdriver \(GWD\) mode. There are two methods to do so:
    -   Setting a new JSON key named [cleanup](/TA_Automation/Topics/bia_configure_webdriver.html#).
    -   In [Start-up](/TA_FAQ/Topics/0x80020014L.html#) settings.

**Enhancements to existing features**

-   **Support for [Chrome 77](/TA_Automation/Topics/Web_automation.html) and [Firefox 69](/TA_Automation/Topics/Web_automation.html)**: Now you can run automated tests for web pages displayed in the latest versions of Chrome and Firefox.

## Known issues

-   While uploading results to TFS when successfully authenticating with a local domain using RESTAPI mode, you may experience inconsistencies.
-   Hold key and release key may not work as expected when using the key combination alt + f4
-   Due to changes in the WebDriver coordinate calculation algorithm, there may be a slight deviation of coordinates in relevant built-in actions with Generic Web Driver Mode \(GWD\) on Chrome 75. For precision, please re-calculate your positions and coordinates.

**Note:** These changes do not effect non-GWD mode.

**Parent topic:**[Features added to TestArchitect 8.4 Update 6](/TA_ReleaseNotes/DITA_source/Whats_New_8.4_update_6.html)

