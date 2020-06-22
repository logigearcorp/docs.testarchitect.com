--- 
title: "System checks"
linktitle: "System checks"
description: "How to create test procedures that verify your test machine's system data, including operating system, clipboard, files, and folders."
weight: 6
aliases: 
    - /TA_Automation/Topics/Working_with_checks_operating_system.html
keywords: "checks, operating system, clipboard, file, folder"
---

How to create test procedures that verify your test machine's system data, including operating system, clipboard, files, and folders.

-   To check the text content of the system clipboard against an expected value, use [check clipboard](/TA_Automation/Topics/bia_check_clipboard.html).
    -   For example, suppose you want to check if the clipboard contains the text string `hello`.
    -   You can create a test procedure as follows:

        ![](/images/TA_Automation/Images/bia_check_clipboard_pgm.png)

    -   If the verification succeeds, [check clipboard](/TA_Automation/Topics/bia_check_clipboard.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images/TA_Automation/Images/bia_check_clipboard_res.png)

-   TestArchitect also provides several check actions to check whether a file or folder exists, to check file size, or to check the contents of a text or word-processing file. For instance, [check file exists](/TA_Automation/Topics/bia_check_file_exists.html) checks for the existence of a specified file and [check folder exists](/TA_Automation/Topics/bia_check_folder_exists.html) checks for the existence of a specified folder.
    -   For example, suppose you want to check the existence of the Example.txt file after copying it to the F:\\ directory.
    -   You can make a test script as follows:

        ![](/images/TA_Automation/Images/bia_check_file_exists_pgm.png)

    -   If the verification succeeds [check file exists](/TA_Automation/Topics/bia_check_file_exists.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images/TA_Automation/Images/bia_check_file_exists_res.png)





