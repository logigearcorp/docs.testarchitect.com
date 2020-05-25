--- 
title: "Property checks"
linktitle: "Property checks"
aliases: 
    - /TA_Automation/Topics/Working_with_checks_property.html
---
# Property checks {#working_with_checks_property_check .concept}

How to make property checks of specified windows or controls.

Each window and control has a set of properties along with values for those properties. Property sets vary depending on the class of object involved. A button, for example, has a different set of properties than a window. The most common built-in actions used for property checks are [check window property](bia_check_window_property.html), which checks the value of a specified property of a window against an expected value, and [check control property](bia_check_control_property.html), which captures the value of a specified property from a control and then compares it against an expected value.

-   For example, suppose you want to verify the title, maximized or visible properties of the Login window.

    ![](../Images/bia_check_window_property_aut.png)

-   You can make a test script as follows:

    ![](../Images/bia_check_window_property_pgm.png)

-   If the verification succeeds, [check window property](bia_check_window_property.html) reports a Passed message; otherwise, it reports a Failed message.

    ![](../Images/bia_check_window_property_res.png)

-   For example, suppose you want to check the value and raw class properties of the available cars text box.

    ![](../Images/bia_check_control_property_aut.png)

-   You can make a test script as follows:

    ![](../Images/bia_check_control_property_pgm.png)

-   If the verification succeeds, the [check control property](bia_check_control_property.html) reports a Passed message; otherwise, it reports a Failed message.

    ![](../Images/bia_check_control_property_res.png)


**Parent topic:**[Working with checks](../../TA_Automation/Topics/Automation_model_working_with_checks.html)

**Previous topic:**[Status checks](../../TA_Automation/Topics/Working_with_checks_status.html)

**Next topic:**[Image checks](../../TA_Automation/Topics/Working_with_checks_picture.html)

