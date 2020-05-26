--- 
title: "HTML5 Capture - Example \\# 3"
linktitle: "HTML5 Capture - Example \\# 3"
weight: 4
aliases: 
    - /TA_Automation/Topics/HTML5_automation_example_3.html
---
# HTML5 Capture - Example \# 3 {#html5_automation_Ex3 .task}

An illustration of how existing built-in actions support HTML5 tags \(controls\).

You can use the [get control property](bia_get_control_property.html) and [check value](bia_check_value.html) actions to verify the version attribute of an SVG graphic.

![](../Images/html5_get_control_property.png)

1.  In the test editor, type an action line using [get control property](bia_get_control_property.html) to retrieve the version of a control's property:

    ![](../Images/html5_bia_get_control_property.png)

2.  Create another action line using [check value](bia_check_value.html) to check the content of the version variable against the expected value of 1.1.

    ![](../Images/html5_bia_check_value.png)

3.  Execute the test by pressing F9.

    The generated test result reports a passed message.

    ![](../Images/html5_result.png)


**Parent topic:**[HTML5 support](../../TA_Automation/Topics/HTML5_automation.html)

**Previous topic:**[HTML5 Capture - Example \# 2](../../TA_Automation/Topics/HTML5_automation_example_2.html)

