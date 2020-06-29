--- 
title: "Features added to TestArchitect 8 Update 2"
linktitle: "Features added to TestArchitect 8 Update 2"
description: "This topic describes the changes made in TestArchitect version 8 update 2."
weight: 30
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8_update_2.html
keywords: "What is new, TestArchitect 8 Update 2, what is new"
---

This topic describes the changes made in TestArchitect version 8 update 2.

{{<remember>}}

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation

-   [XML supported built-in actions](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/)
    -   [check xml query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/check-xml-query-result): Check an XPath query result against an expected string. Result is Passed if the strings match; otherwise Failed.
    -   [get xml query result](/automation-guide/action-based-testing-language/built-in-actions/system-actions/xml/get-xml-query-result): Query an XML string by XPath.
-   New [AbtXML](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtxml/) class supported with the following harness function:
    -   [Query](/automation-guide/action-based-testing-language/testarchitect-automation-classes/automation-classes/abtxml/query): Run an XPath query against an XML string.
-   [Class mapping for Android](/user-guide/interface-definitions/class-mapping/): Class mapping helps you map unknown Android controls to known TestArchitect control classes, so that TestArchitect can use its existing built-in actions to recognize and handle those controls.

**Enhancements to existing features**

-   **Improvements for re-signing iOS applications**:
    -   Solutions enhanced so that re-signing iOS apps works more stably on various types of applications.
    -   During the re-signing process, the **.ipa** app extension is now optional.
-   **Generic Android ta class is no longer supported**; instead, new and existing Android ta classes have been created and improved.

    {{<note>}} If you already have captured generic Android controls in prior versions of TestArchitect, you may continue using them in this version by contacting TestArchitect Support at [support@logigear.com](mailto:support@logigear.com).

-   [get text file](/automation-guide/action-based-testing-language/built-in-actions/system-actions/file-and-folder/get-text-file) built-in action: File extensions are not taken into consideration, as long as they are text or word-processing files.




