--- 
title: "Testing web services"
linktitle: "Testing web services"
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service.html
---
# Testing web services {#concept_jkr_x2c_zx .concept}

Web services are applications that can be published and called over the Internet by client applications. TestArchitect supports functional testing of web services.

## Overview of web service { .section}

Web service is the medium of communication through which two applications exchange data regardless of their underline architecture and the technology. For example you want to display weather forecast information. You no longer need to collect, process and render the data in your application. Instead, you can buy the services from providers who already well-established in processing and publishing such kind of data.

Today's software applications comprise complex web services and APIs which must be flexible and robust enough to scale and grow. It is vital to perform functional testing for web service during pre-deployment stage to identify and resolve defects as early as possible, and regression testing during post-deployment stage to ensure ongoing quality of service and availability.

## Supported web services { .section}

Web services can be implemented in different ways, but the following approach is supported by TestArchitect.

-   [RESTful](http://docs.oracle.com/javaee/6/tutorial/doc/gijqy.html) \(Representational State Transfer architecture\)
-   [SOAP](https://www.w3schools.com/xml/xml_soap.asp) \(Simple Object Access Protocol\) over HTTP-based web services

## Supported authentication credentials { .section}

TestArchitect enables you to test web services that use following authentication credentials:

-   [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617)
-   [OAuth 2.0](https://oauth.net/2/)
-   [Digest authentication](https://tools.ietf.org/html/rfc2617#section-3)

## Network connection { .section}

A network connection to the web service-under-test is required. Otherwise, TestArchitect is unable to simulate calls to the web service methods.

## Web service testing { .section}

A web service test basically involves \([learn more](aut_testing_web_service_creating_test.md#section_l5x_qrm_1y)\):

1.  Specify authentication information for service clients
2.  Send an HTTP request to the web service-under-test
3.  Parse an HTTP response from the web service-under-test
4.  Verify the HTTP response

1.  [Creating web service test](../../TA_Automation/Topics/aut_testing_web_service_creating_test.html)  
Functional testing of web services consists of invoking web service's APIs from TestArchitect's test procedures and checking the returned result values.
2.  [Specifying web service credentials](../../TA_Automation/Topics/aut_testing_web_service_specifying_credentials.html)  
Details how to specify authentication information for service clients.
3.  [Using web service checkpoints](../../TA_Automation/Topics/aut_testing_web_service_using_checkpoints.html)  
A web service checkpoint is a test operation that verifies that an HTTP response returned from a tested web service contains appropriate data.

**Parent topic:**[Testing web and RIA applications](../../TA_Automation/Topics/aut_app_testing_web_RIA.html)

**Previous topic:**[Testing Silverlight applications](../../TA_Automation/Topics/aut_app_testing_Silverlight_apps.html)

**Related information**  


[add http body](../../TA_Automation/Topics/bia_add_http_body.html)

[add http header](../../TA_Automation/Topics/bia_add_http_header.html)

[add http parameter](../../TA_Automation/Topics/bia_add_http_parameter.html)

[authenticate](../../TA_Automation/Topics/bia_authenticate.html)

[create http request](../../TA_Automation/Topics/bia_create_http_request.html)

[send http request](../../TA_Automation/Topics/bia_send_http_request.html)

[parse http response](../../TA_Automation/Topics/bia_parse_http_response.html)

[attach file](../../TA_Automation/Topics/bia_attach_file.html)

[configure web service settings](../../TA_Automation/Topics/bia_configure_web_service_settings.html)

