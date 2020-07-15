--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 3 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_3.html
keywords: "Release Notes 8.3 Update 3, Windows, What is new, Windows, TestArchitect 8.3 Update 3, TestArchitect 8.3 Update 3, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 3 running under Windows.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

New features

-   Standardized TestArchitect [test result status](/user-guide/working-with-test-results/overview/test-result-status):
    -   Current result statuses, including Passed, Failed, Passed with Warnings/Errors, Passed with Known Bugs, and Not Run, are refined in such a way that the conditions and interpretations are consistent and are administered in a standard manner. This limits false positive and false negative errors that might occur in test results.
    -   Adding a new result status, [Not Finished](/user-guide/working-with-test-results/overview/test-result-status): Reviewing test results is easier, because this new status helps you distinguish the cases in which a test is started, but it is unable to reach the end of an automated run.

        Please note that, the number of automation errors/warnings, and passed/failed checkpoints do not matter in this case. Specifically:

        -   Automation runs that crash unexpectedly are Not Finished.
        -   Automation errors occur and they are handled by the following built-in actions:
            -   [exit test module](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-module)
            -   [exit test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-case)
            -   [terminate](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/terminate).

Enhancements to existing features

-   [**Replication repositions**](/administration-guide/repository-server-management/replication-repositories/introduction-to-replication-repositories): Default value of data [synchronization mode](/administration-guide/repository-server-management/replication-repositories/synchronizing-data) between the primary repository and the replication repository is changed from Lazy to Eager, which means that the data by default is synchronized immediately after each modification.
-   Improved TestArchitect-Team Foundation Server \(TA-TFS\) integration:
    -   Support for uploading TestArchitect test results to TFS as an HTML file attachment with customized HTML view layout in the following functionalities.
        -   [TestArchitect command-line interface](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/): A new parameter [/xsltfs](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/#plentry_xsltfs) which specifies the directory of XSLT template applied for HTML files.
        -   Apply customized XSLT template option:
            -   [Execute Test](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/uploading-testarchitect-test-results/automatically-uploading-testarchitect-test-results-to-tfs#step_XSLT.template) dialog box
            -   [TestArchitect Execution](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/testarchitect-execution-dialog-box) dialog box.
    -   New GUI for the [TestArchitect Execution](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/testarchitect-execution-dialog-box) dialog box, used to invoke TestArchitect tests from external test management tools.
        -   Export test results to various output formats:
            -   XML detail: Exports test results to XML file once the test execution is complete.
            -   xUnit: Exports test results to a XML file in xUnit-format for integrating into the [continuous integration tools](/user-guide/integration-with-third-party-tools/continuous-integration-ci-tools/) once the text execution is complete.
            -   HTML: Export test results to HTML file automatically once the text execution is complete
    -   Added [TA-TFS plug-in](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/installing-the-ta-plug-in)’s new functionalities:
        -   Easier to **[associate test cases](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases)**
        -   Ability to **[disassociate test cases](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/disassociating-ta-and-tfs-test-cases)**
        -   Filtering test cases while [test association](/user-guide/integration-with-third-party-tools/tfs-integration/on-premises-tfs-environment-configuration/running-tests-under-on-premises-tfs/associating-ta-and-tfs-test-cases#li_Filtering.tests) and [test disassociation](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/disassociating-ta-and-tfs-test-cases#note_filtering_tests): By defining query fields, operators, and macros \([learn more](https://docs.microsoft.com/en-us/vsts/work/track/query-operators-variables)\), you can filter in work items to return the set of work items that interest you.
        -   [TA-TFS Extensibility](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/ta-tfs-extensibility/): Additional constants are provided to support the following features while uploading TestArchitect test results to TFS.
            -   Exporting TestArchitect test results into various formats including TARESULT, HTML, XML, and xUnit to a specified location.
            -   Running automated tests on physical or cloud mobile devices.
            -   Configuring automation playback tools.
            -   Using TFS test ID to name the TestArchitect test results attached to TFS.

## TestArchitect Automation {{< permerlink >}} {#concept_what_new_8.3_Windows_update_3__section_p2c_51b_cs} 

New features

-   Testing with [Oracle](/automation-guide/application-testing/testing-with-databases/oracle/): TestArchitect supports working with Oracle database and allows both reading data from and writing it to databases. You can connect to the needed database directly from your test and specify parameters that are used to get access to database records.
    -   Supported Oracle Database product family:
        -   Oracle Database Enterprise Edition
            -   12c Release 2
            -   11g Release 2
        -   Oracle Database Express Edition
            -   11g Release 2
-   Added Beta support for replacing the [anchor](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-and-anchor-pos-properties) and/or [anchor pos](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/) properties by the [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property) property: In order to leverage the power of XPath in web automation testing, you can quickly convert previously-captured anchor and/or anchor pos by applying the [anchor pos report](/automation-guide/action-based-testing-language/built-in-settings/other-settings/anchor-pos-report) built-in setting.
-   **Support for automation on modal dialog boxes in Internet Explorer**: TestArchitect supports modal dialogs that display other web templates. Specifically, TestArchitect detects these dialogs in the Internet Explorer web browser and allows you to automate them as part of your tests.

Enhancements to existing features

-   **[Web services testing improvements](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/)**:
    -   [**Amazon Web Services \(AWS\) support**](https://aws.amazon.com/): TestArchitect allows you to run automated tests on AWS which enables you to remove hardware-based resource constraints to quickly create developer environments and expand your testing machine fleet.

        {{<remember>}} When you send HTTP requests to AWS, you are required to sign the requests so that AWS can identify who sent them. To sign a request, you first need to calculate signature \([learn more](http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html)\).

        {{<note>}}

        -   As of this release, signing process is not yet supported through TestArchitect's built-in actions. Consequently, you need to program a [user-scripted action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/) for the signing process \(refer to the below links\).
            -   [Signing AWS Requests with Signature Version 4](http://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html)
            -   [Signature Version 2 Signing Process](http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html)
        -   If you face difficulties while creating a signature, please contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com)
    -   A new parameter for the [Encoder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/configure-web-service-settings#li_Encoder) configuration:
        -   [addDefaultContentCharsetToContentType](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/configure-web-service-settings#row_addDefaultContentCharsetToContentType): Tells whether REST Assured should automatically append the content charset to the content-type header if content charset is not defined explicitly.
    -   Support for HTTP [digest authentication](https://tools.ietf.org/html/rfc2617#section-3): TestArchitect provides you with additional approach for specifying web service credentials which is Digest Authentication. To work with web services that require Digest authentication, use the [authenticate](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/authenticate) built-in action.
    -   Support for writing responses to a file in TestArchitect: You are able to save binary data files embedded in the given web service's HTTP response. The [response file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request#li_response.file) argument of [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) specifies a filename and an extension of the stored file.
-   Improved [exec script](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/browsing/exec-script) and added new support for [ExecuteJS](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/executejs) to retrieve the values returned from executed snippets of JavaScript code.
-   [Support for the Firefox updates](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/): You can play back tests for web applications running in the following versions of the Firefox web browser: 55 and 56.

