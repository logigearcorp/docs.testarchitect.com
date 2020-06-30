--- 
title: "Timing"
linktitle: "Timing"
description: "Successful testing requires that the automation correctly handle the varying response times of a system under test, and not to attempt to continue with interactions before the system is finished with the previous function."
weight: 8
aliases: 
    - /TA_Automation/Topics/Automation_practices_Timing.html
keywords: "timing techniques, timing settings"
---

Successful testing requires that the automation correctly handle the varying response times of a system under test, and not to attempt to continue with interactions before the system is finished with the previous function.Conversely, it is also important that we wait no longer than is necessary for a function to complete, as excessive waits could potentially slow down overall run times of larger test runs.

## Timing Settings

The behavior of built-in actions in TestArchitect is governed by a number of user-definable settings, documented in [Built-in Settings](/automation-guide/action-based-testing-language/built-in-settings/) of the Automation Guide. Among the built-in settings are several that relate to timing issues during test execution, all summarized in the table below. These timing settings all have default values, but you are free to modify such values within your test modules, using the built-in [setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/value-handling/setting) action.

The following table summarizes the settings:

|||||
|------|------|------|------|
|**Setting**|**Default Value**|**Units**|**Description**|
|[object wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait)|20|seconds|The maximum time to wait for a control to become available.|
|[page wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/page-wait)|30|seconds|The maximum wait time for an HTML page to load completely.|
|[window wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait)|20|seconds|The maximum wait time for a window to become available. If a control on a window is addressed TestArchitect looks for that window. If the window is not yet visible, TestArchitect waits until either the window is available or the maximum time specified by this setting is exhausted.|
|[property wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/property-wait)|5|seconds|The maximum wait time for property value of a control or window to be available.|
|[window wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait-probe)|2|seconds|How long to wait for a window in case of only three following actions: [if window exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-window-exists), [if window not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-window-not-exists) and [does window exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/window/does-window-exist). If the maximum time specified by this setting is reached, the result is false.|
|[object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe)|2|seconds|How long to wait for a control in case of only three following actions: [if control exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-control-exists), [if control not exists](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/control-flow/if-control-not-exists) and [does control exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/does-control-exist). If the maximum time specified by this setting is reached, the result is false.|
|[item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait)|3|seconds|The maximum wait time for an item to become available. Items affected can be tree nodes, menu items, list/combo box items or table cells.|
|[value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait)|500|milliseconds|The maximum wait time for a value of a get or check action to be changed.|
|[control condition](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition)|None|Dynamic identifier expression that evaluates to a Boolean True or False|Waits for given UI controls to be ready before [UI-interactive actions](/automation-guide/action-based-testing-language/the-test-language/timing/understanding-action-types-and-condition-types/classifying-ui-interactive-actions) are executed.|
|[control condition wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition-wait)|5|seconds|The maximum wait time for all TA properties to satisfy the conditions defined in [control condition](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/control-condition).|

Waits are important in test automation. Ideally, a system under test should be able to respond to an input in zero time, or at least a lot faster than the test automation can test those responses, but we know that’s not always the case. Hence, a test automation system needs to make allowances for the system under test.

Each timing setting in TestArchitect can be considered to have a timer connected with it. The TestArchitect automation uses these timers during testing to ensure that the AUT is allowed enough time to change its state in some way, usually in response to some prior stimulus like a button click or Enter key being pressed. This *change of state* may be the activation or removal of some UI element like a window or control, or a change in a property value or state.

As an example, in a test of the sample Car Rental application, the following action lines may be used to check for an expected behavior when the Login window is displayed:

![](/images/TA_Automation/Images/timing_click_and_check_test_lines.png)

The click action is expected to trigger a response from the AUT in which the Login window is dismissed and the Welcome window is displayed. check window exists verifies that the expected response has indeed occurred. However, without allowing the AUT enough time to go through its paces, there is a possibility that check window exists will look for the Welcome window before the AUT has made it available, and hence cause the test to fail when it shouldn't. To avoid this outcome, check window exists uses the timer associated with the window wait setting to give Car Rental enough time to produce the window. \(By default, that timer is set to 20 seconds, but with the setting action it can be set in your action lines to any value you choose.\)

1.  [Understanding action types and condition types](/automation-guide/action-based-testing-language/the-test-language/timing/understanding-action-types-and-condition-types/)  
 For a full understanding of timing settings and their effects, it is helpful to understand the types of UI-related action, and the two types of UI-testing conditions.
2.  [Timing settings by type](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/)  
 Timing settings can be roughly broken down into two types: critical and non-critical.
3.  [Sampling logic](/automation-guide/action-based-testing-language/the-test-language/timing/sampling-logic)  
 At any stage of an action that tests for the presence of a given UI element, a wait may be imposed while the automation continuously samples for that element. It is important to know, based on the action type, the conditions that cause the wait to occur, and those that end it.
4.  [Summary of action types and timing settings](/automation-guide/action-based-testing-language/the-test-language/timing/summary-of-action-types-and-timing-settings)  
 Summary of timing settings and how they interact with actions.




**Related information**  


[Built-in settings](/automation-guide/action-based-testing-language/built-in-settings/)

