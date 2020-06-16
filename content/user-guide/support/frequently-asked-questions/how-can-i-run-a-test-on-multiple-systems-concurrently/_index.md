--- 
title: "How can I run a test on multiple systems concurrently?"
linktitle: "How can I run a test on multiple systems concurrently?"
description: "It is possible to run the same test run set on multiple hardware targets at the same time. From TestArchitect Client , this is achieved by specifying those targets in the Controllers/Devices panel of ..."
weight: 12
aliases: 
    - /TA_FAQ/Topics/faq.howto.run_test_on_multiple_targets.html
keywords: "FAQ, How can I run a test on multiple systems concurrently?"
---

It is possible to run the same [test run set](/TA_Glossary/Topics/glossaryTestRunSet.html) on multiple [hardware targets](/TA_Glossary/Topics/glossaryHardwareTarget.html) at the same time. From TestArchitect Client, this is achieved by specifying those targets in the Controllers/Devices panel of the Execute Test dialog box. \(Alternatively, with the [TestArchitect command line tool](/TA_Help/Topics/Test_exec_cmd.html), you would use the /exechost, /execport, and possibly the /devices parameters to specify your targets.\) Given that the test on each target runs independently of the next, this is referred to as [asynchronous remote execution](/TA_Help/Topics/Test_exec_remote_asynchronous.html).

In asynchronous remote execution, the exact same test module, or series of test modules, is executed across all hardware targets. But there may be cases where you want to assign different portions of a test to different targets, such as when testing interactions between applications under test. One means of implementing this is with [synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous.html), which allows TestArchitect Controller hosts to interact by means of a lead-deputy paradigm, in which one desktop host \(the [lead](/TA_Glossary/Topics/glossaryLead.html)\) passes control to one or more [deputy](/TA_Glossary/Topics/glossaryDeputy.html) hosts. Synchronous remote execution may be implemented in [serial](/TA_Help/Topics/Test_exec_remote_synchronous_serial.html) mode, in which control is assigned to only one host at any given time, or [parallel](/TA_Help/Topics/Test_exec_remote_synchronous_parallel.html), allowing test execution to run on two or more hosts concurrently.

When testing on mobile devices, the [use device](/TA_Automation/Topics/bia_use_device.html) action can be used to implement synchronous execution across devices, in a manner roughly analogous to that of the lead-deputy model in serial mode.



under VMWare or MS Hyper-V, and/or remotely install the TA software and license? Can this be part of the INITIAL section for a test module?](/TA_FAQ/Topics/faq.can_ta_spin_up_virtual_machines.html)

