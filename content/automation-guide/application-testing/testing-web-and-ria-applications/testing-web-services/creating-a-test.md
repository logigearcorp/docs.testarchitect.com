--- 
title: "Creating web service test"
linktitle: "Creating a test"
description: "Functional testing of web services consists of invoking web service's APIs from TestArchitect's test procedures and checking the returned result values."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service_creating_test.html
keywords: "web services testing, creating test"
---

Functional testing of web services consists of invoking web service's APIs from TestArchitect's test procedures and checking the returned result values.

## {{< expand >}} Planning a web service functional test

Before creating test procedures, plan your web service test as follows:

1.  Define which service functionality should be tested.
2.  Determine which APIs of the service are verified.
3.  Specify which APIs to be called, the call order and how you verify the returned HTTP results.

After planning your test, start creating it.

## {{< expand >}} Creating a web service functional test {{< permerlink >}} {#concept_dyl_drm_1y__section_l5x_qrm_1y} 

Typically, creation of a web service test includes the following steps:

1.  [Instantiate](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request) an HTTP request.
2.  Define necessary information of [authentication](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/authenticate) \([learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/specifying-credentials)\), [parameters](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-parameter), [header](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-header), and/or [body](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-body) for an HTTP request.
3.  [Send](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) the HTTP request with prepared information.
4.  [Parse](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/parse-http-response) an HTTP response.
5.  Depending on the HTTP response's format returned by the tested web service which might be in XML, JSON, or text format, etc., use respective checkpoint built-in actions to verify the response by employing [XML checkpoints](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/), [JSON checkpoints](/automation-guide/action-based-testing-language/built-in-actions/system-actions/json/), or value checkpoints, such as, [check value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-value), or [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains), etc. \([Learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/using-checkpoints).\)



