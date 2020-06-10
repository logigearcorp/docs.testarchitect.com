--- 
title: "Debugging in a remote desktop session"
linktitle: "Debugging in a remote desktop session"
weight: 7
aliases: 
    - /TA_Help/Topics/Debugging_remote_desktop_session.html
---

How to debug a harness in a remote desktop session.

**Note:** Applies to TestArchitect 8.4 Update 3

You are knowledgeable about [test runs in multiple remote desktop sessions](/TA_Help/Topics/Test_exec_multiple_remote_desktop_sessions.html)

**Restriction:** You are unable run in the debugging mode on more than one remote desktop session.

1.  Create a remote desktop session with a preferred user account. Start TestArchitect Controller.

2.  On your local computer,

    1.  In the TestArchitect explorer tree, select the test module/suite to be debugged, and press Ctrl + F9 to invoke the Execute Test dialog box.

    2.  Open the Select Controller/Device dialog box, add the controller of the remote desktop session. Select the checkbox for the controller. Click **OK**.

    3.  In the Execute Test dialog box, click the **Compile Only** button.

3.  On the remote desktop session, create the TA\_RUN\_CONFIG environment variable with the value C:\\Users\\<User Name\>\\LogiGear\\TestArchitect\\controller\\requests\\run.dat

    ![](/images//Images/TA_RUN_CONFIG_env_variable.png)

    **Important:** this step needs carrying out for the first time only.

4.  Execute the taplayback.exe command located in \{TA\_INSTALL\_DIR\}\\binclient so as to start debugging the harness


**Parent topic:**[Debugging with TestArchitect](/TA_Help/Topics/Debugging.html)

**Previous topic:**[Enabling breakpoints](/TA_Help/Topics/Debugging_enabling_breakpoints.html)

