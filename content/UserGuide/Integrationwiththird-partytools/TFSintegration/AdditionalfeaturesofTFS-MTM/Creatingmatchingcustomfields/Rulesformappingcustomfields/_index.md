--- 
title: "Rules for mapping custom fields"
linktitle: "Rules for mapping custom fields"
weight: 1
aliases: 
    - /TA_Help/Topics/ug_MTM_matching_custom_fields_rule.html
---
# Rules for mapping custom fields {#concept_ygf_mch_sq .concept}

Custom fields in TFS may be mapped to user-defined fields in TestArchitect test modules or test cases.Mapping is driven by field names. Fields in TFS and TestArchitect are mapped automatically when their names are identical and their data types are compatible. When uploading from TestArchitect to TFS, values from TestArchitect user-defined fields are loaded into their corresponding custom fields in TFS. Likewise, values from TFS custom fields are loaded into the corresponding TestArchitect user-defined fields when importing tests from TFS to TestArchitect.

Mapped fields must have compatible data types, as specified in the following table:

|TFS field type|TestArchitect field type|
|--------------|------------------------|
|DateTime|Date|
|Integer|Number \(9 digits only\)

 Single Line Text

 List item

|
|Double|Single Line Text

List Item

|
|History|Multi Line Text|
|HTML|Multi Line Text|
|PlainText|Single Line Text

 Multi Line Text

 Label

 Hyperlink

|
|String|Single Line Text

List item

Boolean

|
|TreePath|Single Line Text|

All required custom fields in the TFS test suites or test cases must have values before a TFS to TestArchitect import can take place. Similarly, uploading from TestArchitect to TFS requires that those user-defined TestArchitect fields which map to required TFS fields be populated with values. A value for a user-defined TestArchitect field may be set when the field is created, using the **Default value** field in the New Field dialog box, or by explicitly setting the given field for the particular project item on the item’s **Information** tab.

**Parent topic:**[Creating matching custom fields in TestArchitect and Team Foundation Server](../../TA_Help/Topics/ug_MTM_matching_custom_fields.html)

