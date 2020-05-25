--- 
title: "disconnect database"
linktitle: "disconnect\\_database"
aliases: 
    - /TA_Automation/Topics/bia_disconnect_database.html
---
# disconnect database {#bia_disconnect_database .reference}

## Description { .section}

Close a database connection.

## Arguments { .section}

name
:   Name of the database connection \(previously established with the [connect database](bia_create_connection_string.html) action.\)

## Notes { .section}

-   Note that it is permissible for your test to be connected to more than one database concurrently. In order to switch to using a different database, it is not necessary to disconnect from the current one.
-   This action supports the [<ignore\>](../../reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings { .section}

The following settings are applicable to this action:[remove double quotes from cell](bis_remove_double_quotes_from_cells.html).

## Applicable Controls { .section}

This action is applicable to the following controls:none.

## Example: { .section}

The following example illustrates the process of a test connecting to, using, and then disconnecting from a database. Use the action disconnect database once you no longer require access to the database.

**Action Lines**

![](../Images/bia_disconnect_database_pgm.png)

**Result**

![](../Images/bia_disconnect_database_res.png)

**Parent topic:**[Database](../../TA_Automation/Topics/bia_Database.html)

**Previous topic:**[execute sql](../../TA_Automation/Topics/bia_execute_sql.html)

**Related information**  


[Testing with databases](../../TA_Automation/Topics/aut_app_testing_Database_apps.html)

