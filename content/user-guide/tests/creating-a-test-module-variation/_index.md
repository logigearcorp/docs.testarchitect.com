--- 
title: "Creating a test module variation"
linktitle: "Creating a test module variation"
description: "Test module variation enhances modularity by limiting test changes to applicable sections, while allowing your test to otherwise remain intact from one version to the next."
weight: 3
aliases: 
    - /TA_Help/Topics/ug_TM_create_variation.html
keywords: "test module variations, variations, creating"
---

Test module variation enhances modularity by limiting test changes to applicable sections, while allowing your test to otherwise remain intact from one version to the next.

It is highly recommended that you become familiar with the [concepts of variations](/TA_Help/Topics/Variations.html), rules for [creating variations](/TA_Help/Topics/Variations_rules.html) and [executing variations](/TA_Help/Topics/Variations_rules_executing.html).

To create a test module variation, do the following:

1.  Copy a default test module of which you wish to create the variation by selecting it in the TestArchitect explorer tree and pressing Ctrl+C on your keyboard, or selecting **Copy** from the context menu.

    ![](/images/TA_Help/Images/TM_var.png)

2.  In the TA explorer tree, right-click the parent test folder of the test module you just copied, and then select **Paste as Variation**.

{{<remember>}} You must paste the variation into the same folder as the default which has just been copied.

    ![](/images/TA_Help/Images/TM_var_1.png)

3.  In the Create Variation dialog box that appears, you can define this test module variation as a [keyword variation](/TA_Help/Topics/Variations_create_keyword.html), a [linked variation](/TA_Help/Topics/Variations_linking.html), or a combination of the two.

    ![](/images/TA_Help/Images/ug_TM_variation.png)

4.  Click **OK**.


The new variation appears as a node in theTestArchitect explorer tree, labeled with its name and variation signature, in the form of `<default definition name> {<System>:<node1>, <node2>} {<keyword1>, <keyword2>}`

![](/images/TA_Help/Images/TM_var_2.png)




**Related information**  


[Executing multiple test modules](/TA_Help/Topics/Test_exec_multiple_TM.html)

[Uploading TestArchitect test modules/test cases to Quality Center](/TA_Help/Topics/Integration_QC_test_development_step_2.html)

[Mapping TestArchitect test cases to Quality Center tests](/TA_Help/Topics/Integration_QC_connecting_repo_to_QC_server_step_3.html)

[Executing tests from Quality Center](/TA_Help/Topics/Integration_QC_executing_from_QC.html)

[Uploading TestArchitect test modules/test cases to Zephyr](/TA_Help/Topics/ug_Zephyr_upload_TA_TM_TC.html)

[Mapping TestArchitect test cases to Zephyr test cases](/TA_Help/Topics/ug_Zephyr_mapping_test_cases.html)

[Executing tests from Zephyr](/TA_Help/Topics/ug_Zephyr_executing_tests.html)

[run test](/TA_Automation/Topics/bia_run_test.html)

[Adding new test modules to a static test suite](/TA_Help/Topics/Test_suite_static_add_new_test_module.html)

