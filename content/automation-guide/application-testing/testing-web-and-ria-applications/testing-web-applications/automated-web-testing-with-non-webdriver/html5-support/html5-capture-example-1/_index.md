--- 
title: 'HTML5 Capture - Example # 1'
slug: 'html5-capture-example-1'
linktitle: 'HTML5 Capture - Example # 1'
description: "An example showing how the Element Identification dialog box can be used to capture HTML5 tags (controls)."
weight: 2
aliases: 
    - /TA_Automation/Topics/HTML5_automation_example_1.html
keywords: "HTML5, automation, Element Identification, example #1, Element Identification, HTML5 automation, example #1"
---

An example showing how the Element Identification dialog box can be used to capture HTML5 tags \(controls\).

The Element Identification dialog box can capture HTML5 controls. The following example shows how to capture an SVG tag \(control\) in an AUT using the [Element Identification dialog](/TA_Help/Topics/Interface_def_client_interface_tool_identify.html):

![](/images/TA_Automation/Images/html5_capture_polygon.png)

1.  Create an interface. \(see [Creating an interface](/TA_Help/Topics/Interface_def_create_interface.html).\)

    The new interface is added to the project under the **Interfaces** node.

2.  Create an interface entity. \(see [Creating interface entities](/TA_Help/Topics/Interface_def_Adding.html).\)

    A new interface entity worksheet opens in the test editor, ready for your input.

3.  Click the **Identify** button ![](/images/TA_Automation/Images/identify_btn.png) on the toolbar.

    The Interface Viewer is minimized and goes into Identify mode. Your cursor changes into a pointing-hand icon.

4.  Navigate to the polygon on the AUT. As you pass your cursor over the polygon, an orange, rectangular frame appears around the polygon, along with a screentip indicating the TA class of the text box, TAClass: SVG.

    ![](/images/TA_Automation/Images/html5_identify_tooltip.png)

5.  Click into the polygon on the AUT.

    The Element definition dialog box appears, displaying the graphic's **Location** in the Hierarchy mode of the UI explorer, and a **Properties** panel. This explorer offers a hierarchical view of a single branch segment that runs from the root to the selected control, in this case the text box called polygon.

    ![](/images/TA_Automation/Images/html5_element_definition.png)

6.  Click **Save**.

    A new interface element for polygon control is now included in the interface entity.





