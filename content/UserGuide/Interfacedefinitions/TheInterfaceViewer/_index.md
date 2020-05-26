--- 
title: "The Interface Viewer"
linktitle: "The Interface Viewer"
weight: 7
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer.html
---
# The Interface Viewer {#Interface_viewer .concept}

The Interface Viewer is a powerful support tool that allows you to capture and save all or parts of an interface definition, and to explore the elements of an AUT's interface.

In order to write test modules and implement actions that interact with the GUI of the AUT, an automation engineer must first capture information into an interface definition, which is a collection of maps that allow the automation to find windows and controls. As we learned previously, those maps are, in TestArchitect terms, interface entities and interface elements.

The Interface Viewer is a support tool to capture and save all or parts of the interface definition. \(See also the [tutorial section on using the Interface Viewer](../../TA_Tutorials/Topics/Tutorial_Working_with_interface_definitions.html) for examples on how to use it\). It does this by examining an AUT's user interface and then generating the contents of interface entities.

Capturing and identifying elements of an interface can be performed, to a certain extent, via the TestArchitect client's own [interface](Interface_def_client_interface_tool.html). In that regard, it should be noted that the Interface Viewer offers two primary advantages:

-   the ability to capture and map all the elements of a given window at once; and
-   the ability to view information on the interface: windows, controls, element, interface entities, interface elements, and all their various properties and property values.

1.  [Starting the Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_Starting.html)  
Launching the Interface Viewer tool.
2.  [Interpreting the Interface Viewer](../../TA_Help/Topics/Interface_def_Viewer_reading.html)  
Understanding the information displayed in the Interface Viewer's panels.
3.  [Capturing interface definitions](../../TA_Help/Topics/Interface_def_capturing.html)  
Capturing interface definitions means writing out interface entities with a\) mappings of controls to TA names, and b\) mapping of windows to interface entities.
4.  [Naming interface elements](../../TA_Help/Topics/Interface_def_naming.html)  
Choosing good logical names is an essential step in the design of your automation.
5.  [Maintaining interface definitions](../../TA_Help/Topics/Interface_def_Viewer_maintaining.html)  
As an application under test evolves over time, its windows and dialog boxes also change; therefore the TestArchitect interface entities associated with them must be updated.
6.  [Identifying interface elements and controls](../../TA_Help/Topics/Interface_def_Viewer_identifying.html)  
The Interface Viewer provides a few means of assisting you in relating nodes on the GUI Element Tree to actual physical items, and vice-versa.
7.  [Interface Viewer transient controls capture](../../TA_Help/Topics/ug_Interface_viewer_offline_mode.html)  
The Interface Viewer retains captured UI controls and their properties even after they are no longer available from the AUT.
8.  [Other functionalities](../../TA_Help/Topics/Interface_def_Viewer_other_functionalities.html)  
Save, Refresh, Open vs. Active, HTML tags filter, Copy Value, Class Mapping, Show Invisible Windows, Show Invisible Controls, Show All Processes functionalities are discussed in this section.

**Parent topic:**[Interface definitions](../../TA_Help/Topics/Interface_def.html)

**Previous topic:**[Interface capturing commands](../../TA_Help/Topics/Interface_def_client_interface_tool.html)

**Next topic:**[Addressing windows, controls of Multiple Document Interface applications](../../TA_Help/Topics/ug_MDI.html)

**Related information**  


[Interface Viewer](../../TA_Tutorials/Topics/Interface_Viewer.html)

