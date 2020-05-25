--- 
title: "interface element"
linktitle: "interface element"
aliases: 
    - /TA_Automation/Topics/bia_interface_element.html
---
# interface element {#bia_interface_element .reference}

## Description { .section}

Map a specified control or HTML element to a logical name TA name.

## Arguments { .section}

ta name
:   Logical name to be assigned to the control or element.

ta class
:   TA class of the control or element.

<ta property1\>, <ta property2\>,... <ta propertyN\>
:   One or more values of specified TA properties of the control or element to which the ta name is to be assigned \(i.e., mapped\). Functionally, only one is required; all others are optional.

## Valid contexts { .section}

This action may be used within the following project items:interface entities.

## Notes { .section}

-   The arguments <ta property1\>, <ta property2\>, etc., are not fixed names. Instead, the names \(that is, the column headers which appear over the argument values\), are selected by the user and are limited to the specific TA properties available for the control's TA class.
-   Both the headers and their corresponding values may be entered manually by the user, but in most instances of the usage of this action, they are inserted automatically by the Element Definition dialog box Interface Viewer, along with the TA class and its value. Hence the user generally need not be concerned about entering the correct column header names for these arguments.
-   The <ta property\> header names and their associated values form property-value pairs that are used to uniquely identify the given control or element.
-   In actual practice, it is most typically the case that only a single TA property-value pair is required to fully identify a control.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines**

![](../Images/bia_interface_element_pgm.png)

**Action Lines**

![](../Images/bia_interface_element_ta4vs_pgm.png)

**Parent topic:**[Interface Handling](../../TA_Automation/Topics/bia_Interface_handling.html)

**Previous topic:**[intake](../../TA_Automation/Topics/bia_intake.html)

**Next topic:**[interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html)

**Related information**  


[interface entity](../../TA_Automation/Topics/bia_interface_entity.html)

[interface element setting](../../TA_Automation/Topics/bia_interface_element_setting.html)

[interface entity setting](../../TA_Automation/Topics/bia_interface_entity_setting.html)

