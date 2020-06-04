--- 
title: "Existence checks"
linktitle: "Existence checks"
weight: 1
aliases: 
    - /TA_Automation/Topics/Working_with_checks_existence.html
---

How to work with checks that verify the existence of windows, controls, or items in an AUT.

1.  Windows which represent desktop application windows or web pages in browsers.
    -   When testing an application, you may need to verify that after you start up the Car Rental sample application, the Login window appears. To accomplish this you can use the [check window exists](bia_check_window_exists.html) action, which checks for the existence of a specified window.

        ![](/images//Images/bia_check_window_exists_aut.png)

    -   You can create a test procedure as follows:

        ![](/images//Images/bia_check_window_exists_pgm.png)

    -   If the verification succeeds, the [check window exists](bia_check_window_exists.html) action reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_window_exists_res.png)

2.  Controls that denote GUI controls \(for example, a button, a list box, a list view, or a table\) or HTML elements.
    -   Suppose you want to check the existence of the Available Car text box in the View Cars window before making the decision to rent a car. You can use the [check control exists](bia_check_control_exists.html) action to check for the existence of a specified control.

        ![](/images//Images/bia_check_control_exists_aut.png)

    -   You can create a test procedure as follows:

        ![](/images//Images/bia_check_control_exists_pgm.png)

    -   If the verification succeeds, the [check control exists](bia_check_control_exists.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_control_exists_res.png)

3.  Items can be menu items, tree nodes, table cells, list/combo box items, and more.
    -   If during testing you need to verify if a **Toyota Prius** node exists, you can use the [check tree node exists](bia_check_tree_node_exists.html) action to check for the existence of a specific tree node.

        ![](/images//Images/bia_check_tree_node_exists_aut.png)

    -   You can create a test procedure as follows:

        ![](/images//Images/bia_check_tree_node_exists_pgm.png)

    -   If the verification succeeds, the [check tree node exists](bia_check_tree_node_exists.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_tree_node_exists_res.png)

    -   Other built-in actions that can be used to verify the existence of items are [check item exists](bia_check_item_exists.html), [check scrollbar exists](bia_check_scrollbar_exists.html), and [check selected items](bia_check_selected_items.html).

**Parent topic:**[Working with checks](/TA_Automation/Topics/Automation_model_working_with_checks.html)

**Next topic:**[Text-display checks](/TA_Automation/Topics/Working_with_checks_text_display.html)

