--- 
title: "Sample Repository"
linktitle: "Sample Repository"
weight: 13
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Sample_Repository_def.html
---

The sample repository contains projects with test modules and other items designed work with sample applications \(also provided\) to demonstrate automated testing on a variety of platforms.

CAUTION:

For power-saving purposes, computers are often configured to go into a non-active state \(such as sleep\) after a certain period of inactivity. By default, the processes associated with automated testing are typically not treated as “activities”, in this sense. Hence, for long execution runs, especially unattended ones, it is important that any machines serving as test controllers be configured not to lapse into any non-active mode during the test period. \(Typically, your computer's power policy is configured through its Control Panel, System Preferences, or command line, depending on the platform. For details, see your system administrator or information specific to the machine's operating system.\)

To log into the sample repository, start the TestArchitect Client and **double-click** the **SampleRepository** node on the TestArchitect Explorer tree. In the Log In Repository… dialog box, type administrator for the **User Name** and leave the **Password** field blank, then click **OK**. The **SampleRepository** node expands, displaying the subnodes within it.

The **Car Rental** node contains a set of sample test scripts that demonstrate automated testing of the sample Car Rental application on a Java platform. The Car Rental application mimics a reservation system for a fictitious car rental company. It is a Java-based application that runs on Windows and Linux. On Windows and Linux systems, the Car Rental application is installed along with TestArchitect Client installation. The sample test modules launch the Car Rental application as necessary during automated testing.

The **Car Rental - Mobile** node contains a set of sample test scripts that demonstrate automated testing of the sample Car Rental application on mobile devices, such as Android and iOS. Unlike the Windows and Linux platforms, this mobile version of the Car Rental application must be installed manually onto mobile devices before test automation can be performed. The same test modules are used for both Android and iOS devices.

The **Music Library** node consists of automated test scripts for testing the Music Management sample application, which is based on Windows Presentation Foundation \(WPF\), part of the .NET Framework. The sample music application stores song information and allows you to search by artists, titles, and user-defined criteria. In Windows, the Music Library sample application is installed when TestArchitect Client is installed. The test modules invoke the Music Library application as necessary during automated testing.

The **Scrum Board** node has automated test scripts that illustrate the testing of web-based applications run through Internet Explorer, Google Chrome, and Mozilla Firefox web browsers. The Scrum Board sample application is a web application that manages software development using Scrum methodology. On Windows platforms, the Scrum Board sample application is installed along with TestArchitect Client. Note that, before you begin testing web-based applications in a supported web browser, you must ensure that TestArchitect Automation Agent is installed and enabled in the browser. Under normal circumstances, the Agent is also installed along with TestArchitect.

In addition to the above-listed automation scripts, the Sample Repository also provides scripting samples \(within the **Sample scripting techniques** node\) that demonstrate the following testing techniques:

-   Capturing displayed pictures and verifying if they are correct
-   Dynamically capturing a control
-   Selecting an item in a list using a wildcard
-   Using predefined inline data sets

The **Built-In Actions** node contains TestArchitect-supplied built-in actions for system input and output operations, test handling and data support, and user interface capture and manipulation.

The **Administrator** node has administrative tools for creating and adding users to functional work groups as well as tools for integrating TestArchitect with external tools, such as HP's Quality Center® and Microsoft's Team Foundation Server®.

1.  [Testing the Car Rental application on Java](/TA_Tutorials_Sample_App/Topics/SR_Car_Rental_TA_client.html)  
The Car Rental project in the TestArchitect Sample Repository includes test modules and other project items for demonstrating automated testing of the Car Rental application on the Java platform.
2.  [Car Rental mobile](/TA_Tutorials_Sample_App/Topics/SR_Car_Rental_mobile_def.html)  
The sample Car Rental application for mobile platforms is part of TestArchitect's automation sample test suite. It runs on both Android and iOS platforms.
3.  [Testing sample scripting techniques](/TA_Tutorials_Sample_App/Topics/SR_sample_scripting_techniques.html)  
TestArchitect provides various testing samples to illustrate additional techniques in comparing pictures, obtaining controls, using wildcards, and using inline data sets.
4.  [Scrum Board](/TA_Tutorials_Sample_App/Topics/SR_Scrum_Board_def.html)  
The Scrum Board application, a part of the TestArchitect's automation sample test suite, is a web application that manages software development based on Scrum methodology.
5.  [Testing the Music Library](/TA_Tutorials_Sample_App/Topics/SR_Executing_Music_Library.html)  
The Music Library automated test project is provided in the Sample Repository to demonstrate automated testing of the Music Library application, which is based on Windows Presentation Foundation \(WPF\).

**Parent topic:**[Getting started](/TA_Help/Topics/Getting_started.html)

**Previous topic:**[The test editor](/TA_Help/Topics/Getting_started_overview_the_test_editor.html)

