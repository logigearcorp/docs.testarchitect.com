--- 
title: "Interface mapping"
linktitle: "Interface mapping"
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Interface_mapping_discussion.201401.html
---

Interface definitions in TestArchitect perform the function of interface mapping, which is used to insulate tests from changes to a target application's interface elements.Interface definitions map logical names, also known as TA names, to interface elements. TA names serve as user-friendly element identifiers.

Interfaces are assigned to projects just as test modules and actions are, and reside on a branch of the TestArchitect explorer tree:

![](/images/TA_Help/Images/Tree_with_interfaces02.png)

A TestArchitect interface consists of a set of modules known as interface entities that include information on windows and controls and how to identify them. These definitions allow you to assign logical names, or TA names, to both the windows and the controls within them. \(Note that, for the purposes of this discussion, references to windows and controls apply equally to web pages and HTML elements, respectively.\)

For each AUT window to which you must interface, you create an interface entity, which appears as a worksheet in the test editor. An interface entity serves two essential functions:

-   It maps the window to a logical TA name \(the name of the interface entity itself\) so that tests and actions can refer to the window by that TA name.
-   It acts as a container for interface elements. Each interface element within a given interface entity provides a mapping between a control of the window and a user-selected logical TA name.

**Parent topic:**[Lesson \#3: Working with interface definitions](/TA_Tutorials/Topics/Tutorial_Working_with_interface_definitions.html)

**Next topic:**[Creating interface definitions](/TA_Tutorials/Topics/Creating_interface_definitions.html)

**Related information**  


[Interface mapping](/TA_Help/Topics/Interface_def_mapping.201401.html)

[Interface entities and elements](/TA_Help/Topics/Interface_entities_and_elements.html)

