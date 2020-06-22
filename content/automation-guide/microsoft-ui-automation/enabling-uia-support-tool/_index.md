--- 
title: "Enabling UIA Support tool"
linktitle: "Enabling UIA Support tool"
description: "To support Microsoft UI Automation technology in TestArchitect, enable the UIA Support tool."
weight: 1
aliases: 
    - /TA_Automation/Topics/aut_UIA_activation.html
keywords: "UIA, activation, Microsoft UI Automation"
---

To support Microsoft UI Automation technology in TestArchitect, enable the UIA Support tool.

{{<restriction>}} The UIA Support tool is not available in the TestArchitect package for Linux and macOS operating systems.

It is assumed that you are familiar with the TestArchitect Interface Viewer and the concepts involved in creating an interface \(see [The Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html) for further information\).

To enable the UIA Support tool, perform the following:

1.  Start the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_Starting.html).

{{<note>}} Refer to [list of UIA supported controls](/TA_Automation/Topics/aut_UIA_controls.html). Note that, for a control that is not mentioned in this list, the UI Automation properties are not available.

2.  On the Interface Viewer's toolbar, click the **UIA technology** ![](/images/TA_Automation/Images/btn_UIA_technology.png) button.

    ![](/images/TA_Automation/Images/Interface_Viewer_UIA.png)

{{<note>}}

    -   With UIA technology enabled, the **Native Properties** tab of the Properties panel is unavailable.
    -   Which control's properties are retrieved by TestArchitect depends on the [UIA supported controls](/TA_Automation/Topics/aut_UIA_controls.html). All retrieved properties are displayed in the **TA Properties** tab. You can use these properties for capturing UI controls.

3.  The processes for mapping windows and UI controls to interface entities and interface elements, naming items using TA names, and saving interface definitions, are essentially the same as those described in [Capturing interface definitions](/TA_Help/Topics/Interface_def_capturing.html) and [Naming interface elements](/TA_Help/Topics/Interface_def_naming.html).

    Note that, with UIA technology enabled, the Interface Viewer writes an additional interface entity setting action to the interface entity when it is saved:

    ![](/images/TA_Automation/Images/interface_entity.UIA_directive.png)

    At run time, this directive informs the automation that UIA technology is used to identify controls.




