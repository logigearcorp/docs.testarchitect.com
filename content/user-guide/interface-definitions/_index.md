--- 
title: "Interface definitions"
linktitle: "Interface definitions"
description: "The process of how to capture an application's interface information, how to select only those parts of it that you require for your project, and how to rename the elements of the interface to make them easier to work with."
weight: 7
aliases: 
    - /TA_Help/Topics/Interface_def.html
keywords: "interfaces, definitions"
---

The process of how to capture an application's interface information, how to select only those parts of it that you require for your project, and how to rename the elements of the interface to make them easier to work with.

Automated test systems need to interface with the application being tested to perform their operations and verifications. After completing the design of your tests, you need to capture the various windows, controls, HTML elements, etc., that comprise the interface of the application to be tested. These are then used in your development of action definitions.

1.  [Interface mapping](/user-guide/interface-definitions/interface-mapping)  
Interface mapping identifies elements of an interface in an application under test
2.  [Interface entities and elements](/user-guide/interface-definitions/interface-entities-and-elements)  
TestArchitect interfaces are implemented with interface entities and interface elements. These project items identify the windows and controls of an application's user interface, and assign TA names to them.
3.  [Creating an interface](/user-guide/interface-definitions/creating-an-interface)  
An interface in TestArchitect is essentially a container for a set of interface entities and elements, which perform the actual mappings.
4.  [Setting a default interface](/user-guide/interface-definitions/setting-a-default-interface)  
The default interface in a project is the one that is in effect during a test if no other interface has been specified for the test. \(Typically, however, a test initializes itself with the use interface built-in action to specify the interface to be used\).
5.  [Creating interface entities](/user-guide/interface-definitions/creating-interface-entities)  
How to create an interface entity, which is used to represent such AUT elements as desktop windows, browser windows, and dialog boxes.
6.  [Interface capturing commands](/user-guide/interface-definitions/interface-capturing-commands/)  
In addition to the Interface Viewer, TestArchitect offers some handy tools for working with interfaces, or examining the elements of an AUT's user interface.
7.  [The Interface Viewer](/user-guide/interface-definitions/the-interface-viewer/)  
The Interface Viewer is a powerful support tool that allows you to capture and save all or parts of an interface definition, and to explore the elements of an AUT's interface.
8.  [Addressing windows, controls of Multiple Document Interface applications](/user-guide/interface-definitions/addressing-windows-controls-of-mdi-apps/)  
This topic explains how TestArchitect significantly enhances the UI matching process performance for Multiple Document Interface \(MDI\) applications during test automation
9.  [Exporting an interface entity](/user-guide/interface-definitions/exporting-an-interface-entity)  
Interface entities can be exported to archive files \(.ZIP format\), which can be used as a backup or for re-importing.
10. [Importing an interface entity](/user-guide/interface-definitions/importing-an-interface-entity)  
You can import an interface entity into your project from one that has been saved to a .ZIP archive file.
11. [Class mapping](/user-guide/interface-definitions/class-mapping/)  
To address the complexity introduced by the variety of native control classes, TestArchitect introduces the concept of TA classes. TA classes represent a “common core” of control classes that TestArchitect's built-in actions and methods are designed to interface with. Class mapping is the process of relating the various control classes of each software platform to their corresponding TA classes.
12. [Control properties](/user-guide/interface-definitions/control-properties/)  
For each known class of control, TestArchitect uses internal mapping files to map its native properties to a set of TA properties.
13. [Dynamic identifiers](/user-guide/interface-definitions/dynamic-identifiers)  
 Dynamic identifiers allow the identification of controls and windows to be made under program control, rather than with interface definitions.
14. [Container classes](/user-guide/interface-definitions/container-classes/)  
Container classes are classes of UI controls that can contain other controls. Because the number of child controls that a container holds is potentially unlimited, such container classes present possible performance hits during test runs. To avoid such issues, TestArchitect offers the option of bypassing the recognition of container child controls.




