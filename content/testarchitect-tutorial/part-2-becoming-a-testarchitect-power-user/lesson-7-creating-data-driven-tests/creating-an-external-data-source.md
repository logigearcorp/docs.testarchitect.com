--- 
title: "Creating an external data source"
linktitle: "Creating an external data source"
description: "Create a tab-delimited text file to supply data sets to your test."
weight: 7
aliases: 
    - /TA_Tutorials/Topics/Creating_an_external_data_source.html
keywords: "text file, tab-delimited, data-driven tests, supplied with external data, supplied from text file, data sets, external data source, dynamically refilled, built-in actions, refill data set"
---

Create a tab-delimited text file to supply data sets to your test.This external file provides the data for the same test created in the earlier lesson. It replaces the data set that was used previously.

1.  Open the Rented Cars data set that was created earlier by double-clicking the **Rented Cars** node in the **Data** subtree of the TestArchitect explorer tree.

2.  In the editor, use your cursor to select only the cells that contain the row data of the data set:

    ![](/images/TA_Tutorials/Images/tut.Data_Sets.Rented_Cars_DS.data_selected.png)

3.  Press Ctrl+C to copy the selected contents.

4.  Open an empty file in a text editor such as Windows Notepad.

5.  Press Ctrl+V to paste the copied data onto the clipboard

    When you copy and paste from the TestArchitect editor, adjacent cells of a row are delimited by tabs, while rows are separated by linefeed characters. This satisfies the TestArchitect requirements for an external data file.

    {{<note>}} If you have a text editor that can visualize hidden characters, verify that all tabs and linefeeds are correctly positioned.

6.  **Optional:** Change some of the data in your file. For example, change the first occurrence of Prius to Thunderbird.

    By doing this you can verify that data is being pulled from the external file and not the Rental Cars data set.

7.  Save the file as RentedCars.tsv to C:\\data or another location on your local drive.


Your external data source is now ready for use.




