--- 
title: "Jenkins"
linktitle: "Jenkins"
weight: 1
aliases: 
    - /TA_Help/Topics/Integration_Jenkins.html
---

Jenkins is a Java-based open-source continuous integration \(CI\) tool that controls and monitors the execution of repeatable tasks in software development. A key component of continuous integration is the frequent running of automated tests to catch potential bugs as soon as they are introduced in the development process. TestArchitect incorporates features that allow it to be readily integrated into a Jenkins-based CI environment.

**Note:**

-   Ensure that the xUnit plugin is installed on the Jenkins server. The plug-in provides useful information about test results, such as the historical trends. It offers a Web interface for viewing test reports, tracking failures, and more.
-   To avoid Java-related conflicts, do not install TestArchitect on the same host as your Jenkins master server.

## Continuous integration

The continuous integration software life cycle involves a process of coding, building, testing, and bug-fixing, often at a rate of several iterations per day.

![](/images//Images/ci.software_life_cycle.png)

The Jenkins CI system allows for much of this cyclic process to be automated. Code commits can be set to trigger software builds; build completion can trigger automated testing; and test results can be rapidly compiled, processed and reported to allow bugs to be addressed in the coding process.

## The Jenkins–TestArchitect environment

A typical Jenkins-based CI environment with integrated TestArchitect involves the following components:

-   Software development workstations with a common source control server such as SVN or CVS.
-   A Jenkins master server, to manage the CI process
-   One or more test execution machines. Each must be set up as both a TestArchitect controller and Jenkins slave.
-   At least one machine with TestArchitect installed, to

    -   allow for the development of tests in TestArchitect Client
    -   provide a repository for test-related project items such as test modules and results, and
    -   generate execution batch files for the test controllers.
    Note that:

    -   TestArchitect may be installed on a Jenkins slave, but not on the Jenkins master.

1.  [Creating a batch file](/TA_Help/Topics/Integration_Jenkins_create_batch_file.html)  
To establish a connection between TestArchitect and a Jenkins server, a batch file that includes executed test modules is required.
2.  [Importing the batch file](/TA_Help/Topics/Integration_Jenkins_import.html)  
You need to import the newly-generated batch file into the Jenkins master machine so that it is able to monitor and control its jobs related to executing test modules.

**Parent topic:**[Continuous integration \(CI\) tools](/TA_Help/Topics/Integration_xUnit.html)

