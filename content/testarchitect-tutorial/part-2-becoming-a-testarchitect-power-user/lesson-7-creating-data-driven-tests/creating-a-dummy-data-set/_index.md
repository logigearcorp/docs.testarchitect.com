--- 
title: "Creating a dummy data set"
linktitle: "Creating a dummy data set"
description: "To connect a test to an external data source, you must create a dummy data set to provide a crucial link to the file."
weight: 8
aliases: 
    - /TA_Tutorials/Topics/Creating_a_dummy_data_set.html
keywords: "data sets, creating dummy, creating, dummy data sets"
---

To connect a test to an external data source, you must create a dummy data set to provide a crucial link to the file.

Although your test will receive its data from an external file, the action lines must still reference a data set. This establishes the names of the variables that the incoming values will be loaded into. To do this, you create a "dummy" data set. Create this data set with the same headers you used in the previous lesson. Add one or more rows of test data to the data set.

1.{{<note>}} Rather than create a new data set, copy the data set you created in the previous lesson.

    In the TestArchitect explorer tree, expand the **Data** node. Right-click **Rented Cars** and select **Copy**.

2.  Right-click **Data** and select **Paste**.

    A new node \(**Copy of Rented Cars**\) appears in the **Data** subtree.

3.  Right-click **Copy of Rented Cars** and select **Check Out**.

    Now that the data set has been checked out, it can be renamed.

4.  Right-click **Copy of Rented Cars** again and select **Rename**. Rename the node to Rented Cars file link.

5.  If Rented Cars file link is not already displayed in the test editor, double-click its node.

    The contents of Rented Cars file link are displayed in the editor. The contents are identical to those of the Rented Cars data set.

6.  Delete all the data set content except for the column headers and one row of data. Optionally, you can change the data to dummy values.

    The contents of the data row are not important. They only serve as a placeholder.

    Your data set should now resemble the following:

    ![](/images/TA_Tutorials/Images/tut.Data_Sets.Rented_Cars_file_link_DS.png)

7.  Save the data set by pressing Ctrl+S.





