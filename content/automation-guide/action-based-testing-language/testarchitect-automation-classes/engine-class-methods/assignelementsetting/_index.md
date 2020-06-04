--- 
title: "AssignElementSetting"
linktitle: "AssignElementSetting"
weight: 17
aliases: 
    - /TA_Automation/Topics/abtf_AssignElementSetting.html
---

## Syntax

`integer AssignElementSetting(string interface, string entity, string element, string setting, string value)`

## Description

Set an attribute of an element.

## Parameters

-   **interface**

    Name of the interface to which the element belongs.

-   **entity**

    Interface entity containing the element.

-   **element**

    Name of the interface element.

-   **setting**

    Setting for which the value is to be set.

-   **value**

    Value to be assigned to the setting.


## Return Value

Return 0 if the call is successful; otherwise, -1. If the interface, entity, or element is not defined, the function fails, a diagnostic is issued and an empty string is returned.

## Notes

-   Typical examples of element settings are name, gui id, class, row, column, etc. Which settings are relevant fully depends on the interface and the specific properties of the given interface element.
-   This function is analogous to the built-in action [interface element setting](bia_interface_element_setting.html) \(or a column in the definition line of an element\).

**Parent topic:**[Engine class methods](/TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[AssignActionSetting](/TA_Automation/Topics/abtf_AssignActionSetting.html)

**Next topic:**[AssignEntitySetting](/TA_Automation/Topics/abtf_AssignEntitySetting.html)

