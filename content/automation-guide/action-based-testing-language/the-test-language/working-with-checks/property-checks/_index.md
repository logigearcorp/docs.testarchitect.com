--- 
title: "Property checks"
linktitle: "Property checks"
description: "How to make property checks of specified windows or controls."
weight: 4
aliases: 
    - /TA_Automation/Topics/Working_with_checks_property.html
keywords: "checks, property"
---

How to make property checks of specified windows or controls.

Each window and control has a set of properties along with values for those properties. Property sets vary depending on the class of object involved. A button, for example, has a different set of properties than a window. The most common built-in actions used for property checks are [check window property](/TA_Automation/Topics/bia_check_window_property.html), which checks the value of a specified property of a window against an expected value, and [check control property](/TA_Automation/Topics/bia_check_control_property.html), which captures the value of a specified property from a control and then compares it against an expected value.

-   For example, suppose you want to verify the title, maximized or visible properties of the Login window.

    ![](/images/TA_Automation/Images/bia_check_window_property_aut.png)

-   You can make a test script as follows:

    ![](/images/TA_Automation/Images/bia_check_window_property_pgm.png)

-   If the verification succeeds, [check window property](/TA_Automation/Topics/bia_check_window_property.html) reports a Passed message; otherwise, it reports a Failed message.

    ![](/images/TA_Automation/Images/bia_check_window_property_res.png)

-   For example, suppose you want to check the value and raw class properties of the available cars text box.

    ![](/images/TA_Automation/Images/bia_check_control_property_aut.png)

-   You can make a test script as follows:

    ![](/images/TA_Automation/Images/bia_check_control_property_pgm.png)

-   If the verification succeeds, the [check control property](/TA_Automation/Topics/bia_check_control_property.html) reports a Passed message; otherwise, it reports a Failed message.

    ![](/images/TA_Automation/Images/bia_check_control_property_res.png)





