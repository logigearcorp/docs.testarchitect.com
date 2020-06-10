--- 
title: "System checks"
linktitle: "System checks"
weight: 6
aliases: 
    - /TA_Automation/Topics/Working_with_checks_operating_system.html
---

How to create test procedures that verify your test machine's system data, including operating system, clipboard, files, and folders.

-   To check the text content of the system clipboard against an expected value, use [check clipboard](/TA_Automation/Topics/bia_check_clipboard.html).
    -   For example, suppose you want to check if the clipboard contains the text string `hello`.
    -   You can create a test procedure as follows:

        ![](/images//Images/bia_check_clipboard_pgm.png)

    -   If the verification succeeds, [check clipboard](/TA_Automation/Topics/bia_check_clipboard.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_clipboard_res.png)

-   TestArchitect also provides several check actions to check whether a file or folder exists, to check file size, or to check the contents of a text or word-processing file. For instance, [check file exists](/TA_Automation/Topics/bia_check_file_exists.html) checks for the existence of a specified file and [check folder exists](/TA_Automation/Topics/bia_check_folder_exists.html) checks for the existence of a specified folder.
    -   For example, suppose you want to check the existence of the Example.txt file after copying it to the F:\\ directory.
    -   You can make a test script as follows:

        ![](/images//Images/bia_check_file_exists_pgm.png)

    -   If the verification succeeds [check file exists](/TA_Automation/Topics/bia_check_file_exists.html) reports a Passed message; otherwise, it reports a Failed message.

        ![](/images//Images/bia_check_file_exists_res.png)


**Parent topic:**[Working with checks](/TA_Automation/Topics/Automation_model_working_with_checks.html)

**Previous topic:**[Image checks](/TA_Automation/Topics/Working_with_checks_picture.html)

**Next topic:**[Optical Character Recognition checks](/TA_Automation/Topics/Working_with_checks_OCR.html)

