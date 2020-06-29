--- 
title: "Get actions"
linktitle: "Get actions"
description: "Use the get built-in action together with the check built-in action to retrieve and check a value against an expected value."
weight: 8
aliases: 
    - /TA_Automation/Topics/Automation_model_working_with_checks_get.html
keywords: "checks, get"
---

Use the get built-in action together with the check built-in action to retrieve and check a value against an expected value.

There are instances where TestArchitect may not have the built-in action that you need to directly check an actual value against an expected value, such as checking what operating system is installed on a test machine. To use that example, you can *indirectly* check which operating system is installed by first retrieving the test machine's operating system using [get operating system name](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-operating-system-name), then verifying if the retrieved information contains the expected value using [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains) \(see example \#1 below for details\).

Following are three examples of using the get and check built-in actions to indirectly check for an expected value:

1.  Using the get and [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains) built-in actions to check for the existence of an expected substring in the returned string.

    {{<tip>}} Use the [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains) method if you want to check for the existence of a string of text within another string.

    -   For example, suppose you want to check the operating system of your test machine. Use [get operating system name](/automation-guide/action-based-testing-language/built-in-actions/system-actions/operating-system/get-operating-system-name) to retrieve the execution test machine's operating system, then use [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains) to verify if the retrieved information contains the substring Windows 7.
    -   You can make a test procedure as follows:

        ![](/images/TA_Automation/Images/get_actions_1_pgm.png)

    -   If the verification succeeds, [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains) reports a "passed" message; otherwise, it reports a "failed" message.

        ![](/images/TA_Automation/Images/get_actions_1_res.png)

2.  Using the get and [check value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-value) built-in actions to check the content of a value against an expected value.

    {{<tip>}} Use the [check value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-value) action to compare the retrieved value against an exact string.

    -   In the above example, instead of using [check text contains](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-text-contains), use the [check value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-value) built-in action.
    -   You can make a test procedure as follows:

        ![](/images/TA_Automation/Images/get_actions_2_pgm.png)

    -   If the verification succeeds, [check value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/check-value) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images/TA_Automation/Images/get_actions_2_res.png)

3.  Using the get and [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) condition together with [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check), which reports a Passed or Failed message based on the result of the comparison.

    {{<tip>}} Use the [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) method if you know the exact content of the value.

    -   In the above example, instead of using [if](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if) and [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check), you can create a test procedure as follows:
    -   ![](/images/TA_Automation/Images/check_opearting_system_pgm.png)

    -   If the verification succeeds, [report check](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/reporting-and-formatting/report-check) reports a Passed check, and displays the accompanying message in the **Result Details**:

        ![](/images/TA_Automation/Images/check_opearting_system_res.png)




