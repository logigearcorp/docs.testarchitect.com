--- 
title: "Timing"
linktitle: "Timing"
weight: 8
aliases: 
    - /TA_Automation/Topics/Automation_practices_Timing.html
---

Successful testing requires that the automation correctly handle the varying response times of a system under test, and not to attempt to continue with interactions before the system is finished with the previous function.Conversely, it is also important that we wait no longer than is necessary for a function to complete, as excessive waits could potentially slow down overall run times of larger test runs.

## Timing Settings

The behavior of built-in actions in TestArchitect is governed by a number of user-definable settings, documented in [Built-in Settings](bis_Built_in_settings.html) of the Automation Guide. Among the built-in settings are several that relate to timing issues during test execution, all summarized in the table below. These timing settings all have default values, but you are free to modify such values within your test modules, using the built-in [setting](bia_setting.html) action.

The following table summarizes the settings:

|**Setting**|**Default Value**|**Units**|**Description**|
|[object wait](bis_object_wait.html)|20|seconds|The maximum time to wait for a control to become available.|
|[page wait](bis_page_wait.html)|30|seconds|The maximum wait time for an HTML page to load completely.|
|[window wait](bis_window_wait.html)|20|seconds|The maximum wait time for a window to become available. If a control on a window is addressed TestArchitect looks for that window. If the window is not yet visible, TestArchitect waits until either the window is available or the maximum time specified by this setting is exhausted.|
|[property wait](bis_property_wait.html)|5|seconds|The maximum wait time for property value of a control or window to be available.|
|[window wait probe](bis_window_wait_probe.html)|2|seconds|How long to wait for a window in case of only three following actions: [if window exists](bia_if_window_exists.html), [if window not exists](bia_if_window_not_exists.html) and [does window exist](bia_does_window_exist.html). If the maximum time specified by this setting is reached, the result is false.|
|[object wait probe](bis_object_wait_probe.html)|2|seconds|How long to wait for a control in case of only three following actions: [if control exists](bia_if_control_exists.html), [if control not exists](bia_if_control_not_exists.html) and [does control exist](bia_does_control_exist.html). If the maximum time specified by this setting is reached, the result is false.|
|[item wait](bis_item_wait.html)|3|seconds|The maximum wait time for an item to become available. Items affected can be tree nodes, menu items, list/combo box items or table cells.|
|[value changed wait](bis_value_changed_wait.html)|500|milliseconds|The maximum wait time for a value of a get or check action to be changed.|
|[control condition](bis_control_condition.html)|None|Dynamic identifier expression that evaluates to a Boolean True or False|Waits for given UI controls to be ready before [UI-interactive actions](timing_classifying_actions.html) are executed.|
|[control condition wait](bis_control_condition_wait.html)|5|seconds|The maximum wait time for all TA properties to satisfy the conditions defined in [control condition](bis_control_condition.html).|

Waits are important in test automation. Ideally, a system under test should be able to respond to an input in zero time, or at least a lot faster than the test automation can test those responses, but we know that’s not always the case. Hence, a test automation system needs to make allowances for the system under test.

Each timing setting in TestArchitect can be considered to have a timer connected with it. The TestArchitect automation uses these timers during testing to ensure that the AUT is allowed enough time to change its state in some way, usually in response to some prior stimulus like a button click or Enter key being pressed. This *change of state* may be the activation or removal of some UI element like a window or control, or a change in a property value or state.

As an example, in a test of the sample Car Rental application, the following action lines may be used to check for an expected behavior when the Login window is displayed:

![](/images//Images/timing_click_and_check_test_lines.png)

The click action is expected to trigger a response from the AUT in which the Login window is dismissed and the Welcome window is displayed. check window exists verifies that the expected response has indeed occurred. However, without allowing the AUT enough time to go through its paces, there is a possibility that check window exists will look for the Welcome window before the AUT has made it available, and hence cause the test to fail when it shouldn't. To avoid this outcome, check window exists uses the timer associated with the window wait setting to give Car Rental enough time to produce the window. \(By default, that timer is set to 20 seconds, but with the setting action it can be set in your action lines to any value you choose.\)

1.  [Understanding action types and condition types](/TA_Automation/Topics/timing_intro_action_and_condition_types.html)  
 For a full understanding of timing settings and their effects, it is helpful to understand the types of UI-related action, and the two types of UI-testing conditions.
2.  [Timing settings by type](/TA_Automation/Topics/timing_settings_classified.html)  
 Timing settings can be roughly broken down into two types: critical and non-critical.
3.  [Sampling logic](/TA_Automation/Topics/timing_sampling_logic.html)  
 At any stage of an action that tests for the presence of a given UI element, a wait may be imposed while the automation continuously samples for that element. It is important to know, based on the action type, the conditions that cause the wait to occur, and those that end it.
4.  [Summary of action types and timing settings](/TA_Automation/Topics/timing_summary.html)  
 Summary of timing settings and how they interact with actions.

**Parent topic:**[The test language](/TA_Automation/Topics/The_test_language.html)

**Previous topic:**[Error handling and recovery](/TA_Automation/Topics/The_test_language_error_handling_and_recovery.html)

**Next topic:**[Ignoring actions](/TA_Automation/Topics/Ignoring_action.html)

**Related information**  


[Built-in settings](/TA_Automation/Topics/bis_Built_in_settings.html)

