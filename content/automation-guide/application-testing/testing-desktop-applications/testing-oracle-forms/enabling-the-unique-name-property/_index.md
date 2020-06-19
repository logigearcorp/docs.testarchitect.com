--- 
title: "Enabling the unique name property"
linktitle: "Enabling the unique name property"
description: "This task describes the way in which you can enable the name property supplied by the Oracle Applications server before using TestArchitect to test Oracle Forms."
weight: 2
aliases: 
    - /TA_Automation/Topics/aut_app_testing_Oracle_Forms_enable_name_attribute.html
keywords: "Oracle Forms testing, enable name property"
---

This task describes the way in which you can enable the **name** property supplied by the Oracle Applications server before using TestArchitect to test Oracle Forms.

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

**Tip:** Your Oracle server administrator can assist you in enabling the unique name property.

Set up the following system profile option at \(your\) user level to enable the name property:

**Remember:** You are required to perform the same following steps for every account which uses TestArchitect to test Oracle Forms.

1.  Log in to your Oracle application and select System Administrator responsibility.

2.  Select **System Administrator** \> **Profile** \> **System**.

3.  In the Find System Profile Values dialog box:

    1.  Select the **Site** and **User** check boxes.

    2.  Confirm that **Site** and **Users** contains your user login.

        ![](/images/TA_Automation/Images/OracleForms_find_system_profiles_values.png)

    3.  In the **Profile** box, enter %ICX%Launch%.

        ![](/images/TA_Automation/Images/OracleForms_find_system_profiles_values_profile.png)

    4.  Click **Find**.

4.  Copy the value from the **Site** box of the ICX: Forms Launcher profile, and paste it in the **User** box.

5.  In the **User** box, add `play=&record=names` to the end of the URL.

    ![](/images/TA_Automation/Images/OracleForms_system_profiles_values_dlg.png)

6.  Save your transaction.

7.  Log in again using your user name.


-   Now you can use the TestArchitect's [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) to capture Oracle Forms controls which have the unique name property \(see the image below\).

    **Note:** The availability of the name property depends on whether your Oracle Server supplies it or not. \([Learn more](https://admhelp.microfocus.com/uft/en/14.02/UFT_Help/Content/Addins_Guide/Verifying_OracleServer_UniqueName_Attributes.htm).\)

    ![](/images/TA_Automation/Images/unique_name_OracleForms.PNG)

-   The figure above shows how the name property of the **Description** text field looks like in the Interface Viewer. Usually name is displayed in capital letters in the format `FORM:BLOCK:FIELD` or `FORM_BLOCK_FIELD`.




