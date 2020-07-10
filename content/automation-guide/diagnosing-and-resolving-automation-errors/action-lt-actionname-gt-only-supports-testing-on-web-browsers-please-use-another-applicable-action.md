--- 
title: "Action <actionName> only supports testing on web browsers. Please use another applicable action."
linktitle: "Action <actionName> only supports testing on web browsers. Please use another applicable action."
description: "Error code: 0x8001600CL Problem This happens because the given built-in actions is executed on a non-web browser platform. Solution Use this action on web browser only. You can first apply the use ..."
weight: 83
aliases: 
    - /TA_FAQ/Topics/0x8001600CL.html
keywords: "automation errors, 0x8001600CL"
---

Error code: 0x8001600CL

## {{< expand >}} Problem

This happens because the given built-in actions is executed on a non-web browser platform.

## {{< expand >}} Solution

Use this action on web browser only. You can first apply the [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser) built-in action to select the default web browser, and then [navigate](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/navigate) to the specified web page.




