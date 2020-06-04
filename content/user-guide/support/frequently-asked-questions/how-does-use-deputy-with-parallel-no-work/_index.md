--- 
title: "If you have a use deputy action with parallel set to no, does that assume the deputy execution is serial, meaning the test waits until the action lines associated with the use deputy are completed before moving on?"
linktitle: "How does use deputy with parallel=no work?"
weight: 16
aliases: 
    - /TA_FAQ/Topics/faq.how_does_non-parallel_use_deputy_work.html
---

Yes, that is correct. Using the [use deputy](/TA_Automation/Topics/bia_use_deputy.html) action with the parallel argument set to no is, by definition, [serial synchronous remote execution](/TA_Help/Topics/Test_exec_remote_synchronous_serial.html). The block of action lines following use deputy \(which is lower-bounded by the next use lead or use deputy action\) is sent to the specified deputy and executed by it. In the meantime, nothing happens: execution on the lead machine is suspended until the deputy has completed execution of its block.

**Parent topic:**[Frequently asked questions](/TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[If you have a use deputy action with parallel set to yes, does that mean the test can continue and start other use deputy blocks and a use lead block? How are the completions of the two \(or more\) deputy blocks synchronized? It looks like the wait for deputy action might be used ?](/TA_FAQ/Topics/faq.does_parallel_use_deputy_allow_for_multiple_deputies.html)

**Next topic:**[How can I have my automation use a browser other than Internet Explorer?](/TA_FAQ/Topics/faq.howto.specify_browser_for_automation.html)

