--- 
title: "disconnect database"
linktitle: "disconnect database"
description: "Description Close a database connection. Arguments name Name of the database connection (previously established with the connect database action.) Notes Note that it is permissible for your test to be ..."
weight: 5
aliases: 
    - /TA_Automation/Topics/bia_disconnect_database.html
keywords: "built-in actions, disconnect database, disconnect database (action), disconnect a database, detaching a database, disconnect connections to a database"
---

## Description

Close a database connection.

## Arguments

-   **name**

    Name of the database connection \(previously established with the [connect database](/TA_Automation/Topics/bia_create_connection_string.html) action.\)


## Notes

-   Note that it is permissible for your test to be connected to more than one database concurrently. In order to switch to using a different database, it is not necessary to disconnect from the current one.
-   This action supports the [<ignore\>](/reuse/../TA_Automation/Topics/Ignoring_action.html) modifier. If the string `<ignore>` is present as the value of any of the arguments, or any argument contains an expression that evaluates to `<ignore>`, the action is skipped during execution.

## Applicable Built-In Settings

The following settings are applicable to this action:[remove double quotes from cell](/TA_Automation/Topics/bis_remove_double_quotes_from_cells.html).

## Applicable Controls

This action is applicable to the following controls:none.

## Example:

The following example illustrates the process of a test connecting to, using, and then disconnecting from a database. Use the action disconnect database once you no longer require access to the database.

**Action Lines**

![](/images/TA_Automation/Images/bia_disconnect_database_pgm.png)

**Result**

![](/images/TA_Automation/Images/bia_disconnect_database_res.png)



**Related information**  


[Testing with databases](/TA_Automation/Topics/aut_app_testing_Database_apps.html)

