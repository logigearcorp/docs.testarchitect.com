--- 
title: "Configuring harness pool size"
linktitle: "Configuring harness pool size"
description: "TestArchitect allows you to determine the maximum allowable number of harnesses (harness pool size) running on a TestArchitect controller at a time."
weight: 3
aliases: 
    - /TA_Help/Topics/Multiple_harnesses_pool_size.html
keywords: "configure, harness pool size, configuration"
---

TestArchitect allows you to determine the maximum allowable number of harnesses \(harness pool size\) running on a TestArchitect controller at a time.

{{<note>}} Applies to TestArchitect [8.4](/user-guide/version-history/features-added-to-testarchitect-8-4/) and higher.

Running multiple harnesses is a memory-consuming task. So if you change the harness pool size, you had better to change the heap size allocated to the TestArchitect Controller and an individual harness through the -Xmx and -Xms parameters accordingly:

## Changing the harness pool size

In the event that the number of running harnesses has reached the maximum allowable number of harnesses but you are still invoking the execution of more harnesses, the [TestArchitect Controller](/user-guide/controller-management/) will not run the new harnesses instantaneously. Instead, the TestArchitect Controller will put these harnesses into a queue.

{{<tip>}} the number of harnesses that are running and pending can be found on the [playback toolbar](/user-guide/test-execution/playback-toolbar).

For example, you try to run 12 harnesses in parallel although the maximum allowable number of harnesses is only 10. The 10 harnesses sent to the TestArchitect Controller first start to run, whereas the 2 remaining ones - temporarily called the 11th and 12th harnesses - are pending. When one of the 10 harnesses completes, the 11th harnesses starts to run. It is not until one more harness completes, the 12th harness starts to run.

{{<important>}}

-   The harness pool size is 8 by default.
-   However, you can adjust the harness pool size as long as the CPU and memory of your machine can handle it and resource consumption of AUT does not exceed the available amount. Once you change the harness pool size, do not forget to change the heap size of the [Test Controller](/user-guide/test-execution/working-on-multiple-test-harnesses/configuring-harness-pool-size#TA_controller_heap_size)and an [individual harness](/user-guide/test-execution/working-on-multiple-test-harnesses/configuring-harness-pool-size#individual_harness_heap_size).

To define the maximum allowable number of harnesses, follow the instructions below:

1.  Browse to the following folder:
    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\controller
    -   In Linux: /usr/local/logigear/testarchitect/controller.
2.  Open the abt.ini file in a text editor; Notepad++ is recommended.
3.  Find the line that begins with `number pool harnesses` and change its value to the desired number.

    {{<note>}} The value must be a positive integer. So long as you set an invalid value \(negative number or zero\), the default value will be used.

    ![](/images/TA_Help/Images/configure_harness_pool_size.png)

4.  Save the abt.ini file.

## Changing the heap size of the TestArchitect Controller {{< permerlink >}} {#Multiple_harnesses_pool_size__TA_controller_heap_size} 

The Java heap is the memory portion where blocks of memory are allocated to objects and freed during garbage collection.

-   -Xmx: sets the maximum Java heap size. \([Learn more](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)\)
-   -Xms: sets the minimum Java heap size.

{{<tip>}} To determine the optimum values for Xmx and Xms, refer to [The Parallel Collector](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/parallel.html#default_heap_size)

The TestArchitect Controller is used to execute all harnesses. Thus if you raise the harness pool size, it is necessary to increase the heap size of the TestArchitect Controller.

Follow the instructions below to change JVM parameters:

1.  Browse to the following folder:
    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\controller
    -   In Linux: /usr/local/logigear/testarchitect/controller.
2.  Open the abt.ini file in a text editor; Notepad++ is recommended.
3.  Under `JAVA OPTIONS`, insert/edit the Xmx or/and Xms parameters.

    ![](/images/TA_Help/Images/heap_size_TA_controller.png)

4.  Save the abt.ini file.

## Changing the heap size of an individual harness {{< permerlink >}} {#Multiple_harnesses_pool_size__individual_harness_heap_size} 

Generally speaking, the heap size of an individual harness is inversely proportional to the harness pool size simply because your machine's memory is a fixed amount. If you raise the number of harnesses running in parallel, decrease the heap size.

Perform the steps below to adjust the -Xmx and -Xms parameters:

1.  Browse to the following folder:
    -   In Windows: %SystemDrive%\\Users\\Public\\LogiGear\\TestArchitect\\Automation.
    -   In Linux: /usr/local/logigear/testarchitect/automation.
2.  Open the automation.ini file in a text editor; Notepad++ is recommended.
3.  Under the `JVM` section, insert/edit the -Xmx or/and -Xms parameters.

    ![](/images/TA_Help/Images/JVM_Xmx.png)

4.  Save the automation.ini file.



**Related information**  


[Running multiple harnesses from TestArchitect Client](/user-guide/test-execution/working-on-multiple-test-harnesses/running-multiple-harnesses-from-testarchitect-client)

[Creating a batch file to run multiple harnesses](/user-guide/test-execution/working-on-multiple-test-harnesses/creating-a-batch-file-to-run-multiple-harnesses)

