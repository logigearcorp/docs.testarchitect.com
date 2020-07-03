--- 
title: "Creating matching custom fields in TestArchitect and Team Foundation Server"
linktitle: "Creating matching custom fields"
description: "User-defined fields in TestArchitect are automatically mapped to TFS custom fields when the names and data types match."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_MTM_matching_custom_fields.html
keywords: "integration, TFS, creating matching custom fields, creating matching custom fields, Team Foundation Server, creating matching custom fields"
---

User-defined fields in TestArchitect are automatically mapped to TFS custom fields when the names and data types match.During uploads and downloads, the values of matched fields are kept in sync. The values of user-defined fields created in TestArchitect are loaded into their corresponding custom fields in TFS whenever test modules or test cases are uploaded to TFS. Likewise, the values of custom fields in TFS are loaded to their corresponding user-defined fields in TestArchitect, whenever TFS test cases or test suites are imported into TestArchitect.

-   To create a matching user-defined field in TestArchitect, perform the following steps:

    1.  In the TestArchitect explorer tree, right-click the **Administration** \> **Fields** node, and then select **New Field**.

    2.  In the New Field dialog box, enter the following information:

        -   Name: The name of the TestArchitect user-defined field must be identical to that of its corresponding custom field in TFS.
        -   Apply to: Only Test module and Test case are mappable to TFS custom fields.
        -   Value Type: Field data types must match between TestArchitect and TFS. \([Learn more](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/creating-matching-custom-fields/rules-for-mapping-custom-fields).\)
        -   Default value: Assign a default value to a user-defined field.

            {{<important>}} For a TestArchitect user-defined field that maps to a TFS custom field designated as Required, it is essential that a value exist in the TestArchitect field when its corresponding test module or test case is uploaded to TFS. You can ensure that such fields will have values by utilizing the **Default Value** field in the New Field dialog box. \(For existing user-defined fields, defaults can also be set in the Edit Field dialog box.\) A given user-defined field for a particular test module or test case may also be set to a specific value via the **Information** tab of the project item.

        For example, create a user-defined field, **Scheduling Start Date**.

        ![](/images/TA_Help/Images/TA_MTM_udf.png)

    3.  Click the **Create** button.

-   To add a matching TFS custom field, please refer to Microsoft's [instructions](https://docs.microsoft.com/en-us/vsts/work/customize/add-modify-field):

    As an example, add the custom **Scheduling Start Date** field.

    ![](/images/TA_Help/Images/TA_MTM_custom_field.png)


1.  [Rules for mapping custom fields](/user-guide/integration-with-third-party-tools/tfs-integration/additional-features-of-tfs-mtm/creating-matching-custom-fields/rules-for-mapping-custom-fields)  
Custom fields in TFS may be mapped to user-defined fields in TestArchitect test modules or test cases.




