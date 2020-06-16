--- 
title: "check in data set"
linktitle: "check in data set"
description: "Description Check in a data set. Arguments data set Name of the data set (see Notes). path (Optional) Location to which the inline data set will be stored (see Notes). comments (Optional) Brief note ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_in_data_set.html
keywords: "built-in actions, check in data set, check in data set (action), check in data set, dataset checkin"
---

## Description

[Check in](/TA_Help/Topics/Project_items_checkin.html) a data set.

## Arguments

-   **data set**

    Name of the data set \(see Notes\).

-   **path**

    \(Optional\) Location to which the inline data set will be stored \(see Notes\).

-   **comments**

    \(Optional\) Brief note explaining the changes \(see Notes\).


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## Notes

-   The data set argument may specify a [dedicated data set](/TA_Glossary/Topics/glossaryDedicatedDataSet.html) or [inline data set](/TA_Glossary/Topics/glossaryInlineDataSet.html) that has already been defined within the test.
    -   *for a dedicated data set:* the full TA path from the **Data** node must be specified, with forward slashes \(/\) delimiting each level of the hierarchy.
    -   *for an inline data set:* only the name \(no path\) of the data set is necessary.
-   path argument:
    -   This argument applies only to inline data sets. If data set specifies a dedicated data set, any value in path is ignored.
    -   Value must always begin with a forward slash \(/\), which corresponds to the **Data** node.
    -   If the data set is inline and this argument's value is omitted, the data set is automatically stored directly beneath the **Data** node of the project tree.
-   comments argument:
    -   It is highly recommended that you add a brief note explaining the changes made to the data set before checking it in.
    -   This comment can be helpful when querying changes made at each check-in, or to view a general history of changes to the item.
-   **Versioning**: If the specified data set already resides on a repository, and:
    -   *no data changes are made*: check-in does not update the current [version number](/TA_Help/Topics/Project_items_history.html) of the data set.
    -   *data changes are made*: check-in does update the current [version number](/TA_Help/Topics/Project_items_history.html) of the data set.
-   **Check-in validation**: TestArchitect issues a warning/error in response to this action if any of the following conditions hold:
    -   the data set is currently checked out to another user;
    -   the data set is already in a checked in state; or
    -   the current user lacks permission to modify the data set.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

**Restriction:** This action does not support [multiple device execution](/TA_Help/Topics/Test_exec_multiple_device_execution.html).

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html)none.

## Example

**Scenario**:

1.  Create an inline data set, Customers.
2.  Add columns and rows to the inline data set.
3.  Finally, check in the inline data set to create a data set node under the **Customer info** data set folder.

**Action Lines**

![](/images/TA_Automation/Images/bia_check_in_data_set_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_check_in_data_set_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_check_in_data_set_effect.png)




