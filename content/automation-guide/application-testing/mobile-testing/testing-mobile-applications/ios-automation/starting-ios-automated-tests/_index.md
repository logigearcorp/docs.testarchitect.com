--- 
title: "Starting iOS automated tests"
linktitle: "Starting iOS automated tests"
description: "Approaches to selecting which iOS device(s) runs automated tests in TestArchitect."
weight: 5
aliases: 
    - /iOS/Topics/iOS_automated_tests_execution.html
keywords: "iOS, test execution, action lines, executing test, executing, iOS test"
---

Approaches to selecting which iOS device\(s\) runs automated tests in TestArchitect.

You can specify which iOS device runs a given automated test, or portion of a test, from either your test launch command \([online](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) or [offline](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/offline-execution-the-test-execution-batch-file)\) or from within your test procedures.

{{<important>}}

Test initiation, which is typically performed either from the Execute Test dialog box or via a test execution batch file, specifies which device or devices test execution *starts* on. Once testing begins, your test procedure can control where execution is to take place, using the built-in action [use device](/automation-guide/action-based-testing-language/built-in-actions/system-actions/device/use-device). For example, after you've selected device A in the Execute Test dialog box and clicked the **Execute** button, your test is executed on device A. The automated test runs on device A until it encounters the action line `use device B` in the test procedure. At this time, the automation stops running on device A, and logically connects to device B, making that the target device for the remainder of the automated test. This is basically the same as [synchronous serial execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/serial-synchronous-remote-execution) in desktop testing.

Note that [synchronous parallel execution](/user-guide/test-execution/methods-of-test-execution/remote-test-execution/synchronous-remote-execution/parallel-synchronous-remote-execution) is also possible in mobile testing. It involves the same mechanism as used for desktop testing, requiring that the lead/deputy method be used to pass control between controller-device clusters \(controllers hosting mobile devices\).

-   **[Selecting iOS target devices at launch time](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/starting-ios-automated-tests/selecting-ios-target-devices-at-launch-time)**  
The selection of which iOS devices are to execute a test can be made at the time the test is launched.
-   **[Selecting target iOS devices during execution](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/starting-ios-automated-tests/selecting-target-ios-devices-during-execution)**  
From within your action lines, you can control which iOS device\(s\) your test is to execute on.




