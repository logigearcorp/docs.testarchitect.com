--- 
title: "If you have a use deputy action with parallel set to yes, does that mean the test can continue and start other use deputy blocks and a use lead block? How are the completions of the two \\(or more\\) deputy blocks synchronized? It looks like the wait for deputy action might be used ?"
linktitle: "Does parallel use deputy allow for multiple deputies?"
weight: 15
aliases: 
    - /TA_FAQ/Topics/faq.does_parallel_use_deputy_allow_for_multiple_deputies.html
---
# If you have a use deputy action with parallel set to yes, does that mean the test can continue and start other use deputy blocks and a use lead block? How are the completions of the two \(or more\) deputy blocks synchronized? It looks like the wait for deputy action might be used ? {#concept.faq.does_parallel_use_deputy_allow_for_multiple_deputies .concept}

Yes, if parallel is specified for a [use deputy](../../TA_Automation/Topics/bia_use_deputy.html) action, the block of action lines up until the next [use lead](../../TA_Automation/Topics/bia_use_lead.html) or use deputy is executed by the assigned deputy, while that next use... action is immediately executed by the lead. \(If that use... action is a use lead, the lead continues executing the subsequent action lines; if it's a use deputy, that next block of action lines is assigned to another deputy for immediate execution, and the lead again continues with the action line following that block – that is, another use... action\).

The actions [wait for deputy](../../TA_Automation/Topics/bia_wait_for_deputy.html) and [wait for all deputies](../../TA_Automation/Topics/bia_wait_for_all_deputies.html) are indeed used to synchronize the lead with the deputies' completion of their action line blocks. Note, by the way, that these two wait actions are only executable by the lead.

**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[What happens when you have a serial synchronous test fail on one controller: do you have the option of continuing or stopping the test execution?](../../TA_FAQ/Topics/faq.single_controller_failure_in_serial_sync_xqt.html)

**Next topic:**[If you have a use deputy action with parallel set to no, does that assume the deputy execution is serial, meaning the test waits until the action lines associated with the use deputy are completed before moving on?](../../TA_FAQ/Topics/faq.how_does_non-parallel_use_deputy_work.html)

