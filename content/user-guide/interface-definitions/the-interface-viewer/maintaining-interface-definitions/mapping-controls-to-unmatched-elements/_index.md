--- 
title: "Mapping controls to unmatched elements"
linktitle: "Mapping controls to unmatched elements"
description: "Interface elements identify controls in an application window. It is possible, often as a result of an application change, for an interface element to lose its mapping to its associated control. We call this an &#34;unmatched&#34; element, and the cause is generally a change in one or more property values of the control. When this occurs, you must remap the control to the unmatched element."
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_maintaining_mapping_controls.html
keywords: "interface viewer, mapping controls, unmatched elements, viewer, mapping, controls to unmatched elements, unmatched elements, mapping to controls"
---

Interface elements identify controls in an application window. It is possible, often as a result of an application change, for an interface element to lose its mapping to its associated control. We call this an "unmatched" element, and the cause is generally a change in one or more property values of the control. When this occurs, you must remap the control to the unmatched element.

The Interface Viewer offers a convenient way to remap unmatched controls:

1.  Launch the [Interface Viewer](/TA_Help/Topics/Interface_def_Viewer_Starting.html).

2.  Map an unmatched control by performing the following steps:

    1.  In the Interface Elements panel, select an unmatched interface element. Unmatched elements are indicated with a red crossed circle ![](/images/TA_Help/Images/ug_interface_definition14.png).

    2.  In the UI Explorer tree, select that control which is to be remapped to the selected interface element.

        ![](/images/TA_Help/Images/dlg.Interface_Viewer_unmatched_mapping.png)

    3.  From the Viewer's toolbar, click **Map to unmatched element** ![](/images/TA_Help/Images/btn_match_element.png).

        **Fastpath:** Alternatively,

        -   right-click the selection, and then either select **Map to Unmatched Element**, or
        -   select **Tools** \> **Map Entity/Element** in the main menu.

The UI Explorer and Interface Elements panels reflect the new mapping for the control.

![](/images/TA_Help/Images/dlg.Interface_Viewer_new_mapping.png)

{{<tip>}} If you prefer to remove an unmatched interface element, rather than remap a control to it, simply edit the interface entity that contains the element and delete it.


