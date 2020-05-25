--- 
title: "add data set column"
linktitle: "add data set column"
aliases: 
    - /TA_Automation/Topics/bia_add_data_set_column.html
---
# add data set column {#bia_create_data_set .reference}

## Description { .section}

Append new column\(s\) to a data set.

## Arguments { .section}

data set
:   Name of the data set \(see Notes\).

name
:   Values to which the headers of newly added columns are to be set, in left-to-right order.

    **Tip:** Use commas \(,\) as delimiters between names, when adding multiple columns.

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {#dataset_applicable_platforms .section}

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes { .section}

-   The data set argument may specify a [dedicated data set](../../TA_Glossary/Topics/glossaryDedicatedDataSet.html) or [inline data set](../../TA_Glossary/Topics/glossaryInlineDataSet.html) that has already been defined within the test.
    -   *for a dedicated data set:* the full TA path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy.
    -   *for an inline data set:* only the name \(no path\) of the data set is necessary.
-   If the data set is inline, all added data are stored in memory.
-   If the data set is a module, the data set is first [checked out](../../TA_Help/Topics/Project_items_checkout.html) \(if not yet in that state\), and then modified. During the checkout process, TestArchitect issues a warning/error if either of the following conditions hold:

    -   the data set is currently checked out by another user; or
    -   the current user does not have sufficient permission to modify data sets.
    Following execution of this action, it is highly recommended that you use a [check in data set](bia_check_in_data_set.html) action to ensure that all changes to the data set are available before it is actually used.

-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cells](bis_remove_double_quotes_from_cells.html)none.

## Example { .section}

The following example adds the four columns CustID, CustLName, CustFName, and Purchases to a dedicated data set Customers.

**Action Lines**

![](../Images/bia_add_data_set_column_pgm.png)

**Parent topic:**[Data sets](../../TA_Automation/Topics/bia_Data_set.html)

**Next topic:**[check in data set](../../TA_Automation/Topics/bia_check_in_data_set.html)

