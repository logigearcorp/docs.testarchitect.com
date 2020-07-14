--- 
title: "check row item"
linktitle: "check row item"
description: "Description Check the contents of a row in a table. Result is Passed if expected contents are found ; otherwise Failed . Arguments window TA name of the window. control TA name of the table. row The ..."
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_row_item.html
keywords: "built-in actions, check row item, check row item (action)"
---

## Description

Check the contents of a row in a table. Result is Passed ifexpected contents are found; otherwise Failed.

## Arguments

-   **window**

    TA name of the window.

-   **control**

    TA name of the table.

-   **row**

    The row number \(starting from row 1\).

-   **exact**

    Possible values:

    -   0: check a contiguous section of the row;
    -   1: check entire row \(default\)
-   **expected**

    Expected row contents. Use "\|" as delimiter between expected contents of respective cells


## Valid contexts

This action may be used within the following project items:test modules and user-defined actions.

## Notes

-   If exact = 0, section of row to be checked may begin at any column.
-   This action has been deprecated in TestArchitect 7.

## Example

![](/images/TA_Automation/Images/bia_check_row_item_aut.png)

## Action Lines

![](/images/TA_Automation/Images/bia_check_row_item_pgm.png)

## Result

![](/images/TA_Automation/Images/bia_check_row_item_res.png)




