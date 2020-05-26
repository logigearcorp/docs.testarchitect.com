--- 
title: "Creating matching custom fields in TestArchitect and Team Foundation Server"
linktitle: "Creating matching custom fields"
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_matching_custom_fields.html
---
# Creating matching custom fields in TestArchitect and Team Foundation Server {#task_rvw_3kg_sq .task}

User-defined fields in TestArchitect are automatically mapped to TFS custom fields when the names and data types match.During uploads and downloads, the values of matched fields are kept in sync. The values of user-defined fields created in TestArchitect are loaded into their corresponding custom fields in TFS whenever test modules or test cases are uploaded to TFS. Likewise, the values of custom fields in TFS are loaded to their corresponding user-defined fields in TestArchitect, whenever TFS test cases or test suites are imported into TestArchitect.

-   To create a matching user-defined field in TestArchitect, perform the following steps:

    1.  In the TestArchitect explorer tree, right-click the **Administration** \> **Fields** node, and then select **New Field**.

    2.  In the New Field dialog box, enter the following information:

        -   Name: The name of the TestArchitect user-defined field must be identical to that of its corresponding custom field in TFS.
        -   Apply to: Only Test module and Test case are mappable to TFS custom fields.
        -   Value Type: Field data types must match between TestArchitect and TFS. \([Learn more](ug_MTM_matching_custom_fields_rule.html).\)
        -   Default value: Assign a default value to a user-defined field.

            **Important:** For a TestArchitect user-defined field that maps to a TFS custom field designated as Required, it is essential that a value exist in the TestArchitect field when its corresponding test module or test case is uploaded to TFS. You can ensure that such fields will have values by utilizing the **Default Value** field in the New Field dialog box. \(For existing user-defined fields, defaults can also be set in the Edit Field dialog box.\) A given user-defined field for a particular test module or test case may also be set to a specific value via the **Information** tab of the project item.

        For example, create a user-defined field, **Scheduling Start Date**.

        ![](../Images/TA_MTM_udf.png)

    3.  Click the **Create** button.

-   To add a matching TFS custom field, please refer to Microsoft's [instructions](https://docs.microsoft.com/en-us/vsts/work/customize/add-modify-field):

    As an example, add the custom **Scheduling Start Date** field.

    ![](../Images/TA_MTM_custom_field.png)


1.  [Rules for mapping custom fields](../../TA_Help/Topics/ug_MTM_matching_custom_fields_rule.html)  
Custom fields in TFS may be mapped to user-defined fields in TestArchitect test modules or test cases.

**Parent topic:**[Additional features of TFS-MTM](../../TA_Help/Topics/ug_MTM_features.html)

**Previous topic:**[Disassociating TestArchitect and Team Foundation Server test cases in Visual Studio](../../TA_Help/Topics/ug_MTM_disassociate.html)

**Next topic:**[Upgrading build assemblies of the TestArchitect plug-in](../../TA_Help/Topics/ug_MTM_upgrading_assemblies.html)

