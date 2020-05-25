--- 
title: "Scripting a Java-based GUI-interfacing action"
linktitle: "Scripting a Java-based GUI-interfacing action"
aliases: 
    - /TA_Tutorials/Topics/Scripting_a_GUI-interfacing_action_Java.html
---
# Scripting a Java-based GUI-interfacing action {#Scripting_a_GUI-interfacing_action .task}

In Java code, implement the action that will interface with a target application.Define the function action\_CheckRowCount\(\), which will handle the execution of the check row count action in TestArchitect.

The definition of action\_CheckRowCount\(\) remains to be implemented. Compared to the earlier action\_hello\(\) function, this involves considerably more work. In particular, the code needs to:

-   find the table in the system under test,
-   access it to retrieve its rows one-by-one,
-   check a given cell of each row for an expected value,
-   maintain a count of matching rows, and
-   in the end, perform a "test check" \(of the actual count against an expected count\), and inform TestArchitect of the result.

1.  Continue editing the fileMod\_Table.java by declaring the method definition action\_checkRowCount\(\):

    ```
    
    /**
    * "check row count" action implementation
    */
    public static void action_checkRowCount() {
    //Insert action implementation code here
    
    }        
    ```

2.  The first step within your method is to grab the values of the action line arguments and stuff them into variables.
3.  Enter the code lines below.

    The interpreter function NamedArgument\(\), which is part of the standard LIBRARY object, and which you also used in the previous exercise, is used to fetch the argument values.

    ```
    String windowName = AbtLibrary.NamedArgument("window");
    String tableName = AbtLibrary.NamedArgument("table");
    String columnName = AbtLibrary.NamedArgument("column");
    String value = AbtLibrary.NamedArgument("value");
    String expected = AbtLibrary.NamedArgument("expected"); 
    ```

4.  Assign the action's name to a variable, for output to the results page or warning messages:

    ```
    String checkLabel = "check row count";                  
    ```

5.  **Note:** Each control has its own instance \(object\) of the AbtElement class, which can be obtained by using the OpenElement method ofAbtAutomation.

    Obtain the instance of the table object for the table specified by the values of windowName and tableName \(derived from the logical TA names of the window and table arguments of the action\):

    ```
    
    AbtTable table = (AbtTable) AbtAutomation.openElement(windowName, tableName);
    if (table == null)
        {
            AbtLibrary.reportWarning(checkLabel + ": Unable to identify table '" + tableName + "'");
    		return;
        }                    
    ```

6.  If the OpenElement\(\) is successful \(meaning, if it does indeed find the window and table it's told to look for\), it returns an object of classAbtElement, then it will be converted it into class AbtTable, a sub-class of AbtElement. Of this class, you will make use of the following functions:
    -   getColumnIndex\(\), which returns the number of the column you are interested in, based on the column name you provide \(which, in turn, comes from the column argument in the action line\)
    -   getRowCount\(\), which returns the number of rows in the table, letting you know how many rows you need to search through
    -   getCellText\(\), to get the value of a given cell. \(Cells are identified with a row and column number, and start with row 1.\)
7.  Use getColumnIndex\(\)to get the number of the column specified by the column name argument:

    ```
    int column = table.getColumnIndex(columnName);
    if (column == -1)
        {
            AbtLibrary.reportWarning(checkLabel + ": Unable to locate column '" + columnName + "' in table '" + tableName + "'");
    		return;
    	}                   
    ```

8.  Next, use getRowCount\(\)to determine the number of rows in the table:

    ```
    int rowCount = table.getRowCount();                   
    ```

9.  Cycle through all rows of the table, usinggetCellText\(\)in each case to get the contents of the cell of interest. Increment the tally every time a match is found with the value of the value argument of the action.

    ```
    int count = 0;
    for (int i = 0; i < rowCount; i++)
        {
            if (table.getCellText(i, column).equals(value))
    		count += 1;			
    	}                  
    ```

10. Determine whether the actual count of matching rows is equal to the number expected \(as given by the action's expected argument\). Depending on the result, use theadministerCheck\(\)function to send either a PASS or FAIL report to the TestArchitect results page:

    ```
    if (expected.equals(Integer.toString(count)))
        AbtLibrary.administerCheck(checkLabel, expected, Integer.toString(count), 1);		
    else
        AbtLibrary.administerCheck(checkLabel, expected, Integer.toString(count), 0);               
    ```

    **Note:** TestArchitect functions always work with strings. Therefore, integer results like count must be converted to strings. This is handled by theInteger.toString\(\) function in Java.

11. Open build.xml in the editor: In Package Explorer, double-click the **build.xml** node under **javaharness**.

12. Modify the setting of the destfile attribute to specify the filepath of the JAR, java\_harness.jar, that is to be built. \(We'll specify only the file name, so that it will be generated at the same level as build.xml.\)

13. Modify the setting of the dir attribute to specify the root of the directory tree of the bin file set,where the compiled java class files will be stored.

    ![](../Images/build_xml_eclipse.png)

14. Set the compiler setting for your Java project to 1.8:

    1.  In Package Explorer, right-click your Java project, then select **Properties**.

    2.  In the left-hand panel of the Properties for <project name\> dialog box, select **Java Compiler**.

    3.  In the Java Compiler panel, select the **Enable project specific settings** check box.

    4.  Select 1.8 as the desired compiler compliance level.

        ![](../Images/compiler_settings_java.png)

    5.  Click **OK** to apply the setting and close the Properties for <project name\> dialog box.

15. In Package Explorer, right-click the file build.xml and choose **Run As** \> **Ant Build** to build an executable JAR file, java\_harness.jar.

    The java\_harness.jar file is created at the specified location within your Eclipse workspace.


Your entire action definition for action\_checkRowCount\(\) should now look similar to this:

```



	/**
	 * "check row count" action implementation
	 */
	public static void action_checkRowCount() {
		String windowName = AbtLibrary.NamedArgument("window");
		String tableName = AbtLibrary.NamedArgument("table");
		String columnName = AbtLibrary.NamedArgument("column");
		String value = AbtLibrary.NamedArgument("value");
		String expected = AbtLibrary.NamedArgument("expected");
		
		String checkLabel = "check row count";
		
		AbtTable table = (AbtTable) AbtAutomation.openElement(windowName, tableName);
		if (table == null){
			AbtLibrary.reportWarning(checkLabel + ": Unable to identify table '" + tableName + "'");
			return;
		}
		
		int column = table.getColumnIndex(columnName);
		if (column == -1){
			AbtLibrary.reportWarning(checkLabel + ": Unable to locate column '" + columnName + "' in table '" + tableName + "'");
			return;
		}
		
		int rowCount = table.getRowCount();
		
		int count = 0;
		for (int i = 0; i < rowCount; i++){
			if (table.getCellText(i, column).equals(value))
				count += 1;			
		}
		
		if (expected.equals(Integer.toString(count)))
			AbtLibrary.administerCheck(checkLabel, expected, Integer.toString(count), 1);		
		else
			AbtLibrary.administerCheck(checkLabel, expected, Integer.toString(count), 0);
			
	}

                
            
```

**Parent topic:**[User-scripted Java harness action that interacts with GUI](../../TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI_Java.html)

**Previous topic:**[Creating a new Java code script module](../../TA_Tutorials/Topics/Creating_a_new_code_script_module_Java.html)

**Next topic:**[Creating the test case and stub action](../../TA_Tutorials/Topics/Creating_the_test_case_and_stub_action_1_Java.html)

