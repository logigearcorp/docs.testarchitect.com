--- 
title: "Syntax Notations"
linktitle: "Syntax Notations"
description: "Language independent syntax line notations are given for each method and property in formats resembling those that describe C and C++ API functions and methods."
weight: 1
aliases: 
    - /TA_Automation/Topics/abt_syntax_notations.html
keywords: 
---

Language independent syntax line notations are given for each method and property in formats resembling those that describe C and C++ API functions and methods.

-   Every method or property that has a return value is preceded by the type of that.
-   Related.
-   Every parameter is preceded by its type.
-   Properties are preceded by property.
-   Optional parameters are surrounded by brackets \[ and \]
-   If an optional parameter has a default value \(other than an empty string or zero\) this is specified with = followed by that default value.
-   The types are usually string , integer or Boolean , but in some cases also a more specific type like the name of a class.

For example, the syntax line for the OpenEntity method of the AbtEntity class looks like this:

`AbtEntity OpenEntity(string Entity, [Boolean Refresh], [integer Seconds = -1])`

This is similar to a Visual Basic declaration like:

`Function OpenEntity(Entity As String, Optional Refresh As Boolean, Optional Seconds As Long = -1) As AbtEntity`

This means that the method OpenEntity takes a minimum of one and maximum of three parameters. The respective types of the parameters are string, Boolean and integer \(32 bits; in Visual Basic 6 this is the type Long , not Integer \).

The default value for Seconds is -1, in this case meaning not specified. For the Refresh parameter no default value is given \(in the case of a Boolean parameter this means a default value of False\).

The return value is an object of the class AbtEntity.

If an argument describes a menu choice, its value can consist of multiple items, separated by `->` . For example, in the Windows Paint application, this argument could look like: `view->zoom->large size`. This means select the item **zoom** in the **view**, which in turn brings up a submenu of which the ITEM **large size** is to be selected.

{{<note>}} TestArchitect ignores the following when interpreting a menu selection argument:

-   case \(upper vs. lower\)
-   `&` characters \(which denote accelerator keys in Windows menus\)
-   `...` \(ellipsis\) or `"` \(quote\)
-   Short-cut keys that are sometimes displayed as part of a menu item caption.

To illustrate this with the example of the menu selection in Paint, the menu item text above will select:

-   The case of the letters is ignored, so are the underlined accelerator keys \(like V in **View**\) and the short key information \(in this case Ctrl+PgDn\)
-   When tree items are specified as argument, the following convention is used:
    -   Items at different levels of the tree are separated by **/**.
    -   Case of letters is ignored.



