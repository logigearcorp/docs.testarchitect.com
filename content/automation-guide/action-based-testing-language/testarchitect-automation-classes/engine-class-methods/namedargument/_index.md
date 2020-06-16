--- 
title: "NamedArgument"
linktitle: "NamedArgument"
description: "Syntax string NamedArgument (string name) Description Retrieve the value of an argument by name. Parameters name The header label that appears above the argument (in the cluster this is content of the ..."
weight: 58
aliases: 
    - /TA_Automation/Topics/abtf_NamedArgument.html
keywords: "ABT Library Functions, NamedArgument, NamedArgument (ABT library function)"
---

## Syntax

`string NamedArgument (string name)`

## Description

Retrieve the value of an argument by name.

## Parameters

-   **name**

    The header label that appears above the argument \(in the cluster this is content of the corresponding cell in the row above the current action line\).


## Return Value

The function returns the argument as a string. If the argument isn't found, an empty string is returned.

## Notes

-   Named arguments have the advantage that they can be optional and are not dependent on a specific order.




