--- 
title: "Point-to-identify tool"
linktitle: "Point-to-identify tool"
description: "Point-to-identify tool allows you to quickly and conveniently map controls. From within TestArchitect Client, point-to-identify tool is activated by the Identify on the toolbar."
weight: 2
aliases: 
    - /TA_Help/Topics/Interface_def_client_interface_tool_identify.html
keywords: "mapping, identifying controls, identifying, controls, elements, interfaces, entities, Interface Viewer, Identify, Interface Viewer, Highlight"
---

Point-to-identify tool allows you to quickly and conveniently map controls. From within TestArchitect Client, point-to-identify tool is activated by the **Identify** ![](/images/TA_Help/Images/btn_Identify.png) on the toolbar.

While the **Identify** button is [also available in the Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_identify.html), using client-side point-to-identify is geared more towards interfacing “on the fly”. For example, you may be writing action lines for a new action or test module, and find yourself writing an action that interacts with a control that has not yet been given an interface definition. You can then just click **Identify** in TA to enter **point-to-identify** mode, select the new control to map it, and quickly get back to writing.

Aside from allowing you to quickly add an interface element for a new control, client-side **point-to-identify** is also useful for viewing the properties of an already-defined control, re-mapping a TA name, and modifying an interface element's property-value identifier argument\(s\).

Because client-side **point-to-identify** is geared towards letting you focus your attention on a single control and get in and out quickly, it does not invoke the Interface Viewer in response to your clicking on a control. Instead, it brings up the following Element definition dialog box, which focuses on a single control:

![](/images/TA_Help/Images/ug_interface_definition37.png)

Like the Interface Viewer, the Element definition dialog box features the UI Explorer panel and the Properties panel. Unlike the Interface Viewer, this UI explorer panel offers only a hierarchical view \(no class view\), and only that of the single branch segment that runs from the selected control up to the root.

If you have an interface entity open at the time, client-side **point-to-identify** can do the following:

-   Remap a given TA name to a new control.
    1.  Select the interface element in the open interface entity.
    2.  Click the **Identify** ![](/images/TA_Help/Images/btn_Identify.png) button from the TA toolbar.
    3.  Click the control you wish to remap the name to, and then click **Save**.

        **Tip:** When you click **Save**, the **Group Elements** check box determines the format of interface entity being written to. Selecting **Group Elements** tells TestArchitect to group all the interface elements in the file by their respective TA classes and properties, so that grouped elements all share the same headers. If you prefer that each interface entity have its own set of headers, clear the **Group Elements** check box before saving.

-   Work in either a [contextual](/TA_Help/Topics/Interface_def_client_interface_tool_identify_using_identify.html) or [non-contextual](/TA_Help/Topics/Interface_def_client_interface_tool_identify_non_contextual.html) manner. In the contextual case, the context can come from either a specified interface element, or a specified action argument \(for a window or control\), as explained in the following sections.

**Tip:** To capture UI child elements belonging to a container class, see [Container Class](/TA_Help/Topics/Interface_def_container_class.html).

1.  [Non-contextual use of client-side point-to-identify](/TA_Help/Topics/Interface_def_client_interface_tool_identify_non_contextual.html)  
You can use client-side **point-to-identify** in a non-contextual mode, meaning that you use it without the benefit of an existing interface entity as a reference. Use non-contextual **point-to-identify** to investigate a window or control's properties, or to generate a new interface element for a control.
2.  [Using point-to-identify from the context of an interface element](/TA_Help/Topics/Interface_def_client_interface_tool_identify_using_identify.html)  
Client-side **point-to-identify** is a handy tool to allow you to modify interface elements, whether to remap a TA name to a new control, or to select a new set of property-value identifiers for it. In these cases, you would use **point-to-identify** in a contextual mode, in that an existing interface entity is used as a reference point.
3.  [Naming actions or test modules on the fly](/TA_Help/Topics/Interface_def_client_interface_tool_identify_naming.html)  
You can use client-side **point-to-identify** to add a new interface element for a control, or even a new interface entity, without leaving the action or test module as you create your action lines.




**Related information**  


[Container classes](/TA_Help/Topics/Interface_def_container_class.html)

[Point-to-identify mode](/TA_Help/Topics/Interface_def_Viewer_identify.html)

