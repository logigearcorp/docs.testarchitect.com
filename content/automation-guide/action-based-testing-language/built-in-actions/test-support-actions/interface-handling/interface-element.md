--- 
title: "interface element"
linktitle: "interface element"
description: "Description Map a specified control or HTML element to a logical name TA name. Arguments ta name Logical name to be assigned to the control or element. ta class TA class of the control or element. &lt;ta ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_interface_element.html
keywords: "built-in actions, interface element, interface element (action), interface element, map specified control or HTML element to logical name in TA"
---

## {{< expand >}} Description

Map a specified control or HTML element to a logical name TA name.

## {{< expand >}} Arguments

-   **ta name**

    Logical name to be assigned to the control or element.

-   **ta class**

    TA class of the control or element.

-   **<ta property1\>, <ta property2\>,... <ta propertyN\>**

    One or more values of specified TA properties of the control or element to which the ta name is to be assigned \(i.e., mapped\). Functionally, only one is required; all others are optional.


## {{< expand >}} Valid contexts

This action may be used within the following project items:interface entities.

## {{< expand >}} Notes

-   The arguments <ta property1\>, <ta property2\>, etc., are not fixed names. Instead, the names \(that is, the column headers which appear over the argument values\), are selected by the user and are limited to the specific TA properties available for the control's TA class.
-   Both the headers and their corresponding values may be entered manually by the user, but in most instances of the usage of this action, they are inserted automatically by the Element Definition dialog box Interface Viewer, along with the TA class and its value. Hence the user generally need not be concerned about entering the correct column header names for these arguments.
-   The <ta property\> header names and their associated values form property-value pairs that are used to uniquely identify the given control or element.
-   In actual practice, it is most typically the case that only a single TA property-value pair is required to fully identify a control.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:none.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_interface_element_pgm.png)

**Related information**  



[interface element setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/deprecated/interface-element-setting)

[interface entity setting](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/interface-handling/interface-entity-setting)

