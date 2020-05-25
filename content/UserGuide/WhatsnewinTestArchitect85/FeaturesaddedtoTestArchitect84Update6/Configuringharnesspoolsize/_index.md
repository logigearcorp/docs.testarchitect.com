--- 
title: "Configuring harness pool size"
linktitle: "Configuring harness pool size"
aliases: 
    - /TA_Help/Topics/Multiple_harnesses_pool_size.html
---
# Configuring harness pool size {#Multiple_harnesses_pool_size .reference}

TestArchitect allows you to determine the maximum allowable number of harnesses \(harness pool size\) running on a TestArchitect controller at a time.

**Note:** Applies to TestArchitect [8.4](../../TA_ReleaseNotes/DITA_source/Whats_New_8.4.html) and higher.

Running multiple harnesses is a memory-consuming task. So if you change the harness pool size, you had better to change the heap size allocated to the TestArchitect Controller and an individual harness through the -Xmx and -Xms parameters accordingly:

## Changing the harness pool size { .section}

In the event that the number of running harnesses has reached the maximum allowable number of harnesses but you are still invoking the execution of more harnesses, the [TestArchitect Controller](Controller_management.html) will not run the new harnesses instantaneously. Instead, the TestArchitect Controller will put these harnesses into a queue.

**Tip:** the number of harnesses that are running and pending can be found on the [playback toolbar](Test_exec_playback_toolbar.html).

For example, you try to run 12 harnesses in parallel although the maximum allowable number of harnesses is only 10. The 10 harnesses sent to the TestArchitect Controller first start to run, whereas the 2 remaining ones - temporarily called the 11th and 12th harnesses - are pending. When one of the 10 harnesses completes, the 11th harnesses starts to run. It is not until one more harness completes, the 12th harness starts to run.

**Important:**

-   The harness pool size is 8 by default.
-   However, you can adjust the harness pool size as long as the CPU and memory of your machine can handle it and resource consumption of AUT does not exceed the available amount. Once you change the harness pool size, do not forget to change the heap size of the [Test Controller](Multiple_harnesses_pool_size.md#TA_controller_heap_size)and an [individual harness](Multiple_harnesses_pool_size.md#individual_harness_heap_size).

To define the maximum allowable number of harnesses, follow the instructions below:

1.  Browse to the following folder:
    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\controller
    -   In Linux: /usr/local/logigear/testarchitect/controller.
2.  Open the abt.ini file in a text editor; Notepad++ is recommended.
3.  Find the line that begins with `number pool harnesses` and change its value to the desired number.

    **Note:** The value must be a positive integer. So long as you set an invalid value \(negative number or zero\), the default value will be used.

    ![](../Images/configure_harness_pool_size.png)

4.  Save the abt.ini file.

## Changing the heap size of the TestArchitect Controller {#TA_controller_heap_size .section}

The Java heap is the memory portion where blocks of memory are allocated to objects and freed during garbage collection.

-   -Xmx: sets the maximum Java heap size. \([Learn more](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)\)
-   -Xms: sets the minimum Java heap size.

**Tip:** To determine the optimum values for Xmx and Xms, refer to [The Parallel Collector](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/parallel.html#default_heap_size)

The TestArchitect Controller is used to execute all harnesses. Thus if you raise the harness pool size, it is necessary to increase the heap size of the TestArchitect Controller.

Follow the instructions below to change JVM parameters:

1.  Browse to the following folder:
    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\controller
    -   In Linux: /usr/local/logigear/testarchitect/controller.
2.  Open the abt.ini file in a text editor; Notepad++ is recommended.
3.  Under `JAVA OPTIONS`, insert/edit the Xmx or/and Xms parameters.

    ![](../Images/heap_size_TA_controller.png)

4.  Save the abt.ini file.

## Changing the heap size of an individual harness {#individual_harness_heap_size .section}

Generally speaking, the heap size of an individual harness is inversely proportional to the harness pool size simply because your machine's memory is a fixed amount. If you raise the number of harnesses running in parallel, decrease the heap size.

Perform the steps below to adjust the -Xmx and -Xms parameters:

1.  Browse to the following folder:
    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\Automation.
    -   In Linux: /usr/local/logigear/testarchitect/automation.
2.  Open the automation.ini file in a text editor; Notepad++ is recommended.
3.  Under the `JVM` section, insert/edit the -Xmx or/and -Xms parameters.

    ![](../Images/JVM_Xmx.png)

4.  Save the automation.ini file.

**Parent topic:**[Working on multiple test harnesses](../../TA_Help/Topics/Multiple_harnesses.html)

**Previous topic:**[Creating a batch file to run multiple harnesses](../../TA_Help/Topics/Multiple_harnesses_creating_batch_file.html)

**Related information**  


[Running multiple harnesses from TestArchitect Client](../../TA_Help/Topics/Multiple_harnesses_running.html)

[Creating a batch file to run multiple harnesses](../../TA_Help/Topics/Multiple_harnesses_creating_batch_file.html)

