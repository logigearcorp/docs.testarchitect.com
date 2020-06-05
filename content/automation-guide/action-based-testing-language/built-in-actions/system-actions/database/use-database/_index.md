--- 
title: "use database"
linktitle: "use database"
weight: 3
aliases: 
    - /TA_Automation/Topics/bia_use_database.html
---
keyword: [use a database, select a database]
---

# use database

## Description

Specify a database against which the ensuing SQL action lines are to be applied.

## Arguments

-   **name**

    Name of the database connection \(previously established via the [connect database](bia_connect_database.html) action\).


## Notes

-   This action is generally invoked as part of a sequence of actions to allow the test to access a data source. \(See [Testing with databases](aut_app_testing_Database_apps.html) for more information.\)
-   This action supports the [<ignore\>](/images//Images/TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](bis_remove_double_quotes_from_cells.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example:

The following example illustrates the process of connecting to, and using, a database from within a test. After creating a named connection string and using it to connect to the database, invoke use database to specify the active database to be used by the test.

**Action Lines**

![](/images//Images/bia_use_database_pgm.png)

**Result**

![](/images//Images/bia_use_database_res.png)

**Parent topic:**[Database](/TA_Automation/Topics/bia_Database.html)

**Previous topic:**[connect database](/TA_Automation/Topics/bia_connect_database.html)

**Next topic:**[execute sql](/TA_Automation/Topics/bia_execute_sql.html)

**Related information**  


[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

