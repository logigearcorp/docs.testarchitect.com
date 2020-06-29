--- 
title: "ShouldAssign"
linktitle: "ShouldAssign"
description: "Syntax integer ShouldAssign (string value ) Description Test if an argument value specifies a variable that needs to be assigned (whether the assignment prefix &#34;&gt;&gt;&#34; was used). Parameters value Value ..."
weight: 84
aliases: 
    - /TA_Automation/Topics/abtf_ShouldAssign.html
keywords: "ABT Library Functions, ShouldAssign, ShouldAssign (ABT library function)"
---

## Syntax

`integer ShouldAssign (string value )`

## Description

Test if an argument value specifies a variable that needs to be assigned \(whether the assignment prefix "\>\>" was used\).

## Parameters

-   **value**

    Value that is either an explicit value or the name of a variable to which a value should be assigned.


## Return Value

The function returns 1 if an assignment is needed or 0 if not.

## Notes

-   Typically used for entry/capture of values that can be generated automatically by the system under test. If a tester specifies the "\>\>" prefix, a generated value should be captured and kept in the variable, otherwise the value should be assigned, possibly overwriting the generated value.




