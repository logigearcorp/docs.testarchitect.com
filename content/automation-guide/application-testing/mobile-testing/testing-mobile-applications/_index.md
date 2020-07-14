--- 
title: "Testing mobile applications"
linktitle: "Testing mobile applications"
description: "TestArchitect supports the Android and iOS operating systems, allowing you automate testing of applications designed for these mobile devices."
weight: 1
aliases: 
    - /TA_Automation/Topics/Mobile_automation.html
keywords: "mobile automation"
---

TestArchitect supports the Android and iOS operating systems, allowing you automate testing of applications designed for these mobile devices.

{{<caution>}}

For power-saving purposes, computers are often configured to go into a non-active state \(such as sleep\) after a certain period of inactivity. By default, the processes associated with automated testing are typically not treated as “activities”, in this sense. Hence, for long execution runs, especially unattended ones, it is important that any machines serving as test controllers be configured not to lapse into any non-active mode during the test period. \(Typically, your computer's power policy is configured through its Control Panel, System Preferences, or command line, depending on the platform. For details, see your system administrator or information specific to the machine's operating system.\)

{{<important>}} By default, TestArchitect Register Server, which is installed with TestArchitect, automatically starts up as a service \(daemon\) each time you boot your computer. This service is often essential for automated testing, and should generally be available. [Ensure the availability of the TestArchitect Register Server service](/administration-guide/testarchitect-register-server) before running your automated tests.

## Executing automated mobile tests

![](/images/TA_Automation/Images/mobile_execution_diagram.png)

In automated mobile testing, a single testing host is responsible for driving the automated tests. This host machine specifies the devices upon which tests are to run. Devices under test \(DUTs\) may be directly attached to the testing host, and/or may be attached to one or more remote host controllers. Note that the primary testing host be either a TestArchitect client machine that initiates an online test run \(via the [Execute Test](/user-guide/test-execution/methods-of-test-execution/configuring-and-running-tests-from-testarchitect-client) dialog box\), or simply a TestArchitect controller [running offline](/user-guide/test-execution/methods-of-test-execution/executing-tests-from-the-command-line-interface/offline-execution-the-test-execution-batch-file) – that is, running a test execution batch file.

After you have checked that the test is executed successfully on a single mobile device, in order to specify the tests to be executed on multiple mobile devices concurrently, see [Running automated tests on multiple mobile devices](/automation-guide/application-testing/mobile-testing/additional-tasks-and-tools/running-automated-tests-on-multiple-mobile-devices) for details. In this way, you can ensure that the mobile application works correctly on different types of mobile devices \(smartphones, tablets, phablets and so on\). Additionally, for devices attached to a given controller, TestArchitect can execute run portions of a test in sequence, one device after the other \(see [Running tests on multiple devices](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/starting-android-automated-tests/selecting-target-android-devices-during-execution/#running-tests-on-multiple-devices)\).

1.  [Android Automation](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/android-automation/)  
An introduction to the basics of TestArchitect automation on Android devices, and the steps involved in setting up the test environment.
2.  [iOS Automation](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/)  
An introduction to the basics of TestArchitect automation on iOS devices, and the steps involved in setting up the test environment.



