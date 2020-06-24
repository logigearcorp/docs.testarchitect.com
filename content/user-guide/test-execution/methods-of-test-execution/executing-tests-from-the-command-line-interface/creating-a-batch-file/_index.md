--- 
title: "Creating a batch file"
linktitle: "Creating a batch file"
description: "How to have TestArchitect generate a test execution batch file for you, with all the arguments set in accordance with your preferences."
weight: 2
aliases: 
    - /TA_Help/Topics/Test_exec_cmd_creating_batch_file.html
keywords: "command line, batch file creation, creating, batch file"
---

How to have TestArchitect generate a test execution batch file for you, with all the arguments set in accordance with your preferences.

1.  After creating your test, launch the [Execute Test](/TA_Help/Topics/Test_exec_test_execution.html) dialog box.

2.  Configure all the options in the Execute Test dialog box in accordance with your preferences.

3.  Click **Generate Batch File** to create a batch file, for example a .bat file in Windows.

4.  In the Save dialog box, browse to a location where you want to save the generated batch file.

5.  Click **Save**.

    The Creation of batch file complete message appears indicating the process is complete.

6.  Click **OK**.

    The Execute Test dialog box is closed.

7.  If you want to change the generated batch file to only compile tests and not run the tests when the batch file executes, manually add the **-co** flag to the file after the ta execute statement but before the last flag in the batch file, as shown below:

    ![](/images/TA_Help/Images/Test_exec_compileonly_flag.png)

    {{<note>}} The **-co** flag can be inserted anywhere between the ta execute statement and before the last flag, as long as the insertion does not split the existing flag tokens.


Double-click the generated batch file to execute the batch run.


