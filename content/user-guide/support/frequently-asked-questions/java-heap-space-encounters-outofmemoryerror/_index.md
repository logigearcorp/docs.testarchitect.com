--- 
title: "Java heap space encounters OutOfMemoryError"
linktitle: "Java heap space encounters OutOfMemoryError"
weight: 34
aliases: 
    - /TA_FAQ/Topics/faq.java_heap_space_outofmemory.html
---

## Cause

You attempts to export a huge repository using the TestArchitect command line tool. This error is thrown when there is insufficient space to allocate an object in the Java heap. \([Learn more](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/memleaks002.html)\)

## Solution

Increase java heap size by setting the TA\_SHELL\_HEAP\_SIZE variable in the command line console, and run the export command again.

![](/images//Images/TA_SHELL_HEAP_SIZE_var.png)

**Note:** Be aware that the variable will affect other commands in the TestArchitect command line tool.

**Parent topic:**[Frequently asked questions](/TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Issue with upgrading to TestArchitect 8.4](/TA_FAQ/Topics/faq.ta8.4_upgrade_issue.html)

