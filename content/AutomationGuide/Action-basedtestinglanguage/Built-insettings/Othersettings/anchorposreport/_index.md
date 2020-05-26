--- 
title: "anchor pos report"
linktitle: "anchor pos report"
weight: 1
aliases: 
    - /TA_Automation/Topics/bis_anchor_pos_report.html
---
# anchor pos report {#reference_dw2_k13_wbb .reference}

## Description {#section_u3z_v13_wbb .section}

Determines whether after the given automated tests are finished, TestArchitect generates a report file which contains the [anchor](../../TA_Help/Topics/prop_anchor.example_01.html) and/or [anchor pos](../../TA_Help/Topics/Interface_def_anchor_pos_concept.html) properties and their replacement [XPath](../../TA_Help/Topics/prop_xpath.html) property.

## Allowable values {#section_v3z_v13_wbb .section}

yes/true
:   Exports a report file in tab-delimited format to a default location. \(See Notes\)

no/false
:   Does not export a report file.

## Default value {#section_w3z_v13_wbb .section}

no/false

## Applicable Systems/Platforms {#section_t5m_gsg_5v .section}

-   This built-in setting is supported on the following systems/platforms:
    -   Windows: Mozilla Firefox.
-   This built-in setting is able to successfully output a report file, when all of the below conditions are met. Otherwise, no report file is generated.
    1.  The [use browser](bis_use_browser.html) built-in setting is set to Firefox.
    2.  The presence of the [anchor](../../TA_Help/Topics/prop_anchor.example_01.html) and/or [anchor pos](../../TA_Help/Topics/Interface_def_anchor_pos_concept.html) properties in test procedures.

## Notes {#section_x3z_v13_wbb .section}

-   It is highly recommended that you declare this built-in setting in [startup settings](aut_startup_settings.html), before launching a test run. This minimizes the modifications to your test procedures.
-   After the given automation tests are done, a report file is automatically exported to the following location C:\\Users\\Public\\LogiGear\\TestArchitect\\log \(Windows\).
-   Syntax of the filename is as follows: anchors\_report\_<resultName\>.txt, such as, anchors\_report\_ActionBasedTesting \(2017-10-19 13.40.36\) - 7292.txt
-   A report file has three columns including:
    1.  **Entity URL**: [TestAchitect URL](../../TA_Help/Topics/Additional_features_TA_URL.html) of project items which contains anchor and/or anchor pos properties.
    2.  **XPath**: The replacement XPath property.

        **Note:** Use this column's value when your interface elements are defined in interface entities, also known as static identifiers.

    3.  **Element XPath Definition**: Definition of the replacement XPath property in case of [dynamic identifiers](../../TA_Help/Topics/The_test_language_dynamic_identifiers.html).

        **Note:** Use this column's value when your interface elements are defined dynamically.

-   Each column in a report file is separated by a tab delimiter. Therefore, it is highly recommended that you open this file by MS Excel spreadsheet.

## Steps to replace anchor and/or anchor pos by XPath {#section_ary_q33_wbb .section}

1.  In [startup settings](aut_startup_settings.html), declare the anchor pos built-in setting with the value of yes. \([Learn more](aut_configuring_built_in_settings.html).\)
2.  Execute your tests.
3.  After the tests are finished, find the report file located at C:\\Users\\Public\\LogiGear\\TestArchitect\\log. Filename of the report is anchors\_report\_<resultName\>.txt, such as, anchors\_report\_ActionBasedTesting \(2017-10-19 13.40.36\) - 7292.txt
4.  Open the report file by using MS Excel spreadsheet.
5.  Repeat the below steps for each of anchor and/or anchor pos which are replaced by XPath.
    1.  In the report file, from the **Entity URL** column, copy and paste URL of a project item to File Explorer, and then press the Enter key. TestArchitect navigates exactly to the desired item.
    2.  For static identifiers:

        1.  Copy the value from the **XPath** column in the report file.
        2.  Manually modify anchor and/or anchor pos to XPath in TestArchitect's test editors.
        ![](../Images/anchor_pos_replacement.png)

    3.  For dynamic identifiers:

        1.  Copy the value from the **Element XPath Definition** column in the report file.
        2.  Replace the dynamic definitions of anchor and/or anchor pos by the dynamic definitions of XPath in TestArchitect's test editors.
        ![](../Images/anchor_pos_replacement_dynamic.png)


**Parent topic:**[Other settings](../../TA_Automation/Topics/bis_other.html)

**Next topic:**[auto switch window](../../TA_Automation/Topics/bis_auto_switch_windows.html)

