--- 
title: "What's new in TestArchitect for Windows"
linktitle: "What's new in TestArchitect for Windows"
description: "The following new features and improvements are introduced in TestArchitect version 8.3 running under Windows."
weight: 1
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3.html
keywords: "Release Notes 8.3, Windows, What is new, Windows, TestArchitect 8.3, TestArchitect 8.3, what is new, Windows"
---

The following new features and improvements are introduced in TestArchitect version 8.3 running under Windows.

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

-   **Improved integration with Team Foundation Server–Microsoft Test Manager**: Support for uploading TestArchitect test results to TFS even when [mismatched build numbers](/TA_FAQ/Topics/faq.shoot.TFS_mismatched_build_number_values.html) among test results are detected.
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
-   **Added beta support for automation testing in [WebDriver based cloud services](/TA_Automation/Topics/aut_app_cloud_testing.html)** \(Appium enabled\): It delivers cost saving, time saving, remote/mobile access to information, high productivity, and increased test coverage across different mobile device types, etc.
    -   With TestArchitect, you can now run mobile web app testing on real devices in WebDriver based cloud services.
    -   TestArchitect includes new built-in actions that let you test in the cloud services.
        -   [assign cloud device](/TA_Automation/Topics/bia_assign_cloud_device.html): Assign a logical name for a given capability of a target cloud device. This name may then be used in the action [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html).
        -   [connect cloud device](/TA_Automation/Topics/bia_connect_cloud_device.html): Logically connect to a cloud-based device and make that device the target for the automation.
        -   [use cloud device](/TA_Automation/Topics/bia_use_cloud_device.html): Use a cloud device, as specified by its session ID, to run automated tests.
        -   [get cloud device session id](/TA_Automation/Topics/bia_get_cloud_device_session_id.html): Retrieve session ID of the connected cloud device.
        -   [disconnect cloud device](/TA_Automation/Topics/bia_disconnect_cloud_device.html): Logically disconnect the target cloud device.
        -   [use host machine](/TA_Automation/Topics/bia_use_host_machine.html): Switch the test run back to the host machine from the currently-connected cloud device in order to continue to run the remaining tests.
-   [**Support for C\# bundle harness**](/TA_Tutorials/Topics/tut_Scripting_actions_in_other_languages_CSharp_bundle.html): TestArchitect introduces a new architecture, called bundle harness, to implement C\# user-scripted actions. This new architecture provides the following advantages:

    -   Easy deployment: The ability to reuse user-scripted actions among different projects by simply sharing DLLs of the actions
    -   Usability: To ease the C\# function declaration and implementation
    -   Low coupling: not having to merge source code and rebuild the entire harness solution, even though a single user-scripted action is added. In other words, adding one new user-scripted action does not affect the existing user-scripted actions.
    {{<note>}} For legacy C\# user-scripted actions, created in TestArchitect versions prior to 8.3, you are not required to migrate them to C\# bundle harness. Specifically, your legacy C\# user-scripted actions continue to work normally in TestArchitect 8.3, and you are able to develop additional user-scripted actions that conform to legacy C\# harness architecture.

-   **Support for the [Graphics Device Interface \(GDI\) technique](/TA_Automation/Topics/aut_text_recognition_techniques.html)** to better recognize text produced by an AUT. Technically, GDI traces text that the operating system is drawing on the screen. GDI works faster than the Optical Character Recognition technique and provides higher recognition accuracy.
    -   [character recognition technique](/TA_Automation/Topics/bis_character_recognition_technique.html) setting: Specifies which algorithm, OCR or GDI, is applied to recognize text produced by an AUT.
    -   **New built-in actions**:
        -   [get text background color](/TA_Automation/Topics/bia_get_text_background_color.html): Retrieve color code of the text background, in hexadecimal.
        -   [get text color](/TA_Automation/Topics/bia_get_text_color.html): Retrieve color code of the text fragment, in hexadecimal.
        -   [get text content](/TA_Automation/Topics/bia_get_text_content.html): Retrieve all content of the text fragment residing in a given window/control.
        -   [get text count](/TA_Automation/Topics/bia_get_text_count.html): Retrieve a count of the total number of text fragments residing in a given window/control.
    -   **New APIs**:
        -   [AbtEntity](/TA_Automation/Topics/abt_AbtEntity.html) class
            -   [GetTextBackgroundColor](/TA_Automation/Topics/abt_AbtGetTextBackgroundColor_AbtEntity.html): Retrieve color code of the text background residing in a given window, in hexadecimal.
            -   [GetTextColor](/TA_Automation/Topics/abt_AbtGetTextColor_AbtEntity.html): Retrieve color code of the text fragment residing in a given window, in hexadecimal.
            -   [GetTextContent](/TA_Automation/Topics/abt_AbtGetTextContent_AbtEntity.html): Retrieve content of the text fragment residing in a given window.
            -   [GetTextCount](/TA_Automation/Topics/abt_AbtGetTextCount_AbtEntity.html): Retrieve a count of the total number of text fragments residing in a given window.
        -   [AbtElement](/TA_Automation/Topics/abt_AbtElement.html) class
            -   [GetTextBackgroundColor](/TA_Automation/Topics/abt_AbtGetTextBackgroundColor_AbtElement.html): Retrieve color code of the text background residing in a given control, in hexadecimal.
            -   [GetTextColor](/TA_Automation/Topics/abt_AbtGetTextColor_AbtElement.html): Retrieve color code of the text fragment residing in a given control, in hexadecimal.
            -   [GetTextContent](/TA_Automation/Topics/abt_AbtGetTextContent_AbtElement.html): Retrieve content of the text fragment residing in a given control.
            -   [GetTextCount](/TA_Automation/Topics/abt_AbtGetTextCount_AbtElement.html): Retrieve a count of the total number of text fragments residing in a given control.
-   [**Microsoft Edge official release**](/TA_Automation/Topics/Web_automation.html#li.Edge): TestArchitect officially provides support for automated testing of web applications in Microsoft Edge. Major bugs existing in the beta release have also been fixed.
-   **Official release for [agent-based automation on Chrome](/TA_Automation/Topics/aut_app_testing_responsive_web_Chrome_DevTools.html)**: Testing on mobile browser emulators helps ensure the proper appearance and functionality of your web application on various devices. Major bugs existing in the beta release have also been fixed.
-   **Support for mapping windows, controls of [Multiple Document Interface](/TA_Help/Topics/ug_MDI.html) \(MDI\) applications**. Additionally, TestArchitect also introduces [Just-In-Time](/TA_Help/Topics/ug_JIT_UI_matching.html) UI matching algorithm which employs a breadth-first search algorithm to faster match a MDI-child window and its controls.

**Enhancements to existing features**

-   **Extended support for WinForms applications**:
    -   **[Class mapping](/TA_Help/Topics/Class_mapping.html)**: Class mapping helps you map unknown WinForms controls to known TestArchitect control classes, so that TestArchitect can use its existing built-in actions to recognize and handle those controls.
    -   **[Container class](/TA_Help/Topics/Interface_def_container_class.html)**: The container class help captures child UI elements of complex controls belonging to **Treeview**, **Listbox**, **Listview**, or **Table** classes so that TestArchitect can use existing built-in actions to recognize and handle those child UI elements.
    -   **[WinForms command line tool](/TA_Automation/Topics/aut_app_testing_WinForms_command_line_tool.html)**:
        -   Exports new WinForms mapping file. Since new class mapping for WinForms controls has been improved, it is highly recommended that you use this command line tool to [update your legacy WinForms captured controls](/TA_Help/Topics/ug_class_mapping_WinForms.html) to ensure your automated test runs properly.

            {{<note>}} You only need to run this tool once to address the backward compatibility issues and make existing tests runnable.

        -   [winforms raw class](/TA_Automation/Topics/bis_winforms_raw_class.html) built-in setting: This determines whether, during automation, the legacy classes of captured WinForms application controls should be used in identifying those controls, in cases where the option to use TA classes exists. In case, you encounter backward compatibility problems, you can turn on this setting to switch back to the legacy Winforms control matching technique.
-   **Additional support for the existing OCR built-in actions to work with the**[Graphics Device Interface \(GDI\) technique](/TA_Automation/Topics/aut_text_recognition_techniques.html)****: The following built-in actions now support both OCR and GDI text recognition techniques.
    -   [check text exists](/TA_Automation/Topics/bia_check_text_exists.html): Check for the existence of a given [bitmap text fragment](/TA_Automation/Topics/../../TA_Glossary/Topics/glossaryTextFragment.html) within a specified area of a bitmap.
    -   [check text not exists](/TA_Automation/Topics/bia_check_text_not_exists.html): Check for the nonexistence of a given [bitmap text fragment](/TA_Automation/Topics/../../TA_Glossary/Topics/glossaryTextFragment.html) in a specified area of a bitmap.
    -   [click text](/TA_Automation/Topics/bia_click_text.html): Find a given bitmapped text string in a specified area of a bitmap, and then simulate a click over the text.
    -   [does text exist](/TA_Automation/Topics/bia_does_text_exist.html): Return a Boolean value to indicate whether a specified [bitmap text fragment](/TA_Automation/Topics/../../TA_Glossary/Topics/glossaryTextFragment.html) is found to exist in a given bitmap.
    -   [get text coordinates](/TA_Automation/Topics/bia_get_text_coordinates.html): Search a bitmap for a given text string and, if found, return its location.
    -   [if text exists](/TA_Automation/Topics/bia_if_text_exists.html): Check for the existence of a specified [bitmap text fragment](/TA_Automation/Topics/../../TA_Glossary/Topics/glossaryTextFragment.html) in a bitmap. If the fragment is found, execute the associated action lines.
    -   [if text not exists](/TA_Automation/Topics/bia_if_text_not_exists.html): Check for the nonexistence of a specified [bitmap text fragment](/TA_Automation/Topics/../../TA_Glossary/Topics/glossaryTextFragment.html) in a bitmap. If the fragment is not found, execute the associated action lines.


