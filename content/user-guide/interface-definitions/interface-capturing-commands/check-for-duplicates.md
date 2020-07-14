--- 
title: "Check for duplicates"
linktitle: "Check for duplicates"
description: "An interface entity consists of a number of interface elements, each of which uses one or more property-value pairs to identify a control of an application window."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_client_interface_tool_duplicate.html
keywords: "interfaces, duplicate checks, entities, checks, duplicate entities, interfaces"
---

An interface entity consists of a number of interface elements, each of which uses one or more property-value pairs to identify a control of an application window. When a TestArchitect automation is running and is requested to interface with a window, the first thing it does is to take inventory of all the various controls of that window, creating a temporary database consisting of each one and its properties.

When an action then references a control in the given window via its TA name, that name is used to locate the corresponding interface element. The property-value pairs of that interface element are then used to look up the correct control in the temporary database. It is essential that there be no ambiguity in the identification of each control – that is, the set of property-value pairs that an interface element uses must uniquely identify a single control. If that is not the case during playback, the automation is unable to determine the right control when it's referenced, resulting in an error message.

When you create an interface entity with the Interface Viewer, the viewer endeavors to provide you with default identifying properties that are unique for each control. You can, of course, override the Viewer's suggested properties and choose your own for each interface element. But you cannot always be certain that the chosen, or even default, property-value pairs provide unique identification.

The **Check control unique** ![](/images/TA_Help/Images/btn.check_control_unique.png) button performs a validity check on your interface entity to ensure that each interface element does indeed identify no more than one control.

{{<note>}} **Check control unique** only ensures against ambiguous control identifiers in an interface element; it does not check to make sure that at least one control does indeed exist which matches the specified property-value pair\(s\). However, the **Highlight** ![](/images/TA_Help/Images/btn.highlight.png) button, discussed below, does provide this functionality.

To validate an interface entity with **Check control unique**:

1.  In TestArchitect Client, open your interface entity and make sure it's in the active tab \(that is, "on top"\) of the main panel. If you edit the interface entity, be sure to save it.
2.  Launch the application under test, if not already running, and navigate to the window matching the interface entity;
3.  Click the **Check control unique** ![](/images/TA_Help/Images/btn.check_control_unique.png) button. This validation check processes each interface element, reading its set of property-value argument\(s\), then scans the application window to determine whether more than one control exists for which the set of property-value pair\(s\) is the same. If it does find this to be the case, it presents a message box, reporting the problematic interface elements. For example:

![](/images/TA_Help/Images/ug_interface_definition36.png)



