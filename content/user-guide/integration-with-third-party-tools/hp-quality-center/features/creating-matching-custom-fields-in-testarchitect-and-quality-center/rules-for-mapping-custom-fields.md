--- 
title: "Rules for mapping custom fields between TestArchitect and Quality Center"
linktitle: "Rules for mapping custom fields"
description: "Mapping is driven by field names. Fields in Quality Center and TestArchitect are mapped to each other automatically when a), their names are identical, b), their data types are compatible, and c), the TestArchitect Apply To entity is matched properly with the Quality Center Project entity. When uploading from TestArchitect to Quality Center, values fromTestArchitect user-defined fields are loaded into their corresponding fields in Quality Center. Likewise, values from Quality Center custom fields are loaded into the corresponding TestArchitect user-defined fields when importing tests from Quality Center to TestArchitect."
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_QC_creating_custom_field_rules.html
keywords: "Quality Center, custom fields, mapping rules, HP Quality Center, mapping rules, mapping, rules, integration, rules, custom fields"
---

Custom fields in the Quality Center **TEST** and **RUN Quality Center** tables can be mapped to user-defined fields in TestArchitect test modules or test cases. Mapping is driven by field names. Fields in Quality Center and TestArchitect are mapped to each other automatically when a\), their names are identical, b\), their data types are compatible, and c\), the TestArchitect **Apply To** entity is matched properly with the Quality Center **Project** entity. When uploading from TestArchitect to Quality Center, values fromTestArchitect user-defined fields are loaded into their corresponding fields in Quality Center. Likewise, values from Quality Center custom fields are loaded into the corresponding TestArchitect user-defined fields when importing tests from Quality Center to TestArchitect.

Mutually mapped fields must have compatible data types, as specified in the following table:

|**TestArchitect Value Types**|**Quality Center Types**|
|-----------------------------|------------------------|
|Single-line text|String|
|Multi-line text|String|
|Label|String|
|Number|Number|
|Date|Date|
|Boolean|String|
|List item|Lookup list, User list|

{{<note>}}

-   In TestArchitect, the data type is set in the TestArchitect **Value Type** field in the [New Field](/administration-guide/user-defined-fields/creating-a-user-defined-field#stepresult_q44_hls_mq) dialog box.
-   Values for user-defined TestArchitect fields are set using the **Default Value** field in the New Field dialog box.
-   If a TestArchitect field's value type is List item, ensure that the items defined for it comprise at least a subset of the corresponding Quality Center field's items.

    **Example:** Let's say that the **Priority** field of a given Quality Center entity is a Lookup list with a value domain of Low, Medium, High, and Intermediate. The associated TestArchitect field must then be a List item type with the same set of possible values, or at least a subset of them, such as Low and Medium.

-   In Quality Center, custom fields in the TEST table can be defined as required. This is not the case with the RUN table.
-   All required fields in the Quality Center TEST table must have values before a Quality Center to TestArchitect import can take place. Similarly, uploading from TestArchitect to Quality Center requires that those user-defined TestArchitect fields which map to required Quality Center fields be populated with values.

In addition to choosing the correct data type for each user-defined field, you also must match the TestArchitect **Apply To** entity in the [New Field](/administration-guide/user-defined-fields/creating-a-user-defined-field#stepresult_q44_hls_mq) dialog box with the project entity in Quality Center. The following table displays the mapping relationships between TestArchitect **Apply To** entities and Quality Center Project entities.

|||
|------|------|
|**TestArchitect Apply To Entities**|**Quality Center Project Entities**|
|Project|\(Not supported\)|
|Test module|Test|
|Test case|Test|
|Test objective|\(Not supported\)|
|Test folder|\(Not supported\)|
|Action|\(Not supported\)|
|Action folder|\(Not supported\)|
|Argument|\(Not supported\)|
|Data set|\(Not supported\)|
|Data set folder|\(Not supported\)|
|Interface|\(Not supported\)|
|Interface entity|\(Not supported\)|
|Interface entity folder|\(Not supported\)|
|Interface element|\(Not supported\)|
|System|\(Not supported\)|
|Version|\(Not supported\)|
|Result|Run|
|Result folder|\(Not supported\)|
|Test tool|\(Not supported\)|
|User|\(Not supported\)|
|Bug|\(Not supported\)|



