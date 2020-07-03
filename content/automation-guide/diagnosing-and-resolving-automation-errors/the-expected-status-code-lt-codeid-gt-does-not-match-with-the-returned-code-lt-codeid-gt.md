--- 
title: "The expected status code <codeID> does not match with the returned code <codeID>."
linktitle: "The expected status code <codeID> does not match with the returned code <codeID>."
description: "Error code: 0x80017002L Problem This happens because the expected HTTP status code, defined in the send http request built-in action, does not match with the actual HTTP status code returned by the ..."
weight: 106
aliases: 
    - /TA_FAQ/Topics/0x80017002L.html
keywords: "automation errors, 0x80017002L"
---

Error code: 0x80017002L

## Problem

This happens because the expected HTTP status code, defined in the [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) built-in action, does not match with the actual HTTP status code returned by the web service.

## Solution

Refer to the list of predefined [HTTP status Code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) .For example:

-   200 means that the request was successfully received, understood, and accepted.
-   404 means that the server has not found anything matching the request-URI.




