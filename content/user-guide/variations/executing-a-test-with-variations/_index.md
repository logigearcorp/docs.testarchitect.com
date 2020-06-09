--- 
title: "Executing a test with variations"
linktitle: "Executing a test with variations"
weight: 6
aliases: 
    - /TA_Help/Topics/Variations_executing.html
---

As discussed, it is at the start of execution that you inform TestArchitect of the specific versions of systems \(we'll call these system/versions\) that apply to your test run, as well as any applicable keywords.Subsequently, during execution, any time the test run calls for a given test module, action, interface entity, or data set, the automation determines, based on a well-defined set of rules, the appropriate variation to invoke.

1.  Select a test module, and then press Ctrl + F9 in Windows \(macOS: ![](/images//Images/Mac_control_key.png) + ![](/images//Images/Mac_shift_key.png) + F9, Linux: Ctrl + Shift + F9\).

2.  In the Execute Test dialog box:

    -   If you want to execute a test with keyword variations, enter the keyword\(s\) into the Keyword field of the Variation Specification panel.

        **Note:** Separate multiple keywords with commas.

        ![](/images//Images/Kw_variations.png)

    -   If you want to execute the test with linked variations, click the **Select Version** button and select the version\(s\) in the Select Version dialog box.

        ![](/images//Images/Linked_variations.png)

        **Important:** Note that, during execution setup, only one version node may be selected per system. \([Learn more](Variations_rules_executing.html).\)


The test is executed with the selected keyword or/and the linked variations.

**Parent topic:**[Variations](/TA_Help/Topics/Variations.html)

**Previous topic:**[Rules for creating variations](/TA_Help/Topics/Variations_rules.html)

**Next topic:**[Rules for executing with variations](/TA_Help/Topics/Variations_rules_executing.html)

