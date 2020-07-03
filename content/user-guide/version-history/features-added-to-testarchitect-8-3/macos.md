--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.3.html
keywords: "Release Notes 8.3, macOS, What is new, macOS, TestArchitect 8.3, TestArchitect 8.3, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.3 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

**New features**

-   **Introduction of new [XML test result model](/user-guide/working-with-test-results/)**:
    -   TestArchitect saves test results of each test run in the XML format, so that you can view them in any web browser.

        {{<important>}} XML result model provides the following advantages when compared to the previous result model.

        -   Less memory footprint: The amount of memory that TestArchitect uses or references while opening and viewing test results is less.
        -   Smaller parsing times: The operation process is faster, such as open test results, import/export test results, etc.
        -   Smaller test result compression: Test results take up less hard drive space; therefore, the repository's size is reduced.
    -   [**Test result customization**](/user-guide/working-with-test-results/customizing-xml-test-results/): You now can customize how your test results appear by modifying the corresponding XSL file, a language for transforming XML test results.
    -   **[XML Result Conversion tool](/user-guide/working-with-test-results/converting-test-results/xml-result-conversion-command-line-tool/)**: Rather than [converting one-by-one test result](/user-guide/working-with-test-results/converting-test-results/) into XML format, you can perform this operation via a command line tool to quickly convert entire test results of a given repository.
    -   Numerous bug fixes.
-   **[Better troubleshooting of automation errors](/automation-guide/diagnosing-and-resolving-automation-errors/)**: If there are any automation errors in the test result, TestArchitect provides a hyperlink to direct to the respective online troubleshooting topic which describes common causes and possible solutions.

**Enhancements to existing features**

-   **Improved picture checks**:
    -   **[Importing external image sources](/user-guide/projects-and-project-items/project-items/picture-checks/importing-external-image-sources/)**: TestArchitect now lets you easily import image files \(i.e. .PNG\) format\) for new picture checks or additional new baseline images.
    -   **[Resolving unverified picture checks](/user-guide/projects-and-project-items/project-items/picture-checks/resolving-unverified-picture-checks)**: You are now able to upload unverified picture checks to the repository, and then resolve those unverified picture checks.

## TestArchitect Automation

**New features**

-   **[Support for web service testing](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/)**: Web services are applications that can be published and called over the Internet by client applications. It is vital to perform testing for web services during the pre-deployment stage. This helps to identify and resolve defects as early as possible. Also, in the regression testing during post-deployment stage it ensures ongoing quality of service and availability. TestArchitect now supports functional testing of web services.
    -   TestArchitect includes new built-in actions that let you perform web service testing:
        -   [create http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/create-http-request): Instantiate a new HTTP request.
        -   [authenticate](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/authenticate): Specify an HTTP authentication scheme and its information before working with web services. The user must be authenticated to the services.
        -   [add http header](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-header): Add a name/value pair as an HTTP header field that you might want to include with your request.
        -   [add http body](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-body): Add a message body into an HTTP request.
        -   [add http parameter](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/add-http-parameter): Add a parameter including a pair of name/value to a GET request. Note that, this parameter will be added to the query string in the requester URL.
        -   [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request): Send an HTTP request to a given resource.
        -   [parse http response](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/parse-http-response): Parse the response of the request to status, header and body.
    -   TestArchitect also enables you to test web services that use [Basic HTTP authentication](https://tools.ietf.org/html/rfc7617) and [OAuth 2.0](https://oauth.net/2/) authentication.
-   **Built-in actions for [JSON checkpoints](/automation-guide/action-based-testing-language/built-in-actions/system-actions/json/) supported**:

    {{<note>}} These built-in actions can also be used to verify JSON response returned by the tested web service.

    -   [check json query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/json/check-json-query-result): Check a JSON query result against an expected string. The result is Passed if the strings match; otherwise it is Failed.
    -   [get json query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/json/get-json-query-result): Query a JSON document by JSONPath.
-   **Added beta support for automation testing in [WebDriver based cloud services](/automation-guide/application-testing/mobile-testing/testing-in-the-cloud/)** \(Appium enabled\): It delivers cost saving, time saving, remote/mobile access to information, high productivity, and increased test coverage across different mobile device types, etc.
    -   With TestArchitect, you can now run mobile web app testing on real devices in WebDriver based cloud services.
    -   TestArchitect includes new built-in actions that let you test in the cloud services.
        -   [assign cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-cloud-device): Assign a logical name for a given capability of a target cloud device. This name may then be used in the action [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device).
        -   [connect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/connect-cloud-device): Logically connect to a cloud-based device and make that device the target for the automation.
        -   [use cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-cloud-device): Use a cloud device, as specified by its session ID, to run automated tests.
        -   [get cloud device session id](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/get-cloud-device-session-id): Retrieve session ID of the connected cloud device.
        -   [disconnect cloud device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-cloud-device): Logically disconnect the target cloud device.
        -   [use host machine](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-host-machine): Switch the test run back to the host machine from the currently-connected cloud device in order to continue to run the remaining tests.


