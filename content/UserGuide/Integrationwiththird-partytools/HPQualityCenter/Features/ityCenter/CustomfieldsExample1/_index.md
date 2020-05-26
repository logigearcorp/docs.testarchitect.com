--- 
title: "Custom fields: Example \\#1"
linktitle: "Custom fields: Example \\#1"
weight: 2
aliases: 
    - /TA_Help/Topics/Integration_QC_creating_custom_field_ex_1.html
---
# Custom fields: Example \#1 {#QC_creating_custom_field_ex_1 .task}

This example demonstrates the steps involved in mapping a custom field in TestArchitect to a custom field in the Quality Center **TEST** table.

1.  Create a user-defined field in TestArchitect \(for example, the field **OS**, with Value Type = Single line text and the **Default Value** set to xp\).

2.  Create a custom field in the Quality Center TEST table \(for example, **label = OS**, **Type = String**, **Required** check box unselected\).

3.  In TestArchitect, upload a test module \(for example, CalculationTM\) to Quality Center \(see [Uploading TestArchitect test modules/test cases to Quality Center](Integration_QC_test_development_step_2.html)\).

4.  In Quality Center, confirm that the custom field **OS** holds the value **xp**.

    ![](../Images/QC_custom_field_ex_1.png)


**Parent topic:**[Creating matching custom fields](../../TA_Help/Topics/Integration_QC_creating_mapping_custom_field.html)

**Previous topic:**[Rules for mapping custom fields between TestArchitect and Quality Center](../../TA_Help/Topics/Integration_QC_creating_custom_field_rules.html)

**Next topic:**[Custom fields: Example \#2](../../TA_Help/Topics/Integration_QC_creating_custom_field_ex_2.html)

