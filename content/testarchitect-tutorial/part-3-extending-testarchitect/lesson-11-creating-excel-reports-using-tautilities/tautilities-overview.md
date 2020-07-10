--- 
title: "TAUtilities overview"
linktitle: "TAUtilities overview"
description: "TAUtilities' APIs can be invoked from application programs that are based on Microsoft Component Object Model (COM) technology or Java. TAUtilities is a library which allows you to connect and retrieve data from a TestArchitect repository server ."
weight: 1
aliases: 
    - /TA_Tutorials/Topics/TAUtilities_overview.html
keywords: "TAUtilities, overview"
---

TAUtilities' APIs can be invoked from application programs that are based on Microsoft Component Object Model \(COM\) technology or Java. TAUtilities is a library which allows you to connect and retrieve data from a TestArchitect repository server .

With TAUtilities you can connect to a TestArchitect repository server to retrieve test modules, test cases, results, etc., and then export the returned information to your summary report in an application such as Microsoft Excel™.

![](/images/TA_Tutorials/Images/TAUtilities_overview.png)

{{<tip>}} Read [here](http://testarchitect.logigear.com/onlinehelp/TAUtilities/index.html) for a full list of APIs provided for TAUtilities.

TestArchitect provides the files TAUtilities.dll and com.logigear.testarchitect.utilities.jar \(included with installation of TestArchitect\) that expose the automation library objects and functions that are used in TAUtilities:

-   *TAUtilities.dll* is used with COM application programs, such as the Microsoft Office Family of products.
-   *com.logigear.testarchitect.utilities.jar* is used with Java application programs.

Both files are located in directory TA\_INSTALL\_DIR\\lib.

As a rule, processing data queries between your application program and TestArchitect involves six steps:

1.  Register TAUtilities.dll in COM application programs.

    {{<remember>}} In Java application programs, instead of registering TAUtilities.dll into the registry, you must reference the following .JARs from within your Java project \([learn more](/testarchitect-tutorial/part-3-extending-testarchitect/lesson-11-creating-excel-reports-using-tautilities/creating-a-summary-report-in-excel/registering-the-tautilities-library)\):

    -   TAUtilities
    -   SLF4J API module
    -   Logback Classic module
    -   Logback Core module
2.  Create a Repository type object to establish the connection to a TestArchitect repository by calling the CreateObject\(\) and Connect\(\) methods.
3.  Call the Login\(\) method to log on to the repository.
4.  Call getProject\(\) to access objects of a single TestArchitect project, or call the getProjects\(\) method to access objects of multiple projects.

    {{<note>}} Data can only be retrieved after the connection has been established successfully and you have logged on to the repository. In case of exceptions that TAUtilities functions may throw, use the static getLastErrorMessage\(\) method of the Repository class to catch the most recent exception message.

5.  Based on your particular scenario, call the appropriate methods to interact with the TestArchitect items such as test folders, test modules, or test cases.
6.  When you are done with the connection, explicitly close the it by calling the Disconnect\(\) method.



