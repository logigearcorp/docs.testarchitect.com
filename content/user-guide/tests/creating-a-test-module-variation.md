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

It is highly recommended that you become familiar with the [concepts of variations](/user-guide/variations/), rules for [creating variations](/user-guide/variations/rules-for-creating-variations/) and [executing variations](/user-guide/variations/rules-for-executing-with-variations/).

To create a test module variation, do the following:

1.  Copy a default test module of which you wish to create the variation by selecting it in the TestArchitect explorer tree and pressing Ctrl+C on your keyboard, or selecting **Copy** from the context menu.

    ![](/images/TA_Help/Images/TM_var.png)

2.  In the TA explorer tree, right-click the parent test folder of the test module you just copied, and then select **Paste as Variation**.

    {{<remember>}} You must paste the variation into the same folder as the default which has just been copied.

    ![](/images/TA_Help/Images/TM_var_1.png)

3.  In the Create Variation dialog box that appears, you can define this test module variation as a [keyword variation](/user-guide/variations/creating-keyword-variations), a [linked variation](/user-guide/variations/creating-linked-variations/creating-a-variation), or a combination of the two.

    ![](/images/TA_Help/Images/ug_TM_variation.png)

4.  Click **OK**.


The new variation appears as a node in theTestArchitect explorer tree, labeled with its name and variation signature, in the form of `<default definition name> {<System>:<node1>, <node2>} {<keyword1>, <keyword2>}`

![](/images/TA_Help/Images/TM_var_2.png)




**Related information**  


[Executing multiple test modules](/user-guide/test-execution/methods-of-test-execution/executing-multiple-test-modules)

[Uploading TestArchitect test modules/test cases to Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/features/uploading-testarchitect-test-modules-test-cases-to-quality-center/)

[Mapping TestArchitect test cases to Quality Center tests](/user-guide/integration-with-third-party-tools/hp-quality-center/configuring-integration-with-hp-quality-center/setting-up-the-connection-with-quality-center/mapping-testarchitect-test-cases-to-quality-center-tests)

[Executing tests from Quality Center](/user-guide/integration-with-third-party-tools/hp-quality-center/features/executing-tests-from-quality-center)

[Uploading TestArchitect test modules/test cases to Zephyr](/user-guide/integration-with-third-party-tools/zephyr-integration/features-of-testarchitect-zephyr-integration/uploading-testarchitect-test-modules-test-cases-to-zephyr/)

[Mapping TestArchitect test cases to Zephyr test cases](/user-guide/integration-with-third-party-tools/zephyr-integration/features-of-testarchitect-zephyr-integration/mapping-testarchitect-test-cases-to-zephyr-test-cases)

[Executing tests from Zephyr](/user-guide/integration-with-third-party-tools/zephyr-integration/features-of-testarchitect-zephyr-integration/executing-tests-from-zephyr)

[run test](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/run-test)

[Adding new test modules to a static test suite](/user-guide/projects-and-project-items/project-items/test-suites/static-test-suites/adding-new-test-modules-to-a-static-test-suite)

