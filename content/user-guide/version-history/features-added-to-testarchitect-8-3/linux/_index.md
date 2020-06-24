--- 
title: "What's new in TestArchitect for Linux"
linktitle: "What's new in TestArchitect for Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.3.html
keywords: "Release Notes 8.3, Linux, What is new, Linux, TestArchitect 8.3, TestArchitect 8.3, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.3 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

**New features**

-   **Introduction of new [XML test result model](/TA_Help/Topics/Test_result.html)**:
    -   TestArchitect saves test results of each test run in the XML format, so that you can view them in any web browser.

        {{<important>}} XML result model provides the following advantages when compared to the previous result model.

        -   Less memory footprint: The amount of memory that TestArchitect uses or references while opening and viewing test results is less.
        -   Smaller parsing times: The operation process is faster, such as open test results, import/export test results, etc.
        -   Smaller test result compression: Test results take up less hard drive space; therefore, the repository's size is reduced.
    -   [**Test result customization**](/TA_Help/Topics/ug_customizing_XML_report.html): You now can customize how your test results appear by modifying the corresponding XSL file, a language for transforming XML test results.
    -   **[XML Result Conversion tool](/TA_Help/Topics/ug_XML_result_conversion_tool.html)**: Rather than [converting one-by-one test result](/TA_Help/Topics/ug_XML_result_conversion.html) into XML format, you can perform this operation via a command line tool to quickly convert entire test results of a given repository.
    -   Numerous bug fixes.
-   **[Better troubleshooting of automation errors](/TA_FAQ/Topics/faq.automation_error.html)**: If there are any automation errors in the test result, TestArchitect provides a hyperlink to direct to the respective online troubleshooting topic which describes common causes and possible solutions.

**Enhancements to existing features**

-   **Improved picture checks**:
    -   **[Importing external image sources](/TA_Help/Topics/ug_picture_checks_importing_images.html)**: TestArchitect now lets you easily import image files \(i.e. .PNG\) format\) for new picture checks or additional new baseline images.
    -   **[Resolving unverified picture checks](/TA_Help/Topics/ug_Resolving_unverfied_picture_checks.html)**: You are now able to upload unverified picture checks to the repository, and then resolve those unverified picture checks.

## TestArchitect Automation

**New features**

-   **[Support for web service testing](/TA_Automation/Topics/aut_testing_web_service.html)**: Web services are applications that can be published and called over the Internet by client applications. It is vital to perform testing for web services during the pre-deployment stage. This helps to identify and resolve defects as early as possible. Also, in the regression testing during post-deployment stage it ensures ongoing quality of service and availability. TestArchitect now supports functional testing of web services.
    -   TestArchitect includes new built-in actions that let you perform web service testing:
        -   [create http request](/TA_Automation/Topics/bia_create_http_request.html): Instantiate a new HTTP request.
        -   [authenticate](/TA_Automation/Topics/bia_authenticate.html): Specify an HTTP authentication scheme and its information before working with web services. The user must be authenticated to the services.
        -   [add http header](/TA_Automation/Topics/bia_add_http_header.html): Add a name/value pair as an HTTP header field that you might want to include with your request.
        -   [add http body](/TA_Automation/Topics/bia_add_http_body.html): Add a message body into an HTTP request.
        -   [add http parameter](/TA_Automation/Topics/bia_add_http_parameter.html): Add a parameter including a pair of name/value to a GET request. Note that, this parameter will be added to the query string in the requester URL.
        -   [send http request](/TA_Automation/Topics/bia_send_http_request.html): Send an HTTP request to a given resource.
        -   [parse http response](/TA_Automation/Topics/bia_parse_http_response.html): Parse the response of the request to status, header and body.
    -   TestArchitect also enables you to test web services that use [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617) and [OAuth 2.0](https://oauth.net/2/) authentication.
-   **Built-in actions for [JSON checkpoints](/TA_Automation/Topics/bia_JSON.html) supported**:

    {{<note>}} These built-in actions can also be used to verify JSON response returned by the tested web service.

    -   [check json query result](/TA_Automation/Topics/bia_check_json_query_result.html): Check a JSON query result against an expected string. The result is Passed if the strings match; otherwise it is Failed.
    -   [get json query result](/TA_Automation/Topics/bia_get_json_query_result.html): Query a JSON document by JSONPath.


