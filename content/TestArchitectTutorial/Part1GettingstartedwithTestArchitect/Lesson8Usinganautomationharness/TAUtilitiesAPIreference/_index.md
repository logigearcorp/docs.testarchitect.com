--- 
title: "TAUtilities API reference"
linktitle: "TAUtilities API reference"
aliases: 
    - /TA_Tutorials/Topics/tut_TAUtilities_API.html
---
# TAUtilities API reference {#task_rll_xfl_rm .task}

How to access the API specifications of the TAUtilities library.

You have several options for accessing the API reference of the TAUtilities library:

-   **Option \#1**:

    1.  Start TestArchitect Client, if it is not running.

    2.  Select menu **Help** \> **TAUtilities API**.

-   **Option \#2**:

    1.  Go to the following location TA\_INSTALL\_DIR\\tahelp\\TAUtilities doc.

    2.  Open the file the index.html.

-   **Option \#3**: Access [testarchitect.logigear.com/onlinehelp/TAUtilities](http://testarchitect.logigear.com/onlinehelp/TAUtilities/index.html) online.


In all cases, your default browser displays the main API reference of the TAUtilities library. For a further explanation of the organization of this document, click the **Help** link at the top of the page.

**Important:**

-   For API methods that contain the Boolean isRecursive parameter, the allowable values vary between different technologies as follows:

    |Technology|Allowable Boolean values|
    |----------|------------------------|
    |Java|false: Gets project items at the top level only.|
    |true: Gets project items recursively at all levels.|
    |Microsoft Component Object Model \(COM\)|0: Gets project items at the top level only. **Note:** If an invalid value is specified, the value of 0 is used by default.

|
    |1: Gets project items recursively at all levels.|


-   Related methods include:
    -   Project interface:
        -   getTestModules\(\)
        -   getTestFolders\(\)
        -   getActions\(\)
        -   getActionFolders\(\)
        -   getDatasets\(\)
        -   getDatasetFolders\(\)
        -   getTestSuites\(\)
        -   getTestSuiteFolders\(\)
        -   getResults\(\)
        -   getResultFolders\(\)
    -   TestFolder interface:
        -   getTestModules\(\)
        -   getTestFolders\(\)
    -   ActionFolder interface:
        -   getActions\(\)
        -   getActionFolders\(\)
    -   DatasetFolder interface:
        -   getDatasets\(\)
        -   getDatasetFolders\(\)
    -   TestSuiteFolder interface:
        -   getTestSuites\(\)
        -   getTestSuiteFolders\(\)
    -   ResultFolder interface:
        -   getResults\(\)
        -   getResultFolders\(\)

**Parent topic:**[Lesson \#11: Creating Excel reports using TAUtilities](../../TA_Tutorials/Topics/TAUtilities.html)

**Previous topic:**[Creating a summary report in Excel](../../TA_Tutorials/Topics/TAUtilities_scenario.html)

