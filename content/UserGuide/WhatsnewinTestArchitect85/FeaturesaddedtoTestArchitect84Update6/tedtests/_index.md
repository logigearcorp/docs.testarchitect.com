--- 
title: "Disconnecting from Remote Desktop while executing automated tests"
linktitle: "Disconnecting from Remote Desktop while executing automated tests"
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.running.via.rdp.keeping_computer_unlocked.html
---
# Disconnecting from Remote Desktop while executing automated tests {#reference_nqf_gby_gbb .reference}

Explains how to restore a remote desktop session to the local console of the remote computer while you are executing automated tests on the remote computer.

## Problem {#section_qqh_hby_gbb .section}

When using Remote Desktop to connect to a remote computer, terminating Remote Desktop locks out the remote computer, displaying the logon screen. In the locked mode, TestArchitect is unable to continue to interact with the AUT's GUI, so any currently running automated tests might fail.

## Solution {#section_ccb_3by_gbb .section}

To avoid this problem, use the [tscon](https://technet.microsoft.com/en-us/library/cc770988(v=ws.10).aspx) command to disconnect from Remote Desktop. tscon returns the control to the original local session on the remote computer, overcoming the logon screen. All programs on the remote computer continue running normally, including your running automated tests.

To disconnect from Remote Desktop, run the following command on the remote computer \(in the Remote Desktop window\) as an administrator:

```
%windir%\System32\tscon.exe <SessionID> /dest:console
```

where <SessionID\> is the ID of your current Remote Desktop session, for example, 0. You will see the Your remote desktop session has ended message, and the Remote Desktop client will be terminated. But all programs and automated tests on the remote computer will continue to run normally.

**Important:** If this command does not work, because the ID of the remote desktop session to which you want to connect is not correct. Try changing the number 0 \(tscon.exe 0 /dest:console\) to the number 1, and if it still does not work, keep incrementing the session ID until your remote desktop is released.

You can also automate the above disconnection step using a batch file or using the [execute command](../../TA_Automation/Topics/bia_execute_command.html) built-in action.

-   Option \#1: Using the [execute command](../../TA_Automation/Topics/bia_execute_command.html) built-in action in your test procedures. On the remote computer, do the following:
    1.  Start the TestArchitect Controller as an administrator.
    2.  In TestArchitect Client, create the following test procedure

        ![](../Images/execute_command_RDP_pgm.png)

-   Option \#2: Using a batch file.
    1.  Create a batch file with the following code:

        ```
        %windir%\System32\tscon.exe 0 /dest:console		
        %windir%\System32\tscon.exe 1 /dest:console	
        %windir%\System32\tscon.exe 2 /dest:console	
        %windir%\System32\tscon.exe 3 /dest:console	
        %windir%\System32\tscon.exe 4 /dest:console	
        ```

    2.  Create a desktop shortcut to this file. To do this, right-click the batch file, and select **Send to** \> **Desktop \(create shortcut\)**.
    3.  Right click the newly created shortcut, and click **Properties**.
    4.  In the Shortcut Properties dialog box, click the **Shortcut** tab, and click the **Advanced** button.
    5.  In the Advance Properties dialog box, select the **Run as administrator** check box, and click **OK**.

        ![](../Images/advanced_properties_dlg.png)

        Now, when you need to disconnect from Remote Desktop, double-click this shortcut on the remote computer \(in the Remote Desktop window\). You can also invoke this batch file in your automated tests, provided that the automated tests are executed as an administrator, that is, you start the TestArchitect Controller as an administrator.


**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Unable to run C\# automation harness because of missing 'csharp\_harness.exe' file](../../TA_FAQ/Topics/faq.tshoot.finding.csharp.harness.file.html)

**Next topic:**[Optimizing JVM parameters for TestArchitect performance](../../TA_FAQ/Topics/faq.optimizing_TA_performance.html)

