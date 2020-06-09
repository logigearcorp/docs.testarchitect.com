--- 
title: "Starting iOS automated tests"
linktitle: "Starting iOS automated tests"
weight: 5
aliases: 
    - /iOS/Topics/iOS_automated_tests_execution.html
---

Approaches to selecting which iOS device\(s\) runs automated tests in TestArchitect.

You can specify which iOS device runs a given automated test, or portion of a test, from either your test launch command \([online](/TA_Help/Topics/Test_exec_test_execution.html) or [offline](/TA_Help/Topics/Test_exec_batch_file.html)\) or from within your test procedures.

**Important:**

Test initiation, which is typically performed either from the Execute Test dialog box or via a test execution batch file, specifies which device or devices test execution *starts* on. Once testing begins, your test procedure can control where execution is to take place, using the built-in action [use device](/Android/Topics/../../TA_Automation/Topics/bia_use_device.html). For example, after you've selected device A in the Execute Test dialog box and clicked the **Execute** button, your test is executed on device A. The automated test runs on device A until it encounters the action line `use device B` in the test procedure. At this time, the automation stops running on device A, and logically connects to device B, making that the target device for the remainder of the automated test. This is basically the same as [synchronous serial execution](/Android/Topics/../../TA_Help/Topics/Test_exec_remote_synchronous_serial.html) in desktop testing.

Note that [synchronous parallel execution](/Android/Topics/../../TA_Help/Topics/Test_exec_remote_synchronous_parallel.html) is also possible in mobile testing. It involves the same mechanism as used for desktop testing, requiring that the lead/deputy method be used to pass control between controller-device clusters \(controllers hosting mobile devices\).

-   **[Selecting iOS target devices at launch time](/iOS/Topics/iOS_execution.html)**  
The selection of which iOS devices are to execute a test can be made at the time the test is launched.
-   **[Selecting target iOS devices during execution](/iOS/Topics/iOS_execution_test_lines.html)**  
From within your action lines, you can control which iOS device\(s\) your test is to execute on.

**Parent topic:**[iOS Automation](/iOS/Topics/iOS_automation_def.html)

**Previous topic:**[Launching an AUT](/iOS/Topics/iOS_launching_an_AUT.html)

**Next topic:**[Troubleshooting iOS automation](/iOS/Topics/iOS_troubleshooting.html)

