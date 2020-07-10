--- 
title: "Selecting target iOS devices during execution"
linktitle: "Selecting target iOS devices during execution"
description: "From within your action lines, you can control which iOS device(s) your test is to execute on."
weight: 2
aliases: 
    - /iOS/Topics/iOS_execution_test_lines.html
keywords: "iOS, test execution, action lines, executing test, executing, iOS test"
---

From within your action lines, you can control which iOS device\(s\) your test is to execute on.

{{<note>}} Any device referenced by a use device action within a test must be connected to the same TestArchitect controller on which the test is running.

An example to indicate which iOS device to run automated tests on during runtime might look something like this:

![](/images/iOS/Images/iOS_start_from_test.png)

The assign device action \(line 18\) assigns a logical or friendly name to a connected iOS device. The unique id argument represents an unique device identifier \(UDID\). To obtain UDID of an iOS device, refer to [assign device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/assign-device).

The [use device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-device) action \(line 21\) uses the logical name established in assign device to inform TestArchitect that the subsequent action lines are to be run on that device.

Finally, when testing on the new target device completes, it can be logically disconnected from the test host machine with [disconnect device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-device) \(line 50\). The subsequent action lines, if any, are run on the host machine.

## {{< expand >}} Running tests on multiple devices

The use device action allows automated tests to be run on different mobile devices. The devices must all be connected to the host controller on which the test is running, and execution across devices takes place in serial fashion. \(This is essentially the equivalent of [serial synchronous remote execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/serial-synchronous-remote-execution) for desktop application testing.\)

![](/images/Android/Images/mobile_sync_serial.png)

The above procedure begins with unique identifiers for two devices being assigned to friendly names. The use device action \(line 47\) commands a chunk of action lines to be executed on device 1. The second use device line \(line 52\) switches the current connection from device 1 to device 2, which also switches the execution domain, so that the subsequent chunk of action lines is run on device 2.

When test execution on all mobile devices is complete – or it is simply necessary to switch execution to the host controller for an interim task – a [disconnect device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/disconnect-device) is issued, which logically disconnects device 2 and allows for subsequent action lines to run on the host.

## Running 'use device' tests on devices connected to multiple controllers

Because each device has a unique ID, and those IDs are used to create the logical names \(via the assign device action\), if you want to execute a multiple device test on multiple controller/device clusters, your assign device actions must vary by cluster.

The following action lines can be employed for running a single test on multiple clusters. The test begins by querying the host machine to determine which controller the test is currently running on. By knowing the controller, it knows which devices are connected to it, and can assign those device IDs to logical names accordingly.

![](/images/Android/Images/mobile_sync_serial_on_multiple_clusters.png)


