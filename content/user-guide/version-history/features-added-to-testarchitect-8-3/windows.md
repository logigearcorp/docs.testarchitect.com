--- 
title: "What's new in TestArchitect for Windows"
linktitle: "Windows"
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

-   **Improved integration with Team Foundation Server–Microsoft Test Manager**: Support for uploading TestArchitect test results to TFS even when [mismatched build numbers](/user-guide/integration-with-third-party-tools/tfs-integration/troubleshooting-integration-with-tfs/unable-to-upload-test-results-to-tfs-due-to-mismatched-build-number-values) among test results are detected.
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
-   [**Support for C\# bundle harness**](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-8-using-an-automation-harness/working-with-the-c-bundle-harness/): TestArchitect introduces a new architecture, called bundle harness, to implement C\# user-scripted actions. This new architecture provides the following advantages:

    -   Easy deployment: The ability to reuse user-scripted actions among different projects by simply sharing DLLs of the actions
    -   Usability: To ease the C\# function declaration and implementation
    -   Low coupling: not having to merge source code and rebuild the entire harness solution, even though a single user-scripted action is added. In other words, adding one new user-scripted action does not affect the existing user-scripted actions.
    {{<note>}} For legacy C\# user-scripted actions, created in TestArchitect versions prior to 8.3, you are not required to migrate them to C\# bundle harness. Specifically, your legacy C\# user-scripted actions continue to work normally in TestArchitect 8.3, and you are able to develop additional user-scripted actions that conform to legacy C\# harness architecture.

-   **Support for the [Graphics Device Interface \(GDI\) technique](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques)** to better recognize text produced by an AUT. Technically, GDI traces text that the operating system is drawing on the screen. GDI works faster than the Optical Character Recognition technique and provides higher recognition accuracy.
    -   [character recognition technique](/automation-guide/action-based-testing-language/built-in-settings/other-settings/character-recognition-technique) setting: Specifies which algorithm, OCR or GDI, is applied to recognize text produced by an AUT.
    -   **New built-in actions**:
        -   [get text background color](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-background-color): Retrieve color code of the text background, in hexadecimal.
        -   [get text color](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-color): Retrieve color code of the text fragment, in hexadecimal.
        -   [get text content](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-content): Retrieve all content of the text fragment residing in a given window/control.
        -   [get text count](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-count): Retrieve a count of the total number of text fragments residing in a given window/control.
    -   **New APIs**:
        -   [AbtEntity](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/) class
            -   [GetTextBackgroundColor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextbackgroundcolor): Retrieve color code of the text background residing in a given window, in hexadecimal.
            -   [GetTextColor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcolor): Retrieve color code of the text fragment residing in a given window, in hexadecimal.
            -   [GetTextContent](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcontent): Retrieve content of the text fragment residing in a given window.
            -   [GetTextCount](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtentity/gettextcount): Retrieve a count of the total number of text fragments residing in a given window.
        -   [AbtElement](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtelement/) class
            -   [GetTextBackgroundColor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtelement/gettextbackgroundcolor): Retrieve color code of the text background residing in a given control, in hexadecimal.
            -   [GetTextColor](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtelement/gettextcolor): Retrieve color code of the text fragment residing in a given control, in hexadecimal.
            -   [GetTextContent](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtelement/gettextcontent): Retrieve content of the text fragment residing in a given control.
            -   [GetTextCount](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtelement/gettextcount): Retrieve a count of the total number of text fragments residing in a given control.
-   [**Microsoft Edge official release**](/automation-guide/application-testing/testing-web-and-ria-applications/testing-web-applications/#li.Edge): TestArchitect officially provides support for automated testing of web applications in Microsoft Edge. Major bugs existing in the beta release have also been fixed.
-   **Official release for [agent-based automation on Chrome](/automation-guide/application-testing/mobile-testing/testing-mobile-web-applications/testing-web-apps-in-mobile-emulation-mode/overview)**: Testing on mobile browser emulators helps ensure the proper appearance and functionality of your web application on various devices. Major bugs existing in the beta release have also been fixed.
-   **Support for mapping windows, controls of [Multiple Document Interface](/user-guide/interface-definitions/addressing-windows-controls-of-mdi-apps/) \(MDI\) applications**. Additionally, TestArchitect also introduces [Just-In-Time](/user-guide/interface-definitions/addressing-windows-controls-of-mdi-apps/jit-ui-matching-algorithm) UI matching algorithm which employs a breadth-first search algorithm to faster match a MDI-child window and its controls.

**Enhancements to existing features**

-   **Extended support for WinForms applications**:
    -   **[Class mapping](/user-guide/interface-definitions/class-mapping/)**: Class mapping helps you map unknown WinForms controls to known TestArchitect control classes, so that TestArchitect can use its existing built-in actions to recognize and handle those controls.
    -   **[Container class](/user-guide/interface-definitions/container-classes/)**: The container class help captures child UI elements of complex controls belonging to **Treeview**, **Listbox**, **Listview**, or **Table** classes so that TestArchitect can use existing built-in actions to recognize and handle those child UI elements.
    -   **[WinForms command line tool](/automation-guide/application-testing/testing-desktop-applications/testing-net-applications/winforms-command-line-tool/)**:
        -   Exports new WinForms mapping file. Since new class mapping for WinForms controls has been improved, it is highly recommended that you use this command line tool to [update your legacy WinForms captured controls](/user-guide/interface-definitions/class-mapping/support-for-winforms-class-mapping) to ensure your automated test runs properly.

            {{<note>}} You only need to run this tool once to address the backward compatibility issues and make existing tests runnable.

        -   [winforms raw class](/automation-guide/action-based-testing-language/built-in-settings/other-settings/winforms-raw-class) built-in setting: This determines whether, during automation, the legacy classes of captured WinForms application controls should be used in identifying those controls, in cases where the option to use TA classes exists. In case, you encounter backward compatibility problems, you can turn on this setting to switch back to the legacy Winforms control matching technique.
-   **Additional support for the existing OCR built-in actions to work with the**[Graphics Device Interface \(GDI\) technique](/automation-guide/action-based-testing-language/the-test-language/text-recognition-techniques)****: The following built-in actions now support both OCR and GDI text recognition techniques.
    -   [check text exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/check-text-exists): Check for the existence of a given [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) within a specified area of a bitmap.
    -   [check text not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/check-text-not-exists): Check for the nonexistence of a given [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) in a specified area of a bitmap.
    -   [click text](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/click-text): Find a given bitmapped text string in a specified area of a bitmap, and then simulate a click over the text.
    -   [does text exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/does-text-exist): Return a Boolean value to indicate whether a specified [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) is found to exist in a given bitmap.
    -   [get text coordinates](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/get-text-coordinates): Search a bitmap for a given text string and, if found, return its location.
    -   [if text exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/if-text-exists): Check for the existence of a specified [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) in a bitmap. If the fragment is found, execute the associated action lines.
    -   [if text not exists](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/optical-character-recognition/if-text-not-exists): Check for the nonexistence of a specified [bitmap text fragment](/user-guide/support/glossary-of-terms/bitmap-text-fragment) in a bitmap. If the fragment is not found, execute the associated action lines.


