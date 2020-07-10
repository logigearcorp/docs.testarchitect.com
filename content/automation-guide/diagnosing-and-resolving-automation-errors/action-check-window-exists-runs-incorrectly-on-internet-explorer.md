--- 
title: "Action Check Window Exists runs incorrectly on Internet Explorer"
linktitle: "Action Check Window Exists runs incorrectly on Internet Explorer"
description: "Scenario: 1. Create a Test Module 2. Use setting webdriver mode on 3. Use setting use browser with IE browser 4. Navigate to a random website 5. Use action check window exists with doc title property ..."
weight: 126
aliases: 
    - /TA_FAQ/Topics/0x80020013L.html
keywords: "automation errors, Action check window exists runs incorrectly on Internet Explorer"
---

## {{< expand >}} Scenario: {{< permerlink >}} {#reference_0x80020012L__section_hbk_tk4_c3b} 

1. Create a **Test Module**

2. Use setting **webdriver mode** on

3. Use setting **use browser** with IE browser

4. Navigate to a random website

5. Use action **check window exists** with doc title property

6. Execute **Test Module**

## {{< expand >}} Result: {{< permerlink >}} {#reference_0x80020012L__section_em1_mr4_c3b} 

Action **check window exists** returns failed

## {{< expand >}} Solution: {{< permerlink >}} {#reference_0x80020012L__section_nzz_nr4_c3b} 

1. Open your Internet Options

![](/images/TA_FAQ/Images/troubleshoot1.png)

2. Select **Security tab**, then uncheck **Enable Protected Mode \(requires restarting Internet Explorer\)**

![](/images/TA_FAQ/Images/check_window_exists_incorrectly.jpg)

4. Click **OK** button and restart the IE & Edge.




