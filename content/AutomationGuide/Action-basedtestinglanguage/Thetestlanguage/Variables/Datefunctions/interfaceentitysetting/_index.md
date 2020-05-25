--- 
title: "interface entity setting"
linktitle: "interface entity setting"
aliases: 
    - /TA_Automation/Topics/bia_interface_entity_setting.html
---
# interface entity setting {#bia_interface_entity_setting .reference}

## Description { .section}

Specify a property-value pair of a window or HTML page of an application under test, to create a mapping \(or partial mapping\) to a given logical name TA name.

**Note:** A secondary function of interface entity setting is to issue directives to the TestArchitect runtime system. \(See Notes for example.\)

## Arguments { .section}

setting
:   Name of a property of the window or HTML page, to be used to identify it. Most commonly, the property title is used here \(referring to a window title\).

value
:   Identifying value of the property given in the setting argument.

## Valid contexts { .section}

This action may be used within the following project items:interface entities

## Notes { .section}

-   Note that the logical name \(TA name\) that is assigned to the AUT window is not included as one of the arguments of this action; rather, it is the name of the containing interface entity itself. \(In the example below, the interface entity is assigned the TA name confirm reservationmusic library.\)
-   A single interface entity setting \(unlike an interface element\) can only specify a single property-value pair of a window. In the event that additional property-value pairs are required for the proper identification of the window, use additional interface entity settings.
-   In addition to serving as the means for mapping an interface entity to a specific window, interface entity setting actions are used to convey special directives to the TestArchitect automation at run time. For example, the directive

    ```
    interface entity setting   unlocked container classes    table
    ```

    is used to inform the automation that the [intake](../../TA_Help/Topics/Interface_def_intake.html) of controls on the current window should include the children of any controls that are of class table. \(table is a container class. By default, TestArchitect intakes ignore the controls held within container class controls.\)


## Applicable Built-In Settings { .section}

The following settings are applicable to this action:none.

## Example { .section}

**Action Lines** In this example, the TA name confirm reservation is mapped to the window whose title property = Car Rental-Confirm Your Reservation:

![](../Images/bia_interface_entity_setting_pgm.png)

**Action Lines**

![](../Images/bia_interface_entity_setting_ta4vs_pgm.png)

**Parent topic:**[Interface Handling](../../TA_Automation/Topics/bia_Interface_handling.html)

**Previous topic:**[interface element](../../TA_Automation/Topics/bia_interface_element.html)

**Next topic:**[use interface](../../TA_Automation/Topics/bia_use_interface.html)

**Related information**  


[interface element](../../TA_Automation/Topics/bia_interface_element.html)

