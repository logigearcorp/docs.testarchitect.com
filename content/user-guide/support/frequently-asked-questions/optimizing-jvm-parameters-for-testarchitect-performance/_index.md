--- 
title: "-"
linktitle: "Optimizing JVM parameters for TestArchitect performance"
weight: 32
aliases: 
    - /TA_FAQ/Topics/faq.optimizing_TA_performance.html
---
keyword: [optimize performance, set Java heap size, increase JVM heap size, increase Java metaspace, save memory]
---

# Optimizing JVM parameters for TestArchitect performance

Java Virtual Machine \(JVM\) heap memory size can be expanded and shrink, according to your requirements for TestArchitect's performance optimization. MaxHeapFreeRatio and MinHeapFreeRatio are the command line options available for this purpose in Oracle Java.

**Note:** Applies to TestArchitect [8.3 Update 5](/TA_ReleaseNotes/DITA_source/Whats_New_8.3_update_5.html) and higher.

The performance of TestArchitect is influenced by Java heap and metaspace available. You are allowed to adjust several JVM parameters to meet your desired performance as well as memory consumption.

The parameters below control how garbage collection \(GC\) is performed by the Java HotSpot VM. \([Learn more.\)](https://docs.oracle.com/javase/8/docs/technotes/tools/windows/java.html)

-   **-XX:MaxMetaspaceSize=size**

    Sets the maximum amount of native memory that can be allocated for class metadata. By default, the size is not limited. The amount of metadata for an application depends on the application itself, other running applications, and the amount of memory available on the system.

    **Important:** By default, the value configured for TestArchitect is set to 256 MB.


-   **-XX:MinHeapFreeRatio=percent**

    Sets the minimum allowed percentage of free heap space \(0 to 100\) after a GC event. If free heap space falls below this value, then the heap will be expanded.

    **Important:** By default, the value configured for TestArchitect is set to 15%.

-   **-XX:MaxHeapFreeRatio=percent**

    Sets the maximum allowed percentage of free heap space \(0 to 100\) after a GC event. If free heap space expands above this value, then the heap will shrink.

    **Important:** By default, the value configured for TestArchitect is set to 30%.


In simple words, MaxHeapFreeRatio is used to shrink the JVM and MinHeapFreeRatio is for expansion. If the ratio between the used memory and free memory exceeds MaxHeapFreeRatio \(30%\), JVM will shrink. If that ratio falls below MinHeapFreeRatio \(15%\), JVM will expand.

**Remember:**

-   If you would like to reconfigure the MaxHeapFreeRatio and MinHeapFreeRatio parameters, ensure that you choose fair values for these parameters.
-   Specifically, TestArchitect performance is inversely proportional to memory consumption. In other words, the higher performance is, the more memory is consumed. If you decrease MinHeapFreeRatio, MaxHeapFreeRatio, memory consumption will be saved but TestArchitect performance will slow down; whereas, if you increase MinHeapFreeRatio, MaxHeapFreeRatio, TestArchitect performance will be enhanced, but memory will be sacrificed. Therefore, you need to choose fair values, so that they will not affect \(or less penalty on\) TestArchitect performance, as well as memory consumption.

## Adjusting JVM parameters

To make adjustments to JVM parameters, follow this procedure:

1.  Close TestArchitect Client, if it is running.
2.  In a text editor such as Notepad, open TestArchitect's abt.ini file. This file is installed with TestArchitect, and by default is found in the following directories:
    -   On Windows: C:\\Users\\Public\\LogiGear\\TestArchitect\\Data\\abt.ini
    -   On Linux: /usr/local/logigear/testarchitect/data/ws/abt.ini
3.  Find the `[JAVA OPTIONS]` section, and then adjust the values of XX:MinHeapFreeRatio, XX:MaxHeapFreeRatio and/or XX:MaxMetaSpaceSize, if necessary.

    ![](/images//Images/chang_heap_size.png)

4.  Save the file.
5.  Launch TestArchitect Client again.

**Parent topic:**[Frequently asked questions](/TA_Help/Topics/Support_FAQ.html)

**Previous topic:**[Disconnecting from Remote Desktop while executing automated tests](/TA_FAQ/Topics/faq.tshoot.running.via.rdp.keeping_computer_unlocked.html)

**Next topic:**[Issue with upgrading to TestArchitect 8.4](/TA_FAQ/Topics/faq.ta8.4_upgrade_issue.html)

