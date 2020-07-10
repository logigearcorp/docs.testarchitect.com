--- 
title: "How can I run a test on multiple systems concurrently?"
linktitle: "How can I run a test on multiple systems concurrently?"
description: "It is possible to run the same test run set on multiple hardware targets at the same time. From TestArchitect Client , this is achieved by specifying those targets in the Controllers/Devices panel of ..."
weight: 12
aliases: 
    - /TA_FAQ/Topics/faq.howto.run_test_on_multiple_targets.html
keywords: "FAQ, How can I run a test on multiple systems concurrently?"
---

It is possible to run the same [test run set](/user-guide/support/glossary-of-terms/test-run-set) on multiple [hardware targets](/user-guide/support/glossary-of-terms/hardware-target) at the same time. From TestArchitect Client, this is achieved by specifying those targets in the Controllers/Devices panel of the Execute Test dialog box. \(Alternatively, with the [TestArchitect command line tool](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/), you would use the /exechost, /execport, and possibly the /devices parameters to specify your targets.\) Given that the test on each target runs independently of the next, this is referred to as [asynchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/asynchronous-remote-execution).

In asynchronous remote execution, the exact same test module, or series of test modules, is executed across all hardware targets. But there may be cases where you want to assign different portions of a test to different targets, such as when testing interactions between applications under test. One means of implementing this is with [synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/), which allows TestArchitect Controller hosts to interact by means of a lead-deputy paradigm, in which one desktop host \(the [lead](/user-guide/support/glossary-of-terms/lead)\) passes control to one or more [deputy](/user-guide/support/glossary-of-terms/deputy) hosts. Synchronous remote execution may be implemented in [serial](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/serial-synchronous-remote-execution) mode, in which control is assigned to only one host at any given time, or [parallel](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/parallel-synchronous-remote-execution), allowing test execution to run on two or more hosts concurrently.

When testing on mobile devices, the [use device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-device) action can be used to implement synchronous execution across devices, in a manner roughly analogous to that of the lead-deputy model in serial mode.




