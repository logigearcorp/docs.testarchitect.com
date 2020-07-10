--- 
title: "TAUtilities API reference"
linktitle: "TAUtilities API reference"
description: "How to access the API specifications of the TAUtilities library."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/tut_TAUtilities_API.html
keywords: "TAUtilities, API specification"
---

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

{{<important>}}

-   For API methods that contain the Boolean isRecursive parameter, the allowable values vary between different technologies as follows:

    <table cellpadding="4" cellspacing="0" summary="" id="task_rll_xfl_rm__table_zhg_3fz_tv" class="table" frame="border" border="1" rules="all"><colgroup><col style="width:40%"><col style="width:60%"></colgroup><thead class="thead" style="text-align:left;">                                    <tr>                                        <th class="entry nocellnorowborder" id="d903556e148">Technology</th>                                        <th class="entry cell-norowborder" id="d903556e151">Allowable Boolean values</th>                                    </tr>                                </thead><tbody class="tbody">                                    <tr>                                        <td class="entry nocellnorowborder" rowspan="2" headers="d903556e148 ">Java</td>                                        <td class="entry cell-norowborder" headers="d903556e151 "><span class="keyword option">false</span>:                                                <span class="ph" id="task_rll_xfl_rm__ph.False">Gets project items at the top level                                                only.</span></td>                                    </tr>                                    <tr>                                        <td class="entry cell-norowborder" headers="d903556e151 "><span class="keyword option">true</span>:                                                <span class="ph" id="task_rll_xfl_rm__ph.True">Gets project items recursively at all                                                levels.</span></td>                                    </tr>                                    <tr>                                        <td class="entry nocellnorowborder" rowspan="2" headers="d903556e148 ">Microsoft Component Object Model                                            (COM)</td>                                        <td class="entry cell-norowborder" headers="d903556e151 "><span class="keyword option">0</span>: <span class="ph">Gets project items at the top level                                                only.</span>                                            <div class="note note"><span class="notetitle">Note:</span> If an invalid value is specified, the                                                value of 0 is used by default.</div></td>                                    </tr>                                    <tr>                                        <td class="entry cellrowborder" headers="d903556e151 "><span class="keyword option">1</span>: <span class="ph">Gets project items recursively at all                                                levels.</span></td>                                    </tr>                                </tbody></table>

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

**Parent topic:**[Lesson \#11: Creating Excel reports using TAUtilities](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/)

**Previous topic:**[Creating a summary report in Excel](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/creating-a-summary-report-in-excel/)

