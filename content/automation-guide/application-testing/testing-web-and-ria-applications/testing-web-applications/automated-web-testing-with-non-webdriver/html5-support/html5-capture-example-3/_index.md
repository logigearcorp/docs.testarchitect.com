--- 
title: "HTML5 Capture - Example # 3"
slug: 'html5-capture-example-3'
linktitle: "HTML5 Capture - Example # 3"
slug: 'html5-capture-example-3'
description: "An illustration of how existing built-in actions support HTML5 tags (controls)."
weight: 4
aliases: 
    - /TA_Automation/Topics/HTML5_automation_example_3.html
keywords: "HTML5, automation, built-in actions, example #3, built-in actions, HTML5 automation, example #3"
---

An illustration of how existing built-in actions support HTML5 tags \(controls\).

You can use the [get control property](/TA_Automation/Topics/bia_get_control_property.html) and [check value](/TA_Automation/Topics/bia_check_value.html) actions to verify the version attribute of an SVG graphic.

![](/images/TA_Automation/Images/html5_get_control_property.png)

1.  In the test editor, type an action line using [get control property](/TA_Automation/Topics/bia_get_control_property.html) to retrieve the version of a control's property:

    ![](/images/TA_Automation/Images/html5_bia_get_control_property.png)

2.  Create another action line using [check value](/TA_Automation/Topics/bia_check_value.html) to check the content of the version variable against the expected value of 1.1.

    ![](/images/TA_Automation/Images/html5_bia_check_value.png)

3.  Execute the test by pressing F9.

    The generated test result reports a passed message.

    ![](/images/TA_Automation/Images/html5_result.png)




