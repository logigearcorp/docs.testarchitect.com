--- 
title: "Cannot found specific control on Internet Explorer"
linktitle: "Cannot found specific control on Internet Explorer"
weight: 124
aliases: 
    - /TA_FAQ/Topics/0x80020011L.html
---
# Cannot found specific control on Internet Explorer {#reference_0x80020011L .reference}

## Scenario: { .section}

1. Setting web drivermode = on

2. Navigate to a specific website on Internet Explorer.

3. Use action click on a element in the website.

## Result: {#section_bhz_shl_lhb .section}

**Expected:**Click on a element successfully.

**Observed:**Return error "No matching UI"

## Solution: {#section_yhg_zhl_lhb .section}

To get over this issue you have do two steps:

1. Changed the time zone to your time zone.

2. Reset setting of Internet Explorer to default.



**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Cannot “go back/ go forward” on Internet Explorer 11](../../TA_FAQ/Topics/0x80020010L.html)

**Next topic:**[Cannot matching control on action with multi iframe in Internet Explorer](../../TA_FAQ/Topics/0x80020012L.html)

