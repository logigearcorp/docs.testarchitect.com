--- 
title: "macOS"
linktitle: "What's new in TestArchitect for macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 2 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.3_update_2.html
keywords: "Release Notes 8.3 Update 2, macOS, What is new, macOS, TestArchitect 8.3 Update 2, TestArchitect 8.3 Update 2, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 2 running under macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

**New features**

-   [**Modern TestArchitect command-line interface**](/TA_Help/Topics/Test_exec_cmd.html):
    -   **Flexibility**: With new TestArchitect's command line tool, tests can be launched from a command shell. When incorporated into batch files, the tool significantly extends the flexibility of test execution, especially from a scheduling standpoint.
    -   **Standards for command-line interfaces**: In order to provide a consistent, cohesive user experience, the new TestArchitect command-line interface has been standardized on the following aspects:
        -   Consistent argument naming conventions
        -   Consistent error messages and exit codes
        -   Consistent command syntax
    -   **Ease of use**: The presence of optional arguments in batches files is no longer required. When the optional arguments are absent, their default value will be automatically applied.
-   **[A separate TestArchitect Help file installer](/TA_UsingHelpSystem/Topics/hs_getting_help.html)**: The TestArchitect Help package has been removed from TestArchitect installer. If you'd like to continue to open local help documentation in offline mode, please follow this [link](/TA_UsingHelpSystem/Topics/hs_getting_help.html).

**Enhancements to existing features**

-   [**Adding test results to the repository**](/TA_Help/Topics/Test_result_storing_automatically.html):

    -   In the Continuous Integration/Continuous Deployment \(CI/CD\) process, after automated tests are entirety finished, you are able to add local test results into the repository, even if the specified result folder might not exist beforehand.
    -   At the moment, TestArchitect is capable of dynamically creating result folders on-the-fly. Name of the result folders is determined based on the following predefined macro variables.
    |Macro variables|Description|Output \(example\)|
    |---------------|-----------|------------------|
    |\{year\}|Gets the current year|2017|
    |\{month\}|Gets the current month|08|
    |\{day\}|Get the current date|09|
    |\{today\}|Get today's date in the form of mm-dd-yyyy|08-09-2017|

-   [**Exporting test results into various formats**](/TA_Help/Topics/Test_result_export.html):
    -   **Export test result into .TARESULT files**:
        -   Test run results now can be converted and [exported](/TA_Help/Topics/ug_test_results_export_TARESULT.html) to .TARESULT extension, an archive filename extension, developed by LogiGear. This new extension is extremely convenient for test result query purposes, especially in the CI/CD process. Specifically, upon test completion, you can aggregate all test results quickly by just simply querying all returned .TARESULT files.
        -   TARESULT then also can be [imported](https://www.testarchitect.com/OnlineHelp/index.html#TA_Help/Topics/ug_importing_test_results.html) back into TestArchitect.
    -   **Export test results to HTML**:
        -   [**XSLT template**](/TA_Help/Topics/Test_result_export_HTML.html): Ability to export HTML results with your own view layout, customized by your XSLT template.
        -   [**Directory structure output**](/TA_Help/Topics/Test_result_export_HTML.html): Ability to output different types of directory structure folder which store HTML files.
            -   Folder structure: TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
            -   Flat structure: TestArchitect does not create subdirectories. There is only a single top-level directory which contains all HTML results.
        -   **Create output folders on-the-fly**: TestArchitect automatically creates a folder to store HTML files if the specified folder does not exist.

## TestArchitect Automation

**New features**

-   **Testing in cloud services**:
    -   **Official release for automation testing in [WebDriver based cloud services](/TA_Automation/Topics/aut_app_cloud_testing.html)**: It delivers cost saving, time saving, remote/mobile access to information, high productivity, and increased test coverage across different mobile device types, etc.
    -   **Execution on multiple cloud devices**: You are now able to automate tests on multiple cloud devices concurrently. The cloud devices will be defined via desired capabilities, specified in [JSON files](/TA_Automation/Topics/aut_app_cloud_testing_Appium_automation_json.html).
    -   **New built-in [disconnect all cloud devices](/TA_Automation/Topics/bia_disconnect_all_cloud_devices.html) action added**: Logically disconnect all currently-connected cloud devices.
    -   [web element matching](/TA_Automation/Topics/bis_web_element_matching.html) built-in setting: Specify which technique is used to perform web UI element matching.
-   [Web service testing](/TA_Automation/Topics/aut_testing_web_service.html):
    -   **New built-in actions supported**:
        -   [configure web service settings](/TA_Automation/Topics/bia_configure_web_service_settings.html): Send JSON string request to a web service in order to apply new configuration settings.
            1.  **Proxy**: Defines a manual proxy server.
            2.  **SSL**: Defines SSL configurations.
            3.  **Cookies**: Specifies HTTP cookies that are sent back to the server.
            4.  **Encoder**: Specifies configurations for the encoder.
            5.  **Decoder**: Specifies configurations for the decoder.
            6.  **Redirect**: Configures the redirect settings
        -   [attach file](/TA_Automation/Topics/bia_attach_file.html): Attach given file\(s\) to a web service.
    -   **Common HTTP request methods are fully supported** for the [send http request](/TA_Automation/Topics/bia_send_http_request.html) action including:
        -   [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET): Request data from a specified resource.
        -   [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST): Submit data to be processed to a specified resource.
        -   [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT): Replace all the current representations of the target resource with the uploaded content.
        -   [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE): Remove all the current representations of the target resource given by URI.
        -   [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH): The PATCH method is used to apply partial modifications to a resource.
        -   [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD): The HEAD method asks for a response identical to that of a GET request, but without the response body.
        -   [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS): The OPTIONS method is used to describe the communication options for the target resource.

**Enhancements to existing features**

-   iOS testing:
    -   [Support for **iOS 10.3.2**](/iOS/Topics/iOS_automation_def.html): You can now run tests for applications on iOS devices running this iOS version.


