--- 
title: "Testing web services"
linktitle: "Testing web services"
description: "Web services are applications that can be published and called over the Internet by client applications. TestArchitect supports functional testing of web services."
weight: 3
aliases: 
    - /TA_Automation/Topics/aut_testing_web_service.html
keywords: "web services testing, application testing"
---

Web services are applications that can be published and called over the Internet by client applications. TestArchitect supports functional testing of web services.

## Overview of web service

Web service is the medium of communication through which two applications exchange data regardless of their underline architecture and the technology. For example you want to display weather forecast information. You no longer need to collect, process and render the data in your application. Instead, you can buy the services from providers who already well-established in processing and publishing such kind of data.

Today's software applications comprise complex web services and APIs which must be flexible and robust enough to scale and grow. It is vital to perform functional testing for web service during pre-deployment stage to identify and resolve defects as early as possible, and regression testing during post-deployment stage to ensure ongoing quality of service and availability.

## Supported web services

Web services can be implemented in different ways, but the following approach is supported by TestArchitect.

-   [RESTful](http://docs.oracle.com/javaee/6/tutorial/doc/gijqy.html) \(Representational State Transfer architecture\)
-   [SOAP](https://www.w3schools.com/xml/xml_soap.asp) \(Simple Object Access Protocol\) over HTTP-based web services

## Supported authentication credentials

TestArchitect enables you to test web services that use following authentication credentials:

-   [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617)
-   [OAuth 2.0](https://oauth.net/2/)
-   [Digest authentication](https://tools.ietf.org/html/rfc2617#section-3)

## Network connection

A network connection to the web service-under-test is required. Otherwise, TestArchitect is unable to simulate calls to the web service methods.

## Web service testing

A web service test basically involves \([learn more](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/creating-a-test#section_l5x_qrm_1y)\):

1.  Specify authentication information for service clients
2.  Send an HTTP request to the web service-under-test
3.  Parse an HTTP response from the web service-under-test
4.  Verify the HTTP response

1.  [Creating web service test](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/creating-a-test)  
Functional testing of web services consists of invoking web service's APIs from TestArchitect's test procedures and checking the returned result values.
2.  [Specifying web service credentials](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/specifying-credentials)  
Details how to specify authentication information for service clients.
3.  [Using web service checkpoints](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/using-checkpoints)  
A web service checkpoint is a test operation that verifies that an HTTP response returned from a tested web service contains appropriate data.



**Related information**  


[add http body](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-body)

[add http header](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-header)

[add http parameter](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-parameter)

[authenticate](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/authenticate)

[create http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request)

[send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request)

[parse http response](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/parse-http-response)

[attach file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/attach-file)

[configure web service settings](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/configure-web-service-settings)

