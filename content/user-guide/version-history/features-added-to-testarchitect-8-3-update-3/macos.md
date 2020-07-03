--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 Update 3 running under macOS."
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.3_update_3.html
keywords: "Release Notes 8.3 Update 3, macOS, What is new, macOS, TestArchitect 8.3 Update 3, TestArchitect 8.3 Update 3, what is new, macOS"
---

The following new features and improvements are introduced in TestArchitect version 8.3 Update 3 running under macOS.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client

**New features**

-   **Standardized TestArchitect [test result status](/user-guide/working-with-test-results/overview/test-result-status)**:
    -   Current result statuses, including Passed, Failed, Passed with Warnings/Errors, Passed with Known Bugs, and Not Run, are refined in such a way that the conditions and interpretations are consistent and are administered in a standard manner. This limits false positive and false negative errors that might occur in test results.
    -   Adding a new result status, [Not Finished](/user-guide/working-with-test-results/overview/test-result-status): Reviewing test results is easier, because this new status helps you distinguish the cases in which a test is started, but it is unable to reach the end of an automated run.

        Please note that, the number of automation errors/warnings, and passed/failed checkpoints do not matter in this case. Specifically:

        -   Automation runs that crash unexpectedly are Not Finished.
        -   Automation errors occur and they are handled by the following built-in actions:
            -   [exit test module](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-module)
            -   [exit test case](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/exit-test-case)
            -   [terminate](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/terminate).

## TestArchitect Automation

**Enhancements to existing features**

-   **[Web services testing improvements](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-services/)**:
    -   [**Amazon Web Services \(AWS\) support**](https://aws.amazon.com/): TestArchitect allows you to run automated tests on AWS which enables you to remove hardware-based resource constraints to quickly create developer environments and expand your testing machine fleet.

        {{<remember>}} When you send HTTP requests to AWS, you are required to sign the requests so that AWS can identify who sent them. To sign a request, you first need to calculate signature \([learn more](http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html)\).

        {{<note>}}

        -   As of this release, signing process is not yet supported through TestArchitect's built-in actions. Consequently, you need to program a [user-scripted action](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/) for the signing process \(refer to the below links\).
            -   [Signing AWS Requests with Signature Version 4](http://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html)
            -   [Signature Version 2 Signing Process](http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html)
        -   If you face difficulties while creating a signature, please contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com)
    -   **A new parameter for the [Encoder](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/configure-web-service-settings#li_Encoder) configuration**:
        -   [addDefaultContentCharsetToContentType](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/configure-web-service-settings#row_addDefaultContentCharsetToContentType): Tells whether REST Assured should automatically append the content charset to the content-type header if content charset is not defined explicitly.
    -   **Support for HTTP [digest authentication](https://tools.ietf.org/html/rfc2617#section-3)**: TestArchitect provides you with additional approach for specifying web service credentials which is Digest Authentication. To work with web services that require Digest authentication, use the [authenticate](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/authenticate) built-in action.
    -   **Support for writing responses to a file in TestArchitect**: You are able to save binary data files embedded in the given web service's HTTP response. The [response file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request#li_response.file) argument of [send http request](/automation-guide/action-based-testing-language/built-in-actions/system-actions/web-services/send-http-request) specifies a filename and an extension of the stored file.


