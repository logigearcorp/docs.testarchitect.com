--- 
title: "Timing settings, actions and conditions"
linktitle: "Timing settings, actions and conditions"
description: "A summary of the relationship between timing settings, action types, and associated conditions and preconditions."
weight: 3
aliases: 
    - /TA_Automation/Topics/timing_settings_actions_conditions.html
keywords: "timing settings, actions and conditions, relationship"
---

A summary of the relationship between timing settings, action types, and associated conditions and preconditions.

The following table summarizes the relationship between types of actions and the applicable time settings, the type of condition or precondition involved, and the possible results of the tests of those conditions/preconditions:

{{<note>}} See [the table](/automation-guide/action-based-testing-language/the-test-language/timing/summary-of-action-types-and-timing-settings#imgtbl_summary_actions_timesettings_results) in [the summary](/automation-guide/action-based-testing-language/the-test-language/timing/summary-of-action-types-and-timing-settings) for a more detailed look at the relationships between action types, timing settings, preconditions, conditions, and results.

![](/images/TA_Automation/Images/timing_tbl_action_types-time_settings-results.png)

\*All timing settings associated with is… actions are used for preconditions, not conditions. \(e.g., the action is control focused, when used on a desktop application, looks for both a window and the target control as preconditions for determining the state of the control. If either the window or control is not available, the response is a warning.\)

