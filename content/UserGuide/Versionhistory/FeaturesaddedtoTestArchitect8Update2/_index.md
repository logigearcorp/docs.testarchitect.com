--- 
title: "Features added to TestArchitect 8 Update 2"
linktitle: "Features added to TestArchitect 8 Update 2"
weight: 29
aliases: 
    - /TA_ReleaseNotes/DITA_source/Whats_New_8_update_2.html
---
# Features added to TestArchitect 8 Update 2 {#concept_what_new_8_U2 .concept}

This topic describes the changes made in TestArchitect version 8 update 2.

**Remember:**

-   Before upgrading to the latest version of TestArchitect, it is strongly recommended that you back up all repositories.
-   A TestArchitect client and any repository server to which it connects must be of the same version.

## TestArchitect Automation {#section_jqm_z13_nh .section}

-   [XML supported built-in actions](../../TA_Automation/Topics/bia_XML.html)
    -   [check xml query result](../../TA_Automation/Topics/bia_check_xml_query_result.html): Check an XPath query result against an expected string. Result is Passed if the strings match; otherwise Failed.
    -   [get xml query result](../../TA_Automation/Topics/bia_get_xml_query_result.html): Query an XML string by XPath.
-   New [AbtXML](../../TA_Automation/Topics/abt_AbtXML.html) class supported with the following harness function:
    -   [Query](../../TA_Automation/Topics/abt_Query.html): Run an XPath query against an XML string.
-   [Class mapping for Android](../../TA_Help/Topics/Class_mapping.html): Class mapping helps you map unknown Android controls to known TestArchitect control classes, so that TestArchitect can use its existing built-in actions to recognize and handle those controls.

**Enhancements to existing features**

-   **Improvements for re-signing iOS applications**:
    -   Solutions enhanced so that re-signing iOS apps works more stably on various types of applications.
    -   During the re-signing process, the **.ipa** app extension is now optional.
-   **Generic Android ta class is no longer supported**; instead, new and existing Android ta classes have been created and improved.

    **Note:** If you already have captured generic Android controls in prior versions of TestArchitect, you may continue using them in this version by contacting TestArchitect Support at [support@logigear.com](mailto:support@logigear.com).

-   [get text file](../../TA_Automation/Topics/bia_get_text_file.html) built-in action: File extensions are not taken into consideration, as long as they are text or word-processing files.

**Parent topic:**[Version history](../../TA_ReleaseNotes/DITA_source/Version_History.html)

**Previous topic:**[Features added to TestArchitect 8 Update 3](../../TA_ReleaseNotes/DITA_source/Whats_New_8_update_3.html)

**Next topic:**[Features added to TestArchitect 8 Update 1](../../TA_ReleaseNotes/DITA_source/Whats_New_8_update_1.html)

