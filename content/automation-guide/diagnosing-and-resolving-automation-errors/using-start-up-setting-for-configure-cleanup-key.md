--- 
title: "Using Start-up setting for configure Cleanup key"
linktitle: "Using Start-up setting for configure Cleanup key"
description: "Workflow: Step 1: Create a new user-defined setting named var in the Startup Settings tab of the Execution dialog. Step 2: Use action configure webdriver with the JSON string in the values argument as ..."
weight: 127
aliases: 
    - /TA_FAQ/Topics/0x80020014L.html
keywords: "automation errors, using start-up setting for configure cleanup key"
---

## {{< expand >}} Workflow: {{< permerlink >}} {#reference_0x80020012L__section_hbk_tk4_c3b} 

Step 1: Create a new **user-defined** setting named **var** in the**Startup Settings** tab of the **Execution** dialog.

![](/images/TA_FAQ/Images/clean-up-start-up-setting.jpg)

Step 2: Use action **configure webdriver** with the JSON string in the **values** argument as below

![](/images/TA_FAQ/Images/clean-up-start-up-script.jpg)

Step 3: Now open the **Execution** dialog and navigate to the **Startup Settings** tab

Step 4: Check the **Startup Settings** checkbox

![](/images/TA_FAQ/Images/clean-up-start-up-enable.jpg)

Step 5: Click the **Execute** button

{{<important>}} The purpose of keeping the browser open is to help you to debug your test. Using it may cause some problems related to headless mode, multi-execution, un-rent devices, etc. Please be aware of this before using this setting.




