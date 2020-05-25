--- 
title: "Summary of action types and timing settings"
linktitle: "Summary of action types and timing settings"
aliases: 
    - /TA_Automation/Topics/timing_summary.html
---
# Summary of action types and timing settings {#timing_summary .concept}

Summary of timing settings and how they interact with actions.

The following table presents an overview of timing settings applying to actions by type of action, and whether they are used for conditions or preconditions. It also displays the effect or result of condition/precondition tests being successful or unsuccessful.

![](../Images/timing_tbl_action_types-time_settings-summary.02.png)

1*target element* is the UI element \(control, window or page\) specifically referenced by the action.

2*Tested condition* pertains to actions that conduct a test on the AUT and produce a boolean outcome, whether it results in a true/false value being returned to the test, or a pass/fail report. These include the check.., does..exist, if..exists, and is... actions. The tested condition refers to the specific test that the action performs, as specified in the name of that action; it does not apply to the preconditions that may be necessary for the test to take place. \(For example, for the action check control exists, tested condition = *specified control exists*; the existence of the window containing the control is a precondition.\)

3In this context, "UI element" refers to any window, page or GUI or HTML control.

Keep in mind that the above table applies to actions related to the UI of the AUT. With one or two minor exceptions \(e.g., get clipboard\), timing settings are not applied to actions that are independent of AUT interaction. These include actions that interact with the host operating system \(check file exists, does folder exist, etc.\), actions that have no external interactions \(if, does text contain\), documentary actions \(report, test case\), etc.

**Parent topic:**[Timing](../../TA_Automation/Topics/Automation_practices_Timing.html)

**Previous topic:**[Sampling logic](../../TA_Automation/Topics/timing_sampling_logic.html)

