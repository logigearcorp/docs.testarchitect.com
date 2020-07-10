--- 
title: "Cannot matching control on action with multi iframe in Internet Explorer"
linktitle: "Cannot matching control on action with multi iframe in Internet Explorer"
description: "Scenario: 1. Create a Test Module 2. Navigate to a website have multi iframe 3. Use action get control property 4. Execute Test Module with checked checkbox Screenshot recording with browser Internet ..."
weight: 125
aliases: 
    - /TA_FAQ/Topics/0x80020012L.html
keywords: "automation errors, Cannot matching control on action with multi iframe in Internet Explorer"
---

## {{< expand >}} Scenario: {{< permerlink >}} {#reference_0x80020012L__section_hbk_tk4_c3b} 

1. Create a **Test Module**

2. Navigate to a website have multi iframe

3. Use action **get control property**

4. Execute Test Module with checked checkbox Screenshot recording with browser Internet Explorer.

## {{< expand >}} Result: {{< permerlink >}} {#reference_0x80020012L__section_em1_mr4_c3b} 

Error message: No matching UI object found for "\[ta class=select-one, id=lstComponents\]" within the timeout of "30" seconds. Please check the interface definition for "\[ta class=select-one, id=lstComponents\]", or set a longer timeout with the "object wait" setting.

## {{< expand >}} Solution: {{< permerlink >}} {#reference_0x80020012L__section_nzz_nr4_c3b} 

1. Open your Internet Option.

![](/images/TA_FAQ/Images/troubleshoot1.png)

2. Select "Security" tab, then select "Trusted sites", click "Sites" button.

![](/images/TA_FAQ/Images/troubleshoot2.png)

3. In "Trusted sites" window, enter a website which you want to access it.

![](/images/TA_FAQ/Images/troubleshoot3.png)

{{<note>}} Uncheck **Require server verification \(https:\) for all sites in this zone** if it;s not https.

4. Save it and restart the IE & Edge.




