--- 
title: "InterfaceAction"
linktitle: "InterfaceAction"
aliases: 
    - /TA_Automation/Topics/abtf_InterfaceAction.html
---
# InterfaceAction {#abtf_InterfaceAction .reference}

## Syntax

`string InterfaceAction(string interface, string classname, string actionname)`

## Description { .section}

Get the action word that belong to an class

## Parameters { .section}

interface
:   Name of the interface to which the element belongs.

classname
:   Name of an interface element class \(like "edit" or "button"\).

actionname
:   Logical name of an action \(like "enter" or "click"\).

## Return Value { .section}

The low level action is returned that is defined in the Interface Definitions with respect to the logical action for the element class. If any of the parameters is not defined, a diagnostic is issued and an empty string is returned.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[Intake](../../TA_Automation/Topics/abtf_Intake.html)

**Next topic:**[Log](../../TA_Automation/Topics/abtf_Log.html)

