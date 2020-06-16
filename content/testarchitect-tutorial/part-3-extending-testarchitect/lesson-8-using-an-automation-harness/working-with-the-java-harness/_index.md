--- 
title: "Working with the Java harness"
linktitle: "Working with the Java harness"
description: "How to implement TestArchitect actions using the Java programming language."
weight: 4
aliases: 
    - /TA_Tutorials/Topics/Tutorial_Scripting_actions_in_other_languages_java.html
keywords: "Java harness, working with, harness, Java, working with"
---

How to implement TestArchitect actions using the Java programming language.

This subsection contains two exercises that demonstrate how to create user-scripted actions implemented in the Java programming language, and how to access such actions in your tests.

## Supported OS environments

-   Windows
-   Linux

**Note:**

-   The TestArchitect installation includes the Java Runtime Environment \(JRE\), which is used to run Java programs. The JRE is included in directory TA\_INSTALL\_DIR\\jre.
-   To develop Java programs, you need the Java Development Kit \(JDK\). The JDK is free, open source software, available at the [Oracle website.](http://www.oracle.com/technetwork/java/javase/downloads/index.html) Ensure that you have JDK installed before you proceed with the examples here. Also, your system’s PATH variable must be set to include the path to the Java executable: for example, C:\\Program Files\\Java\\jdk1.6.0\_31\\bin.
-   TestArchitect installation includes the file javaharnesslib.jar, which exposes the automation library objects and functions that are used in the Java harness.
-   Both your installation of TestArchitect and your JDK must be for the same machine architecture \(32-bit or 64-bit\).

1.  [Developing your own User-scripted Java harness action](/TA_Tutorials/Topics/Developing_your_own_harness_action_Java.html)  
 To created a scripted Java action, you must define the action, and modify the existing harness files to implement it.
2.  [Scripting an action in Java](/TA_Tutorials/Topics/Scripting_an_action_Java.html)  
Implement an action in Java, using the TestArchitect Java harness.
3.  [Creating the test case and stub action](/TA_Tutorials/Topics/Creating_the_test_case_and_stub_action_Java.html)  
Create a stub action in TestArchitect as a placeholder for thescripted hello actionyou defined previously, then write a test to invoke the action.
4.  [Running a Java harness test](/TA_Tutorials/Topics/Running_the_test_4_Java.html)  
 Execute the test that calls the hello action you implemented in the Java harness.
5.  [User-scripted Java harness action that interacts with GUI](/TA_Tutorials/Topics/Creating_a_harness_action_that_interacts_with_a_GUI_Java.html)  
 In this exercise, we will create a Java-scripted action that interacts with an application's user interface. We will also create a new Java class to house the new scripted function implementing the action.




