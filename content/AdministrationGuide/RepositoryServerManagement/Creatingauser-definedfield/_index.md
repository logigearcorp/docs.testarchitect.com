--- 
title: "Creating a user-defined field"
linktitle: "Creating a user-defined field"
aliases: 
    - /TA_Administration/Topics/User_defined_fields_create.html
---
# Creating a user-defined field {#user_defined_fields_create .task}

There may be times when you'll want to augment the set of fields that TestArchitect provides for a given project item type. You can do that by creating new fields and adding them to the item type definition.

1.  In the TestArchitect explorer tree, right-click the **Administration** \> **Fields** node, and then select **New Field**.

2.  In the New Field dialog box, enter the following information:

    -   **Name**: Name for the new field, which must be unique for the given project item type.

        **Important:** When creating a user-defined field, you must follow naming conventions discussed below.

    -   **Short name**: \(Optional\) Short name for the field, which is displayed in list views. If this field is empty, the **Name** value is used as the short name.

        **Important:** When assigning a short name to an user-defined field, you must follow naming conventions discussed below.

    -   **Apply To**: Select the project item type whose definition you want this field added to.

        **Note:** If Result is selected, you can then use the [assign result field](../../TA_Automation/Topics/bia_assign_result_field.html) to assign a value to that field during execution.

    -   **Value type**: Select the data type of the field \(for example, Single Line Text or Multi Line Text\).
    -   Default Value: \(Optional\) The initial value of the field when a new item of the given type is created.
    ![](../Images/ug_userdefinedfield2.1.png)

3.  Click **Create**.

    The new user-defined field is added as a child node beneath the **Fields** node, and is displayed in the **Information** tabs of any of the project items to which it has been applied.

    ![](../Images/user_defined_field_TM.png)

    **Note:**

    -   If a user-defined field is added to the **Test Step** project item type, the field will appear as a column under the [**Steps** List View](../../TA_Help/Topics/Projects_and_tests_steps_creating.md#) of the **Test Case** as shown in the screenshot below.
    ![](../Images/ug_userdefinefield2.4.png)

    -   In the case of a user-defined field being added to the Result project item type, the field also appears in the **Result Fields** tab of the [Execute Test](../../TA_Help/Topics/Test_exec_test_execution.html) dialog box, as depicted in the screenshot below. A value entered into this box prior to a test run results in that value being recorded into the corresponding field of the test result for that run.
    ![](../Images/user_defined_field_results.png)


**Restriction:** When naming a user-defined field, avoid any of the following special characters:

|Apostrophe|'|
|Quotation mark|"|
|At sign|@|
|Grave accent|\`|
|Number sign|\#|
|Percent|%|
|Greater than sign|\>|
|Less than sign|<|
|Exclamation mark|!|
|Brackets|\[ \]|
|Asterisk|\*|
|Dollar sign|$|
|Semicolon|;|
|Colon|:|
|Question mark|?|
|Caret|^|
|Braces|\{ \}|
|Plus sign|+|
|Hyphen|-|
|Equal sign|=|
|Tilde|~|
|Backslash|\\|
|Slash mark|/|
|Pipe|\||
|Underscore|\_|

Note also that:

-   A period \(.\) is permitted anywhere in the name.
-   Numeric digits are permitted anywhere in the name, except at the beginning.

**Parent topic:**[User-defined fields](../../TA_Administration/Topics/User_defined_fields.html)

**Next topic:**[Editing a user-defined field](../../TA_Administration/Topics/User_defined_fields_edit.html)

