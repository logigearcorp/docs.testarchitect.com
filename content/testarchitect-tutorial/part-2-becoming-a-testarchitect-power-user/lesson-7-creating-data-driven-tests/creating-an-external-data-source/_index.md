--- 
title: "Creating an external data source"
linktitle: "Creating an external data source"
weight: 7
aliases: 
    - /TA_Tutorials/Topics/Creating_an_external_data_source.html
---

Create a tab-delimited text file to supply data sets to your test.This external file provides the data for the same test created in the earlier lesson. It replaces the data set that was used previously.

1.  Open the Rented Cars data set that was created earlier by double-clicking the **Rented Cars** node in the **Data** subtree of the TestArchitect explorer tree.

2.  In the editor, use your cursor to select only the cells that contain the row data of the data set:

    ![](/images//Images/tut.Data_Sets.Rented_Cars_DS.data_selected.png)

3.  Press Ctrl+C to copy the selected contents.

4.  Open an empty file in a text editor such as Windows Notepad.

5.  Press Ctrl+V to paste the copied data onto the clipboard

    When you copy and paste from the TestArchitect editor, adjacent cells of a row are delimited by tabs, while rows are separated by linefeed characters. This satisfies the TestArchitect requirements for an external data file.

    **Note:** If you have a text editor that can visualize hidden characters, verify that all tabs and linefeeds are correctly positioned.

6.  Change some of the data in your file. For example, change the first occurrence of Prius to Thunderbird.

    By doing this you can verify that data is being pulled from the external file and not the Rental Cars data set.

7.  Save the file as RentedCars.tsv to C:\\data or another location on your local drive.


Your external data source is now ready for use.

**Parent topic:**[Lesson \#7: Creating data-driven tests](/TA_Tutorials/Topics/Tutorial_Creating_data-driven_tests.html)

**Previous topic:**[External data sources](/TA_Tutorials/Topics/External_data_sources.html)

**Next topic:**[Creating a dummy data set](/TA_Tutorials/Topics/Creating_a_dummy_data_set.html)

