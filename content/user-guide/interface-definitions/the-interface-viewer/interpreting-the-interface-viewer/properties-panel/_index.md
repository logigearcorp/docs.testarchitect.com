--- 
title: "Properties panel"
linktitle: "Properties panel"
description: "The Properties panel displays the properties and property values of the currently-selected window or control node in the UI Explorer panel."
weight: 2
aliases: 
    - /TA_Help/Topics/ug_Interface_properties_panel.html
keywords: 
---

The Properties panel displays the properties and property values of the currently-selected window or control node in the UI Explorer panel.

The Properties panel consists of two tabs: TA Properties and Native Properties. For purposes of interfacing, most users can rely on the TA properties of a control, and ignore the Native properties.

![](/images/TA_Help/Images/Properties_panel_interface_entities.png)

The term TA Properties may be a bit misleading. It should be understood that the property-value pairs under this panel are, for the most part, derived from the physical control itself. The concept of TA Properties has been developed to address the many varieties of software technologies that exist today. A control in one technology generally has a different set of properties from that of a similar control in another technology, but there is a great deal of overlap. Sometimes the difference between two properties is little more than one of naming. To address these disparate technologies, TestArchitect has a defined set of universal properties – TA Properties – and a system for translating the property-value pairs of each testable technology into this universal set.

You should be clear that the property-values pairs displayed in the Properties panel are taken from an actual physical object in an application, not from any interface entity. \(It is the next panel, the Interface Elements panel, that displays elements of an interface entity.\)

It is possible to edit the values of properties in the Properties pane, but do not be confused by this: it is not possible to change the actual properties of the physical controls, at least not this way. Editing property values here can only be of use when saving to an interface entity, as described later. Were you to change a value, and then refresh the display, you would find the original value reinstated.

For each mapped control, the check boxes next to each property determine which properties are used in the corresponding interface element when you save. For example, with the following properties checked for the given mapped control:

![](/images/TA_Help/Images/ug_interface_definition11.png)

The following would be generated as the interface element:

![](/images/TA_Help/Images/ug_interface_element.png)

Generation of interface elements is discussed in depth further on. For now, it is enough to note that the last two arguments of the interface entity are a direct result of the selected TA Properties in the Viewer.




