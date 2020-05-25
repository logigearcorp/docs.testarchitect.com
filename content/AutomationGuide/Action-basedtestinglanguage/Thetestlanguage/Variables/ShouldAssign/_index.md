--- 
title: "ShouldAssign"
linktitle: "ShouldAssign"
aliases: 
    - /TA_Automation/Topics/abtf_ShouldAssign.html
---
# ShouldAssign {#abtf_ShouldAssign .reference}

## Syntax

`integer ShouldAssign (string value )`

## Description { .section}

Test if an argument value specifies a variable that needs to be assigned \(whether the assignment prefix "\>\>" was used\).

## Parameters { .section}

value
:   Value that is either an explicit value or the name of a variable to which a value should be assigned.

## Return Value { .section}

The function returns 1 if an assignment is needed or 0 if not.

## Notes { .section}

-   Typically used for entry/capture of values that can be generated automatically by the system under test. If a tester specifies the "\>\>" prefix, a generated value should be captured and kept in the variable, otherwise the value should be assigned, possibly overwriting the generated value.

**Parent topic:**[Engine class methods](../../TA_Automation/Topics/abtf_Engine_classes.html)

**Previous topic:**[SettingBoolean](../../TA_Automation/Topics/abtf_SettingBoolean.html)

**Next topic:**[Start](../../TA_Automation/Topics/abtf_Start.html)

