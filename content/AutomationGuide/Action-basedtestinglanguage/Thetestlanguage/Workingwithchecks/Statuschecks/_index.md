--- 
title: "Status checks"
linktitle: "Status checks"
weight: 3
aliases: 
    - /TA_Automation/Topics/Working_with_checks_status.html
---
# Status checks {#working_with_checks_text_status_check .concept}

How to implement test scripts that verify the status of a control.

TestArchitect offers various built-in actions that check the status of a control.

1.  During a test, you may want to check the status of a control against an expected value. One of the most common built-in action used for this scenario is [check control property](bia_check_control_property.html), which captures the value of a specified property from a control then compares the value against an expected value. For this built-in action, you usually need to pass the state property into the property argument.
    -   For example, suppose you want to verify if the status value of the Radio2 radio button is checked.

        ![](../Images/bia_check_control_property_aut_2.png)

    -   You can make a test script as follows:

        ![](../Images/bia_check_control_property_pgm_2.png)

    -   If the verification succeeds, [check control property](bia_check_control_property.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](../Images/bia_check_control_property_res_2.png)

2.  Other built-in actions that can be used to check the status of controls are [check listbox checked](bia_check_listbox_checked.html), which checks the state of a check box item in a list box, and [check status bar section state](bia_check_status_bar_section_state.html), which checks the state of a status bar against an expected value.
    -   For example, suppose you want to verify if the status value of the Infant Seat \($10.0/day\)check box is checked.

        ![](../Images/bia_check_listbox_checked_aut.png)

    -   You can make a test script as follows:

        ![](../Images/bia_check_listbox_checked_pgm.png)

    -   If the verification succeeds, [check listbox checked](bia_check_listbox_checked.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](../Images/bia_check_listbox_checked_res.png)


TestArchitect provides several built-in actions to check the status of items such as [check tree node status](bia_check_tree_node_status.html), which checks the current status of a tree node and [check context menu item state](bia_check_context_menu_item_state.html), which validates the current state of a given menu item on a context menu.

-   For example, suppose you want to verify the status of the **Standard**, **Compact** and **Toyota Prius** tree nodes.

    ![](../Images/bia_check_tree_node_status_aut.png)

-   You can make a test script as follows:

    ![](../Images/bia_check_tree_node_status_pgm.png)

-   If the verification succeeds, [check tree node status](bia_check_tree_node_status.html) reports a Passed message; otherwise, it reports a Failed message.

    ![](../Images/bia_check_tree_node_status_res.png)


**Parent topic:**[Working with checks](../../TA_Automation/Topics/Automation_model_working_with_checks.html)

**Previous topic:**[Text-display checks](../../TA_Automation/Topics/Working_with_checks_text_display.html)

**Next topic:**[Property checks](../../TA_Automation/Topics/Working_with_checks_property.html)

