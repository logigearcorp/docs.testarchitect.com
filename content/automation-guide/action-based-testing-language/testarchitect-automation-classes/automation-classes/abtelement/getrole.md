--- 
title: "GetRole"
linktitle: "GetRole"
description: "Syntax string GetRole() Description Retrieve the role of the control or HTML element. Return Value A string value specifying the retrieved role value. Note:"
weight: 17
aliases: 
    - /TA_Automation/Topics/abt_GetRole_1.html
keywords: "methods of abt, GetRole, GetRole (AbtElement), AbtElement, getrole, abtelement getrole, role of control, role of HTML element"
---

## Syntax

`string GetRole()`

## Description  

Retrieve the [role](/user-guide/interface-definitions/class-mapping/mapping-unknown-controls/mapping-unknown-controls-to-a-known-class#choice.role) of the control or HTML element.

## Return Value  

A string value specifying the retrieved role value.

{{<note>}}

-   Role: \(Uneditable field\)

    -   For WPF, Role is the role property of the selected control - for example, `button`.
    -   For Win32, Role is the win type property of the selected control - for example, ``button``.
    -   For iOS, Android this field is disabled.
    -   For Silverlight, Role is the class name property of the selected control - for example, `Button`.
    -   For WinForms, Role is derived from the object’s class name. For instance, for the full class name of System.Windows.Forms.Button, the short name Button is displayed in the **Role** field.
    {{<tip>}} If the control role is unnecessary for the class mapping \(because you want to apply the mapping to *all* controls of the specified native class\), select the **Ignore** check box.





