--- 
title: "use interface"
linktitle: "use interface"
description: "Description Specify an interface to be used by the test. Arguments interface Interface name. Valid contexts This action may be used within the following project items: test modules and user-defined ..."
weight: 4
aliases: 
    - /TA_Automation/Topics/bia_use_interface.html
keywords: "built-in actions, use interface, use interface (action), use interface, specify interface to be used by test"
---

## Description

Specify an interface to be used by the test.

## Arguments

-   **interface**

    Interface name.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action is optional if the required interface is currently specified as the [default interface](/TA_Help/Topics/Interface_def_set_default_interface.html).
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Example

**Action Lines**

![](/images/TA_Automation/Images/bia_use_interface_pgm.png)



