--- 
title: "Maintaining interface definitions"
linktitle: "Maintaining interface definitions"
weight: 5
aliases: 
    - /TA_Help/Topics/Interface_def_Viewer_maintaining.html
---

As an application under test evolves over time, its windows and dialog boxes also change; therefore the TestArchitect interface entities associated with them must be updated.

Typically, the need for maintenance is discovered when your automation fails to run successfully due to changes in the underlying application.

The Interface Viewer allows you to maintain existing interface entities by reconciling the differences between the contents of the interface entity and the controls that currently exist in the application.

**Tip:** It may often be the case that you will need to update an interface entity to accommodate changes to an application, while still requiring the use of the original interface entity for testing the old version of the application. Such might be the case if, for example, an application was available in two or more language versions. For scenarios such as this, please refer to [Variations](/TA_Help/Topics/Variations.html) to learn how to conveniently maintain multiple definitions of a given interface entity.

To update an interface entity:

1.  Ensure that the correct window of the application is open.
2.  Open the interface entity in TestArchitect, ensuring that its tab is currently the active one.
3.  Launch or refresh the Interface Viewer. The Interface Viewer attempts to synchronize the interface entity and the application window.

The degree of synchronization between the interface entity and the application is determined by examining both the UI explorer and the Interface Elements panels of the Interface Viewer:

-   In the UI explorer panel, those controls of the application for which interface elements exist are denoted with a green check mark ![](/images//Images/ug_interface_definition13.png), while those having no mapping appear with the red double angle brackets ![](/images//Images/ug_interface_definition19.png).
-   The Interface Elements panel, by contrast, presents us with the status of each interface element of the open interface entity. Synced elements are accompanied by the green check mark. If any missing elements exist, they are denoted with a red circle with bar icon ![](/images//Images/ug_interface_definition14.png). \(Missing elements are interface elements pointing to controls that do not exist, perhaps as the result of a change in the application under test. For example, given this interface element:

    ![](/images//Images/ug_interface_definition20.png)

    which maps the ta name login-button to the AUT button with `caption = Login`, if a new version of the application changes the button's caption to Sign in, this interface element is considered missing, at least until it is updated with a new value for the caption argument.\)


1.  [Mapping controls to unmatched elements](/TA_Help/Topics/Interface_def_Viewer_maintaining_mapping_controls.html)  
Interface elements identify controls in an application window. It is possible, often as a result of an application change, for an interface element to lose its mapping to its associated control. We call this an "unmatched" element, and the cause is generally a change in one or more property values of the control. When this occurs, you must remap the control to the unmatched element.

**Parent topic:**[The Interface Viewer](/TA_Help/Topics/Interface_def_Viewer.html)

**Previous topic:**[Naming interface elements](/TA_Help/Topics/Interface_def_naming.html)

**Next topic:**[Identifying interface elements and controls](/TA_Help/Topics/Interface_def_Viewer_identifying.html)

