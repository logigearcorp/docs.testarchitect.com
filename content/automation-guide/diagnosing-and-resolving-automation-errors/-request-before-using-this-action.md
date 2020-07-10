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

## {{< expand >}} Problem {{< permerlink >}} {#reference_0x80017001L__section_nmd_fxg_dy} 

This happens because an HTTP request is not instantiated before you call web service-related built-in actions to start working with the service.

## {{< expand >}} Solution {{< permerlink >}} {#reference_0x80017001L__section_omd_fxg_dy} 

In your test procedure, call the [create http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request) built-in action first to instantiate an HTTP request. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/creating-a-test).\)




