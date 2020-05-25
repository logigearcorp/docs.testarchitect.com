--- 
title: "**Cannot “go back/ go forward” on Internet Explorer 11**"
linktitle: "Cannot “go back/ go forward” on Internet Explorer 11"
aliases: 
    - /TA_FAQ/Topics/0x80020010L.html
---
# **Cannot “go back/ go forward” on Internet Explorer 11** {#reference_0x80020010L .reference}

## Scenario 1: {#section_rcd_yvw_fhb .section}

1. Open Internet Explorer 11 and navigate following steps:

-   Google → Website1 → Website2

2. Using action go back to return previous page.

## Scenario 2: {#section_ptd_kww_fhb .section}

1. Open Internet Explorer 11 and navigate following steps:

-   Google → Website1 → Website2

2. Using action go forward to move to next page.

## Result: {#section_fj2_tww_fhb .section}

Action "go back/go forward" does not effected. The journey still stuck in the current page.

## Problem: {#section_d3r_www_fhb .section}

The browser setting is "off", TestArchitect actions are not work without run as administrator.

## Solution: {#section_qtf_hxw_fhb .section}

User need to start TestArchitect controller with administrator.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Navigate fails to open additional tabs with WebDriver on Internet Explorer](../../TA_FAQ/Topics/0x80020009L.html)

**Next topic:**[Cannot found specific control on Internet Explorer](../../TA_FAQ/Topics/0x80020011L.html)

