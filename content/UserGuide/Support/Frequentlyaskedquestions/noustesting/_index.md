--- 
title: "What happens when you have a serial synchronous test fail on one controller: do you have the option of continuing or stopping the test execution?"
linktitle: "How to handle a single controller failure in serial synchronous testing?"
weight: 14
aliases: 
    - /TA_FAQ/Topics/faq.single_controller_failure_in_serial_sync_xqt.html
---
# What happens when you have a serial synchronous test fail on one controller: do you have the option of continuing or stopping the test execution? {#concept.faq.single_controller_failure_in_serial_sync_xqt .concept}

This depends upon the error handling actions set by the test module. Options for the [on error](../../TA_Automation/Topics/bia_on_error.html) action include continue, exit action, or exit test case. The action [on error action](../../TA_Automation/Topics/bia_on_error_action.html) allows for more user-customized error handling to be taken. These actions apply to conventional as well as synchronous tests.

**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Can TestArchitect or a script be used to spin up guest OS images \(virtual machines\) under VMWare or MS Hyper-V, and/or remotely install the TA software and license? Can this be part of the INITIAL section for a test module?](../../TA_FAQ/Topics/faq.can_ta_spin_up_virtual_machines.html)

**Next topic:**[If you have a use deputy action with parallel set to yes, does that mean the test can continue and start other use deputy blocks and a use lead block? How are the completions of the two \(or more\) deputy blocks synchronized? It looks like the wait for deputy action might be used ?](../../TA_FAQ/Topics/faq.does_parallel_use_deputy_allow_for_multiple_deputies.html)

