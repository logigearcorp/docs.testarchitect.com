--- 
title: "If you have a use deputy action with parallel set to no, does that assume the deputy execution is serial, meaning the test waits until the action lines associated with the use deputy are completed before moving on?"
linktitle: "If you have a use deputy action with parallel set to no, does that assume the deputy execution is serial, meaning the test waits until the action lines associated with the use deputy are completed before moving on?"
description: "Yes, that is correct. Using the use deputy action with the parallel argument set to no is, by definition, serial synchronous remote execution . The block of action lines following use deputy (which is ..."
weight: 16
aliases: 
    - /TA_FAQ/Topics/faq.how_does_non-parallel_use_deputy_work.html
keywords: "FAQ, How does, use deputy, parallel, no"
---

Yes, that is correct. Using the [use deputy](/TA_Automation/Topics/bia_use_deputy.html) action with the parallel argument set to no is, by definition, [serial synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous_serial.html). The block of action lines following use deputy \(which is lower-bounded by the next use lead or use deputy action\) is sent to the specified deputy and executed by it. In the meantime, nothing happens: execution on the lead machine is suspended until the deputy has completed execution of its block.




