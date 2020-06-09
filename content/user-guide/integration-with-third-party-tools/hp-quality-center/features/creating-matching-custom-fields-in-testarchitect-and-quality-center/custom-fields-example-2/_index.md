--- 
title: "Custom fields: Example \\#2"
linktitle: "Custom fields: Example \\#2"
weight: 3
aliases: 
    - /TA_Help/Topics/Integration_QC_creating_custom_field_ex_2.html
---

This second example explores the steps involved in mapping to custom fields in the Quality Center **RUN** table.

1.  Create a user-defined field in TestArchitect \(for example, the **OSRun** field, with **Value Type = Single line text** and **Default Value** set to xp\).

2.  Create a custom field in the Quality Center RUN table \(for example, **label = OSRun, Type = String**, **Required** check box unselected\).

3.  In TestArchitect, upload a test module \(for example, Calculation result\) to Quality Center \(see [Uploading TestArchitect test modules/test cases to Quality Center](Integration_QC_test_development_step_2.html)\) and run a test in Quality Center.

4.  In Quality Center, confirm that the custom field **OSRun** contains the value xp.


**Parent topic:**[Creating matching custom fields](/TA_Help/Topics/Integration_QC_creating_mapping_custom_field.html)

**Previous topic:**[Custom fields: Example \#1](/TA_Help/Topics/Integration_QC_creating_custom_field_ex_1.html)

**Next topic:**[Creating a custom test objective field in Quality Center](/TA_Help/Topics/Integration_QC_creating_test_objective_field.html)

