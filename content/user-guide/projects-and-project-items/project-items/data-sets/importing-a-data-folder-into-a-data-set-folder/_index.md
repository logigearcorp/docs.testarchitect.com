--- 
title: "Importing a data folder into a data set folder"
linktitle: "Importing a data folder into a data set folder"
description: "How to import data from an external data folder into a TestArchitect data set folder."
weight: 7
aliases: 
    - /TA_Help/Topics/Projects_and_tests_dataset_importing_data_folder.html
keywords: "importing data folders into data sets, a data folder, data sets, importing from a data folder"
---

How to import data from an external data folder into a TestArchitect data set folder.

At times, rather than import a single tab-delimited text file to a data set, you may have a full set of external files that need to be imported as data sets.

{{<note>}} TestArchitect supports the import of two file types, .csv and .txt, into data sets. These files must contain tab-delimited text lines.

-   **Option 1**: To import an external data folder of .csv and/or .txt files into an existing data set folder, perform the following:

    1.  In the TestArchitect explorer tree, right-click a data set folder node, and then select **Import Data folder**.

    2.  In the Select dialog box, select the folder \(the "source" folder\) to be imported.

{{<note>}}

        -   You must have full read permissions for the source folder.
        -   TestArchitect only imports data files found at the top level of the source folder. Subfolders, if any, are ignored.
        -   When the source folder contains identically named files with different extensions, the imported data sets are renamed in accordance with the format `<file name><(incrementing cardinal number)>`; for example, RentedCars, RentedCars\(1\).
    3.  Click **Select**.

    4.  If data sets already exist with the names about to be assigned \(such as when the external data folder from the host machine has been imported in the past\), a warning message box appears:

        ![](/images/TA_Help/Images/Import_data_set_folder_duplicate.png)

        In each case, you can select one of the following.

        -   **Yes**: Overwrite the existing data set.
        -   **No**: Do not overwrite the existing data set; instead create an additional one, naming it in accordance with the above-stated rule.
        -   **Cancel**: Cancel the selection and return to the Select dialog box.
    Imported data sets appear as nodes beneath the data set folder node.

-   **Option 2**: To import an external data folder into a new data set folder.

    1.  Right-click the **Data** node in your project, then select **New Data Set Folder**.

    2.  In the New Data Set Folder dialog box, enter the details for the data set:

        -   **Name**: Name of the data set.
        -   **Description**: \(Optional\) Short description for the data set .
        -   **Source data folder**: Click ![](/images/TA_Help/Images/btn.browse-ellipsis.01.png) to browse to the external source folder to import its data into the data set folder.
    3.  Select the external source data folder that you want to import using the Select dialog box.

{{<note>}}

        -   You must have full read permissions for the source folder.
        -   TestArchitect only imports data files found at the top level of the source folder. Subfolders, if any, are ignored.
        -   When the source folder contains identically named files with different extensions, the imported data sets are renamed in accordance with the format `<file name><(incrementing cardinal number)>`; for example, RentedCars, RentedCars\(1\).
    4.  Click **Select**.

    5.  Click **Create**.

        ![](/images/TA_Help/Images/New_data_set_folder_creation.png)

    Imported data sets appear as nodes beneath the data set folder node.





