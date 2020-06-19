--- 
title: "Does parallel use deputy allow for multiple deputies?"
linktitle: "If you have a use deputy action with parallel set to yes, does that mean the test can continue and start other use deputy blocks and a use lead block? How are the completions of the two \\(or more\\) deputy blocks synchronized? It looks like the wait for deputy action might be used ?"
description: "Yes, if parallel is specified for a use deputy action, the block of action lines up until the next use lead or use deputy is executed by the assigned deputy, while that next use... action is ..."
weight: 15
aliases: 
    - /TA_FAQ/Topics/faq.does_parallel_use_deputy_allow_for_multiple_deputies.html
keywords: "FAQ, Does parallel, use deputy"
---

Yes, if parallel is specified for a [use deputy](/TA_Automation/Topics/bia_use_deputy.html) action, the block of action lines up until the next [use lead](/TA_Automation/Topics/bia_use_lead.html) or use deputy is executed by the assigned deputy, while that next use... action is immediately executed by the lead. \(If that use... action is a use lead, the lead continues executing the subsequent action lines; if it's a use deputy, that next block of action lines is assigned to another deputy for immediate execution, and the lead again continues with the action line following that block – that is, another use... action\).

The actions [wait for deputy](/TA_Automation/Topics/bia_wait_for_deputy.html) and [wait for all deputies](/TA_Automation/Topics/bia_wait_for_all_deputies.html) are indeed used to synchronize the lead with the deputies' completion of their action line blocks. Note, by the way, that these two wait actions are only executable by the lead.




