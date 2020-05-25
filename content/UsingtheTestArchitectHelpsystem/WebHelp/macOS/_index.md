--- 
title: "Using local help documentation in offline mode on Linux and macOS"
linktitle: "Using local help documentation in offline mode on Linux and macOS"
aliases: 
    - /TA_UsingHelpSystem/Topics/hs_local_help_linux_macOS.html
---
# Using local help documentation in offline mode on Linux and macOS {#task_bd4_vmt_t1b .task}

How to use local help documentation in offline mode on Linux and macOS.

Perform the following steps:

1.  Trust testarchitect.com site in your computer. By open Internet Options

    ![](../Images/troubleshoot1.png)

2.  On the left-hand side of the page, select your desired version of TestArchitect Release Notes.

    For example: TestArchitect 8.3 Update 2.

3.  On the right-hand side of the page, click **Download TestArchitect Help.**

4.  Select an appropriate standalone package version based on the operating system installed on your machine.

    For Linux and/or macOS, the local help documentation file, packaged in a .zip file, will be downloaded into your local machine.

5.  Unzip the file.

    You will see the following extracted directory tahelp/webhelp/testarchitectclienthelp/.

    **Restriction:** Please ensure that this directory remains unchanged, because it is vital for TestArchitect to look for the local help documentation file.

6.  Place all extracted directory under the following locations.

    -   On Linux: \{TA\_DATA\_DIR\}/tahelp/webhelp/testarchitectclienthelp/.
        -   Specifically, /usr/local/logigear/testarchitect/data/tahelp/webhelp/testarchitectclienthelp/

            ![](../Images/web_directory_structure_linux.png)

    -   On macOS: /Applications/TestArchitect/data/tahelp/webhelp/testarchitectclienthelp/

        ![](../Images/web_directory_structure_macOS.png)


Now you can use local help documentation in [offline mode](../../TA_Help/Topics/Additional_features_preferences.md#li.Use_online_help) on your machine.

**Parent topic:**[WebHelp](../../TA_UsingHelpSystem/Topics/hs_WebHelp.html)

**Next topic:**[Searching for information in TestArchitect web help](../../TA_UsingHelpSystem/Topics/hs_WebHelp_search.html)

