--- 
title: "Executing Car Rental on iOS"
linktitle: "Executing Car Rental on iOS"
description: "The Car Rental automated test scripts are part of the TestArchitect test suites provided in the sample repository that demonstrate automated testing of the AUT on the iOS platform."
weight: 2
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Executing_Car_Rental_iOS.html
keywords: "Car Rental, iOS, executing automated tests, iOS, Car Rental, executing automated tests, executing, iOS, Car Rental automated tests"
---

The Car Rental automated test scripts are part of the TestArchitect test suites provided in the sample repository that demonstrate automated testing of the AUT on the iOS platform.

Ensure that the following requirements are met before you execute Car Rental automated tests on the iOS device.

-   [TestArchitect Agent](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-testarchitect-agent-on-ios) and the [Car Rental](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/re-signing-and-installing-car-rental-for-ios) application are installed onto the iOS device.
-   The iOS device is [configured](/user-guide/getting-started/sample-repository/car-rental-mobile/testing-car-rental-on-the-ios-platform/car-rental-ios-configuration/configuring-an-ios-device) for automated testing.

{{<note>}}

-   In order to ensure that the [start program](/automation-guide/action-based-testing-language/built-in-actions/system-actions/command-line/start-program) built-in action can successfully launch Car Rental on iOS devices, refer to [Launching an AUT](/automation-guide/application-testing/mobile-testing/testing-mobile-applications/ios-automation/launching-an-aut#section_pdh_mzj_m4).
-   In additional, to ensure that the [select](/automation-guide/action-based-testing-language/built-in-actions/user-interface-actions/list-table-grid/select) built-in action can successfully pick specific dates on the DatePicker control on iOS devices, set the date format on the devices to MM/DD/YYYY by selecting the United States region in **Settings** \> **General** \> **International** \> **Region Format**.

{{<restriction>}} The **Car Rental - Mobile** automation scripts do not support iOS testing on Linux platform.

1.  Connect the iOS device to the host machine via USB cable.

2.  With TestArchitect running, double-click the **SampleRepository** node on the TestArchitect explorer tree.

    ![](/images/TA_Tutorials/Images/tut.Login_Repository.png)

3.  In the Log In Repository dialog box, type administrator in the **User Name** box, leave the **Password** box blank, and click **OK**.

4.  Expand the **Car Rental - Mobile** project and the **Tests** node on the TestArchitect explorer tree.

5.  Select a provided sample test module subnode \(for example, **Action Based Testing**\) within the **Car Rental - Mobile Test** node that you want to execute.

6.  Click **Execute** ![](/images/TA_Tutorials_Sample_App/Images/btn.TAC_toolbar.Execute.png) on the toolbar.

    The Execute Test dialog box appears.

7.  In the **Controllers/Devices** frame, click **Select Controllers and Devices**.

    The Select Controller/Device dialog box appears.

8.  In the Controllers/Devices panel, expand the root node, if needed, and select the iOS device where you want to perform the execution tests.

9.  Click **OK**.

10. In the Execute Test dialog box, click the **Select Version** button within the Variation Specification frame.

    The Select Version dialog box appears, enabling you to specify the AUT version for the sample automated test.

11. Select the **iOS** check box in the Select Version dialog box and click **OK**.

    {{<restriction>}} The **Car Rental - Mobile** automated test modules do not support iOS testing on a Linux platform.

12. In the Execute Test dialog box, click **Execute** to start the test.

    {{<important>}} Do not provide any user input while the test is being executed.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.


At the end of the test run, TestArchitect displays a summary and detailed results of the run. See [Working with test results](/user-guide/working-with-test-results/) for details regarding interpreting test results.


