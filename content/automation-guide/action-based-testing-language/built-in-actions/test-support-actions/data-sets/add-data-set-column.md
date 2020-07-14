--- 
title: "add data set column"
linktitle: "add data set column"
description: "Description Append new column(s) to a data set. Arguments data set Name of the data set (see Notes). name Values to which the headers of newly added columns are to be set, in left-to-right order. Tip: ..."
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_add_data_set_column.html
keywords: "built-in actions, add data set column, add data set column (action), add column, add column to dataset, append column to dataset"
---

## Description

Append new column\(s\) to a data set.

## Arguments

-   **data set**

    Name of the data set \(see Notes\).

-   **name**

    Values to which the headers of newly added columns are to be set, in left-to-right order.

    {{<tip>}} Use commas \(,\) as delimiters between names, when adding multiple columns.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms {{< permerlink >}} {#bia_create_data_set__dataset_applicable_platforms} 

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   The data set argument may specify a [dedicated data set](/user-guide/support/glossary-of-terms/dedicated-data-set) or [inline data set](/user-guide/support/glossary-of-terms/inline-data-set) that has already been defined within the test.
    -   *for a dedicated data set:* the full TA path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy.
    -   *for an inline data set:* only the name \(no path\) of the data set is necessary.
-   If the data set is inline, all added data are stored in memory.
-   If the data set is a module, the data set is first [checked out](/user-guide/projects-and-project-items/project-items/revision-control/check-out) \(if not yet in that state\), and then modified. During the checkout process, TestArchitect issues a warning/error if either of the following conditions hold:

    -   the data set is currently checked out by another user; or
    -   the current user does not have sufficient permission to modify data sets.
    Following execution of this action, it is highly recommended that you use a [check in data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/check-in-data-set) action to ensure that all changes to the data set are available before it is actually used.

-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## Example

The following example adds the four columns CustID, CustLName, CustFName, and Purchases to a dedicated data set Customers.

Action Lines

![](/images/TA_Automation/Images/bia_add_data_set_column_pgm.png)


