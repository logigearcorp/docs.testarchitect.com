--- 
title: "Applying a data filter"
linktitle: "Applying a data filter"
aliases: 
    - /TA_Tutorials/Topics/Applying_a_data_filter.html
---
# Applying a data filter {#Applying_a_filter .task}

Add a filter to your test to limit the data coming in.

You will now restrict the data coming into your test to cars picked up in Nevada, and for only quantities of two or more.

1.  Return to test case TC 02 of your test module. If it's not already there, restore the filter heading to the [use data set](../../TA_Automation/Topics/bia_use_data_set.html) action line. \(To the right of the name heading.\)

2.  Under the filter heading, add the following filter expression: `pickup state = "Nevada" and quantity rented > 1`

    The filter argument expects an expression, and cannot accept a literal value. Hence, in this case, you do *not* precede the expression with a \# symbol.

    Your test case should now resembled the following:

    ![](../Images/tut.Data_Sets.Test02.filter01.png)

3.  As before, execute the test case.

    In the results, you will now observe that the report is now limited to two entries: those for the Prius and Mustang models, rented in Nevada in March and April, respectively.


**Parent topic:**[Lesson \#7: Creating data-driven tests](../../TA_Tutorials/Topics/Tutorial_Creating_data-driven_tests.html)

**Previous topic:**[Using filters](../../TA_Tutorials/Topics/Data_set_filters.html)

**Next topic:**[Named filters](../../TA_Tutorials/Topics/Named_data_set_filters.html)

