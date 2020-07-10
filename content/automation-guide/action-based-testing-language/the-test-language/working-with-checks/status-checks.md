--- 
title: "Status checks"
linktitle: "Status checks"
description: "How to implement test scripts that verify the status of a control."
weight: 3
aliases: 
    - /TA_Automation/Topics/Working_with_checks_status.html
keywords: "checks, status"
---

How to implement test scripts that verify the status of a control.

TestArchitect offers various built-in actions that check the status of a control.

1.  During a test, you may want to check the status of a control against an expected value. One of the most common built-in action used for this scenario is [check control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-property), which captures the value of a specified property from a control then compares the value against an expected value. For this built-in action, you usually need to pass the state property into the property argument.
    -   For example, suppose you want to verify if the status value of the Radio2 radio button is checked.

        ![](/images/TA_Automation/Images/bia_check_control_property_aut_2.png)

    -   You can make a test script as follows:

        ![](/images/TA_Automation/Images/bia_check_control_property_pgm_2.png)

    -   If the verification succeeds, [check control property](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/control-element/check-control-property) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images/TA_Automation/Images/bia_check_control_property_res_2.png)

2.  Other built-in actions that can be used to check the status of controls are [check listbox checked](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-listbox-checked), which checks the state of a check box item in a list box, and [check status bar section state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/status-bar/check-status-bar-section-state), which checks the state of a status bar against an expected value.
    -   For example, suppose you want to verify if the status value of the Infant Seat \($10.0/day\)check box is checked.

        ![](/images/TA_Automation/Images/bia_check_listbox_checked_aut.png)

    -   You can make a test script as follows:

        ![](/images/TA_Automation/Images/bia_check_listbox_checked_pgm.png)

    -   If the verification succeeds, [check listbox checked](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/check-listbox-checked) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images/TA_Automation/Images/bia_check_listbox_checked_res.png)


TestArchitect provides several built-in actions to check the status of items such as [check tree node status](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-status), which checks the current status of a tree node and [check context menu item state](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/toolbar-menu-scrollbar/check-context-menu-item-state), which validates the current state of a given menu item on a context menu.

-   For example, suppose you want to verify the status of the **Standard**, **Compact** and **Toyota Prius** tree nodes.

    ![](/images/TA_Automation/Images/bia_check_tree_node_status_aut.png)

-   You can make a test script as follows:

    ![](/images/TA_Automation/Images/bia_check_tree_node_status_pgm.png)

-   If the verification succeeds, [check tree node status](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/tree-view/check-tree-node-status) reports a Passed message; otherwise, it reports a Failed message.

    ![](/images/TA_Automation/Images/bia_check_tree_node_status_res.png)





