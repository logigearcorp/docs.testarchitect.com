--- 
title: "Invalid interface element: *<controlName\\>*. An interface element cannot be identified by both its 'xpath' and other properties."
linktitle: "Invalid interface element: <controlName\\>. An interface element cannot be identified by both its 'xpath' and other properties."
weight: 23
aliases: 
    - /TA_FAQ/Topics/0x80020004L.html
---
# Invalid interface element: *<controlName\>*. An interface element cannot be identified by both its 'xpath' and other properties. {#reference_0x80020004L .reference}

Error code: 0x80020004L

## Problem { .section}

This happens because you identify a web UI control by combination of [XPath](../../TA_Help/Topics/prop_xpath.html) TA property, and other TA properties.

## Solution { .section}

In identifying a control within an application, TestArchitect normally allows for any combination of valid TA properties \(and their respective values\) to be specified. The XPath property is an exception. XPath must not be used in combination with any other TA properties to identify and capture a web control.

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[Chrome was not configured in the correct manner. Please refer to web testing section in TestArchitect Help to learn how to reconfigure Chrome for testing.](../../TA_FAQ/Topics/0x80020003L.html)

**Next topic:**[The <propertyName\> property is deprecated and not supported in <platformName\>. Please ensure that your UI controls are not identified by the <propertyName\> property, and then try again.](../../TA_FAQ/Topics/0x80020005L.html)

