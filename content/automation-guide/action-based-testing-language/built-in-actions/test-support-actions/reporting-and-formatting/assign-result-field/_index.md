--- 
title: "assign result field"
linktitle: "assign result field"
weight: 1
aliases: 
    - /TA_Automation/Topics/bia_assign_result_field.html
---
keyword: [assign result field, assign result field new value, assign value to result field, value assignment to result field]
---

# assign result field

## Description

Assign a new value to a modifiable result field.

## Arguments

-   **field**

    Name of the result field to be modified.

-   **value**

    Value to be assigned.


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   This action applies only to result fields, and only ones that are runtime-modifiable. These include the result field **Build Number**, and any user-defined fields that are defined as applying to the result project item type. \(See [Creating a user-defined field](/TA_Administration/Topics/User_defined_fields_create.html) for further information.\)
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](remove_double_quotes_from_cells.html).

## Example - Case 1: Assign a new value to a user-defined field

Suppose there is a user-defined result field named **log file** with a value type of hyperlink:

![](/images//Images/bia_assign_result_field_aut_1.png)

**Action Lines**

![](/images//Images/bia_assign_result_field_pgm_1.png)

**Result**

![](/images//Images/bia_assign_result_field_res_1.png)

## Example - Case 2: Assign a new value to the **Build Number** built-in field.

![](/images//Images/bia_assign_result_field_aut_2.png)

**Action Lines**

![](/images//Images/bia_assign_result_field_pgm_2.png)

**Result**

![](/images//Images/bia_assign_result_field_res_2.png)

**Parent topic:**[Reporting and Formatting](/TA_Automation/Topics/bia_Reporting_and_formatting.html)

**Next topic:**[manual check](/TA_Automation/Topics/bia_manual_check.html)

