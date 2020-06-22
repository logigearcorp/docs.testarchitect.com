--- 
title: "set data set value"
linktitle: "set data set value"
description: "Description Set the value of one or more cells of a column in a data set. Arguments data set Name of the data set (see Notes). row (optional; see Notes) Row number of the cell. (Row numbers start at ..."
weight: 9
aliases: 
    - /TA_Automation/Topics/bia_set_data_set_value.html
keywords: "built-in actions, set data set value, set data set value (action), set data set value, assign value to data set, set value to data set"
---

## Description

Set the value of one or more cells of a column in a data set.

## Arguments

-   **data set**

    Name of the data set \(see Notes\).

-   **row**

    \(optional; see Notes\)

    Row number of the cell. \(Row numbers start at 1, exclusive of any header row.\)

-   **column**

    Column number of the cell. \(Column numbers start at 1.\)

-   **value**

    Value to which the cell contents are to be set.

-   **criterion**

    \(optional; see Notes\)

    Boolean expression establishing the filter criteria \(see Notes\), or a named filter as defined by the [filter](/TA_Automation/Topics/bia_filter.html) action.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   The data set argument may specify a [dedicated data set](/TA_Glossary/Topics/glossaryDedicatedDataSet.html) or [inline data set](/TA_Glossary/Topics/glossaryInlineDataSet.html) that has already been defined within the test.
    -   *for a dedicated data set:* the full TA path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy.
    -   *for an inline data set:* only the name \(no path\) of the data set is necessary.
-   row and criterion arguments: Either, but not both, of these arguments is required. If both are supplied, criterion is ignored. Each of these arguments is responsible for selecting the row for the cell to be modified. \(And in the case of criterion, multiple rows may be selected.\)
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

        **Note:** For the full list of operator precedence, see [here](/TA_Automation/Topics/aut_operator_precedence.html).

-   If the value in row exceeds the current number of rows in the data set, empty rows are appended until the data set has row rows, after which the value in the designated cell is set.
-   If the data set is inline, all added data are stored in memory.
-   If the data set is a module, the data set is first [checked out](/TA_Help/Topics/Project_items_checkout.html) \(if not yet in that state\), and then modified. During the checkout process, TestArchitect issues a warning/error if either of the following conditions hold:

    -   the data set is currently checked out by another user; or
    -   the current user does not have sufficient permission to modify data sets.
    Following execution of this action, it is highly recommended that you use a [check in data set](/TA_Automation/Topics/bia_check_in_data_set.html) action to ensure that all changes to the data set are available before it is actually used.

-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html)none.

## Example - Case 1: using the row argument

1.  Add a new value, 1 Smith Lane , to the **Address** cell at row 1, column 5 of the Customers dedicated data set.
2.  Check in the dedicated data set.

![](/images/TA_Automation/Images/bia_set_data_set_value_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_data_set_value_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_set_data_set_value_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_set_data_set_value_effect.png)

## Example - Case 2: using the criterion argument

In the Customers data set:

1.  Update the **CustFName** \(column \#3\) field of the record satisfying CustID="04" to Patti.
2.  Check in the dedicated data set.

![](/images/TA_Automation/Images/bia_set_data_set_value_aut_2.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_set_data_set_value_pgm_2.png)

**Result**

![](/images/TA_Automation/Images/bia_set_data_set_value_res_2.png)

**Effect**

![](/images/TA_Automation/Images/bia_set_data_set_value_effect_2.png)




