--- 
title: "assign entity setting"
linktitle: "assign entity setting"
aliases: 
    - /TA_Automation/Topics/bia_assign_entity_setting.html
---
# assign entity setting {#bia_assign_entity_setting .reference}

## Description { .section}

-   Assign settings for a specified interface entity
-   This action should be used when user changes auto-clicked button of specific built-in interface

## Arguments { .section}

interface
:   Name of the interface to assign the setting

entity
:   Name of the entity

setting
:   The setting name

value
:   Value to assign

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   This action has been deprecated in TestArchitect 7.2.

## Example { .section}

The script below should be added to your test case if you want to click Cancel button of JavaScript confirm dialog box, default for TestArchitect automation to click is OK button

![](../Images/example_assignentitysetting.png)

**Parent topic:**[Deprecated](../../TA_Automation/Topics/bia_Deprecated.html)

**Previous topic:**[end action definition](../../TA_Automation/Topics/bia_end_action_definition.html)

**Next topic:**[interface element class](../../TA_Automation/Topics/bia_interface_element_class.html)

