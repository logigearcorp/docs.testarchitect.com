--- 
title: "No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action."
linktitle: "No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action."
aliases: 
    - /TA_FAQ/Topics/0x80017001L.html
---
# No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action. {#reference_0x80017001L .reference}

Error code: 0x80017001L

## Problem {#section_nmd_fxg_dy .section}

This happens because an HTTP request is not instantiated before you call web service-related built-in actions to start working with the service.

## Solution {#section_omd_fxg_dy .section}

In your test procedure, call the [create http request](../../TA_Automation/Topics/bia_create_http_request.html) built-in action first to instantiate an HTTP request. \([Learn more](../../TA_Automation/Topics/aut_testing_web_service_creating_test.html).\)

**Parent topic:**[Diagnosing and resolving automation errors](../../TA_FAQ/Topics/faq.automation_error.html)

**Previous topic:**[The value for argument <argumentName\> might be invalid or out of range. It must be a positive integer starting from 1 or an existing column header name.](../../TA_FAQ/Topics/0x80016013L.html)

**Next topic:**[The expected status code <codeID\> does not match with the returned code <codeID\>.](../../TA_FAQ/Topics/0x80017002L.html)

