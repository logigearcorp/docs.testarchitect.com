--- 
title: "serial test run"
linktitle: "serial test run"
weight: 112
aliases: 
    - /TA_Glossary/Topics/glossarySerialTestRun.html
---
# serial test run {#gl.glossary_entry_serial_test_run .glossentry}

A single test run resulting in the execution of multiple test modules in series on the target hardware. Forms of initiating serial test runs include:

-   Specifying a test folder, test suite, or multiple test modules via the Execute Test dialog box of a TestArchitect Client session.
-   Executing multiple TACommandLine commands from a batch file, each specifying \(in its /mod argument\) a different test module for the same hardware target. \(This batch file can be generated from the Execute Test dialog box.\)
-   Executing a TACommandLine command that specifies a test suite in its /mod argument. \(This also may be executed from batch file, which again may be generated from the Execute Test dialog box.\)

**Note:** While it does involve the execution of multiple test modules in a serial fashion, the term serial test run does not extend to execution of secondary test modules initiated through the built-in [run test](../../TA_Automation/Topics/bia_run_test.html) action. Similarly, the term does not apply to [serial synchronous remote execution](glossarySerialSynchronousRemoteXqt.html), which involves the serial execution of portions of a given test module across multiple controllers.

