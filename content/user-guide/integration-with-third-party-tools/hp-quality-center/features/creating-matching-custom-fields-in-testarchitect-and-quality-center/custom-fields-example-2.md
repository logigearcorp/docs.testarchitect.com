--- 
title: "Custom fields: Example #2"
linktitle: "Custom fields: Example #2"
slug: "custom-fields-example-2"
description: "This second example explores the steps involved in mapping to custom fields in the Quality Center RUN table."
weight: 3
aliases: 
    - /TA_Help/Topics/Integration_QC_creating_custom_field_ex_2.html
keywords: "Quality Center, custom fields, example #2, HP Quality Center, example #2, example #2, integration, custom fields, example #2"
---

This second example explores the steps involved in mapping to custom fields in the Quality Center **RUN** table.

1.  Create a user-defined field in TestArchitect \(for example, the **OSRun** field, with **Value Type = Single line text** and **Default Value** set to xp\).

2.  Create a custom field in the Quality Center RUN table \(for example, **label = OSRun, Type = String**, **Required** check box unselected\).

3.  In TestArchitect, upload a test module \(for example, Calculation result\) to Quality Center \(see [Uploading TestArchitect test modules/test cases to Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/features/uploading-testarchitect-test-modules-test-cases-to-quality-center/)\) and run a test in Quality Center.

4.  In Quality Center, confirm that the custom field **OSRun** contains the value xp.





