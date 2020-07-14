--- 
title: "Using point-to-identify from the context of an interface element"
linktitle: "Using point-to-identify from the context of an interface element"
description: "Client-side point-to-identify is a handy tool to allow you to modify interface elements, whether to remap a TA name to a new control, or to select a new set of property-value identifiers for it. In these cases, you would use point-to-identify in a contextual mode, in that an existing interface entity is used as a reference point."
weight: 2
aliases: 
    - /TA_Help/Topics/Interface_def_client_interface_tool_identify_using_identify.html
keywords: "identifying, contextual use, interface elements"
---

Client-side **point-to-identify** is a handy tool to allow you to modify interface elements, whether to remap a TA name to a new control, or to select a new set of property-value identifiers for it. In these cases, you would use **point-to-identify** in a contextual mode, in that an existing interface entity is used as a reference point.

Ensure that the AUT is running, that it is displaying the application window holding the control\(s\) of interest, and that an interface entity representing that window already exists.

1.  In TestArchitect Client, do one of the following:

    -   in the editor, open the appropriate interface entity, and then select the row of an interface element of interest; or
    -   in the TestArchitect explorer tree, expand the node of an interface entity and select the element node.
2.  On the TA toolbar, click the **Identify** ![](/images/TA_Help/Images/identify_btn.png) button.

    Point-to-identify mode is launched.

3.  Navigate to the application window and click the control of your choice.

    {{<tip>}} To capture UI child elements belonging to a container class, see [Container Class](/user-guide/interface-definitions/container-classes/).

    The Element definition dialog box appears. Unlike the [non-contextual](/user-guide/interface-definitions/interface-capturing-commands/point-to-identify-tool/non-contextual-use-of-client-side-point-to-identify) case, if the selected interface entity's definition matches the application window, it is displayed in the **Interface Entity** text box at top; the **TA Name** box contains the TA name of the selected interface element. The node of the identified control is displayed at the end of its container hierarchy branch, and any controls on that branch that are already mapped within the interface entity are displayed with a green check mark ![](/images/TA_Help/Images/ug_interface_definition45.png). If the identified control was not already mapped to this TA name, clicking **Save** at this point would cause that mapping \(or remapping\) to take place.

    {{<tip>}} You also have the option of overriding the current selection of property-value identifiers \(in the Properties panel at right\), and of choosing a higher-level container node to be mapped to the specified TA name.

4.  After making your changes, click **Save**.


The selected interface entity is updated with your modified interface element.




