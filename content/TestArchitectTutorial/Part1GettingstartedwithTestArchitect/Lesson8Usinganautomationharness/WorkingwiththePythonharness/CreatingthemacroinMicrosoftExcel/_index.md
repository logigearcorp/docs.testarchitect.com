--- 
title: "Creating the macro in Microsoft Excel"
linktitle: "Creating the macro in Microsoft Excel"
aliases: 
    - /TA_Tutorials/Topics/TAUtilities_implentation.html
---
# Creating the macro in Microsoft Excel {#task_bbt_s1y_km .task}

In this exercise, you will create a macro in Microsoft Excel™ to interact with TestArchitect items.

1.  Create an Excel spreadsheet similar to the one described earlier.

    1.  Cells **$A$1** thru **$A$7** and rows **10** thru **18** should be populated just as shown in the picture below. This is static header information which never changes.

    2.  The data to be passed to the interface is entered into cells **$B$1** to **$B$7**. This consists, respectively, of the hostname \(or IP address\) of the desired repository server, the repository server’s port number, repository name, project name, username, password, and test module folder’s TestArchitect explorer tree path.

    3.  Create a button, name it **Generate**, and place it anywhere in the spreadsheet.

        In Excel 2010, a button is created by going to **Developer tab** \> **Controls** \> **Insert**, then selecting the icon for the button control. \(If your **Developer** tab is invisible, enable it in **File** \> **Options** \> **Customize Ribbon**.\)

    ![](../Images/scenario_provide_basic_information.png)

2.  Create a new Excel macro, naming it **Generate**.

    In Excel 2010, go to **View** \> **Macros** \> **View Macros**, enter Generate as the macro name, and press **Create**.

3.  Assign the macro to the button.

4.  In your macro, declare variables to hold the information to be passed to the API.

    ```
    Dim g_server As String
    Dim g_serverPort As Long
    Dim g_repository As String
    Dim g_project As String
    Dim g_username As String
    Dim g_password As String
    Dim g_testpath As String
    Dim atestFolder
    Dim testModuleCollection
    Dim flag As Long
    Dim row
    ```

5.  Create a procedure to write the returned values to Excel cells.

    ```
    'Write the returned values to Excel cell
    Private Sub WriteCell(row, col, val)
        Cells(row, col) = val
    End Sub
    ```

6.  Create a procedure to highlight an Excel row for better visualization.

    ```
    'Highlight Excel row
    Sub SetColorForRow(row, colorIndex)
        LColorCells = "A" & row & ":" & "H" & row
        Range(LColorCells).Interior.colorIndex = colorIndex
    End Sub
    ```

7.  Create a procedure to clear out old data in the Excel worksheet.

    ```
    'Clear data on excel sheet that has values to be updated
    Private Sub DeleteRows()
        Dim Last As Integer
        Last = ActiveSheet.UsedRange.Rows.Count
        If Last >= 18 Then
            Range(Cells(Last, "F"), Cells(18, "A")).EntireRow.Delete
        End If
    End Sub
    ```

8.  Create an event that occurs when the **Generate** button is selected.

    ```
    Sub Generate_Click()
        flag = 0
        generateMethod
    End Sub
    ```

9.  Create the generateMethod\(\) procedure to handle the occurred event.

    ```
    Private Sub generateMethod()
        'Insert action implementation code here
    End Sub
    ```


Next, you will create code that implements generateMethod\(\).

**Parent topic:**[Creating a summary report in Excel](../../TA_Tutorials/Topics/TAUtilities_scenario.html)

**Previous topic:**[Registering the TAUtilities library](../../TA_Tutorials/Topics/TAUtilities_register_library.html)

**Next topic:**[Implementing the interface](../../TA_Tutorials/Topics/TAUtilities_implentation_1.html)

