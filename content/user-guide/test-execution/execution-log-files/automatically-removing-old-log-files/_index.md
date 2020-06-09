--- 
title: "Automatically removing old log files"
linktitle: "Automatically removing old log files"
weight: 1
aliases: 
    - /TA_Help/Topics/Remove_old_execution_log_files.html
---

Log files may take up a lot of hard disk space over time. Therefore, TestArchitect offers you a mechanism to automatically delete old log files.

By default log files older than seven days will automatically be deleted; but you can change the number of days by doing the following:

1.  Browse to the following folder:

    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\controller.
    -   In Linux: /usr/local/logigear/testarchitect/controller.
2.  Open the abt.ini file in a text editor; Notepad++ is recommended.

3.  Find the line that begins with `days to keep run data` and change its value to the desired number of days.

    **Note:** The value must be a positive integer. As long as you set an invalid value \(negative number or zero\), the default value \(7\) will be used automatically.

    ![](/images//Images/remove_old_log_files.png)

4.  Save the abt.ini file.


**Parent topic:**[Execution log files](/TA_Help/Topics/Execution_log_files.html)

**Related information**  


[Execution log files](/TA_Help/Topics/Execution_log_files.html)

