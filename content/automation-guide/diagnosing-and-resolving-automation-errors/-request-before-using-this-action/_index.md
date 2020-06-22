--- 
title: "No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action."
linktitle: "No HTTP request found. Please declare a 'create http request' built-in action to instantiate a new HTTP request before using this action."
description: "Error code: 0x80017001L Problem This happens because an HTTP request is not instantiated before you call web service-related built-in actions to start working with the service. Solution In your test ..."
weight: 105
aliases: 
    - /TA_FAQ/Topics/0x80017001L.html
keywords: "automation errors, 0x80017001L"
---

Error code: 0x80017001L

## Problem

This happens because an HTTP request is not instantiated before you call web service-related built-in actions to start working with the service.

## Solution

In your test procedure, call the [create http request](/TA_Automation/Topics/bia_create_http_request.html) built-in action first to instantiate an HTTP request. \([Learn more](/TA_Automation/Topics/aut_testing_web_service_creating_test.html).\)




