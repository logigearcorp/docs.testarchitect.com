--- 
title: "The expected status code *<codeID\\>* does not match with the returned code *<codeID\\>*."
linktitle: "The expected status code <codeID\\> does not match with the returned code <codeID\\>."
weight: 106
aliases: 
    - /TA_FAQ/Topics/0x80017002L.html
---

Error code: 0x80017002L

## Problem

This happens because the expected HTTP status code, defined in the [send http request](/TA_Automation/Topics/bia_send_http_request.html) built-in action, does not match with the actual HTTP status code returned by the web service.

## Solution

Refer to the list of predefined [HTTP status Code](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) .For example:

-   200 means that the request was successfully received, understood, and accepted.
-   404 means that the server has not found anything matching the request-URI.

**Parent topic:**[Diagnosing and resolving automation errors](/TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action.](/TA_FAQ/Topics/0x80017001L.html)

**Next topic:**[Unexpected error has occurred. Error Detail: <Exceptions caught by RestAssured\>](/TA_FAQ/Topics/0x80017003L.html)

