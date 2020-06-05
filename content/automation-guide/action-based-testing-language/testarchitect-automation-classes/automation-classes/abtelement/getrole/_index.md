--- 
title: "GetRole"
linktitle: "GetRole"
weight: 17
aliases: 
    - /TA_Automation/Topics/abt_GetRole_1.html
---
keyword: [getrole, abtelement getrole, role of control, role of HTML element]
---

# GetRole

## Syntax

`string GetRole()`

## Description

Retrieve the [role](/TA_Help/Topics/Mapping_unknown_controls_to_known_class.html#choice.role) of the control or HTML element.

## Return Value

A string value specifying the retrieved role value.

**Note:**

-   Role: \(Uneditable field\)

    -   For WPF, Role is the role property of the selected control - for example, `button`.
    -   For Win32, Role is the win type property of the selected control - for example, ``button``.
    -   For iOS, Android this field is disabled.
    -   For Silverlight, Role is the class name property of the selected control - for example, `Button`.
    -   For WinForms, Role is derived from the object’s class name. For instance, for the full class name of System.Windows.Forms.Button, the short name Button is displayed in the **Role** field.
    **Tip:** If the control role is unnecessary for the class mapping \(because you want to apply the mapping to *all* controls of the specified native class\), select the **Ignore** check box.


**Parent topic:**[AbtElement](/TA_Automation/Topics/abt_AbtElement.html)

**Previous topic:**[GetProperty](/TA_Automation/Topics/abt_GetProperty_1.html)

**Next topic:**[GetStates](/TA_Automation/Topics/abt_GetStates_1.html)

