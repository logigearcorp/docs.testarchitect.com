--- 
title: "Using Start-up setting for configure Cleanup key"
linktitle: "Using Start-up setting for configure Cleanup key"
aliases: 
    - /TA_FAQ/Topics/0x80020014L.html
---
# Using Start-up setting for configure Cleanup key {#reference_0x80020012L .reference}

## Workflow: {#section_hbk_tk4_c3b .section}

Step 1: Create a new **user-defined** setting named **var** in the**Startup Settings** tab of the **Execution** dialog.

![](../Images/clean-up-start-up-setting.jpg)

Step 2: Use action **configure webdriver** with the JSON string in the **values** argument as below

![](../Images/clean-up-start-up-script.jpg)

Step 3: Now open the **Execution** dialog and navigate to the **Startup Settings** tab

Step 4: Check the **Startup Settings** checkbox

![](../Images/clean-up-start-up-enable.jpg)

Step 5: Click the **Execute** button

**Important:** The purpose of keeping the browser open is to help you to debug your test. Using it may cause some problems related to headless mode, multi-execution, un-rent devices, etc. Please be aware of this before using this setting.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Action Check Window Exists runs incorrectly on Internet Explorer](../../TA_FAQ/Topics/0x80020013L.html)

**Next topic:**[TestArchitect cannot naviagte with WebDriver mode in Firefox 70 and Geckodriver v0.26.0](../../TA_FAQ/Topics/0x80020015L.html)

