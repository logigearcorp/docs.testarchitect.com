--- 
title: "Creating web service test"
linktitle: "Creating a test"
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_creating_test.html
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

1.  [Instantiate](bia_create_http_request.html) an HTTP request.
2.  Define necessary information of [authentication](bia_authenticate.html) \([learn more](aut_testing_web_service_specifying_credentials.html)\), [parameters](bia_add_http_parameter.html), [header](bia_add_http_header.html), and/or [body](bia_add_http_body.html) for an HTTP request.
3.  [Send](bia_send_http_request.html) the HTTP request with prepared information.
4.  [Parse](bia_parse_http_response.html) an HTTP response.
5.  Depending on the HTTP response's format returned by the tested web service which might be in XML, JSON, or text format, etc., use respective checkpoint built-in actions to verify the response by employing [XML checkpoints](bia_XML.html), [JSON checkpoints](bia_JSON.html), or value checkpoints, such as, [check value](bia_check_value.html), or [check text contains](bia_check_text_contains.html), etc. \([Learn more](aut_testing_web_service_using_checkpoints.html).\)

**Parent topic:**[Testing web services](/TA_Automation/Topics/aut_testing_web_service.html)

**Next topic:**[Specifying web service credentials](/TA_Automation/Topics/aut_testing_web_service_specifying_credentials.html)

