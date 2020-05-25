--- 
title: "Cannot matching control on action with multi iframe in Internet Explorer"
linktitle: "Cannot matching control on action with multi iframe in Internet Explorer"
aliases: 
    - /TA_FAQ/Topics/0x80020012L.html
---
# Cannot matching control on action with multi iframe in Internet Explorer {#reference_0x80020012L .reference}

## Scenario: {#section_hbk_tk4_c3b .section}

1. Create a **Test Module**

2. Navigate to a website have multi iframe

3. Use action **get control property**

4. Execute Test Module with checked checkbox Screenshot recording with browser Internet Explorer.

## Result: {#section_em1_mr4_c3b .section}

Error message: No matching UI object found for "\[ta class=select-one, id=lstComponents\]" within the timeout of "30" seconds. Please check the interface definition for "\[ta class=select-one, id=lstComponents\]", or set a longer timeout with the "object wait" setting.

## Solution: {#section_nzz_nr4_c3b .section}

1. Open your Internet Option.

![](../Images/troubleshoot1.png)

2. Select "Security" tab, then select "Trusted sites", click "Sites" button.

![](../Images/troubleshoot2.png)

3. In "Trusted sites" window, enter a website which you want to access it.

![](../Images/troubleshoot3.png)

**Note:** Uncheck **Require server verification \(https:\) for all sites in this zone** if it;s not https.

4. Save it and restart the IE & Edge.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Cannot found specific control on Internet Explorer](../../TA_FAQ/Topics/0x80020011L.html)

**Next topic:**[Action Check Window Exists runs incorrectly on Internet Explorer](../../TA_FAQ/Topics/0x80020013L.html)

