--- 
title: "Scripting a Python-based GUI-interfacing action"
linktitle: "Scripting a Python-based GUI-interfacing action"
description: "In Python code, implement the action that will interface with a target application."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Scripting_a_GUI-interfacing_action.html
keywords: "check row count, user-scripted action, action_CheckRowCount(), Python implementation of, check row count, NamedArgument() library function, ReportWarning() library function, AdministerCheck() library function, OpenElement() library function, GetRowCount() ABT method, GetCellText() ABT method, GetColumnIndex() ABT method, LIBRARY, TestArchitect object, SetActionScript() function, NamedArgument() function, ReportWarning() function, OpenElement() function, AdministerCheck() function, ABT class methods, GetRowCount() method, GetCellText() method, GetColumnIndex() method"
---

In Python code, implement the action that will interface with a target application.Define the function action\_CheckRowCount\(\), which will handle the execution of the check row count action in TestArchitect.

{{<important>}} In Python, the indentation level of your statements \(that is, the white space at the very left of your statements\) is significant and it must be consistent . Also, the exact amount of indentation is important to the relative indentation of nested blocks \(relative to each other\).

The definition of action\_CheckRowCount\(\) remains to be implemented. Compared to the earlier action\_hello\(\) function, this involves considerably more work. In particular, the code needs to:

-   find the table in the system under test,
-   access it to retrieve its rows one-by-one,
-   check a given cell of each row for an expected value,
-   maintain a count of matching rows, and
-   in the end, perform a "test check" \(of the actual count against an expected count\), and inform TestArchitect of the result.

1.  Continue editing the filemod\_TableSupport.pyby declaring the method definition action\_checkRowCount\(\):

    ```
    
                
    def action_checkRowCount():
    
            
    ```

2.  The first step within your method is to grab the values of the action line arguments and stuff them into variables.
3.  Enter the code lines below.

    The interpreter function NamedArgument\(\), which is part of the standard LIBRARY object, and which you also used in the previous exercise, is used to fetch the argument values.

    ```
    
        windowName = LIBRARY.NamedArgument("window")
        tableName = LIBRARY.NamedArgument("table")
        columnName = LIBRARY.NamedArgument("column")
        value = LIBRARY.NamedArgument("value")
        expected = LIBRARY.NamedArgument("expected")
    
            
    ```

4.  Assign the action's name to a variable, for output to the results page or warning messages:

    ```
    
        checkLabel = "check row count"
                        
    ```

5.{{<note>}} Each control has its own instance \(object\) of the AbtElement class, which can be obtained by using the OpenElement method ofABT .

    Obtain the instance of the table object for the table specified by the values of windowName and tableName \(derived from the logical TA names of the window and table arguments of the action\):

    ```
    
        table = ABT.OpenElement(windowName, tableName)
        if table == None:
            LIBRARY.ReportWarning(checkLabel + ": Unable to identify table '" + tableName + "'")
            return
                        
    ```

6.  If the OpenElement\(\) is successful \(meaning, if it does indeed find the window and table it's told to look for\), it returns an object of classAbtTable, a sub-class of AbtElement. Of this class, you will make use of the following functions:
    -   GetColumnIndex\(\), which returns the number of the column you are interested in, based on the column name you provide \(which, in turn, comes from the column argument in the action line\)
    -   GetRowCount\(\), which returns the number of rows in the table, letting you know how many rows you need to search through
    -   GetCellText\(\), to get the value of a given cell. \(Cells are identified with a row and column number, and start with row 1.\)
7.  Use GetColumnIndex\(\)to get the number of the column specified by the column name argument:

    ```
    
        column = table.GetColumnIndex(columnName)
        if column == None:
            LIBRARY.ReportWarning(checkLabel + ": Unable to locate column '" + columnName + "' in table '" + tableName + "'")
            return
    
                        
    ```

8.  Next, use GetRowCount\(\)to determine the number of rows in the table:

    ```
    
        rowCount = table.GetRowCount()
                        
    ```

9.  Cycle through all rows of the table, usingGetCellText\(\)in each case to get the contents of the cell of interest. Increment the tally every time a match is found with the value of the value argument of the action.

    ```
    
        count = 0
        for i in range(1, rowCount):
            if table.GetCellText(i, column) == value :
                count += 1
                        
    ```

10. Determine whether the actual count of matching rows is equal to the number expected \(as given by the action's expected argument\). Depending on the result, use theAdministerCheck\(\)function to send either a PASS or FAIL report to the TestArchitect results page:

    ```
    
        if expected == format(count):
            LIBRARY.AdministerCheck(checkLabel, expected, format(count), 1)
        else:
            LIBRARY.AdministerCheck(checkLabel, expected, format(count), 0)
                        
    ```

{{<note>}} TestArchitect functions always work with strings. Therefore, integer results like count must be converted to strings. This is handled by theformat\(\) function in Python.


Your entire action definition for action\_checkRowCount\(\) should now look similar to this:

```



# check row count <window> <table> <column> <value> <expected> action implementation
# verify the number of rows with a given value in a specified column
def action_checkRowCount():
    # get the arguments and assign a label for this check
    windowName = LIBRARY.NamedArgument("window")
    tableName = LIBRARY.NamedArgument("table")
    columnName = LIBRARY.NamedArgument("column")
    value = LIBRARY.NamedArgument("value")
    expected = LIBRARY.NamedArgument("expected")
    checkLabel = "check row count"
    
    # identify the window and the table on screen
    table = ABT.OpenElement(windowName, tableName)
    if table == None:
        LIBRARY.ReportWarning(checkLabel + ": Unable to identify table '" + tableName + "'")
        return
    
    # determine the column of interest
    column = table.GetColumnIndex(columnName)
    if column == None:
        LIBRARY.ReportWarning(checkLabel + ": Unable to locate column '" + columnName + "' in table '" + tableName + "'")
        return
    
    # get the number of table rows
    rowCount = table.GetRowCount()
    
    # count the number of rows matching the column value
    count = 0
    for i in range(1, rowCount):
        if table.GetCellText(i, column) == value :
            count += 1
    
    if expected == format(count):
        LIBRARY.AdministerCheck(checkLabel, expected, format(count), 1)
    else:
        LIBRARY.AdministerCheck(checkLabel, expected, format(count), 0)

                
            
```

Ensure that your Python files, mod\_TableSupport.py and ta\_main.py are saved. Next, you'll take care of hings on the TestArchitect client side.




