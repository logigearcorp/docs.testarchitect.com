--- 
title: "Creating a batch file to run multiple harnesses"
linktitle: "Creating a batch file to run multiple harnesses"
description: "You can create a batch file that calls batch files to execute TestArchitect tests simultaneously."
weight: 2
aliases: 
    - /TA_Help/Topics/Multiple_harnesses_creating_batch_file.html
keywords: "create, batch file"
---

You can create a batch file that calls batch files to execute TestArchitect tests simultaneously.

{{<note>}} Applies to TestArchitect [8.4](/user-guide/version-history/features-added-to-testarchitect-8-4/) and higher.

{{<restriction>}} As of the current release, there are some following constraints that you should keep in mind.

-   You are unable to run more than one GUI testing harness simultaneously. However, running a single GUI testing harness together with multiple non-GUI testing harnesses, such as, API/DB/CLI testing, etc. is allowable.
-   Running a harness in debug mode along with multiple harnesses using batch file\(s\) is allowable.
-   It is impossible to run a harness in debug mode first and then run more harness\(es\) in debug/ordinary/compilation mode.
-   Technically, you can run a harness in ordinary mode from TestArchitect Client first and then run another harness in debug mode. It is highly inadvisable to try this because it can cause unexpected functions.

One of the main features of TestArchitect is the ability to run multiple harnesses in parallel. Rather than waiting for each harness to execute in sequence or individually, you can run multiple harnesses in parallel across various browsers. Using this process, more tests can be run at a time, thereby decreasing overall time spent on testing. In order to achieve this goal to run multiple harnesses in batch files, carry out the following steps:

1.  In TestArchitect Client, generate a batch file for each test module/suite you want to execute. \([Learn more](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/creating-a-batch-file)\)

2.  Create a master batch file in a text editor, so as to call the batch files generated in the step \#1. The content of the master batch file might look like the following:

    -   On Windows:

        ```
        start cmd /c d:\tests\testOne.bat
        start cmd /c d:\tests\testTwo.bat
        start cmd /c d:\tests\testThree.bat
        ```

        Where testOne.bat, testTwo.bat and testThree.bat are three test execution batch files. This master batch file triggers the three harnesses in parallel.

    -   On Linux:

        ```
        #!/bin/bash
        /root/Desktop/testOne.sh &&
        /root/Desktop/testTwo.sh &&
        /root/Desktop/testThree.sh
        ```

        Where testOne.sh, testTwo.sh and testThree.sh are three test execution bash files. This master batch file triggers the three harnesses in parallel.





**Related information**  


[Running multiple harnesses from TestArchitect Client](/user-guide/test-execution/working-on-multiple-test-harnesses/running-multiple-harnesses-from-testarchitect-client)

[Configuring harness pool size](/user-guide/test-execution/working-on-multiple-test-harnesses/configuring-harness-pool-size)

