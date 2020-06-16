--- 
title: "Interface mapping"
linktitle: "Interface mapping"
description: "Interface mapping identifies elements of an interface in an application under test"
weight: 1
aliases: 
    - /TA_Help/Topics/Interface_def_mapping.201401.html
keywords: "interfaces, mapping, entities, regular expressions, interface mapping"
---

Interface mapping identifies elements of an interface in an application under test

A test automation tool must, by its nature, interact with the user interface \(UI\) of the application under test. But UI elements – that is, the windows, menu items, HTML buttons, etc. of the AUT – don't always remain constant. From one application version to the next, a UI element's name, or position, or any other property that the test automation tool may rely on to find it, may change. Hence direct references to windows and controls within tests can easily end up breaking the test. For example, if a button labeled **OK** is renamed **Submit**, any hard-coded references to a button with label property = "OK", suddenly break.

To avoid the errors and maintenance headaches that such changes can bring, TestArchitect projects employ interface definitions, more simply known as interfaces. Interfaces form a layer that sits between the test and the AUT, insulating the test from AUT changes.

Interfaces are assigned to projects just as test modules and actions are, and reside on a branch of the TestArchitect explorer tree:

![](/images/TA_Help/Images/Tree_with_interfaces02.png)

A TestArchitect interface consists of a set of modules known as interface entities that include information on windows and controls and how to identify them. These definitions allow you to assign logical names, or TA names, to both the windows and the controls within them. \(Note that, for the purposes of this discussion, references to windows and controls apply equally to web pages and HTML elements, respectively.\)

For each AUT window to which you must interface, you create an interface entity, which appears as a worksheet in the test editor. An interface entity serves two essential functions:

-   It maps the window to a logical TA name \(the name of the interface entity itself\) so that tests and actions can refer to the window by that TA name.
-   It acts as a container for interface elements. Each interface element within a given interface entity provides a mapping between a control of the window and a user-selected logical TA name.

To sum up TestArchitect's interfacing structure: A TestArchitect project contains one **Interfaces** node, which can house one or multiple interfaces. \(Typically, a separate interface might be created for each application in the project.\) Each interface, in turn, might have multiple interface entities, each of which would represent a single window, dialog box, or web page. And each interface entity would typically have multiple interface elements, each mapped to a specific control or HTML element.

The following figure illustrates the role of interface definitions in a test, one which simply writes a name into a **user name** field of a login window. Since a project may include more than one interface, the first line establishes that the Car Rental interface is the one to be used.

The Car Rental interface contains several interface entities. \(Three are displayed in the figure, though only one is used by the test\). Each maps a TA name to a window of the AUT. The enter action of the second action line calls up the interface entity with TA name of **login** which, as depicted, is assigned to the window Car Rental-Login. This interface entity contains a number of interface elements, each of which represents a control – such as a label, textbox, or button – on the AUT's login window. The control which the enter action must access is the one with TA name = **user name**. As shown, this TA name is mapped to the upper textbox control in the Car Rental-Login window.

![](/images/TA_Tutorials/Images/tut.Interface_Defs.Mapping_Concept.simplified.numbered.png)

Hence the entire process of identifying the target control that the enter action must write to involves these steps:

1.  The use interface action specifies the interface \(Car Rental\) to be used for all subsequent actions. This establishes the set of usable interface entities.
2.  The enter action's window argument specifies a TA name of **login**. This establishes a\), that the target AUT window is Car Rental-Login and b\), that the mapping for the target control is to be found on the login interface entity.
3.  This action line's control argument specifies that the target control is the one mapped to TA name **user name**. Hence this interface element is looked up in the login interface entity, and the appropriate textbox control on the Car Rental-Login window is determined.



