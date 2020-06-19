--- 
title: "Invalid interface element: <controlName\\>. An interface element cannot be identified by both its 'xpath' and other properties."
linktitle: "Invalid interface element: *<controlName\\>*. An interface element cannot be identified by both its 'xpath' and other properties."
description: "Error code: 0x80020004L Problem This happens because you identify a web UI control by combination of XPath TA property, and other TA properties. Solution In identifying a control within an ..."
weight: 23
aliases: 
    - /TA_FAQ/Topics/0x80020004L.html
keywords: "automation errors, 0x80020004L"
---

Error code: 0x80020004L

## Problem

This happens because you identify a web UI control by combination of [XPath](/TA_Help/Topics/prop_xpath.html) TA property, and other TA properties.

## Solution

In identifying a control within an application, TestArchitect normally allows for any combination of valid TA properties \(and their respective values\) to be specified. The XPath property is an exception. XPath must not be used in combination with any other TA properties to identify and capture a web control.




