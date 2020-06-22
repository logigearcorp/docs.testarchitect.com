--- 
title: "Scripting an action in Java"
linktitle: "Scripting an action in Java"
description: "Implement an action in Java, using the TestArchitect Java harness."
weight: 2
aliases: 
    - /TA_Tutorials/Topics/Scripting_an_action_Java.html
keywords: "Java harness, scripting actions, SetAction() library function (Java), LIBRARY, TestArchitect object (Java), SetAction() function, divert() Java harness function, Mod_Example.py Java harness examples, LIBRARY, TestArchitect object (Java)"
---

Implement an action in Java, using the TestArchitect Java harness.

**Before proceeding:** Copy the files from the harness samples/java folder to a work folder of your own choosing.  This is an important first step when creating user-scripted actions.

{{<important>}} It is generally recommended that you do not modify the files in harness samples/java. Your next upgrade of TestArchitect will cause these files to be overwritten. It is not good practice \(and in many organizations not even permitted\) to modify files in your **Programs** folder. So create a new folder on your hard drive \(for this example, we’ll assume it is D:/harness/java\) and copy to it the files from harness samples/java. From here on, all work will be performed on these files, and in this folder.

You are going to implement an action named hello in theJavaharness. It will accept one argument, who, and write out the word hello, followed by the value specified for who: ![](/images/TA_Tutorials/Images/Python_hello_demo.png)



As outlined in the three-step procedure described earlier, \(in[Developing your own User-scripted Java harness action](/TA_Tutorials/Topics/Developing_your_own_harness_action_Java.html)\) \), this entails making the following modifications to moduleMod\_Example.java:

-   adding a line to the list of SetActions\(\) function calls, declaring the hello action to have its implementation in the example module;
-   adding an `else-if` clause to the Divert\(\) function, specifying the handling function action\_hello\(\) for the hello action;
-   Creating an implementation for the method action\_hello\(\). This method will do the actual work for the hello action.

These steps are implemented in the following procedure:

{{<note>}} The following steps assume use of the Eclipse development environment. You can certainly use a different development environment or simple text editor, but you will have to adapt the steps accordingly. Note in particular that the sample harness files consist not only of the essential Java source, but of an entire Eclipse-based Java project.

1.  Open your Eclipse development environment.

2.  Import the entire Java harness project \(we'll assume it is in D:/harness/java\) into your Eclipse workspace.

    1.  From the main menu bar, select **File** \> **Import.**

        The Import wizard opens.

    2.  Select **General** \> **Existing Projects into Workspace**, and click **Next**.

        ![](/images/TA_Tutorials/Images/Import_project_Eclipse.png)

    3.  Choose **Select root directory** and click the associated **Browse** to locate the directory \(D:/harness/java\) containing the Java harness project.

    4.  Select the **Copy projects into workspace** check box to copy the Java harness project you are importing to your Eclipse workspace.

        ![](/images/TA_Tutorials/Images/Import_project_Eclipse_2.png)

    5.  Click **Finish** to start the import.

    Your project is now imported

3.  As discussed earlier, we must add the new action definition to the file Mod\_Example.java.
4.  If not already available, open the Package Explorer view by selecting **Window** \> **Show View** \> **Package Explorer**

5.  In the Package Explorer view, double-click the **Mod\_Example.java** node under **javaharness** \> **src** \> **com.testarchitect.java.user**

    Mod\_Example.java opens in the editor.

6.  In the editor, add an additional setActionScript\(\) line to the setActions\(\) method of Mod\_Example.java, as shown \(in **bold**\):

    ```
    /**
     * Example Module
     * 
     */
    public class Mod_Example {
    
    	/**
    	 * declare the actions for the module
    	 */
    	public static void setActions() {
    		String module = "example";
    
    		AbtLibrary.setActionScript("hello world", module, 1);
    		**AbtLibrary.setActionScript\("hello", module, 1\);**
    	}
      ...
    ```

    This registers that the action hello needs to be interpreted by this class, example.

{{<note>}} setActionScript\(\) is a member function of an object called AbtLIBRARY. This object represents the core interpreter library of TestArchitect, which has functions for common tasks like registering actions, retrieving arguments and reporting results of checks.

7.  Next, add an else-if clause \(in **bold**\) to the `if` block in the class’ divert\(\) method:

    ```
    	/**
    	 * map an action to its function
    	 * 
    	 * @param actionName
    	 * @return
    	 */
    	public static boolean divert(String actionName) {
    		boolean result = true;
    		if (actionName.equals("hello world")) {
    			action_helloWorld();
    		} 
    **		else if \(actionName.equals\("hello"\)\) \{
    			action\_hello\(\);
    		\} 
    **		else {
    			result = false;
    			AbtLibrary.reportError("Don't know action {" + actionName + "}");
    		}
    		return result;
    	}
    ```

    This specifies that the hello action is implemented by the Java method action\_hello\(\).

8.  If your IDE presents a message that the method action\_hello\(\) is undefined, that's OK: you're about to define it.

{{<note>}} The action\_hello\(\) method is where the real work is performed – it is the actual implementation of the hello action.

9.  Add action\_hello\(\) to the end of your file with code that looks like this:

    ```
    	/**
    	 * "hello" action implementation
    	 */
    	public static void action_hello() {
    		String whovar = AbtLibrary.NamedArgument("who");
    		AbtLibrary.report("hello " + whovar);
    	}
    ```

10. Save your work.

11. Open build.xml in the editor: In Package Explorer, double-click the **build.xml** node under **javaharness**.

12. Modify the setting of the destfile attribute to specify the filepath of the JAR, java\_harness.jar, that is to be built. \(We'll specify only the file name, so that it will be generated at the same level as build.xml.\)

13. Modify the setting of the dir attribute to specify the root of the directory tree of the bin file set,where the compiled java class files will be stored.

    ![](/images/TA_Tutorials/Images/build_xml_eclipse.png)

14. Set the compiler setting for your Java project to 1.8:

    1.  In Package Explorer, right-click your Java project, then select **Properties**.

    2.  In the left-hand panel of the Properties for <project name\> dialog box, select **Java Compiler**.

    3.  In the Java Compiler panel, select the **Enable project specific settings** check box.

    4.  Select 1.8 as the desired compiler compliance level.

        ![](/images/TA_Tutorials/Images/compiler_settings_java.png)

    5.  Click **OK** to apply the setting and close the Properties for <project name\> dialog box.

15. In Package Explorer, right-click the file build.xml and choose **Run As** \> **Ant Build** to build an executable JAR file, java\_harness.jar.

    The java\_harness.jar file is created at the specified location within your Eclipse workspace.


You have now completed the implementation of a TestArchitect user-scripted action, written in Java. The action hello, realized in the coding of Java method action\_hello\(\), accepts a single argument, and writes that value to the TestArchitect output, using functions of TestArchitect's Automation AbtLIBRARY object.

{{<note>}} Note the similarity of the code here to that of method action\_helloWorld\(\), which implements the hello world action included in the example code. The principal difference is that, whereas the pre-existing action simply writes out the string hello world, your new one accepts an argument, one which replaces “world” as the recipient of the hello greeting. The difference in code is that a library function called NamedArgument\(\) is now used to get the value of the who argument of the hello action. The code first assigns this to a variable named whovar, then uses it to create the text for the report. You may also have noticed the use of the Report\(\) function of the LIBRARY object to write the string to the output. Report\(\) is a wrapper that calls up TestArchitect’s implementation of the report action. Similarly, ReportError\(\), seen in the above step, calls up the implementation of TestArchitect's report error action.

You are now ready to execute your test and verify that your user-scripted action works correctly.




