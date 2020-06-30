--- 
title: "What's new in TestArchitect for Linux"
linktitle: "What's new in TestArchitect for Linux"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 2 running under Linux."
weight: 2
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Linux_8.3_update_2.html
keywords: "Release Notes 8.3 Update 2, Linux, What is new, Linux, TestArchitect 8.3 Update 2, TestArchitect 8.3 Update 2, what is new, Linux"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 2 running under Linux.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Client

**New features**

-   [**Modern TestArchitect command-line interface**](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/):
    -   **Flexibility**: With new TestArchitect's command line tool, tests can be launched from a command shell. When incorporated into batch files, the tool significantly extends the flexibility of test execution, especially from a scheduling standpoint.
    -   **Standards for command-line interfaces**: In order to provide a consistent, cohesive user experience, the new TestArchitect command-line interface has been standardized on the following aspects:
        -   Consistent argument naming conventions
        -   Consistent error messages and exit codes
        -   Consistent command syntax
    -   **Ease of use**: The presence of optional arguments in batches files is no longer required. When the optional arguments are absent, their default value will be automatically applied.
-   **[A separate TestArchitect Help file installer](/using-the-testarchitect-help-system/getting-help)**: The TestArchitect Help package has been removed from TestArchitect installer. If you'd like to continue to open local help documentation in offline mode, please follow this [link](/using-the-testarchitect-help-system/getting-help).

**Enhancements to existing features**

-   [**Adding test results to the repository**](/user-guide/working-with-test-results/adding-test-results-to-the-repository/adding-test-results-automatically):

    -   In the Continuous Integration/Continuous Deployment \(CI/CD\) process, after automated tests are entirety finished, you are able to add local test results into the repository, even if the specified result folder might not exist beforehand.
    -   At the moment, TestArchitect is capable of dynamically creating result folders on-the-fly. Name of the result folders is determined based on the following predefined macro variables.
    |Macro variables|Description|Output \(example\)|
    |---------------|-----------|------------------|
    |\{year\}|Gets the current year|2017|
    |\{month\}|Gets the current month|08|
    |\{day\}|Get the current date|09|
    |\{today\}|Get today's date in the form of mm-dd-yyyy|08-09-2017|

-   [**Exporting test results into various formats**](/user-guide/working-with-test-results/exporting-test-results/):
    -   **Export test result into .TARESULT files**:
        -   Test run results now can be converted and [exported](/user-guide/working-with-test-results/exporting-test-results/exporting-test-results-to-taresult-files/) to .TARESULT extension, an archive filename extension, developed by LogiGear. This new extension is extremely convenient for test result query purposes, especially in the CI/CD process. Specifically, upon test completion, you can aggregate all test results quickly by just simply querying all returned .TARESULT files.
        -   TARESULT then also can be [imported](https://www.testarchitect.com/OnlineHelp/index.html#TA_Help/Topics/ug_importing_test_results.html) back into TestArchitect.
    -   **Export test results to HTML**:
        -   [**XSLT template**](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file): Ability to export HTML results with your own view layout, customized by your XSLT template.
        -   [**Directory structure output**](/user-guide/working-with-test-results/exporting-test-results/exporting-local-test-results-to-an-html-file): Ability to output different types of directory structure folder which store HTML files.
            -   Folder structure: TestArchitect creates a hierarchical tree structure, or subdirectories to store HTML results.
            -   Flat structure: TestArchitect does not create subdirectories. There is only a single top-level directory which contains all HTML results.
        -   **Create output folders on-the-fly**: TestArchitect automatically creates a folder to store HTML files if the specified folder does not exist.

## TestArchitect Automation

**New features**

-   **Support for Red Hat Enterprise Linux 6.6 and 7.2**: Now, you can run your tests under Red Hat Enterprise Linux 6.6 and 7.2 to check whether your application works correctly with this version of the Linux operating system.
-   [Web service testing](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/):
    -   **New built-in actions supported**:
        -   [configure web service settings](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/configure-web-service-settings): Send JSON string request to a web service in order to apply new configuration settings.
            1.  **Proxy**: Defines a manual proxy server.
            2.  **SSL**: Defines SSL configurations.
            3.  **Cookies**: Specifies HTTP cookies that are sent back to the server.
            4.  **Encoder**: Specifies configurations for the encoder.
            5.  **Decoder**: Specifies configurations for the decoder.
            6.  **Redirect**: Configures the redirect settings
        -   [attach file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/attach-file): Attach given file\(s\) to a web service.
    -   **Common HTTP request methods are fully supported** for the [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) action including:
        -   [GET](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET): Request data from a specified resource.
        -   [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST): Submit data to be processed to a specified resource.
        -   [PUT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PUT): Replace all the current representations of the target resource with the uploaded content.
        -   [DELETE](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/DELETE): Remove all the current representations of the target resource given by URI.
        -   [PATCH](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/PATCH): The PATCH method is used to apply partial modifications to a resource.
        -   [HEAD](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD): The HEAD method asks for a response identical to that of a GET request, but without the response body.
        -   [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS): The OPTIONS method is used to describe the communication options for the target resource.
-   **A new method of AbtEntity** for a user-scripted action \(applicable to Java and C\# harnesses only\):
    -   [ExecuteScript](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/executescript): Executes JavaScript code of a specified web page, or inline JavaScript.

**Enhancements to existing features**

-   [**OCR \(Optical Character Recognition\)**](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/) built-in actions are now fully supported on Linux.


