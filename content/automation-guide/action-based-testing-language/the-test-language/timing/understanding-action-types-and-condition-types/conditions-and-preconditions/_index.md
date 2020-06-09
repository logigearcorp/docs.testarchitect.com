--- 
title: "Conditions and preconditions"
linktitle: "Conditions and preconditions"
weight: 2
aliases: 
    - /TA_Automation/Topics/timing_preconditions.html
---

The execution of an action may involve one or more UI-related tests that must be satisfied before the primary function of the action can be executed.

In general \(and, basically, by definition\), it is exclusively the testing actions that have conditions, and each one has exactly one condition. However, many actions – both of the UI-testing and UI-interfacing varieties – also have preconditions. Preconditions can be thought of as tests that must be performed during the various stages of an action that, if successful, allow it to progress to the next stage. \(By contrast, a *condition*, if one exists, is always associated with the final stage.\) An action can have from 0 to any number of preconditions.

[check window exists](check_window_exists.html), as an example , is relatively simple. It has just a single, final stage, involving only a single condition \(*does the window exist?*\) without any preconditions. And associated with this single condition is a single timing setting, [window wait](window_wait.html).

By contrast, an action may implement not just a single stage, but a hierarchy of stages, with a precondition connected with each one, and a timing setting connected with each precondition. For example, before attempting to perform a click on a tree node, the action [click tree node](click_tree_node.html) must find the specified window, then the specified tree, then any specified ancestor nodes \(in order of increasing depth\), and, finally, the target node itself. For each stage in its navigation, it must ensure that the particular user interface item is given enough time to be made available. The applicable timing settings in this case are [window wait](window_wait.html) for the window, [object wait](object_wait.html) for the tree, and [item wait](item_wait.html) for each of the successive tree nodes. A failure to satisfy any precondition along the way results in a TestArchitect warning.

![](/images//Images/timing_click_tree_node_sequence.png)

This fact highlights the main difference between conditions and preconditions. As mentioned, conditions relate to *testing actions* only, and the condition of each such action is basically declared in the action name: [if window exists](if_window_exists.html), [does control exist](does_control_exist.html), [check item not exists](check_item_not_exists.html), etc. Interfacing actions \([click tree node](click_tree_node.html), [enter](enter.html), [click table cell](click_table_cell.html), [get selected items](get_selected_items.html), etc.\) don’t overtly test the UI, so they have no conditions, only preconditions. The performance of a condition test results in one of the Boolean outcomes described [earlier](timing_classifying_actions.html#class_action_testing_actions) \(pass/fail the test; stuff 1\(true\)/0\(false\) into a variable; send control this way or that way\). By contrast, the performance of a precondition test determines whether the automation moves on to the next stage of the action, or results in a TestArchitect warning \(depending, respectively, on whether or not the precondition is satisfied\).

**Note:** It should also be noted that the preconditions of an action, and hence the waits that are applied to it, often depend upon the context in which that action is used. There are two factors that can determine how many waits are applied to an action:

1.  **The type of AUT:** In actual use, an action may not use the full set of timing settings listed for it. For example, in its help topic, the action [check control exists](check_control_exists.html) has [page wait](page_wait.html) listed as one of the settings that applies to it. This makes sense when the AUT is a web application, where [check control exists](check_control_exists.html) is used to verify the existence of an HTML element on a web page. \(In that case, it’s important to ensure that the page has fully loaded in the browser window.\) But [check control exists](check_control_exists.html) can also be used to check for a control in a desktop application. In that case, [page wait](page_wait.html) is meaningless, and has no effect on the [check control exists](check_control_exists.html) action.
2.  **Location of a UI item:** [click tree node](click_tree_node.html), discussed above, is an example of an action that has a variable number of preconditions, depending on how deep the target node is in its tree. For this action, the existence of the target’s window and tree are preconditions, as is the existence of each node in the tree hierarchy leading to the target, as well as the target itself, with a wait implemented for each.

**Parent topic:**[Understanding action types and condition types](/TA_Automation/Topics/timing_intro_action_and_condition_types.html)

**Previous topic:**[Classifying UI-interactive actions](/TA_Automation/Topics/timing_classifying_actions.html)

