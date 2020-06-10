--- 
title: "Creating a data set"
linktitle: "Creating a data set"
weight: 3
aliases: 
    - /TA_Tutorials/Topics/Creating_a_data_set.html
---

Data sets are sources of simulated real-world user data, and expected outcomes, for TestArchitect tests.

**Before proceeding:** Ensure that you are logged in to the SampleRepository. In the TestArchitect explorer tree, expand the Car Rental project.

Data-driven tests require simulated user input in the form of multi-column data files, otherwise known as data sets.

1.  Right-click the **Data** node in the TestArchitect explorer tree and select **New Data Set**.

    The New Data Set dialog box appears.

2.  In the **Name** field, type Rented Cars, then click **Create**.

    A new data set opens in the test editor, ready for your input.

3.  In the editor, beginning with cell **B4**, type the header values rental month, model rented, pickup state and quantity rented, as shown in the [table](/TA_Tutorials/Topics/Creating_a_data_set.html#tut7_data_set01) below.

    Within the test, these headers are used as the variable names for the values coming from their respective columns.

4.  Enter the test data.

    Beginning with the leftmost column of row **5**, enter a row action, followed by the data values for that row, as shown in the table below. Repeat for each row.

    | |rental month|model rented|pickup state|quantity rented|
    |--|------------|------------|------------|---------------|
    |row|March|Prius|Colorado|1|
    |row|March|Mustang|Colorado|1|
    |row|March|Prius|Nevada|3|
    |row|March|LeSabre|Nevada|1|
    |row|March|Grand Am|Arizona|2|
    |row|April|Mustang|Colorado|2|
    |row|April|Grand Am|Nevada|1|
    |row|April|Mustang|Nevada|3|

    All data set values required by the test have now been entered.

5.  Skip down a few lines in the test editor. Enter three filter actions, as shown in the table below, to create three named filters.

    **Note:** Alternatively, select the contents of the table and paste it into the editor.

    A named filter is defined in the data set and may be used within the test to limit the number of used records to a subset of the data set based on the filter criteria.

    | |name|criterion|
    |--|----|---------|
    |filter|Arizona only|pickup state = "Arizona"|
    |filter|Colorado only|pickup state = "Colorado"|
    |filter|Nevada only|pickup state = "Nevada"|

6.  Click **Save** ![](/images/TA_Tutorials/Images/btn.TAC_toolbar.SaveFile.png) on the toolbar.


Your data set is now complete and should resemble the following:

![](/images//Images/tut.Data_Sets.Rented_Cars_DS.png)

Next, you will learn how to feed the values from this data set into a test.

**Parent topic:**[Lesson \#7: Creating data-driven tests](/TA_Tutorials/Topics/Tutorial_Creating_data-driven_tests.html)

**Previous topic:**[Data-driven tests](/TA_Tutorials/Topics/Data-driven_tests.html)

**Next topic:**[Creating a data-driven test](/TA_Tutorials/Topics/Creating_a_data-driven_test.html)

