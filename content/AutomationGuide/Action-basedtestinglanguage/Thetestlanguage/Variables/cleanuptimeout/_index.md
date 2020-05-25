--- 
title: "cleanup timeout"
linktitle: "cleanup timeout"
aliases: 
    - /TA_Automation/Topics/bis_cleanup_timeout.html
---
# cleanup timeout {#bis_cleanup_timeout .reference}

## Description {#section_i15_jp2_4cb .section}

Specify the timeout value, for action to be invoked by [on timeout action](bia_on_timeout_action.html).

## Value units {#section_j15_jp2_4cb .section}

seconds

## Default value {#section_k15_jp2_4cb .section}

0
:   Indicates an infinite timeout period.

## Notes {#section_m15_jp2_4cb .section}

-   Applies to TestArchitect [8.3 Update 4](../../TA_ReleaseNotes/DITA_source/Whats_New_Windows_8.3_update_4.html) and higher.
-   When this setting is not declared or its value is omitted, the value of 0 is used.
-   When the duration of test case timeout's action handler, invoked by [on timeout action](bia_on_timeout_action.html), exceeds the timeout period, the remaining lines of the action handler will stop instantly.

## Example {#section_rgr_mjf_4cb .section}

**Action Lines**

![](../Images/bis_cleanup_timeout_pgm.png)

**Parent topic:**[Timing settings](../../TA_Automation/Topics/bis_timing.html)

**Next topic:**[click delay](../../TA_Automation/Topics/bis_click_delay.html)

**Related information**  


[test case timeout](../../TA_Automation/Topics/bis_test_case_timeout.html)

[Stopping tests on timeout](../../TA_Automation/Topics/aut_stop_tests_after_timeout.html)

[on timeout action](../../TA_Automation/Topics/bia_on_timeout_action.html)

