--- 
title: "Rules for mapping custom fields between TestArchitect and Zephyr"
linktitle: "Rules for mapping custom fields between TestArchitect and Zephyr"
weight: 8
aliases: 
    - /TA_Help/Topics/ug_Zephyr_matching_custom_fields.html
---

Custom test case fields in Zephyr can be mapped to user-defined fields in TestArchitect test modules or test cases.Mapping is driven by field names. Fields in Zephyr and TestArchitect are mapped automatically when their names are identical and their data types are compatible. When uploading from TestArchitect to Zephyr, values from TestArchitect user-defined fields are loaded into their corresponding fields in Zephyr. Likewise, values from Zephyr custom test case fields are loaded into the corresponding TestArchitect user-defined fields when importing tests from Zephyr to TestArchitect.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

Mapped fields must have compatible data types, as specified in the following table:

|Zephyr Value Type|TestArchitect Value Type|
|-----------------|------------------------|
|Text \(1024\)|Single Line Text|
|Long Text \(32000\)|Single Line Text Multi Line Text Label Hyperlink Build Number|
|Pick List|List Item|
|Check Box|Boolean|
|Date|Date|
|Number|Number Single Line Text|

All mandatory custom fields in the Zephyr test cases must have values before a Zephyr to TestArchitect import can take place. Similarly, uploading from TestArchitect to Zephyr requires that those user-defined TestArchitect fields which map to mandatory Zephyr fields be populated with values. Values for user-defined TestArchitect fields may be set when the field is created, using the **Default value** field in the New Field dialog box, or by explicitly setting the given field for the particular project item on the item’s **Information** tab.

**Parent topic:**[Features of TestArchitect-Zephyr integration](/TA_Help/Topics/ug_Zephyr_features.html)

**Previous topic:**[Creating matching custom fields in TestArchitect and Zephyr](/TA_Help/Topics/ug_Zephyr_creating_custom_fields.html)

