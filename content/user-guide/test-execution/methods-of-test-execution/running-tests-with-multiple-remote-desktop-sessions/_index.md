--- 
title: "Running tests with multiple remote desktop sessions"
linktitle: "Running tests with multiple remote desktop sessions"
description: "TestArchitect provides you the capability to execute tests with multiple remote desktop sessions."
weight: 7
aliases: 
    - /TA_Help/Topics/Test_exec_multiple_remote_desktop_sessions.html
keywords: "executing tests, multiple remote desktop sessions, test runs on"
---

TestArchitect provides you the capability to execute tests with multiple remote desktop sessions.

{{<note>}} Applies to TestArchitect 8.4 Update 3 and higher.

**Preconditions**

-   You are familiar with the Remote Desktop feature.
-   You have a TestArchitect Client installed on the local computer.
-   You have Windows Server 2016 or Windows Server 2019 and a TestArchitect Client installed on the remote computer.
-   Ensure that Access to the remote computer from the local computer is enabled. \([Learn more](https://support.microsoft.com/en-us/help/17463/windows-7-connect-to-another-computer-remote-desktop-connection)\)

**Supported platforms:**

-   WPF
-   MFC

![](/images/TA_Help/Images/Multi_remote_desktop_sessions_diagram.png)

{{<note>}} Support Deputy mode

1.  Open remote desktop sessions with different Windows accounts on the remote computer by using the **Remote Desktop Connection** dialog.

    ![](/images/TA_Help/Images/Remote_Desktop_Connection_dlg.png)

2.  On each of the remote sessions, start TestArchitect Controller and assign a unique port number to the Controller

    {{<restriction>}} Although you can start TestArchitect Controller on multiple sessions, you can launch TestArchitect Client on only one session.

    There are three approaches to port number assignment.

    -   **From a command line interface**: Utilize the -port argument in the [command](/TA_Help/Topics/Controller_starting_from_CLI.html) that starts TestArchitect Controller.
    -   **Using the environment variable**: Create the CONTROLLER\_PORT environment variable which holds a port number. When you start TestArchitect Controller on a session without assigning a specific port, TestArchitect automatically assigns CONTROLLER\_PORT to the port of the controller.

        In case the port number stored in CONTROLLER\_PORT is occupied, the port number assigned to the controller will automatically be increased by 1 each time until an available port is detected.

        ![](/images/TA_Help/Images/CONTROLLER_PORT_env_variable.png)

    -   **Get TestArchitect to choose a port number**: you do not create the CONTROLLER\_PORT environment variable. When you start TestArchitect Controller on a session without assigning a specific port, TestArchitect will automatically choose an available port number for the controller.
3.  Launch the TestArchitect Client on the local computer.

4.  In the TestArchitect tree explorer, select the preferred test module/suite and press Ctrl + F9 to invoke the Execute Test dialog box.

5.  Launch the Select Controller/Device dialog box and add the controllers of the remote sessions. Next, select the checkboxes for these controllers. \([Learn more](/TA_Help/Topics/Test_exec_remote_asynchronous.html)\)

6.  Execute the test.

    {{<warning>}} During the test run,

    -   Keep the remote computer unlocked as long as you perform GUI testing on any sessions.
    -   Do not minimize any remote session window from the local computer.
    -   You are unable to run in the debugging mode on more than one remote desktop sessions. \([Learn more](/TA_Help/Topics/Debugging_remote_desktop_session.html)\)
7.  Repeat steps 4 through 6 if you want to execute more tests on other remote sessions.


The **Session Name** and **Session ID** fields will be shown in the General information section of the test results.

![](/images/TA_Help/Images/Multi_remote_desktop_sessions_test_result.png)



