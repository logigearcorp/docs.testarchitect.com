--- 
title: "filter"
linktitle: "filter"
description: "Description Establish a named filter for an inline or dedicated data set. Arguments name Name to assign to the filter. criterion Boolean expression establishing the filter criteria. Valid contexts ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_filter.html
keywords: "built-in actions, filter, filter (action), filter, filter dataset"
---

## Description

Establish a named filter for an inline or dedicated data set.

## Arguments

-   **name**

    Name to assign to the filter.

-   **criterion**

    Boolean expression establishing the filter criteria.


## Valid contexts

This action may be used within the following project items:test modules, data set modules, user-defined actions

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   This action may be employed within either a [dedicated data set](/user-guide/support/glossary-of-terms/dedicated-data-set) or an [inline data set](/user-guide/support/glossary-of-terms/inline-data-set) \(within the confines of a [create data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/create-data-set)/[end create data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/end-create-data-set) construct, in a test module or user-defined action\).
-   The filter action associates a set of filter criteria with a name. It does not, in and of itself, have the effect of filtering data. The actual filtering of data occurs when the established filter is invoked, either by a [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set), [use filter](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-filter), or [set data set value](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/set-data-set-value) action.
-   When the filter is applied, those rows of the data set whose values do not produce a True when applied to the expression in criterion are filtered out. For example, if criterion is set to `region = 2 and period >= 2002`, the filter excludes those rows in which region is not 2, as well as those rows for which period is earlier than 2002.
-   The following operators may be used within an expression in thecriterion argument:

    |Precedence|Comparison operator|Meaning|
    |----------|-------------------|-------|
    |4|=|equal to|
    |4|<\>|not equal to|
    |4|\>|greater than|
    |4|\>=|greater than or equal to|
    |4|<|less than|
    |4|<=|less than or equal to|

    |Precedence|Logical operator|Meaning|
    |----------|----------------|-------|
    |5|not|Value is TRUE if its operand is FALSE.|
    |6|and|Value is TRUE if and only if both sides of the and operator are TRUE.|
    |7|or|Value is TRUE if either side of the or operator is TRUE.|

    {{<note>}} For the full list of operator precedence, see [here](/automation-guide/action-based-testing-language/the-test-language/operator-precedence).

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

![](/images/TA_Automation/Images/bia_filter_pgm.png)




**Related information**  


[repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set)

