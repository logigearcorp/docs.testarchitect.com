--- 
title: "refill data set"
linktitle: "refill data set"
description: "Description Refill an in-use data set with new data from an external text file. Each row of the data set is derived from a row in the text file. Arguments data set Name of the data set. text file Full ..."
weight: 6
aliases: 
    - /TA_Automation/Topics/bia_refill_data_set.html
keywords: "built-in actions, refill data set, refill data set (action), refill dataset, refill data set, refill data set from external file, load text file into data set"
---

## {{< expand >}} Description

Refill an in-use data set with new data from an external text file. Each row of the data set is derived from a row in the text file.

## {{< expand >}} Arguments

-   **data set**

    Name of the data set.

-   **text file**

    Full file system path to an external text file on the test controller containing the data rows in tab-delimited format.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## {{< expand >}} Notes

-   This action does not modify any values in a dedicated or inline data set. Instead, the effect of this action is to cause the data for the subsequent [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) action to be sourced from the external file rather than the specified data set.
-   This action is applicable to both dedicated and inline data sets.
-   The external text file and the specified data set must both exist.
-   The external text file must have one record \(data set row\) per line, with tab-delimited fields in each line. The number of fields \(that is, total columns separated by tab characters\) per line must match the number of columns in the data set.
-   Each line of the text file represents one data record, which populates the variables upon each iteration of the [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) / [repeat for data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/repeat-for-data-set) loop.
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## {{< expand >}} Example - Case 1: Dedicated data sets

![](/images/TA_Automation/Images/bia_refill_data_set_aut.png)

**Test Lines**

![](/images/TA_Automation/Images/bia_refill_data_set_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_refill_data_set_res.png)

**Effect**

![](/images/TA_Automation/Images/bia_refill_data_set_effect.png)

## {{< expand >}} Example - Case 2: Inline data sets

![](/images/TA_Automation/Images/bia_refill_inline_data_set_aut.png)

**Action Lines**

![](/images/TA_Automation/Images/bia_refill_inline_data_set_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_refill_inline_data_set_res.png)

