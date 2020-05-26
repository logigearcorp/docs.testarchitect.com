--- 
title: "check row item"
linktitle: "check row item"
weight: 2
aliases: 
    - /TA_Automation/Topics/bia_check_row_item.html
---
# check row item {#bia_check_row_item .reference}

## Description { .section}

Check the contents of a row in a table. Result is Passed ifexpected contents are found; otherwise Failed.

## Arguments { .section}

window
:   TA name of the window.

control
:   TA name of the table.

row
:   The row number \(starting from row 1\).

exact
:   Possible values:

    -   0: check a contiguous section of the row;
    -   1: check entire row \(default\)

expected
:   Expected row contents. Use "\|" as delimiter between expected contents of respective cells

## Valid contexts { .section}

This action may be used within the following project items:test modules and user-defined actions.

## Notes { .section}

-   If exact = 0, section of row to be checked may begin at any column.
-   This action has been deprecated in TestArchitect 7.

## Example { .section}

![](../Images/bia_check_row_item_aut.png)

## Action Lines { .section}

![](../Images/bia_check_row_item_pgm.png)

## Result { .section}

![](../Images/bia_check_row_item_res.png)

**Parent topic:**[Deprecated](../../TA_Automation/Topics/bia_Deprecated.html)

**Previous topic:**[author](../../TA_Automation/Topics/bia_author.html)

**Next topic:**[date](../../TA_Automation/Topics/bia_date.html)

