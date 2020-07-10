--- 
title: "use database"
linktitle: "use database"
description: "Description Specify a database against which the ensuing SQL action lines are to be applied. Arguments name Name of the database connection (previously established via the connect database action). ..."
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_use_database.html
keywords: "built-in actions, use database, use database (action), use a database, select a database"
---

## {{< expand >}} Description

Specify a database against which the ensuing SQL action lines are to be applied.

## {{< expand >}} Arguments

-   **name**

    Name of the database connection \(previously established via the [connect database](/automation-guide/action-based-testing-language/built-in-actions/system-actions/database/connect-database) action\).


## {{< expand >}} Notes

-   This action is generally invoked as part of a sequence of actions to allow the test to access a data source. \(See [Testing with databases](/automation-guide/application-testing/testing-with-databases/) for more information.\)
-   This action supports the [<ignore\>](/automation-guide/action-based-testing-language/the-test-language/ignoring-actions) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## {{< expand >}} Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](/automation-guide/action-based-testing-language/built-in-settings/value-settings/remove-double-quotes-from-cells).

## {{< expand >}} Applicable Controls

This action is applicable to the following controls:none.

## Example:

The following example illustrates the process of connecting to, and using, a database from within a test. After creating a named connection string and using it to connect to the database, invoke use database to specify the active database to be used by the test.

**Action Lines**

![](/images/TA_Automation/Images/bia_use_database_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_use_database_res.png)




**Related information**  


[Testing with databases](/automation-guide/application-testing/testing-with-databases/)

