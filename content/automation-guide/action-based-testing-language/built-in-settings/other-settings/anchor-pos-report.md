--- 
title: "anchor pos report"
linktitle: "anchor pos report"
description: "Description Determines whether after the given automated tests are finished, TestArchitect generates a report file which contains the anchor and/or anchor pos properties and their replacement XPath ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bis_anchor_pos_report.html
keywords: "built-in settings, anchor pos report, settings, anchor pos report (settings), anchor pos report, replace anchor and anchor pos with xpath, convert anchor and anchor post into xpath, generate report to replace anchor and anchor pos with xpath, generate report for conversion of anchor and anchor pos into xpath"
---

## Description

Determines whether after the given automated tests are finished, TestArchitect generates a report file which contains the [anchor](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-and-anchor-pos-properties) and/or [anchor pos](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/) properties and their replacement [XPath](/user-guide/interface-definitions/control-properties/secondary-properties/xpath-property) property.

## Allowable values

-   **yes/true**

    Exports a report file in tab-delimited format to a default location. \(See Notes\)

-   **no/false**

    Does not export a report file.


## Default value

no/false

## Applicable Systems/Platforms

-   This built-in setting is supported on the following systems/platforms:
    -   Windows: Mozilla Firefox.
-   This built-in setting is able to successfully output a report file, when all of the below conditions are met. Otherwise, no report file is generated.
    1.  The [use browser](/automation-guide/action-based-testing-language/built-in-settings/other-settings/use-browser) built-in setting is set to Firefox.
    2.  The presence of the [anchor](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/using-anchor-and-anchor-pos-properties) and/or [anchor pos](/user-guide/interface-definitions/control-properties/secondary-properties/anchor-pos-property/) properties in test procedures.

## Notes

-   It is highly recommended that you declare this built-in setting in [startup settings](/user-guide/test-execution/startup-settings/), before launching a test run. This minimizes the modifications to your test procedures.
-   After the given automation tests are done, a report file is automatically exported to the following location C:\\Users\\Public\\LogiGear\\TestArchitect\\log \(Windows\).
-   Syntax of the filename is as follows: anchors\_report\_<resultName\>.txt, such as, anchors\_report\_ActionBasedTesting \(2017-10-19 13.40.36\) - 7292.txt
-   A report file has three columns including:
    1.  **Entity URL**: [TestAchitect URL](/user-guide/getting-started/working-with-testarchitect-client/advanced-features-of-testarchitect-client/testarchitect-url) of project items which contains anchor and/or anchor pos properties.
    2.  **XPath**: The replacement XPath property.

        {{<note>}} Use this column's value when your interface elements are defined in interface entities, also known as static identifiers.

    3.  **Element XPath Definition**: Definition of the replacement XPath property in case of [dynamic identifiers](/user-guide/interface-definitions/dynamic-identifiers).

        {{<note>}} Use this column's value when your interface elements are defined dynamically.

-   Each column in a report file is separated by a tab delimiter. Therefore, it is highly recommended that you open this file by MS Excel spreadsheet.

## Steps to replace anchor and/or anchor pos by XPath

1.  In [startup settings](/user-guide/test-execution/startup-settings/), declare the anchor pos built-in setting with the value of yes. \([Learn more](/user-guide/test-execution/startup-settings/creating-a-startup-setting-for-a-built-in-setting).\)
2.  Execute your tests.
3.  After the tests are finished, find the report file located at C:\\Users\\Public\\LogiGear\\TestArchitect\\log. Filename of the report is anchors\_report\_<resultName\>.txt, such as, anchors\_report\_ActionBasedTesting \(2017-10-19 13.40.36\) - 7292.txt
4.  Open the report file by using MS Excel spreadsheet.
5.  Repeat the below steps for each of anchor and/or anchor pos which are replaced by XPath.
    1.  In the report file, from the **Entity URL** column, copy and paste URL of a project item to File Explorer, and then press the Enter key. TestArchitect navigates exactly to the desired item.
    2.  For static identifiers:

        1.  Copy the value from the **XPath** column in the report file.
        2.  Manually modify anchor and/or anchor pos to XPath in TestArchitect's test editors.
        ![](/images/TA_Automation/Images/anchor_pos_replacement.png)

    3.  For dynamic identifiers:

        1.  Copy the value from the **Element XPath Definition** column in the report file.
        2.  Replace the dynamic definitions of anchor and/or anchor pos by the dynamic definitions of XPath in TestArchitect's test editors.
        ![](/images/TA_Automation/Images/anchor_pos_replacement_dynamic.png)




