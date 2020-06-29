--- 
title: "Interface definitions"
linktitle: "Interface definitions"
description: "An automated test execution needs to interact with the application under test through one or more interfaces."
weight: 3
aliases: 
    - /TA_Help/Topics/ABT_interface_def.html
keywords: "Action Based Testing, interface definitions, ABT"
---

An automated test execution needs to interact with the application under test through one or more interfaces.

In most cases the interaction is with user-oriented interfaces, like dialog boxes or web pages. In many cases, though, part of the test, or even the entire test, must interact with the AUT through other means, such as messages, API calls or SQL statements. In Action Based Testing, all interface interaction is be supported through the use of [interface definitions](/user-guide/interface-definitions/).

Interface definitions are organized as follows:

-   Each project can define one or more interfaces \(many projects have only one\).
-   For each interface, a set of interface entities is defined, which can be grouped into folders for organizational purposes.
-   Each interface entity contains a set of interface elements.

An interface is usually related to a platform, such as Java, .Net or Web. An interface entity is typically specific to a screen or a web page. An interface element is usually a control or HTML element.

In the non-UI interfaces, interface definitions can also be applied. For a message protocol, an interface entities can depict a message, while the interface element can describe a message field.

The interface definition in essence assigns a logical name for a physical interface item. Properties of the interface item, like the title of a window or the caption of a button, serve to allow the automation to map the logical name to the actual item during test execution. For example, a dialog box with a title of Application Error might be given the logical name **error message**. The title, in this case, is the property used to identify the item.

The maintainability of your automation can be greatly enhanced by designing the interface definitions well. In particular, pay attention to:

-   Using meaningful logical names that are unlikely to lose their meaningfulness between versions of the system under test \(hence, do not use **text box 5**, but **last name** to identify a text box\).
-   Using unambiguous identifying properties that are not too likely to change between versions \(or builds\) of the application under test. For example, do not use position properties \(top, left\), but instead use titleor caption, which generally \(though not always\) remain constant across versions and builds.




