--- 
title: "use filter"
linktitle: "use filter"
description: "Description Apply a named filter to the data retrieved from a data set. Arguments filter Name of the filter to be applied. Valid contexts This action may be used within the following project items: ..."
weight: 11
aliases: 
    - /TA_Automation/Topics/bia_use_filter.html
keywords: "built-in actions, use filter, use filter (action), filter data set, use filter, apply filter to data set"
---

## {{< expand >}} Description

Apply a named filter to the data retrieved from a data set.

## {{< expand >}} Arguments

-   **filter**

    Name of the filter to be applied.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## {{< expand >}} Notes

-   Use the [filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/filter) action to create a named filter.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of the argument, or the argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_use_filter_pgm.png)



**Related information**  


[repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set)

