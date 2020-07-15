--- 
title: "Java heap space encounters OutOfMemoryError"
linktitle: "Java heap space encounters OutOfMemoryError"
description: "Cause You attempts to export a huge repository using the TestArchitect command line tool. This error is thrown when there is insufficient space to allocate an object in the Java heap. ( Learn more ) ..."
weight: 34
aliases: 
    - /TA_FAQ/Topics/faq.java_heap_space_outofmemory.html
keywords: "Java heap space, Out of memory"
---

## Cause {{< permerlink >}} {#faq.java_heap_space_outofmemory__section_rr4_scp_mgb} 

You attempts to export a huge repository using the TestArchitect command line tool. This error is thrown when there is insufficient space to allocate an object in the Java heap. \([Learn more](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/memleaks002.html)\)

## Solution {{< permerlink >}} {#faq.java_heap_space_outofmemory__section_r5k_3dp_mgb} 

Increase java heap size by setting the TA\_SHELL\_HEAP\_SIZE variable in the command line console, and run the export command again.

![](/images/TA_FAQ/Images/TA_SHELL_HEAP_SIZE_var.png)

{{<note>}} Be aware that the variable will affect other commands in the TestArchitect command line tool.



