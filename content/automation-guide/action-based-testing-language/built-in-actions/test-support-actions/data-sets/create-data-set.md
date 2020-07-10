--- 
title: "create data set"
linktitle: "create data set"
description: "Description Create an inline data set . Arguments name Name to assign to the inline data set. Valid contexts This action may be used within the following project items: test modules and user-defined ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_create_data_set.html
keywords: "built-in actions, create data set, create data set (action), create data set, create dataset"
---

## {{< expand >}} Description

Create an [inline data set](/user-guide/support/glossary-of-terms/inline-data-set).

## {{< expand >}} Arguments

-   **name**

    Name to assign to the inline data set.


## {{< expand >}} Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## {{< expand >}} Applicable Systems/Platforms

Use of this action is supported on the following systems/platforms: Windows, Linux.

## {{< expand >}} Notes

-   create data set allows your test to generate a data set from within the action lines, offering an alternative to the [dedicated data set](/user-guide/support/glossary-of-terms/dedicated-data-set). To create an inline data set, you must pair this action with a matching [end create data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/end-create-data-set) action, and insert one or more row actions between the two. The row actions supply the data for the data set, just as they do for dedicated data sets, and must be accompanied by a row of headers to identify the data elements.
-   Once an inline data set is created, its scope is global, and it may be reused any number of times throughout the test with the [use data set](/automation-guide/action-based-testing-language/built-in-actions/test-support-actions/data-sets/use-data-set) action.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cells](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells)none.

## {{< expand >}} Example

**Action Lines**

![](/images/TA_Automation/Images/bia_create_data_set_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_create_data_set_res.png)




