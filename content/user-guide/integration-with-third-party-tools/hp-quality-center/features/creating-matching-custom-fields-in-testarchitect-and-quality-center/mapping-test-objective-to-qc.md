--- 
title: "Creating a custom test objective field in Quality Center"
linktitle: "Mapping test objective to QC"
description: "By default, the test objectives that may be assigned to TestArchitect test modules and test cases are not carried over to Quality Center tests. You can remedy that, however, by creating a special test objective custom field."
weight: 4
aliases: 
    - /TA_Help/Topics/Integration_QC_creating_test_objective_field.html
keywords: "Quality Center, custom fields, test objective, HP Quality Center, integration, test objective field"
---

By default, the test objectives that may be assigned to TestArchitect test modules and test cases are not carried over to Quality Center tests. You can remedy that, however, by creating a special **test objective** custom field.

{{<note>}} Please note that the following instructions on creating a custom field in HP Quality Center are provided for your convenience, and are not guaranteed to address changes that may occur with new updates to the application. If in doubt about any of the steps, please consult the Help documentation provided with Quality Center.

Creating a means to map test objectives from TestArchitect test modules and test cases into your Quality Center tests requires that you create a special custom Memo field in Quality Center:

1.  If using Quality Center 11, select **Customize** from the **Tools**menu; or, in Quality Center 12, select **Customize** from the **Settings** ![](/images/TA_Help/Images/icn.QC_settings.png) icon:

    ![](/images/TA_Help/Images/QC_custom_field.rev_1.png)

2.  In the Project Customization screen, select **Project Entities**.

3.  Under **Project Entities**, expand the **Test** ![](/images/TA_Help/Images/icn_QC_test.png) node, and select **User Fields**.

    ![](/images/TA_Help/Images/QC_Project_entity.02.png)

4.  In the **Project Entities** toolbar, click the arrow beside **New Field**, and select **New Memo Field**.

    ![](/images/TA_Help/Images/QC_Project_entity.02a.png)

5.  Under **Settings**, enter test objective in the **Label** text box. No other fields need be added.

6.  Click **Save** ![](/images/TA_Help/Images/QC_save_button.png) on the toolbar, and return to your Test Plan screen.


In the Quality Center Test Plan, the **Details** tab of each test now displays a **test objective** subtab.

![](/images/TA_Help/Images/QC.test_objective.field.png)

Once you begin uploading test modules with test objectives to Quality Center, those test objectives will be available in this tab. Note that this applies to both test case-mapped tests and \# tests. In the case of \# tests, the **test objective** tab displays all the test objectives of the corresponding test module.



