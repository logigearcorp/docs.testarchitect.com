--- 
title: "Executing Car Rental tests on Android device"
linktitle: "Executing Car Rental tests on Android device"
weight: 2
aliases: 
    - /TA_Tutorials_Sample_App/Topics/SR_Executing_Car_Rental_Android.html
---

The Car Rental automated test modules are part of the TestArchitect test suites provided in the Sample Repository to demonstrate automated testing of the AUT on the Android platform.

Ensure that the following requirements are met before the executing the Car Rental automated tests on the Android device:

-   You have [installed TestArchitect Agent](/TA_Tutorials_Sample_App/Topics/SR_Android_installing_TA_agent.html) on the Android device.
-   You have [re-signed the Car Rental application](/TA_Tutorials_Sample_App/Topics/SR_Car_Rental_re-signing_application.html).
-   The [re-signed Car Rental application has been installed](/TA_Tutorials_Sample_App/Topics/SR_Car_Rental_installing_re-signed_application.html) on the Android device.

1.  With TestArchitect running, double-click the **SampleRepository** node on the TestArchitect explorer tree.

    ![](/images/TA_Tutorials/Images/tut.Login_Repository.png)

2.  In the Log In Repository dialog box, type administrator in the **User Name** box, leave the **Password** box blank, and click **OK**.

3.  In the TestArchitect explorer tree, expand the **Car Rental - Mobile** project and its **Tests** node.

4.  Under the **Tests** node, select a provided sample test module \(for example, Action Based Testing\) that you want to execute.

5.  Click the **Execute** ![](/images//Images/btn.TAC_toolbar.Execute.png) button on the toolbar to start the Execute Test dialog box.

    The Execute Test dialog box appears.

6.  In the **Controllers/Devices** frame, click **Select Controllers and Devices**.

    The Select Controller/Device dialog box appears.

7.  In the Controllers/Devices panel, expand the root node \(if needed\), and select the Android device on which you want to perform the automated tests.

8.  Click **OK** in the Select Controller/Device dialog box, and select **Execute** in theExecute Test dialog box to begin execution of the tests.

    **Note:** By default, the **AUT Version** box within the Variation Specification frame is empty when the Car Rental automated tests are executed on the Android device.

    **Restriction:** The **Car Rental - Mobile** automated test modules do not support Android testing on an macOS platform.

    A status bar indicating the stages of the test is visible in the bottom-right corner of the TestArchitect window. During the initial compilation stage, all information required for execution is collected and made available for automation. Following compilation, TestArchitect invokes the playback tool for the execution stage of the test.


At the end of the test run, TestArchitect displays a summary and detailed results of the run. See [Working with test results](/reuse/../TA_Help/Topics/Test_result.html) for details regarding interpreting test results.

**Parent topic:**[Testing Car Rental on the Android platform](/TA_Tutorials_Sample_App/Topics/SR_Car_Rental_Android_def.html)

**Previous topic:**[Car Rental Android configuration](/TA_Tutorials_Sample_App/Topics/SR_Android_configuration_def.html)

