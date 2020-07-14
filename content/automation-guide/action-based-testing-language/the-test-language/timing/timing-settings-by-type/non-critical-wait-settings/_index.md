--- 
title: "Non-critical wait settings"
linktitle: "Non-critical wait settings"
description: "Non-critical wait settings (window wait probe, object wait probe, and value changed wait) are not associated with interruptions of normal program flow."
weight: 2
aliases: 
    - /TA_Automation/Topics/timing_noncritical_wait_settings.html
keywords: "timing settings, non-critical"
---

Non-critical wait settings \(window wait probe, object wait probe, and value changed wait\) are not associated with interruptions of normal program flow.

The non-critical waits group consists of two types of waits: the probe waits, and [value changed wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/value-changed-wait). Like the critical waits, non-critical waits wait for the possibility of a change taking place in the AUT, to ensure that their associated actions sample the correct value or state. But the actions associated with non-critical waits are essentially neutral about the final result - that is, the wait never directly results in a warning or failed test \(or passed test, for that matter\).

-   [Probe waits](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/non-critical-wait-settings/wait-probe-settings) are used for non-critical conditions. That is, these waits are used by testing actions which simply query the AUT about the existence of some item within its UI, and won’t issue a fail report or warning if the target items are not found. These are the does…exist and if…exists actions. As discussed [earlier](/automation-guide/action-based-testing-language/the-test-language/timing/understanding-action-types-and-condition-types/classifying-ui-interactive-actions#class_action_testing_actions), execution of these actions results in a Boolean value \(1\(true\)/0\(false\)\) which is either returned as a variable value \(for does…exist actions\) or used to determine the flow of control \(for if…exists actions\). There are two probe waits:

    -   **[window wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait-probe)**

        applies to UI windows, including browser windows

    -   **[object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe)**

        applies to UI controls and HTML elements

    {{<note>}} does…exist actions are used for testing for the presence of various windows, controls and items. [window wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/window-wait-probe) is used for windows, and [object wait probe](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/object-wait-probe) is used for controls. There is, however, no item wait probe setting. In its place, item-related does…exist actions \([does menu item exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/does-menu-item-exist), [does tree node exist](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/does-tree-node-exist), etc.\) currently use the [item wait](/automation-guide/action-based-testing-language/built-in-settings/timing-settings/item-wait) setting when testing for such items.

-   [value changed wait](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/non-critical-wait-settings/value-changed-wait) is used by actions that sample values from the AUT \(or, in the case of [get clipboard](/automation-guide/action-based-testing-language/built-in-actions/system-actions/clipboard/get-clipboard), a value from the host OS\). It is used to ensure that the value in the sampled UI item has had a chance to settle into its stable state, after the execution of some action that may have affected that state.


-   **[Wait probe settings](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/non-critical-wait-settings/wait-probe-settings)**  
 window wait probe and object wait probe are used for *non-critical* condition tests.
-   **[value changed wait](/automation-guide/action-based-testing-language/the-test-language/timing/timing-settings-by-type/non-critical-wait-settings/value-changed-wait)**  
 The value changed wait setting is concerned with the delays that may be incurred in the changing of a value or state in the AUT's interface after a UI-modifying action has executed.

