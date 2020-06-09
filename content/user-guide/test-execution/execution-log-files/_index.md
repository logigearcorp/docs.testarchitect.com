--- 
title: "Execution log files"
linktitle: "Execution log files"
weight: 6
aliases: 
    - /TA_Help/Topics/Execution_log_files.html
---

Once a harness run completes or is prematurely terminated, its execution information is logged to files.

**Note:** Applies to TestArchitect [8.4](/TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

Log files mostly hold errors and exceptions that occurred during the harness run. All errors and exceptions in log files are described in greater detail than those in the [**Result Details**](Test_result_details.html) tab of a test result. So they facilitate debugging or analysis of test results in case of automation errors.

Log files are placed in the following folder:

-   Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\controller\\logging.
-   Linux: /usr/local/logigear/testarchitect/controller/logging.

**Important:**

-   For device-based harnesses, the names of their log files are associated with their device IDs and device names. The name of a log file may look like:

    ```
    bmg3xmuklkrc_Samsung Galaxy Nexus(2c4401c15d52).log
    ```

    Where

    -   Samsung Galaxy Nexus: Device name.
    -   2c4401c15d52: Device ID.
-   For ordinary harnesses \(non device-based\), the names of their log files are associated with their result names, which you can set in the [**Result Name**](Test_exec_test_execution.html#result_name) on the **General** tab in the Execute Test dialog box. The name of a log file may look like:

    ```
    bm6t93jra8jo_bm6t93noy0dh_MultipleReservations.log
    ```

    Where

    -   MultipleReservations: Result name

-   **[Automatically removing old log files](/TA_Help/Topics/Remove_old_execution_log_files.html)**  
Log files may take up a lot of hard disk space over time. Therefore, TestArchitect offers you a mechanism to automatically delete old log files.

**Parent topic:**[Test execution](/TA_Help/Topics/Test_exec.html)

**Previous topic:**[Startup settings](/TA_Automation/Topics/aut_startup_settings.html)

**Related information**  


[Automatically removing old log files](/TA_Help/Topics/Remove_old_execution_log_files.html)

