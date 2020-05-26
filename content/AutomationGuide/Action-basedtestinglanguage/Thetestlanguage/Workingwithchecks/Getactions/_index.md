--- 
title: "Get actions"
linktitle: "Get actions"
weight: 8
aliases: 
    - /TA_Automation/Topics/Automation_model_working_with_checks_get.html
---
# Get actions {#automation_model_working_with_checks_get .concept}

Use the get built-in action together with the check built-in action to retrieve and check a value against an expected value.

There are instances where TestArchitect may not have the built-in action that you need to directly check an actual value against an expected value, such as checking what operating system is installed on a test machine. To use that example, you can *indirectly* check which operating system is installed by first retrieving the test machine's operating system using [get operating system name](bia_get_operating_system_name.html), then verifying if the retrieved information contains the expected value using [check text contains](bia_check_text_contains.html) \(see example \#1 below for details\).

Following are three examples of using the get and check built-in actions to indirectly check for an expected value:

1.  Using the get and [check text contains](bia_check_text_contains.html) built-in actions to check for the existence of an expected substring in the returned string.

    **Tip:** Use the [check text contains](bia_check_text_contains.html) method if you want to check for the existence of a string of text within another string.

    -   For example, suppose you want to check the operating system of your test machine. Use [get operating system name](bia_get_operating_system_name.html) to retrieve the execution test machine's operating system, then use [check text contains](bia_check_text_contains.html) to verify if the retrieved information contains the substring Windows 7.
    -   You can make a test procedure as follows:

        ![](../Images/get_actions_1_pgm.png)

    -   If the verification succeeds, [check text contains](bia_check_text_contains.html) reports a "passed" message; otherwise, it reports a "failed" message.

        ![](../Images/get_actions_1_res.png)

2.  Using the get and [check value](bia_check_value.html) built-in actions to check the content of a value against an expected value.

    **Tip:** Use the [check value](bia_check_value.html) action to compare the retrieved value against an exact string.

    -   In the above example, instead of using [check text contains](bia_check_text_contains.html), use the [check value](bia_check_value.html) built-in action.
    -   You can make a test procedure as follows:

        ![](../Images/get_actions_2_pgm.png)

    -   If the verification succeeds, [check value](bia_check_value.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](../Images/get_actions_2_res.png)

3.  Using the get and [if](bia_if.html) condition together with [report check](bia_report_check.html), which reports a Passed or Failed message based on the result of the comparison.

    **Tip:** Use the [if](bia_if.html) method if you know the exact content of the value.

    -   In the above example, instead of using [if](bia_if.html) and [report check](bia_report_check.html), you can create a test procedure as follows:
    -   ![](../Images/check_opearting_system_pgm.png)

    -   If the verification succeeds, [report check](bia_report_check.html) reports a Passed check, and displays the accompanying message in the **Result Details**:

        ![](../Images/check_opearting_system_res.png)


**Parent topic:**[Working with checks](../../TA_Automation/Topics/Automation_model_working_with_checks.html)

**Previous topic:**[Optical Character Recognition checks](../../TA_Automation/Topics/Working_with_checks_OCR.html)

