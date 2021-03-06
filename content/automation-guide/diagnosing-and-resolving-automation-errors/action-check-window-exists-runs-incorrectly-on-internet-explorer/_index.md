--- 
title: "Action Check Window Exists runs incorrectly on Internet Explorer"
linktitle: "Action Check Window Exists runs incorrectly on Internet Explorer"
weight: 126
aliases: 
    - /TA_FAQ/Topics/0x80020013L.html
---

## Scenario:

1. Create a **Test Module**

2. Use setting **webdriver mode** on

3. Use setting **use browser** with IE browser

4. Navigate to a random website

5. Use action **check window exists** with doc title property

6. Execute **Test Module**

## Result:

Action **check window exists** returns failed

## Solution:

1. Open your Internet Options

![](/images//Images/troubleshoot1.png)

2. Select **Security tab**, then uncheck **Enable Protected Mode \(requires restarting Internet Explorer\)**

![](/images//Images/check_window_exists_incorrectly.jpg)

4. Click **OK** button and restart the IE & Edge.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Cannot matching control on action with multi iframe in Internet Explorer](/TA_FAQ/Topics/0x80020012L.html)

**Next topic:**[Using Start-up setting for configure Cleanup key](/TA_FAQ/Topics/0x80020014L.html)

