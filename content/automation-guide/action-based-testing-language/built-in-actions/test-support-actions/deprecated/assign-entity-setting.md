--- 
title: "assign entity setting"
linktitle: "assign entity setting"
description: "Description Assign settings for a specified interface entity This action should be used when user changes auto-clicked button of specific built-in interface Arguments interface Name of the interface ..."
weight: 17
aliases: 
    - /TA_Automation/Topics/bia_assign_entity_setting.html
keywords: "built-in actions, assign entity setting, assign entity setting (action)"
---

## {{< expand >}} Description

-   Assign settings for a specified interface entity
-   This action should be used when user changes auto-clicked button of specific built-in interface

## {{< expand >}} Arguments

-   **interface**

    Name of the interface to assign the setting

-   **entity**

    Name of the entity

-   **setting**

    The setting name

-   **value**

    Value to assign


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Notes

-   This action has been deprecated in TestArchitect 7.2.

## {{< expand >}} Example

The script below should be added to your test case if you want to click Cancel button of JavaScript confirm dialog box, default for TestArchitect automation to click is OK button

![](/images/TA_Automation/Images/example_assignentitysetting.png)




