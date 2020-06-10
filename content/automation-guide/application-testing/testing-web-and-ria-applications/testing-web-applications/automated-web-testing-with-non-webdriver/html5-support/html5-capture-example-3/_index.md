--- 
title: "HTML5 Capture - Example \\# 3"
linktitle: "HTML5 Capture - Example \\# 3"
weight: 4
aliases: 
    - /TA_Automation/Topics/HTML5_automation_example_3.html
---

An illustration of how existing built-in actions support HTML5 tags \(controls\).

You can use the [get control property](/TA_Automation/Topics/bia_get_control_property.html) and [check value](/TA_Automation/Topics/bia_check_value.html) actions to verify the version attribute of an SVG graphic.

![](/images//Images/html5_get_control_property.png)

1.  In the test editor, type an action line using [get control property](/TA_Automation/Topics/bia_get_control_property.html) to retrieve the version of a control's property:

    ![](/images//Images/html5_bia_get_control_property.png)

2.  Create another action line using [check value](/TA_Automation/Topics/bia_check_value.html) to check the content of the version variable against the expected value of 1.1.

    ![](/images//Images/html5_bia_check_value.png)

3.  Execute the test by pressing F9.

    The generated test result reports a passed message.

    ![](/images//Images/html5_result.png)


**Parent topic:**[HTML5 support](/TA_Automation/Topics/HTML5_automation.html)

**Previous topic:**[HTML5 Capture - Example \# 2](/TA_Automation/Topics/HTML5_automation_example_2.html)

