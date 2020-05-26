--- 
title: "What's new in TestArchitect for macOS"
linktitle: "macOS"
weight: 3
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Mac_8.3_update_3.html
---
# What's new in TestArchitect for macOS {#concept_what_new_8.3_macOS_update_3 .concept}

The following new features and improvements are introduced in TestArchitect version 8.3 Update 3 running under macOS.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be the same version.

## TestArchitect Client {#section_ir4_mm3_b1b .section}

**New features**

-   **Standardized TestArchitect [test result status](../../TA_Help/Topics/ug_test_results_status.html)**:
    -   Current result statuses, including Passed, Failed, Passed with Warnings/Errors, Passed with Known Bugs, and Not Run, are refined in such a way that the conditions and interpretations are consistent and are administered in a standard manner. This limits false positive and false negative errors that might occur in test results.
    -   Adding a new result status, [Not Finished](../../TA_Help/Topics/ug_test_results_status.html): Reviewing test results is easier, because this new status helps you distinguish the cases in which a test is started, but it is unable to reach the end of an automated run.

        Please note that, the number of automation errors/warnings, and passed/failed checkpoints do not matter in this case. Specifically:

        -   Automation runs that crash unexpectedly are Not Finished.
        -   Automation errors occur and they are handled by the following built-in actions:
            -   [exit test module](../../TA_Automation/Topics/bia_exit_test_module.html)
            -   [exit test case](../../TA_Automation/Topics/bia_exit_test_case.html)
            -   [terminate](../../TA_Automation/Topics/bia_terminate.html).

## TestArchitect Automation {#section_p2c_51b_cs .section}

**Enhancements to existing features**

-   **[Web services testing improvements](../../TA_Automation/Topics/aut_testing_web_service.html)**:
    -   [**Amazon Web Services \(AWS\) support**](https://aws.amazon.com/): TestArchitect allows you to run automated tests on AWS which enables you to remove hardware-based resource constraints to quickly create developer environments and expand your testing machine fleet.

        **Remember:** When you send HTTP requests to AWS, you are required to sign the requests so that AWS can identify who sent them. To sign a request, you first need to calculate signature \([learn more](http://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html)\).

        **Note:**

        -   As of this release, signing process is not yet supported through TestArchitect's built-in actions. Consequently, you need to program a [user-scripted action](../../TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages.html) for the signing process \(refer to the below links\).
            -   [Signing AWS Requests with Signature Version 4](http://docs.aws.amazon.com/general/latest/gr/sigv4_signing.html)
            -   [Signature Version 2 Signing Process](http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html)
        -   If you face difficulties while creating a signature, please contact TestArchitect Support at [support@logigear.com](mailto:support@logigear.com)
    -   **A new parameter for the [Encoder](../../TA_Automation/Topics/bia_configure_web_service_settings.md#li_Encoder) configuration**:
        -   [addDefaultContentCharsetToContentType](../../TA_Automation/Topics/bia_configure_web_service_settings.md#row_addDefaultContentCharsetToContentType): Tells whether REST Assured should automatically append the content charset to the content-type header if content charset is not defined explicitly.
    -   **Support for HTTP [digest authentication](https://tools.ietf.org/html/rfc2617#section-3)**: TestArchitect provides you with additional approach for specifying web service credentials which is Digest Authentication. To work with web services that require Digest authentication, use the [authenticate](../../TA_Automation/Topics/bia_authenticate.html) built-in action.
    -   **Support for writing responses to a file in TestArchitect**: You are able to save binary data files embedded in the given web service's HTTP response. The [response file](../../TA_Automation/Topics/bia_send_http_request.md#li_response.file) argument of [send http request](../../TA_Automation/Topics/bia_send_http_request.html) specifies a filename and an extension of the stored file.

**Parent topic:**[Features added to TestArchitect 8.3 Update 3](../../TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_3.html)

