--- 
title: "Creating a test"
linktitle: "Creating web service test"
description: "Functional testing of web services consists of invoking web service's APIs from TestArchitect's test procedures and checking the returned result values."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_creating_test.html
keywords: "web services testing, creating test"
---

Functional testing of web services consists of invoking web service's APIs from TestArchitect's test procedures and checking the returned result values.

## Planning a web service functional test

Before creating test procedures, plan your web service test as follows:

1.  Define which service functionality should be tested.
2.  Determine which APIs of the service are verified.
3.  Specify which APIs to be called, the call order and how you verify the returned HTTP results.

After planning your test, start creating it.

## Creating a web service functional test

Typically, creation of a web service test includes the following steps:

1.  [Instantiate](/TA_Automation/Topics/bia_create_http_request.html) an HTTP request.
2.  Define necessary information of [authentication](/TA_Automation/Topics/bia_authenticate.html) \([learn more](/TA_Automation/Topics/aut_testing_web_service_specifying_credentials.html)\), [parameters](/TA_Automation/Topics/bia_add_http_parameter.html), [header](/TA_Automation/Topics/bia_add_http_header.html), and/or [body](/TA_Automation/Topics/bia_add_http_body.html) for an HTTP request.
3.  [Send](/TA_Automation/Topics/bia_send_http_request.html) the HTTP request with prepared information.
4.  [Parse](/TA_Automation/Topics/bia_parse_http_response.html) an HTTP response.
5.  Depending on the HTTP response's format returned by the tested web service which might be in XML, JSON, or text format, etc., use respective checkpoint built-in actions to verify the response by employing [XML checkpoints](/TA_Automation/Topics/bia_XML.html), [JSON checkpoints](/TA_Automation/Topics/bia_JSON.html), or value checkpoints, such as, [check value](/TA_Automation/Topics/bia_check_value.html), or [check text contains](/TA_Automation/Topics/bia_check_text_contains.html), etc. \([Learn more](/TA_Automation/Topics/aut_testing_web_service_using_checkpoints.html).\)



