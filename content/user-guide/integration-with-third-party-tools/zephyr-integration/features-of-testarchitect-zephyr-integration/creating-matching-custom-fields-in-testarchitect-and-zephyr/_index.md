--- 
title: "Creating matching custom fields in TestArchitect and Zephyr"
linktitle: "Creating matching custom fields in TestArchitect and Zephyr"
weight: 7
aliases: 
    - /TA_Help/Topics/ug_Zephyr_creating_custom_fields.html
---

User-defined fields in TestArchitect are automatically mapped to Zephyr custom fields when the names and data types match.During uploads and downloads, the values of matched fields are kept in sync. The values of user-defined fields created in TestArchitect are loaded into their corresponding custom fields in Zephyr whenever test modules or test cases are uploaded to Zephyr. Likewise, the values of custom fields in Zephyr are loaded to their corresponding user-defined fields in TestArchitect, whenever Zephyr test cases are imported into TestArchitect.

**Important:** TestArchitect-Zephyr integration supports the following versions of Zephyr.

-   [6.2](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/550633474/6.2+Release+Notes)
    -   [Zephyr Cloud](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263521484/Zephyr+Enterprise+Cloud+Requirements)
    -   TestArchitect 8.4 Update 4 & 5

To create matching user-defined fields in TestArchitect and Zephyr:

1.  Create a user-defined field in TestArchitect.

    **Note:** Ensure that you correctly define the properties for the field, as described below, so that it can be mapped with a corresponding Zephyr custom field:

    -   Name: The name of the TestArchitect user-defined field must be identical to that of its corresponding custom field in Zephyr .
    -   Apply to: Only Test module and Test case are mappable to Zephyr custom fields.
    -   Value Type: Field data types must match between TestArchitect and Zephyr \(See the [TestArchitect and Zephyr Data Types table](ug_Zephyr_matching_custom_fields.html) for details\).
    -   Default value: Assign a default value to a user-defined field.

        **Important:** For a TestArchitect field that maps to a Zephyr field designated as Mandatory, it is essential that a value exist in the TestArchitect field when its corresponding test module or test case is uploaded to Zephyr. You can ensure that such fields will have values by utilizing the **Default Value** field in the New Field dialog box. \(For existing user-defined fields, defaults can also be set in the Edit Field dialog box.\) A given user-defined field for a particular test module or test case may also be set to a specific value via the **Information** tab of the project item.

2.  Create a custom test case field in Zephyr that matches the user-defined field in TestArchitect. \([Learn more](https://zephyrdocs.atlassian.net/wiki/spaces/ZE61/pages/263554654/Customize+Testcase+Fields).\)

    ![](/images//Images/Zephyr_custom_fields_6.1.png)

    ![](/images//Images/Zephyr_match_custom_field_6.1.png)

    **Note:** Of four options, only **Mandatory** has an effect on the synchronization of custom fields between Zephyr and TestArchitect.


**Parent topic:**[Features of TestArchitect-Zephyr integration](/TA_Help/Topics/ug_Zephyr_features.html)

**Previous topic:**[Executing tests from Zephyr](/TA_Help/Topics/ug_Zephyr_executing_tests.html)

**Next topic:**[Rules for mapping custom fields between TestArchitect and Zephyr](/TA_Help/Topics/ug_Zephyr_matching_custom_fields.html)

