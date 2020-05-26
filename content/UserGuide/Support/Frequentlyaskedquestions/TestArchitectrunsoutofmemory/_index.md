--- 
title: "TestArchitect runs out of memory"
linktitle: "TestArchitect runs out of memory"
weight: 27
aliases: 
    - /TA_FAQ/Topics/faq.tshoot.TA_out_of_memory.html
---
# TestArchitect runs out of memory {#ref.faq.tshoot.TA.out_of_memory .reference}

## Problem { .section}

After opening many item tabs in TestArchitect, you may receive a notification message resembling the following:

TestArchitect does not have enough memory to complete the task. Please close unnecessary item tabs, or increase the value of parameter xmx.

## Solution {#section_ydk_2nz_vw .section}

This issue occurs because of the heap size limitation of the Java Virtual Machine \(JVM\). TestArchitect runs in a JVM. When started, the JVM is allocated a certain amount of memory, which it makes available to TestArchitect. Sometimes, the allocated amount of memory is inadequate for TestArchitect's needs. The solution is to either 1\), reduce TestArchitect's memory requirements, or 2\) increased the available amount of JVM heap memory.

-   Option \#1: To reduce TestArchitect's memory demands, close as many unnecessary tabs as possible.
-   Option \#2: To increase available memory, do the following:
    1.  Close TestArchitect.
    2.  In a text editor such as Notepad, open TestArchitect's abt.ini file. This file is installed with TestArchitect, and by default is found in the following directories:
        -   On Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\Data
        -   On Linux: /usr/local/logigear/testarchitect/data/ws
        -   On macOS: /Applications/TestArchitect/data/ws
    3.  Find the parameter xmx, the maximum size of the heap. Note that the value it is set to is in units of megabytes \(MB\).
    4.  Set a higher value to increase the memory setting.

        **Tip:** It is best to increase xmx by no more than 512MB increments. If you ultimately find that the increased amount is still inadequate, keep increasing it until you no longer experience the out-of-memory problem.

    5.  Save the file.
    6.  Launch TestArchitect again.

**Parent topic:**[Frequently asked questions](../../TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Troubleshooting power outage-related problems](../../TA_Administration/Topics/adm_troubleshooting_power_blackout.html)

**Next topic:**[Failure to register libraries during TestArchitect installation](../../TA_FAQ/Topics/faq.tshoot.installing_TA_issue.html)

