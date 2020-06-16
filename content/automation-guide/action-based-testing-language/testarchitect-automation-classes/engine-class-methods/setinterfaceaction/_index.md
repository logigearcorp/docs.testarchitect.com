--- 
title: "SetInterfaceAction"
linktitle: "SetInterfaceAction"
description: "Syntax integer SetInterfaceAction(string interface, string classname, string actionname, string action) Description Set an action for a class of elements in the interface (for example &#34;enter&#34;, to ..."
weight: 81
aliases: 
    - /TA_Automation/Topics/abtf_SetInterfaceAction.html
keywords: "ABT Library Functions, SetInterfaceAction, SetInterfaceAction (ABT library function)"
---

## Syntax

`integer SetInterfaceAction(string interface, string classname, string actionname, string action)`

## Description

Set an action for a class of elements in the interface \(for example "enter", to enter a value in a text box or select an item in a list box\)

## Parameters

-   **interface**

    Name of the interface to which the element belongs.

-   **classname**

    Name of an interface element class \(like "edit" or "button"\).

-   **actionname**

    Logical name of an action \(like "enter" or "click"\).

-   **action**

    The low level action \(like "push button" or "enter edit"\).


## Return Value

The low level action is defined with respect to the logical action for the element class. If the interface or classes are not defined, the function will fail, a diagnostic will be issued, and an empty string will be returned.

## Notes

-   This function is analogous to the built-in action "interface element class action".




