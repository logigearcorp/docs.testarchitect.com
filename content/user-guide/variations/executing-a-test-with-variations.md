--- 
title: "Executing a test with variations"
linktitle: "Executing a test with variations"
description: "As discussed, it is at the start of execution that you inform TestArchitect of the specific versions of systems (we'll call these system/versions) that apply to your test run, as well as any applicable keywords."
weight: 6
aliases: 
    - /TA_Help/Topics/Variations_executing.html
keywords: "variations, executing test, test execution, variation"
---

As discussed, it is at the start of execution that you inform TestArchitect of the specific versions of systems \(we'll call these system/versions\) that apply to your test run, as well as any applicable keywords.Subsequently, during execution, any time the test run calls for a given test module, action, interface entity, or data set, the automation determines, based on a well-defined set of rules, the appropriate variation to invoke.

1.  Select a test module, and then press Ctrl + F9 in Windows \(macOS: ![](/images/TA_Help/Images/Mac_control_key.png) + ![](/images/TA_Help/Images/Mac_shift_key.png) + F9, Linux: Ctrl + Shift + F9\).

2.  In the Execute Test dialog box:

    -   If you want to execute a test with keyword variations, enter the keyword\(s\) into the Keyword field of the Variation Specification panel.

        {{<note>}} Separate multiple keywords with commas.

        ![](/images/TA_Help/Images/Kw_variations.png)

    -   If you want to execute the test with linked variations, click the **Select Version** button and select the version\(s\) in the Select Version dialog box.

        ![](/images/TA_Help/Images/Linked_variations.png)

        {{<important>}} Note that, during execution setup, only one version node may be selected per system. \([Learn more](/user-guide/variations/rules-for-executing-with-variations/).\)


The test is executed with the selected keyword or/and the linked variations.




