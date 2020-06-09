--- 
title: "Developing your own User-scripted Java harness action"
linktitle: "Developing your own User-scripted Java harness action"
weight: 1
aliases: 
    - /TA_Tutorials/Topics/Developing_your_own_harness_action_Java.html
---

To created a scripted Java action, you must define the action, and modify the existing harness files to implement it.

The figure below provides an overview of the harness samples/java directory tree, in the TestArchitect program folder, and the files it contains.

**Note:**

This figure only describes the most important files and directories required to develop Java harness programs.

The tree resides under TA\_INSTALL\_DIR/harness samples/ \(Windows\), or /usr/local/testarchitect/harness\_samples \(Linux\).

![](/images//Images/tut.Java_tree_structure_files.png)

||||
|------|------|------|
|**java**|directory|Root directory of the sample Java harness.|
|**java/executables**|directory|Executable files of Java harness programs.|
|**java/executables/java\_harnress.bat**|file|A simple startup script. Its objective is to run the executable Java program file, java\_harness.jar.|
|**java/executables/java\_harness.jar**|file|An executable Java file invoked by the java\_harness.bat file.|
|**java/source**|directory|Contains all necessary files used to implement Java harness code.|
|**java/source/lib**|directory|Libraries used to tell the harness code where to find the Java implementation of the automation library.|
|**java/source/src**|directory|Contains source code that shows how to program for the Java harness.|
|**java/source/build.xml**|file|An XML file that is used by Another Neat Tool \(ANT\) technology to build an excutable JAR file, which is java\_harness.jar.|

The folder java/source/src/com/testarchitect/java/user, contains the following three files:

![](/images//Images/tut.Harness.Java_files_3.png)

TAMain.java is the startup Java script. Running this file executes the main\(\) function, which sets the actions and starts the TestArchitect interpreter.

Lib\_Interpret.java contains all the necessary functions for TestArchitect interpreter.

Your action definitions in Java may be grouped into separate Java classes, each of which is a .java file; it is in TAMain.java that the appropriate class for a given action is invoked. When a given action definition is requested by the interpreter, TAMain’s divert\(\) function passes execution to the module in which that definition exists.

Only a single class, Mod\_Example.java, exists in your harness samples/java/source/src/com/testarchitect/java/user directory \(assuming you have a fresh installation of TestArchitect\). In its unmodified form, it contains the Java code to define a single action, hello world, which writes the text string hello world to the results.

The convention is to organize user-scripted functions into multiplescript class files, with the name of each such file prefixed with the string"Mod\_" . If you add new actions, you may want to do so in new script files, depending on whether or not the actions logically fit within an existing module.

In this lesson you will write an action and add it toclass Mod\_Example.java . In the subsequent lesson, you will write another action, but will create an entirely new script module to hold it.

As a rule, adding a new action to an existingmodule in the Java harness involves these steps:

1.  Add a line to the list ofSetActions\(\)function calls, declaring the action for the TestArchitect interpreter.
2.  Add an `else-if` clause to the divert\(\) function, directing control to a function written to handle the new action. \(In the next exercise, you will divert the hello action to aJava function called action\_hello.\)
3.  Create a function definition that provides the actual action-specific logic. \(You will write theJava code for action\_hello\(\), which will do the actual work for the hello action.\)

**Parent topic:**[Working with the Java harness](/TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_java.html)

**Next topic:**[Scripting an action in Java](/TA_Tutorials/Topics/Scripting_an_action_Java.html)

