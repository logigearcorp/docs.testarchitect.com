--- 
title: "Implementing the interface"
linktitle: "Implementing the interface"
description: "In this topic, the procedure generateMethod(), which interfaces with the TAUtilities APIs, is implemented."
weight: 3
aliases: 
    - /TA_Tutorials/Topics/TAUtilities_implentation_1.html
keywords: "TAUtilities, creating event handler, Microsoft Excel, macro, implementing event handler, TAUtilities"
---

In this topic, the procedure generateMethod\(\), which interfaces with the TAUtilities APIs, is implemented.

Before proceeding:At this point, your Excel spreadsheet should be created, with a **Generate** button and a macro attached to it. The macro code is defined in the [Creating the macro in Microsoft Excel](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/creating-a-summary-report-in-excel/creating-the-macro-in-microsoft-excel) topic.

You will now create the code for the generateMethod\(\) procedure, which implements the interface to TAUtilities.

1.  In the generateMethod\(\) procedure, store the input parameters in cells **$B$1** thru **$B$7** into their respective variables, declared previously in step [4](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/creating-a-summary-report-in-excel/creating-the-macro-in-microsoft-excel#step_wvd_nx2_lm):

    ```
    'Get server information
    g_server = Trim(Cells(1, "B").Value)
    g_serverPort = val(Trim(Cells(2, "B").Value))
    g_repository = Trim(Cells(3, "B").Value)
    g_project = Trim(Cells(4, "B").Value)
    g_username = Trim(Cells(5, "B").Value)
    g_password = Trim(Cells(6, "B").Value)
    g_folder = Trim(Cells(7, "B").Value)
    ```

    {{<note>}}

    The Trim\(\) method ensures that returned strings have no leading or trailing spaces.

    The Val\(\) method returns the repository server’s port number as a numeric value.

2.  Returned information is to be reported starting at row **18** of the worksheet. Hence, the row variable, also declared in step [4](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/creating-a-summary-report-in-excel/creating-the-macro-in-microsoft-excel#step_wvd_nx2_lm), is assigned a value of 18.

    ```
    row = 18
    ```

3.  Create a Repository type object.

    ```
    'Create Repository type object
    Set repo = CreateObject("TAUtilities.Repository")
    ```

4.  {{<note>}}

The Repository type object has a method called Connect\(\). This is used to set up a connection to the TestArchitect repository. Connect\(\) needs the following arguments:

-   server IP address or hostname,
-   server port address, and
-   repository name.
If the connection is successful, the Connect\(\) method returns a value of 1.

    Enter the following code lines:

    ```
    'Set up connection to TestArchitect repository
    If repo.Connect(g_server, g_serverPort, g_repository) = 1 Then
        ‘To-be-implemented
    End If
    ```

5.  Log on to the specified repository with the Login\(\) method.

    The `‘To-be-implemented` line above can now be replaced with the login code. The Login\(\) method requires username and password arguments. If the logon succeeds, this method returns a value of 1.

    ```
    'Log on to the specified repository
    If repo.Login(g_username, g_password) = 1 Then
        ‘To-be-implemented
    End If
    ```

6.  To access objects in a specified TestArchitect project within a repository, the getProject\(\) method is used.

    The `‘To-be-implemented` line below the call to the Login\(\) method can now be replaced with the following call to getProject\(\). Note that getProject\(\) requires one argument, the name of the project.

    ```
    'Access objects in a TestArchitect project
    Set sProject = repo.getProject(g_project)
    ```

7.  Before attempting to use it, validate the format of the test module folder path as it was entered into the Excel cell.

    The path is currently stored in the variable g\_folder. It's a valid path if one of the following is the case:

    -   g\_folder is empty
    -   g\_folder's contents begin with the format `"/" & g_project & "/Tests"`.
    For example, `Car Rental/Tests/Action-based Testing Basics/`, where, Car Rental is name of the project, Tests is the tree node on TestArchitect explorer tree, and Action-based Testing is the desired test module folder.

    ```
    'Validate the format of the test module folder’s path
    If g_folder = "" Or g_folder = "/" & g_project & "/Tests" Then
        Set TestFolderList = sProject.GetTestFolders(1)
        Set testModuleCollection = sProject.GetTestModules(1)
        WriteCell row, 1, "/" & g_project & "/Tests/"
        flag = 1
    Else
        Set atestFolder = sProject.GetTestFolder(g_folder)
        WriteCell row, 1, g_folder
        If atestFolder Is Nothing Then
            MsgBox "' " & g_folder & " '" & " is wrong folder path! Please check again"
        Else
            Set testModuleCollection = atestFolder.GetTestModules(1)
            flag = 1
        End If
    End If
    ```

    The method getTestFolders\(1\) and GetTestModules\(1\) returns recursively a collection of the test module folder TestFolderList object, and the test module testModuleCollection object.

    {{<important>}} The isRecursive parameter belonging to getTestFolders\(\) and GetTestModules\(\) only accepts the following boolean values \([learn more](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/tautilities-api-reference#ul_uyv_ffz_tv)\):

    -   Microsoft Component Object Model \(COM\):
        -   0: Gets project items at the top level only.

            {{<note>}} If an invalid value is specified, the value of 0 is used by default.

        -   1: Gets project items recursively at all levels.
    -   Java:
        -   false: Gets project items at the top level only.
        -   true: Gets project items recursively at all levels.
    The macro writes the test module folder path into cell **A18** by calling the method WriteCell\(\)

    When the test module’s path validation is complete, the variable flag is set to a value of 1.

8.  Once flag is set to the value of 1, the following code exports the data into the given cells.

    ```
    If flag = 1 Then
        'Get the number of items in the test module
        asize = testModuleCollection.getSize() 
        
        'Output the total numbers of test modules
        WriteCell 13, 2, asize 
    
        'Export further information starting from the cell with row 19
        row = row + 1 
        
        For i = 0 To asize – 1
            Set testModuleItem = testModuleCollection.getItemAt(i) 
    
            'Output test module's name
            WriteCell row, 1, testModuleItem.getName() 
    
            'Output test module's description
            WriteCell row, 2, testModuleItem.getDescription() 
    
            'Output test module's assigned user
            WriteCell row, 5, testModuleItem.getAssignUser() 
    
            'Output test module's author creating test module
            WriteCell row, 6, testModuleItem.getCreatedBy() 
    
            'Output test module's date of creation
            WriteCell row, 7, testModuleItem.getCreationDate() 
    
            'Output test module's recent result
            WriteCell row, 8, testModuleItem.getRecentResult() 
    
            row = row + 1   
            Next
    End If
    ```

    In the above code, the number of items in the test module testModuleCollection object are retrieved with the call to the getSize\(\) method. WriteCell 13, 2, asize exports the total number of test modules into cell **B13**.

    Then name, description, assigned user, author, date of creation, and recent result of each test module is also reported in the specified cells in consecutive rows, one row per test module.

9.  The following code line disconnects the connection:

    ```
    'Terminate the connection
    repo.Disconnect
    ```

10. To handle the possibility an error occurring in any of the TAUtilities functions, use the static getLastErrorMessage\(\) method of the Repository class to catch the most recent exception message.

    ```
    MsgBox repo.getLastErrorMessage
    ```


In summary, the macro code in its entirety should resemble following:

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

Sub Generate_Click()
    flag = 0
    generateMethod
End Sub

Private Sub generateMethod()
    'Get server information
    g_server = Trim(Cells(1, "B").Value)
    g_serverPort = val(Trim(Cells(2, "B").Value))
    g_repository = Trim(Cells(3, "B").Value)
    g_project = Trim(Cells(4, "B").Value)
    g_username = Trim(Cells(5, "B").Value)
    g_password = Trim(Cells(6, "B").Value)
    g_folder = Trim(Cells(7, "B").Value)
    
    'Clear data on excel sheet that has values to be updated
    DeleteRows
    
    'Create Repository type object
    Set repo = CreateObject("TAUtilities.Repository")
    
    'Set up connection to TestArchitect repository
    If repo.Connect(g_server, g_serverPort, g_repository) = 1 Then
        'Log on to the specified repository
        If repo.Login(g_username, g_password) = 1 Then
            'Access objects in a TestArchitect project
            Set sProject = repo.getProject(g_project)
            row = 18
            
            'Validate the format of the test module folder’s path
            If g_folder = "" Or g_folder = "/" & g_project & "/Tests" Then
                Set TestFolderList = sProject.GetTestFolders(1)
                Set testModuleCollection = sProject.GetTestModules(1)
                WriteCell row, 1, "/" & g_project & "/Tests/"
                SetColorForRow row, 16
                flag = 1
            Else
                Set atestFolder = sProject.GetTestFolder(g_folder)
                WriteCell row, 1, g_folder
                SetColorForRow row, 16
                If atestFolder Is Nothing Then
                    MsgBox "' " & g_folder & " '" & " is wrong folder path!Please check again"
                Else
                    Set testModuleCollection = atestFolder.GetTestModules(1)
                    flag = 1
                End If
            End If
                
            If flag = 1 Then
                'Get the number of items in the test module
                asize = testModuleCollection.getSize()
                
                'Ouput total numbers of test modules
                WriteCell 13, 2, asize
                
                'Export further information starting from the cell with row 19
                row = row + 1
                
                For i = 0 To asize - 1
                    Set testModuleItem = testModuleCollection.getItemAt(i)
                    'Output test module's name
                    WriteCell row, 1, testModuleItem.getName()
                    
                    'Output test module's description
                    WriteCell row, 2, testModuleItem.getDescription()
                    
                    'Output test module's assigned user
                    WriteCell row, 5, testModuleItem.getAssignUser()
                    
                    'Output test module's author creting test module
                    WriteCell row, 6, testModuleItem.getCreatedBy()
                    
                    'Output test module's date of creation
                    WriteCell row, 7, testModuleItem.getCreationDate()
                    
                    'Output test module's recent result
                    WriteCell row, 8, testModuleItem.getRecentResult()
                    
                row = row + 1
                Next
            End If
        
        'Terminate the connection
        repo.Disconnect
        
        End If
    Else
        'Catch the most recent exception message, if happens
        MsgBox repo.getLastErrorMessage
    End If
End Sub

'Clear data on excel sheet that has values to be updated
Private Sub DeleteRows()
    Dim Last As Integer
    Last = ActiveSheet.UsedRange.Rows.Count
    If Last >= 18 Then
        Range(Cells(Last, "F"), Cells(18, "A")).EntireRow.Delete
    End If
End Sub

'Write the returned values to Excel cell
Private Sub WriteCell(row, col, val)
    Cells(row, col) = val
End Sub

'Highlight Excel row
Sub SetColorForRow(row, colorIndex)
    LColorCells = "A" & row & ":" & "H" & row
    Range(LColorCells).Interior.colorIndex = colorIndex
End Sub
```



